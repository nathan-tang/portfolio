import React from "react";
import SwitchThemeButton from "../components/SwitchThemeButton";
import Typewriter from 'typewriter-effect';
import SEO from "../components/SEO";

import Drawing from "../images/meandpokemon.png"

function SimpleList(props) {
    return (
        <ul>
            {props.items.map(function(item) {
                return <li className="ml-4 list-disc" key={item}>{item}</li>;
            })}
        </ul>
    )
}

// WorkExperience
function WorkExperience(props) {
    return (
        <section>
            <h3 className="m-0 text-base font-normal dark:text-white">{props.title}</h3>
            <div>
                <div className="flex justify-between text-sm text-warmGray-600 dark:text-white">
                    <div>{props.company}</div>
                    <div>{props.startDate} - {props.endDate}</div>
                </div>
                <p className="mt-4 text-sm dark:text-white">
                    <SimpleList items={props.points}/>
                </p>
            </div>
        </section>
    )
}

// Main landing page
function IndexPage() {
  return (
      <div className="dark:bg-neutral-900 w-auto h-auto">
        <SEO title="nathantang.me"/>
        <header className="relative w-full h-16">
            <div className="fixed h-20 z-40 w-full flex justify-between backdrop-blur-[20px] backdrop-saturate-150 bg-white/50 dark:bg-neutral-900/50">
                <nav class="w-full sm:max-w-[75ch] m-auto flex px-5 justify-between items-center ">
                    <a href="/"><span className="dark:text-white">nathantang.me</span></a>
                    <SwitchThemeButton className="hover:cursor-pointer"/>
                </nav>
            </div>
        </header>
        <div className="max-w-[75ch] mx-auto pt-12 pb-28 px-5">
            <div className="flex flex-col content-center">
                <h3 className="dark:text-white text-3xl"> Hey, I'm Nathan! </h3>
                <span className="flex">
                    <Typewriter
                        options={{
                            wrapperClassName: "dark:text-white text-1xl",
                            delay: 30,
                            strings: [
                                'Full-time Software Engineer 💻',
                                'Part-time Illustrator 🎨',
                                'Full-time Clown 🤡',
                                'Interested in Frontend/UI Engineering 💻',
                                'Interested in Indie Game Development 🎮'
                            ],
                            autoStart: true,
                            loop: true,
                        }}
                        />
                </span>

                <br/>

                <img alt="drawing of developer with their favorite pokemon" src={Drawing}/>

                <br/>

                <h3 className="dark:text-white text-2xl"> Experience </h3>
                <br/>
                <WorkExperience 
                    title="Software Development Engineer"
                    company="Amazon Web Services (AWS)"
                    startDate="Aug 2022"
                    endDate="Present"
                    points={["AWS Lambda"]}
                /> <br/>
                <WorkExperience 
                    title="Full Stack Developer"
                    company="UC Irvine"
                    startDate="Feb 2020"
                    endDate="Jun 2022"
                    points={[
                        "Led development of single-page web applications that served ~10,000 students, volunteers and staff each",
                        "Reduced time greatly for registration and customer support with creation of admin-side control pane which implemented QR-code camera scanning, search, data visualization, record editing, and more.",
                        "Scaled PHP/Laravel backend via test-driven development, api controllers, models and command line scripts.",
                        "Technologies: VueJS, PHP/Laravel, MySQL, Git, AWS"
                    ]}
                />
                <br/>
                <WorkExperience 
                    title="Software Engineer Intern"
                    company="Flyerstack"
                    startDate="May 2021"
                    endDate="Sep 2021"
                    points={[
                        "Coordinated closely with 4 other developers, business, product, and UI teams to build mobile applications",
                        "Implemented mobile product using React Native, Google Firebase and Git.",
                        "Overseen and executed on the building of internal Python Selenium web-scrapers.",
                    ]}
                />
                <br/>

                <h3 className="dark:text-white text-2xl"> Current Project </h3>
                <br/>
                <WorkExperience 
                    title="Frontend Lead"
                    company="Google Drive Clone"
                    startDate="Sep 2022"
                    endDate="Present"
                    points={[
                        "Collaborated with 4 developers of cross-disciplines to share knowledge to create our own Raspberry Pi cloud server to store and share files accessible with a NextJS web application interface and Golang backend",
                        "Served as primary frontend contact and hosted workshops on web development including topics such as base HTML, CSS preprocessors, ES6 Javascript, improving accessibility, ReactJS, and more",
                        "Contributed regularly to system design meetings and led development on components, middleware auth, and more",
                    ]}
                />
                <br/>

                <footer className="dark:text-white">
                    <h5 className="dark:text-white"> Made with ❤ in Seattle, WA </h5>
                </footer>
            </div>
        </div>
      </div>
  )
}

export default IndexPage;