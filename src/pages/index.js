import React from "react";
import "./css/index.css";
import Typewriter from 'typewriter-effect';
// import { Link } from "gatsby";
//
// import Layout from "../components/layout";
// import Image from "../components/image";
// import SEO from "../components/seo";

const IndexPage = () => (
    <div>
        <h3 className="homepage-h3"> Hey, I'm Nathan! </h3>

        <div className="typerwriter-test">
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

        <footer className="homepage-footer">
            <h5 className="homepage-h5"> ❤ Nathan </h5>
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
  //   <Link to="/page-2/">Go to page 2</Link> <br />
  //   <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
  // </Layout>
);

export default IndexPage
