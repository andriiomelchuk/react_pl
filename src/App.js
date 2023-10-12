import React, {memo, useEffect, useRef, useState} from "react";


const App = memo( () => {

    const [user, setUser] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: ''
    });

    const ref = useRef();
    const divRef = useRef();

    const handleUserData = (event) => {
        setUser((prevState => ({
            ...prevState,
            [event.target.name]: event.target.value
        })))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const formElement = ref.current;
        if(formElement) {
            const firstInput = formElement.querySelector('[name = firstName]')
            console.log(firstInput, 'firstInput')
        }
        /*console.log(user, 'user')*/
        console.log(ref.current.value, 'ref')
    }




    return (
        <div className="App">
            <form onSubmit={handleSubmit} ref={ref}>
                <div ref={divRef} contentEditable suppressContentEditableWarning >
                    <p >

                    </p>
                </div>
                <input type="text" name='firstName' value={user.firstName} onChange={handleUserData}/>
                <input type="text" name='lastName' value={user.lastName} onChange={handleUserData}/>
                <input type="email" name='email' value={user.email} onChange={handleUserData}/>
                <input type="password" name='password' value={user.password} onChange={handleUserData}/>
                <button type='submit'>Send</button>
            </form>



        </div>
    );
})

export default App;



/*class App extends React.Component {

    constructor() {
        super();
        this.state = {
            name: 'Bob'
        }
    }



    changeName = () => {
        this.setState({name: 'Lora'})
    }

    render () {
      return (
        <div className="App">
          <header className="App-header">

            <p>
                {this.state.name}
            </p>
                <button onClick={this.changeName}>Change name</button>
          </header>
            {this.state.name === 'Bob' ? <Child name='Hello'/> : null}
        </div>
      );
    }
}

export default App;*/

