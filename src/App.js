import React, {useEffect} from "react";
import Button from '@mui/material/Button';
import Child from "./Child";
import {useState} from "react";

const App = () => {

    const [data, setData] = useState({
        name: 'Bob'
    });

    useEffect(() => {

    }, [data.name])

    const [loading, setLoading] = useState(false);

    const changeName = () => {
        setData(prevState => ({
            ...prevState,
            name: 'Lora'
        }))
    }

    return (
        <div className="App">
            <header className="App-header">

                <p>
                    {data.name}
                </p>

            </header>
            <button onClick={() => setLoading(!loading)}>Open & Close</button>
            <Button  variant="contained" onClick={changeName}>Change name</Button >
            {loading ? <Child name={data.name}/> : null}

        </div>
    );
}

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

