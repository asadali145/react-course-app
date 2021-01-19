import React from "react";

const charComponent = (props) => {
    return (
        <div className='char-component' onClick={props.click}>
            {props.text}
        </div>
    )
}

export default charComponent;
