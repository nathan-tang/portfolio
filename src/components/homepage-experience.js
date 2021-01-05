import React  from "react";

function SimpleList(props) {
    return (
        <ul>
            {props.items.map(function(item) {
                return <li key={item}>{item}</li>;
            })}
        </ul>
    )
}

function HomepageExperience(props) {
    return (
        <div id="homepage-experience" style={props.style}>
            <div className="homepage-experience">
                <h3 className="homepage-experience-company">{props.company}</h3>
                <h4 className="homepage-experience-date font-weight-normal">{props.date}</h4>
            </div>
            <h4 className="homepage-experience-title font-weight-normal"> {props.title}</h4>
            <SimpleList items={props.points}/>
        </div>
    )
}

export default HomepageExperience