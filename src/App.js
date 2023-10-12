import React, {memo, useEffect, useState} from "react";


const App = memo( () => {

    const [user, setUser] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: ''
    });

    const handleUserData = (event) => {
        setUser((prevState => ({
            ...prevState,
            [event.target.name]: event.target.value
        })))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(user, 'user')
    }

    return (
        <div className="App">
            <form onSubmit={handleSubmit}>
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

