import React from "react";
import Typewriter from 'typewriter-effect';
//import { Link } from "gatsby";
import SEO from "../components/seo";

import "./css/index.css";
import "./css/global.css";
//
// import Layout from "../components/layout";
// import Image from "../components/image";

const IndexPage = () => (
    <div>
        <SEO title="Homepage"/>
        <h3 className="homepage-h3 align-center"> Hey, I'm Nathan! </h3>

        <div className="homepage-typewriter align-center">
            <Typewriter
                options={{
                    strings: ['Under construction again!',
                            'I like building websites uwu',
                            'How are you doing today?',
                            'Uh.. nice weather huh?',
                            'I\'m trying out this new GatsbyJS thing.',
                            'Pretty cool so far I guess..',
                            'Oh- wait check this out,',
                            '✨🐀🤠👉🗿'],
                    delay: 30,
                    autoStart: true,
                    loop: true,
                }}
            />
        </div>

        <div className="homepage-arrow-div align-center">
            <i className="fas fa-angle-down" id="homepage-arrow"></i>
        </div>

        <div className="homepage-cards container align-center">
            <div className="row">
                <div className="col homepage-card card">
                    <div className="card-body">
                        <h5 className="card-title">Test Title</h5>
                        <p className="card-text">Lorem ipsum</p>
                    </div>
                </div>
                <div className="col homepage-card card">
                    <div className="card-body">
                        <h5 className="card-title">Test Title</h5>
                        <p className="card-text">Lorem ipsum</p>
                    </div>
                </div>
                <div className="col homepage-card card">
                    <div className="card-body">
                        <h5 className="card-title">Test Title</h5>
                        <p className="card-text">Lorem ipsum</p>
                    </div>
                </div>
            </div>
        </div>

        <footer className="homepage-footer">
            <h5 className="homepage-h5"> Made with ❤ in Irvine, CA </h5>
        </footer>
    </div>
  // <Layout>
  //   <SEO title="Home" />
  //   <h1>Hi people</h1>
  //   <p>Welcome to your new Gatsby site.</p>
  //   <p>Now go build something great.</p>
  //   <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
  //     <Image />
  //   </div>
  //   <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
  // </Layout>
);

export default IndexPage
