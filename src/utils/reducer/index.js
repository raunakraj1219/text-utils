import React, { useReducer } from 'react'

const ReduceFunction = () => {
    // const reducer = (state, action) => {

    //     switch (action.type) {
    //         case "INC":
    //             console.log("c1");
    //             return state + 1;
    //         case "DEC":
    //             console.log("c2");
    //             return state - 1;

    //         default:
    //             return state;
    //     }

    // }
    // const initialState = 5;
    // const [state, dispatch] = useReducer(reducer, initialState);




    const reducer = (state, action) => {
        switch (action.type) {
            case "MAC":
                return state++;
        }
    }
    const [state, dispatch] = useReducer(reducer, initialState);



    return (
        <div >
            <p>{state}</p>
            <br />
            <div className='buttons'>
                <button onClick={() => dispatch({ type: "INC" })}>
                    Increment
                </button>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <button onClick={() => dispatch({ type: "DEC" })}>
                    Decrement
                </button>
            </div>

        </div>
    )
}

export default ReduceFunction
