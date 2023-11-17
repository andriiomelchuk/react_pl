import {NavLink} from "react-router-dom";
import  '../Nav/Nav.css'


// Easy nav

const navLinks = [{id: 0, title: 'Home'}, {id: 1, title: 'Popular'}, {id: 2, title: 'Battle'}];

const Nav = () => {
    return (
        <nav>
            <ul className='nav'>
                {navLinks.map(navLink => (
                    <li key={navLink.id}>
                        <NavLink className='navItem' to={navLink.title === 'Home' ?'/' : navLink.title.toLowerCase()}>
                            {navLink.title}
                        </NavLink>
                    </li>
                ))}

            </ul>
        </nav>
    )
}

export default Nav

/*

const Nav = () => {
    return (
        <nav>
        <ul className='nav'>
            <li>
                <NavLink to='/'>Home</NavLink>
            </li>
            <li>
                <NavLink to='popular'>PopularPage</NavLink>
            </li>
            <li>
                <NavLink to='battle'>Battle</NavLink>
            </li>
        </ul>
        </nav>
    )
}

export default Nav


* */