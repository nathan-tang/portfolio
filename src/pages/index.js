import React, {useState}  from "react";
import Typewriter from 'typewriter-effect';
// import { Link } from "gatsby";
import SEO from "../components/seo";

// CSS
import "./css/index.css";
import "./css/global.css";
import HomepageExperience from "../components/homepage-experience";

function IndexPage(props) {
    const [state] = useState({
        typewriterText: ['Under construction again!',
            'I think we\'re on version 3 now..?',
            'How are you doing today?',
            'Uh.. nice weather huh?',
            'I\'m trying out this new GatsbyJS thing.',
            'Pretty cool so far I guess..',
            'Oh- wait check this out,',
            '✨🐀🤠👉🗿'],
    });

    return (
        <div className="Homepage">
        <SEO title="Homepage"/>

        <h3 className="homepage-h3 align-center"> Hey, I'm Nathan! </h3>

        <div className="homepage-typewriter align-center">
            <Typewriter
                options={{
                    strings: state.typewriterText,
                    delay: 30,
                    autoStart: true,
                    loop: true,
                }}
            />
        </div>

        <div className="homepage-socials align-center">
            <a href="mailto:nathanwt@uci.edu">
                <i className="fa fa-envelope large-text" aria-hidden="true"/>
            </a>
            <a href="https://www.linkedin.com/in/nathanwtang/">
                <i className="fab fa-linkedin large-text" aria-hidden="true"/>
            </a>
            <a href="https://github.com/nathan-tang">
                <i className="fab fa-github large-text" aria-hidden="true"/>
            </a>
        </div>

        <div className="homepage-arrow-div align-center">
            <i className="fas fa-angle-down" id="homepage-arrow"> </i>
        </div>

        <div className="container homepage-container">
            <h2> About Me </h2>
            <p> I'm Nathan Tang an incoming 3rd year at UC Irvine pursuing a B.S. in Computer Science.
                My main focus is full-stack development, but my other interests include AI and robotics.
                Programming aside, I'm an avid drawer and video game enthusiast. I like seeing funny stuff
                on the internet.</p>
        </div>

        <div className="container homepage-container align-left">
            <h2> Experience </h2>
            <HomepageExperience company="UCI Student Affairs IT" date="February 2020 - Present"
            title="Student Web Developer" points={['Following Agile-Scrum Software Development',
                'Constructing Responsive Web Applications with PHP-Laravel, Vue.js, and MySQL',
                'Experience! in Vuex-ORM, Laravel Eloquent Relationships, and Full-Stack Development']}/>
            <HomepageExperience company="LA-Tronics Inc." date="June 2019 - July 2019"
            title="Intern" points={['Worked independently in Inventory Branch','Used Microsoft Excel to manage and document incoming hardware',
            'Shadowed superior in the process of E-commerce: monitoring of inventory and sales via eBay',
            'Partitioned and wiped SSDs and HDDS in preparation to be sold']}/>
        </div>

        <div className="container homepage-container">
            <h2> Projects </h2>
            <div className="card-deck">
                <div className="card bg-primary">
                    <div className="card-body text-center">
                        <p className="card-text">Under Construction</p>
                    </div>
                </div>
                <div className="card bg-warning">
                    <div className="card-body text-center">
                        <p className="card-text">Under Construction</p>
                    </div>
                </div>
                <div className="card bg-success">
                    <div className="card-body text-center">
                        <p className="card-text">Under Construction</p>
                    </div>
                </div>
                <div className="card bg-danger">
                    <div className="card-body text-center">
                        <p className="card-text">Under Construction</p>
                    </div>
                </div>
            </div>
        </div>

            <div className="align-center" style={{opacity: "50%", padding: "0 0 30px 0"}}>
            <i> More stuff on the way! </i>
        </div>

        <footer className="homepage-footer">
            <h5 className="homepage-h5"> Made with ❤ in Irvine, CA </h5>
        </footer>
    </div>
    )
}

export default IndexPage;

//
// <div className="align-center" >
//     <button type="button" onClick={() => this.setState({count: this.state.count + 1})}>{this.state.count}</button>
//     {this.state.count === 0 && <p> ... </p>}
//     {this.state.count === 1 && <p> Hey! Stop that! </p>}
//     {this.state.count === 2 && <p> I mean it stop pushing me! </p>}
//     {this.state.count === 3 && <p> ... </p>}
//     {this.state.count === 4 && <p> Not cool! </p>}
//     {this.state.count === 5 && <p> Buttons have feelings too. </p>}
//     {this.state.count === 6 && <p> You know what? </p>}
//     {this.state.count === 7 && <p> I'm just going to ignore you. </p>}
//     {this.state.count === 8 && <p> Denying you any satisfaction of progress! </p>}
//     {(this.state.count >= 9 && this.state.count < 50) && <p> ... </p>}
//     {this.state.count === 50 && <p> Really.. still? </p>}
//     {(this.state.count > 50 && this.state.count < 100) && <p> ... </p>}
//     {(this.state.count >= 100 && this.state.count < 1000) && <p> Okay there's really nothing else. This is the end! </p>}
//     {(this.state.count >= 1000) && <p> You really got nothing better to do? </p>}
// </div>
// <div className="Homepage">
//     <SEO title="Homepage"/>
//
//     <div className="nav-button-div">
//         <i className="fa fa-bars nav-button"> </i>
//     </div>
//
//     <h3 className="homepage-h3 align-center"> Hey, I'm Nathan! </h3>
//
//     <div className="homepage-typewriter align-center">
//         <Typewriter
//             options={{
//                 strings: ['Under construction again!',
//                         'I like building websites uwu',
//                         'How are you doing today?',
//                         'Uh.. nice weather huh?',
//                         'I\'m trying out this new GatsbyJS thing.',
//                         'Pretty cool so far I guess..',
//                         'Oh- wait check this out,',
//                         '✨🐀🤠👉🗿'],
//                 delay: 30,
//                 autoStart: true,
//                 loop: true,
//             }}
//         />
//     </div>
//
//     <div className="homepage-arrow-div align-center">
//         <i className="fas fa-angle-down" id="homepage-arrow"> </i>
//     </div>
//
//     <footer className="homepage-footer">
//         <h5 className="homepage-h5"> Made with ❤ in Irvine, CA </h5>
//     </footer>
// </div>

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