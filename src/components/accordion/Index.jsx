import { useState } from "react";
import questions from "./data";

// Single Selection

// Multiple Selections

export default function Accordion() {
  const [selected, setSelected] = useState(null);

  console.log("rendering ???");
  return (
    <div className="wrapper">
      <div className="accordion">
        {questions && questions.length > 0 ? (
          questions.map((questionItem) => (
            <div className="item">
              <div className="title">
                <h3>{questionItem.title}</h3>
                <span>+</span>
              </div>
            </div>
          ))
        ) : (
          <div>No questions found</div>
        )}
      </div>
    </div>
  );
}
