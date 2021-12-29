import { useState } from "react";
import { random } from "./helpers";
import { nounsArr, adjectivesArr } from "./data";
import Phrase from "./components/Phrase";
import EmptyBlock from "./components/EmptyBlock";
import "./App.css";

export default function App() {
    let [ phrases, setPhrases ] = useState([]);

    const generatePhrase = () => {
        let randAdjective = random(0, adjectivesArr.length - 1);
        let randNoun = random(0, nounsArr.length - 1);

        let phrase = {
            id: Date.now(),
            phrase: `${adjectivesArr[randAdjective]} ${nounsArr[randNoun]}`
        }

        setPhrases(prev => [...prev, phrase]);
    }

    const clearPhrases = () => {
        setPhrases([]);
    }

    return (
        <div className="wrapper">
            { phrases.length ? 
                <div className="list">
                    { phrases.map(phrase => <Phrase key={phrase.id} {...phrase} />) }
                </div>
            : <EmptyBlock /> }
            <button className="btn btn_generate" onClick={generatePhrase}>Сгенерировать</button>
            <button className="btn btn_clear" onClick={clearPhrases}>Очистить</button>
        </div>
    );
}