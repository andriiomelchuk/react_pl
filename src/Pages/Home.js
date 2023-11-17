import {Link} from "react-router-dom";





const Home = () => {


    return <main className='home-container'>
        <h1>Github battle: battle your friends and ... stuff</h1>
        <Link to='battle' className='button'>Battle</Link>
    </main>

}

export default Home;


/*
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

    return <Container >

        <form maxWidth="xl" onSubmit={handleSubmit}>
            <input
                type="text"
                name='firstName'
                label="First name"
                value={user.firstName}
                onChange={handleUserData}
            />

            <input
                type="text"
                name='lastName'
                label="Last name"
                value={user.lastName}
                onChange={handleUserData}/>
            <input
                type="email"
                name='email'
                label="Email"
                value={user.email}
                onChange={handleUserData}/>
            <input
                type="password"
                name='password'
                label="Password"
                value={user.password}
                onChange={handleUserData}/>
            <button variant="contained" type='submit'>Send</button>
        </form>
    </ Container>
*/



/*


const ref = useRef();
const divRef = useRef();



const handleSubmit = (event) => {
    event.preventDefault();
    const formElement = ref.current;
    if(formElement) {
        const firstInput = formElement.querySelector('[name = firstName]')
        console.log(firstInput, 'firstInput')
    }

    console.log(ref.current.value, 'ref')
}*/
