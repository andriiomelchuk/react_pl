import {Outlet} from "react-router-dom";
import Nav from "../Nav/Nav";

const Layout = () => {
    return (
        <main className='container'>
            <Nav />
            <Outlet />
        </main>
    )
}

export default Layout