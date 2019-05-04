import React from "react";
import Helmet from "react-helmet";

import Layout from '../components/layout';

import didsDiagram from '../assets/images/dids4kidsdiagram.png'
import pic02 from '../assets/images/pic02.jpg'
import pic03 from '../assets/images/pic03.jpg'
import pic04 from '../assets/images/pic04.jpg'
import SubscribeToMailingList from '../components/SubscribeToMailingList'

class Homepage extends React.Component {
    render() {
        const siteTitle = "DIDs 4 Kids";

        return (
            <Layout>
                <Helmet title={siteTitle} />

                <section id="one" className="main style1">
                    <div className="grid-wrapper">
                        <div className="col-6">
                            <header className="major">
                                <h2>Objectives</h2>
                            </header>
                          <p>This project seeks to research, validate and shape how large-scale deployment of decentralised identity might best emerge by tackling a green field use case around new born children.</p>
                            {/*<p>Adipiscing a commodo ante nunc accumsan et interdum mi ante adipiscing. A nunc lobortis non nisl amet vis sed volutpat aclacus nascetur ac non. Lorem curae et ante amet sapien sed tempus adipiscing id accumsan.</p>*/}
                        </div>
                        <div className="col-6 flex-center">
                            <span className="image fit"><img src={didsDiagram} alt="" /></span>
                        </div>
                    </div>
                </section>

                <section id="two" className="main style2">
                    <div className="grid-wrapper">
                        <div className="col-6">
                            <ul className="major-icons">
                                <li><span className="icon style1 major fa-code"></span></li>
                                <li><span className="icon style2 major fa-bolt"></span></li>
                                <li><span className="icon style3 major fa-camera-retro"></span></li>
                                <li><span className="icon style4 major fa-cog"></span></li>
                                <li><span className="icon style5 major fa-desktop"></span></li>
                                <li><span className="icon style6 major fa-calendar"></span></li>
                            </ul>
                        </div>
                        <div className="col-6">
                            <header className="major">
                                <h2>Some Title</h2>
                            </header>
                            <p>Decentralised identity and the personal data management capabilities it enables are close to being market-ready. But specific challenges to mass adoption and use remain. This project seeks to research, validate and shape how large-scale deployment of decentralised identity might best emerge by tackling a green field use case around new born children. Pre and immediately post birth children have no digital identities, and thus are a perfect research set for proving new concepts. This project seeks to research, validate and prove that a new human being, with support from their parents and the community around them, can build life-long data assets that are secure, private and able to be shared with appropriate parties under full, audited control.  </p>
                            <p>With the capabilities, we believe to be now be viable, the individual will always be the optimal point of origination and integration for data about themselves. This has profound implications for the child themselves, for their parents and support community, and also for the wide range of entities that need/ wish to gather data on or interact digitally with the child over time (their lifetime). </p>
                        </div>
                    </div>
                </section>

                <section id="three" className="main style1 special">
                    <div className="grid-wrapper">
                        <div className="col-12">
                            <header className="major">
                                <h2>Partners</h2>
                            </header>
                            <p>The project is being led by the MyData Scotland Hub, in association with MyData Global, Edinburgh Napier University, SiteKit, JLINC Labs and Truu.id. The team of individuals involved are experienced information management professionals who variously have established careers in customer management, digital identity, academia and medicine. However, the critical capability that we believe is essential to delivering a successful viability test in this area is to look from the perspective of the individual child and their parents, then overlay that with knowledge and insights from our professional lives. </p>
                        </div>

                        <div className="col-4">
                            <span className="image fit"><img src={pic02} alt="" /></span>
                            <h3>MyData Scotland</h3>
                            <p>Adipiscing a commodo ante nunc magna lorem et interdum mi ante nunc lobortis non amet vis sed volutpat et nascetur.</p>
                            <ul className="actions">
                                <li><a href="#" className="button">More</a></li>
                            </ul>
                        </div>
                        <div className="col-4">
                            <span className="image fit"><img src={pic03} alt="" /></span>
                            <h3>Edinburgh Napier University</h3>
                            <p>Identity and Cryptography researchers from the blockchain and identity lab at Napier.</p>
                            <ul className="actions">
                                <li><a href="#" className="button">More</a></li>
                            </ul>
                        </div>
                        <div className="col-4">
                            <span className="image fit"><img src={pic04} alt="" /></span>
                            <h3>Sitekit</h3>
                            <p>Adipiscing a commodo ante nunc magna lorem et interdum mi ante nunc lobortis non amet vis sed volutpat et nascetur.</p>
                            <ul className="actions">
                                <li><a href="#" className="button">More</a></li>
                            </ul>
                        </div>
                      <div className="col-4">
                        <span className="image fit"><img src={pic04} alt="" /></span>
                        <h3>MyData Global</h3>
                        <p>Adipiscing a commodo ante nunc magna lorem et interdum mi ante nunc lobortis non amet vis sed volutpat et nascetur.</p>
                        <ul className="actions">
                          <li><a href="#" className="button">More</a></li>
                        </ul>
                      </div>
                      <div className="col-4">
                        <span className="image fit"><img src={pic04} alt="" /></span>
                        <h3>Truu</h3>
                        <p>Adipiscing a commodo ante nunc magna lorem et interdum mi ante nunc lobortis non amet vis sed volutpat et nascetur.</p>
                        <ul className="actions">
                          <li><a target='_blank' href="https://truu.id/" className="button">More</a></li>
                        </ul>
                      </div>
                      <div className="col-4">
                        <span className="image fit"><img src={pic04} alt="" /></span>
                        <h3>JLINC</h3>
                        <p>JLINC enables people and businesses to sign automated data contracts,
in seconds. This creates “data provenance,” where all parties can prove
the chain of custody and terms for the data they share.</p>
                        <ul className="actions">
                          <li><a target="_blank" href="https://www.jlinc.com/" className="button">More</a></li>
                        </ul>
                      </div>

                    </div>
                </section>

                <section id="four" className="main style2 special">
                    <div className="container">
                        <header className="major">
                            <h2>Join our mailing list</h2>
                        </header>
                        <SubscribeToMailingList/>
                    </div>
                </section>
            </Layout>
        );
    }
}

export default Homepage;
