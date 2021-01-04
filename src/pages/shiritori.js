import  React, { useState, useEffect } from "react";
import { Link } from "gatsby";
import wordData from "../data/words_dictionary";

function Shiritori(props) {
    const [valid, setValid] = useState("");
    const [word, setWord] = useState("");
    const [history, setHistory] = useState([]);
    let [dictionary, setDictionary] = useState({ a: [], b: [], c: [], d: [], e: [], f: [], g: [], h: [], i: [], j: [], k: [], l: [], m: [], n: [], o: [], p: [], q: [], r: [], s: [], t: [], u: [], v: [], w: [], x: [], y: [], z: [] });

    // alphabetize
    useEffect(() => {
        let object = Object.entries(wordData);
        let tempDictionary = { a: [], b: [], c: [], d: [], e: [], f: [], g: [], h: [], i: [], j: [], k: [], l: [], m: [], n: [], o: [], p: [], q: [], r: [], s: [], t: [], u: [], v: [], w: [], x: [], y: [], z: [] };
        object.map( (data) => {
            tempDictionary[data[0].charAt(0)].push(data[0]);
            return 0;
        });
        setDictionary(tempDictionary);
    }, []);

    // console.log(dictionary["a"].includes("apple"));
    // console.log(dictionary["a"].includes("bee"));
    // const index = dictionary["a"].indexOf("apple");
    // if (index > -1) { dictionary["a"].splice(index) }
    // console.log(dictionary["a"].indexOf("bee")); // equals -1 because does not exist // this is how to determine if word exist.
    // console.log(dictionary["a"].includes("apple"));

    // Game Logic Flow:
    // Every time a word is used remove it from dictionary.
    // AI will grab random word from dictionary[letter] via dictionary[letter][random_index] and random_index = 0 - dictionary[letter].length

    let handleInputChange = event => {
        setWord(event.target.value);
    };

    let handleSubmit = event => {
        if (history.length === 0) {
            console.log("first time only");
            let newHistory = history;
            newHistory.push(word);
            setHistory(newHistory);
        }
        if (word !== undefined) {
            if (dictionary[history[history.length - 1].charAt(history[history.length - 1].length - 1)].indexOf(word) !== -1) {
                let newHistory = history;
                newHistory.push(word);
                setHistory(newHistory);
                setValid("true");
            } else {
                setValid("false");
            }
        }
    };

    return (
        <div id="shiritori" style={{marginTop: "30px"}}>
            <Link to="/" style={{position: "absolute", top: "0", left: "0", padding: "20px"}}>Go Back</Link>
            <div className="container">
                <div>
                    <label aria-label="word" >Enter Word:</label>
                    <input type="text" onChange={handleInputChange}/>
                    <button onClick={handleSubmit}>Submit</button>
                </div>
                <div>
                    <label> Valid Word: {valid}</label>
                    <p>{history}</p>
                </div>
            </div>
        </div>
    )
}

export default Shiritori;