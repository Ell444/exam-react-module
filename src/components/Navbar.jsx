import { NavLink } from "react-router-dom"

export default () => {
    return (
        <nav>
            <menu className="main-menu">
                <li>
                    <NavLink className='nav-link' to='/'>Home</NavLink>
                </li>
                <li>
                    <NavLink className='nav-link' to='about'>About us</NavLink>
                </li>
                <li>
                    <NavLink className='nav-link' to='search'>Search</NavLink>
                </li>
            </menu>
        </nav>
    )
}