import React from "react";
import "./index.css";

const QuestionsList = (props) => {
    const { item, changeToggle } = props;
    const { id, questions, answer, toggle } = item;

    const onchangeToggle = (id) => {
        changeToggle(id);
    };

    return (
        <li className="list-con">
            <div className="question">
                <h1 className="questions-head">{questions}</h1>
                <div>
                {toggle ? (
                    <button type="button" className="toggle-btn" onClick={() => onchangeToggle(id)}>-</button>
                ) : (
                    <button type="button" className="toggle-btn"  onClick={() => onchangeToggle(id)}>+</button>
                )}
                </div>
            </div>
            {toggle ?<div><hr/><p className="ans-para">{answer}</p> </div>: null}
        </li>
    );
};

export default QuestionsList;
