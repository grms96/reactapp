import React from "react";

const SearcBox = ({ searchChange }) => {

    return (
        <div className="pa3">
        <input
        className="pa3 ba b--green bg-lightest-blue"
        type="search"
        placeholder="search robots"
        onChange = {searchChange}
        />
        </div>
    )
}

export default SearcBox;