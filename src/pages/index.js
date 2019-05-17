import React from "react";
import Helmet from "react-helmet";

import Layout from '../components/layout';

import didsDiagram from '../assets/images/dids4kidsdiagram.png'
import myDataScotland from '../assets/images/MyDataScotland.png'
import myDataGlobal from '../assets/images/mydataglobal.png'
import truuLogo from '../assets/images/truu_symbol_blue.png'
import jlincLogo from '../assets/images/JLINClogo.png'
import napierLogo from '../assets/images/napierLogo.jpg'
import sitekitLogo from '../assets/images/sitekitLogo.png'

import SubscribeForm from '../components/SubscribeForm'

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
                          <p className="text-justify">This project seeks to research, validate and shape how large-scale deployment of decentralised identity might best emerge by tackling a green field use case around new born children.</p>
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
                                <li><span className="icon style1 major fa-female"></span></li>
                                <li><span className="icon style2 major fa-male"></span></li>
                                <li><span className="icon style3 major fa-child"></span></li>
                                <li><span className="icon style4 major fa-database"></span></li>
                                <li><span className="icon style5 major fa-desktop"></span></li>
                                <li><span className="icon style6 major fa-id-card"></span></li>
                            </ul>
                        </div>
                        <div className="col-6">
                            <header className="major">
                                <h2>Bigger Picture</h2>
                            </header>
                            <p>Decentralised identity and the personal data management capabilities it enables are close to being market-ready. But specific challenges to mass adoption and use remain. This project seeks to research, validate and shape how large-scale deployment of decentralised identity might best emerge by tackling a green field use case around new born children. Pre and immediately post birth children have no digital identities, and thus are a perfect research set for proving new concepts. This project seeks to research, validate and prove that a new human being, with support from their parents and the community around them, can build life-long data assets that are secure, private and able to be shared with appropriate parties under full, audited control.  </p>
                            <p>With the capabilities, we now believe to be viable, the individual will always be the optimal point of origination and integration for data about themselves. This has profound implications for the child themselves, for their parents and support community, and also for the wide range of entities that need/ wish to gather data on or interact digitally with the child over time (their lifetime). </p>
                        </div>
                    </div>
                </section>

                <section id="three" className="main style1 special">
                    <div className="grid-wrapper">
                        <div className="col-12">
                            <header className="major">
                                <h2>Partners</h2>
                            </header>
                            <p className="text-justify">The project is being led by the MyData Scotland Hub, in association with MyData Global, Edinburgh Napier University, SiteKit, JLINC Labs and Truu.id. The team of individuals involved are experienced information management professionals who variously have established careers in customer management, digital identity, academia and medicine. However, the critical capability that we believe is essential to delivering a successful viability test in this area is to look from the perspective of the individual child and their parents, then overlay that with knowledge and insights from our professional lives. </p>
                        </div>
                      <div className="col-4">
                        <span className="image fit"><img src={truuLogo} alt="" /></span>
                        <h3>Truu</h3>
                        <p className="text-justify">Building trusted digital identity for doctors modernising the way medical services verify staff identities, qualifications and certifications.</p>
                        <ul className="actions">
                          <li><a target='_blank' href="https://truu.id/" className="button">More</a></li>
                        </ul>
                      </div>
                        <div className="col-4">
                            <span className="image fit"><img src={myDataScotland} alt="" /></span>
                            <h3>MyData Scotland</h3>
                            <p className="text-justify">A local hub of the MyData Global network. Leading the DIDs for Kids project.</p>
                            <ul className="actions">
                                <li><a target="_blank"  href="#" className="button">More</a></li>
                            </ul>
                        </div>
                        <div className="col-4">
                            <span className="image fit"><img src={napierLogo} alt="" /></span>
                            <h3>Edinburgh Napier University</h3>
                            <p className="text-justify">Identity and Cryptography researchers from the blockchain and identity lab at Napier.</p>
                            <ul className="actions">
                                <li><a target="_blank"  href="https://identity-lab.blockpass.org/" className="button">More</a></li>
                            </ul>
                        </div>
                        <div className="col-4">
                            <span className="image fit"><img className="sitekit" src={sitekitLogo} alt="" /></span>
                            <h3>Sitekit</h3>
                            <p className="text-justify">Sitekit empowers organisations to offer their customers secure and trusted digital services. They believe in collaboration, open standards, decentralised identity and full data ownership by the citizen, to create a global, transparent digital ecosystem. </p>
                            <ul className="actions">
                                <li><a target="_blank" href="https://www.sitekit.net/" className="button">More</a></li>
                            </ul>
                        </div>
                      <div className="col-4">
                        <span className="image fit"><img src={myDataGlobal} alt="" /></span>
                        <h3>MyData Global</h3>
                        <p className="text-justify">A registered non-profit association and a global network whose mission is to empower individuals by improving their right to self-determination regarding their personal data.</p>
                        <ul className="actions">
                          <li><a target="_blank" href="https://mydata.org" className="button">More</a></li>
                        </ul>
                      </div>

                      <div className="col-4">
                        <span className="image fit"><img src={jlincLogo} alt="" /></span>
                        <h3>JLINC</h3>
                        <p className="text-justify">JLINC enables people and businesses to sign automated data contracts,
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
                        <SubscribeForm/>
                    </div>
                </section>
            </Layout>
        );
    }
}

export default Homepage;
