import { useEffect } from "react";

export default function DeleteConfirmation({ onConfirm, onCancel }) {
  
  // cleanup timer with useEffect
  useEffect(() => {
    // timer function to confirm automatically
    console.log('Timer SET');
    const timerID = setTimeout(() => {
      onConfirm();
    }, 3000);

    return () => {
      console.log('Cleaning up timer');
      clearTimeout(timerID);
    }
  });

  return (
    <div id="delete-confirmation">
      <h2>Are you sure?</h2>
      <p>Do you really want to remove this place?</p>
      <div id="confirmation-actions">
        <button onClick={onCancel} className="button-text">
          No
        </button>
        <button onClick={onConfirm} className="button">
          Yes
        </button>
      </div>
    </div>
  );
}