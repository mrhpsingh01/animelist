import React from "react";

function ViewsButtons(props) {
  return (
    <div className="view-switch">
      {props.viewArray.map(({ name, component }) => (
        <button
          key={name}
          onClick={() => props.setCurrentView(name)}
          disabled={props.currentView === name}
        >
          {name.charAt(0).toUpperCase() + name.slice(1)} View
        </button>
      ))}
    </div>
  );
}

export default ViewsButtons;
