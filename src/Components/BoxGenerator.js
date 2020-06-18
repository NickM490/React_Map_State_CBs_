import React, { useState } from 'react';
import styled from 'styled-components';

const BoxForm = (props) => {
    const [state, setState] = useState({
        boxes: [],
        color: "",
        height: "",
        width: ""
    });

    const onChangeHandler = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        });
    }
    const onSubmitHandler = (e) => {
        e.preventDefault();
        state.boxes.push(state);
        setState({ ...state });
        console.log("This is the new box" + state)
        setState({
            boxes: state["boxes"],
            color: "",
            height: "",
            width: "",
            name: ""
        });

    };



    return (
        <>
            <h4>Enter information for a new box below: </h4>
            <form onSubmit={onSubmitHandler} >
                <h4>Color</h4>
                <input type="text" name="color" onChange={onChangeHandler} />
                <br/>
                <h4>Height</h4>
                <input type="text" name="height" onChange={onChangeHandler} />
                <br/>
                <h4>Width</h4>
                <input type="text" name="width" onChange={onChangeHandler} />
                <br/>
                <input type="Submit" value="Create new box" />
            </form>

            {
                state.boxes.map(
                    (boxes, i) =>
                        <div key={i} style={{ background:boxes.color, height:boxes.height+"px", width: boxes.width+"px", display: "inline-block"}}>{boxes.color}</div>
                )}
        </>
    )
}

export default BoxForm;