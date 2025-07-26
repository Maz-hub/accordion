import { useState } from "react";
import questions from "./data";

// Single Selection

// Multiple Selections

export default function Accordion() {
  const [selected, setSelected] = useState(null);

  function handleSingleSelection(getCurrentID) {
    // Toggle: close if same item, open if different
    setSelected(getCurrentID === selected ? null : getCurrentID);
  }
  console.log(selected);
  return (
    <div className="wrapper">
      <button>Enable Multi Selection</button>
      <div className="accordion">
        {questions && questions.length > 0 ? (
          questions.map((questionItem) => (
            <div className="item">
              <div
                onClick={() => handleSingleSelection(questionItem.id)}
                className="title"
              >
                <h3>{questionItem.title}</h3>
                <span className="plus">+</span>
              </div>
              {selected === questionItem.id ? (
                <div className="content">{questionItem.info}</div>
              ) : null}
            </div>
          ))
        ) : (
          <div>No questions found</div>
        )}
      </div>
    </div>
  );
}
