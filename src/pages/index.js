import React, {useState}  from "react";
import Typewriter from 'typewriter-effect';
// import { Link } from "gatsby";
import SEO from "../components/seo";
import { navigate } from "gatsby";

// IMAGES
import Background from "../images/Background (v2.3).svg"
import Foreground from "../images/Foreground (v2.3).svg"
import BackgroundCeilingPanel from "../images/Foreground Column(v1.4).svg"

// CSS
import "./css/index.css";
import "./css/global.css";

// Components
import HomepageExperience from "../components/homepage-experience";
//import ProjectCard from "../components/project-card"

function TextIndexPage(props) {
    return (
        <div>
            <img style={{position: "absolute", left: "25%", width: "50%"}} src={Background} alt="background"/>
            <img style={{position: "absolute", top: "15%", left: "25%", width: "50%"}} src={Foreground} alt="background"/>
            <img style={{position: "absolute", width: "50%", height: "50%", right: "10%"}} src={BackgroundCeilingPanel} alt="backgroundCeiling"/>
        </div>
    )
}

function IndexPage(props) {
    const [state] = useState({
        typewriterText: ['Under construction again!',
            'I think we\'re on version 3 now..?',
            'We got working 404 Pages 😎',
            'Anyways.. nice weather huh?',
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
                <h2> Projects </h2>
                <div className="card-deck">
                    <div id="card-xo" className="card" onClick={() => {navigate('/xo')}}
                         role="presentation" style={{cursor: "pointer"}}>
                        <div className="card-body text-center">
                            <p className="card-text">Unfair Tic-Tac-Toe</p>
                        </div>
                    </div>
                    <div id="card-rc" className="card" onClick={() => {navigate("https://github.com/nathan-tang/sdhacks2019")}}
                         role="presentation" style={{cursor: "pointer"}}>
                        <div className="card-body text-center">
                            <p className="card-text">Recycle Cam (Github)</p>
                        </div>
                    </div>
                    <div className="card bg-success" style={{cursor: "no-drop"}}>
                        <div className="card-body text-center">
                            <p className="card-text">Spotify API Project (WIP)</p>
                        </div>
                    </div>
                    <div className="card bg-danger" style={{cursor: "no-drop"}}>
                        <div className="card-body text-center">
                            <p className="card-text">Under Construction</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container homepage-container">
                <h2> About Me </h2>
                <p> Hey, I'm Nathan! I am currently a 3rd year studying computer science at UCI. I'm genuinely passionate
                    and obsessed with futurology. <br/><br/>
                    I have to admit; the real world can be pretty dull and grim. Here's to a hopeful and bright future
                    through the new advances in technology every day in countless communities and fields globally.
                    It's exciting to see how studies of animals and microorganisms can lead to further innovation,
                    like discovering electroactive bacteria or axolotls' insane regenerative abilities.
                    I'm eager to see what the future has to hold.
                    <br/><br/>
                    With the fictional superhero, Tony Stark, as my role model, I want to contribute and keep learning
                    new things. For now, my primary expertise is in Full-Stack Development.
                    I believe that the web is an endless expanse of information that should be maintained and built upon.
                    <br/><br/>
                    I may or may not blog here.. we'll see how things go! <br/><br/>
                    Primary Programming Languages: Python, C++, JavaScript, PHP <br/>
                    JavaScript Frameworks Worked With: VueJS, ReactJS/GastbyJS
                </p>
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

            <div className="align-center" style={{opacity: "50%", padding: "0 0 30px 0"}}>
                <i> More stuff on the way! </i>
            </div>

            <footer className="homepage-footer">
                <h5 className="homepage-h5"> Made with ❤ in Irvine, CA </h5>
            </footer>
        </div>
    )
}

export default TextIndexPage;


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