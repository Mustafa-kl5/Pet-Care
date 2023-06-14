import React from "react";

export default function PostNevigation(props) {
  const handlePreviseIndex = () => {
    props.getPrevisePost();
  };
  const handleNextIndex = () => {
    props.getNextPost();
  };
  return (
    <div className="edit-delete-button">
      <div>
        <button
          type="button"
          className="next-previse-button"
          onClick={handlePreviseIndex}
        >
          Previse Post
        </button>
      </div>
      <div>
        <button
          type="button"
          className="next-previse-button"
          onClick={handleNextIndex}
        >
          Next Post
        </button>
      </div>
    </div>
  );
}
