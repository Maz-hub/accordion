import { useState } from "react";
import questions from "./data";

export default function Accordion() {
  const [selected, setSelected] = useState(null); // Single Selection
  const [enableMultiSelection, setEnableMultiSelection] = useState(false); // Boolean switch: false = single selection mode, true = multiple selection mode
  const [multiple, setMultiple] = useState([]); //
  // Array to store the IDs of all open accordion items (used in multi-select mode)

  function handleSingleSelection(getCurrentID) {
    // Toggle: close if same item, open if different
    setSelected(getCurrentID === selected ? null : getCurrentID);
  }

  // Toggle between single and multiple selection modes when user clicks button
  function handleToggleMode() {
    setEnableMultiSelection(!enableMultiSelection);
  }

  function handleMultiSelection(getCurrentID) {
    // Create a copy of the current list of open accordion IDs
    let copyMultiple = [...multiple];
    // Check if the clicked ID is already in the array of open items.
    // If found, index will be 0 or higher; if not found, index will be -1
    const findIndexOfCurrentId = copyMultiple.indexOf(getCurrentID);

    console.log(findIndexOfCurrentId);
    // If ID is not in the array, it means the item is closed → add it to open list
    if (findIndexOfCurrentId === -1) copyMultiple.push(getCurrentID);
    // If ID is already in the array, it means the item is open → remove it (close)
    else copyMultiple.splice(findIndexOfCurrentId, 1);
    // Update the state with the new list of open accordion item IDs
    setMultiple(copyMultiple);
  }

  console.log(multiple);
  return (
    <div className="wrapper">
      <button onClick={handleToggleMode}>Enable Multi Selection</button>
      <div className="accordion">
        {questions && questions.length > 0 ? (
          questions.map((questionItem) => (
            <div className="item">
              <div
                onClick={
                  enableMultiSelection
                    ? () => handleMultiSelection(questionItem.id)
                    : () => handleSingleSelection(questionItem.id)
                }
                className="title"
              >
                <h3>{questionItem.title}</h3>
                <span className="plus">+</span>
              </div>
              {enableMultiSelection
                ? multiple.indexOf(questionItem.id) !== -1 && (
                    <div className="content">{questionItem.info}</div>
                  )
                : selected === questionItem.id && (
                    <div className="content">{questionItem.info}</div>
                  )}
              {/* {selected === questionItem.id ||
              multiple.indexOf(questionItem.id) !== -1 ? (
                <div className="content">{questionItem.info}</div>
              ) : null} */}
            </div>
          ))
        ) : (
          <div>No questions found</div>
        )}
      </div>
    </div>
  );
}
