import React from 'react';
import addToMailchimp from 'gatsby-plugin-mailchimp'

const SignUpForm = () => {

    const [email, setEmail] = React.useState('');
    const [successfulSignup, setSuccessfulSignup] = React.useState(null);
    const [unsuccessfulSignup, setUnsuccessfulSignup] = React.useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log("SUBMIT FORM")
        // setUnsuccessfulSignup(null);
        // setSuccessfulSignup(null);
        addToMailchimp(email) // listFields are optional if you are only capturing the email address.
            .then(data => {
                console.log("Response from submit FORM")

                // I recommend setting data to React state
                // but you can do whatever you want (including ignoring this `then()` altogether)
                setEmail('');
                if (data.result === 'success') {
                    setSuccessfulSignup(data.msg);
                } else {
                    setUnsuccessfulSignup(data.msg)
                }
            })
            .catch((e) => {
                console.log("ERROR", e)
                // unnecessary because Mailchimp only ever
                // returns a 200 status code
                // see below for how to handle errors
            })
    }

    return (
        <form onSubmit={(e) => handleSubmit(e)} className="submit-form">
            <div className="form-group">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} aria-describedby="emailHelp" placeholder="Enter email"/>
            </div>

            <button type="submit" className="button special">Sign Up</button>
            {successfulSignup && <div>{successfulSignup}</div>}
            {unsuccessfulSignup && <div>{unsuccessfulSignup}</div>}


        </form>
    )
}


export default SignUpForm;
