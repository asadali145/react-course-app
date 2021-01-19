import React from "react";

const validationComponent = (props) => {
    return (
        <div className="form-control">
            {(props.textLength < 5) ? "Text too short" : "Text long enough"}
        </div>
    )
}

export default validationComponent;
