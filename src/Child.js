import React, { createElement } from "react";

const Child = ({name}) => {

    const clickHandler = () => {

    }

    return (
        <>
            <h2>Hello, {name}</h2>
            {/*{createElement('h2', null, `Child, ${name}`)}*/}
            <button onClick={clickHandler}>send</button>
        </>
    );
}

export default Child;

/*
class Child extends React.Component {
    componentWillUnmount() {
        console.log('componentWillUnmount');
    }

    render() {
        return (
            <>
                <h2>Child 2 </h2>

                <button >send</button>
            </>
        );
    }
}

export default Child;*/
