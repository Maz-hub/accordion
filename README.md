# React Accordion Component

This mini project is an interactive Accordion component built with React. It includes both **single selection** and **multi-selection** modes.

I created it to practice core React concepts and understand how to build real UI logic using state and conditional rendering.

---

## 🧠 What I Learned

- **How to map over an array of data** to generate dynamic UI
- **How to track selection** using `useState`, both for a single ID and an array of IDs
- **How to toggle open/close** behavior by comparing values
- **How to switch logic** based on mode (single vs. multiple)
- **Why we copy arrays before updating state** (`[...multiple]`)
- **How to conditionally render content** based on the selected state

---

## 💡 Project Logic Summary

- The app tracks if we're in **single or multi-select** mode using a `boolean` state.
- In **single selection mode**, only one accordion item can be open at a time.
- In **multi-selection mode**, multiple items can be opened or closed independently by tracking a list of IDs.
- Clicking an accordion title runs a function that either adds or removes the clicked ID from state.

---

## 🛠️ Tech Used

- React (Vite setup)
- useState hook for local state management
- Simple CSS for styling

---

## 🎯 Why I Built This

I built this to train my developer brain to think in state logic, handle conditionals, and understand re-rendering. It wasn't easy — the multi-toggle version was a real challenge — but working through it helped me make the logic click (eventually 😅).
