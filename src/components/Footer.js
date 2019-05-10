import React from 'react'

class Footer extends React.Component {
    render() {
        return (
            <section id="footer">
                <ul className="icons">
                    <li><a  target="_blank" href="https://twitter.com/MyDataScotland" className="icon alt fa-twitter"><span className="label">Twitter</span></a></li>
                  <li><a  target="_blank" href="https://mydata.org" className="icon alt fa-globe"><span className="label">Website</span></a></li>

                  <li><a href="mailto:scotland@mydata.org" className="icon alt fa-envelope"><span className="label">Email</span></a></li>
                </ul>
                <ul className="copyright">
                    <li>&copy; Untitled</li><li>Design: <a href="http://html5up.net">HTML5 UP</a></li>
                </ul>
            </section>
        )
    }
}

export default Footer
