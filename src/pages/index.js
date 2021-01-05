import React, {useState}  from "react";
import Typewriter from 'typewriter-effect';
import { Link } from "gatsby";
import SEO from "../components/seo";
import { navigate } from "gatsby";

// IMAGES
import Background from "../images/train_station/background (v2.3).svg"
import Foreground from "../images/train_station/Foreground (v2.3).svg"
import BackgroundCeilingPanel from "../images/train_station/Foreground Column(v1.4).svg"
import HackUCILogo from "../images/white-anteater-logo-vectorized.svg";
import HackUCISiteLogo from "../images/2018-09-15-Logo-transparent.png";
import X from "../images/x.svg";

// CSS
import "./css/index.scss";
import "./css/global.css";

// Components
import HomepageExperience from "../components/homepage-experience";
//import ProjectCard from "../components/project-card"

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
                <h2> Featured Work </h2>
                <a href="https://www.hackuci.com">
                    <div className="featured featured-hackuci">
                        <img src={HackUCILogo} className="featured-background" alt="hackathon-site-logo"/>
                        <label> HackUCI 2021 </label>
                    </div>
                </a>
                <a href="https://hack.ics.uci.edu">
                    <div className="featured featured-hacksite">
                        <img src={HackUCISiteLogo} className="featured-background" alt="club-site-logo"/>
                        <label> Hack Club Site </label>
                    </div>
                </a>
                <Link to="/xo">
                    <div className="featured featured-xo border">
                        <label> Unfair Tic-Tac-Toe </label>
                    </div>
                </Link>
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
                                    title="Student Web Developer" points={[
                    'Launched large-scale orientation web application that will serve every incoming student at UCI.',
                    'Constructing Responsive Web Applications with PHP-Laravel, Vue.js, and MySQL.',
                    'Experienced in Vuex-ORM, Laravel Eloquent Relationships, and Full-Stack Development.',
                    'Following Agile-Scrum Software Development.']}/>
                <HomepageExperience company="Hack at UCI" date="April 2020 - Present"
                                    title="Tech Organizer" points={['Constructed multiple club sites with own focus on the ReactJS frontend.',
                    'Developed incrementally in a team setting using Github and Heroku development environment.',
                    'Organized and hosted large-scale online hackathon events.']}/>
                <HomepageExperience company="LA-Tronics Inc." date="June 2019 - July 2019"
                                    title="Intern" points={['Utilized Microsoft Excel to manage and document incoming hardware.',
                    'Shadowed superior in the process of E-commerce: monitoring of inventory and sales via eBay.',
                    'Partitioned and wiped SSDs and HDDS in preparation to be sold.']}/>
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