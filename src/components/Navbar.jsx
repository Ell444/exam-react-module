import { useState } from "react"
import { NavLink } from "react-router-dom"

export default () => {

    const [lang, setLang] = useState('en-US')
    const l = {
        "en-US": { about: "About Us", search: "Search" },
        "it-IT": { about: "Chi siamo", search: "Cerca" }
    }


    return (
        <nav>
            <menu className="main-menu">
                <li>
                    <NavLink className='nav-link' to='/'>Home</NavLink>
                </li>
                <li>
                    <NavLink className='nav-link' to='about'>{l[lang].about}</NavLink>
                </li>
                <li>
                    <NavLink className='nav-link' to='search'>{l[lang].search}</NavLink>
                </li>
                <li>
                    <select
                        value={lang}
                        onChange={e => setLang(e.target.value)}>
                        <option value="en-US">EN</option>
                        <option value="it-IT">IT</option>
                    </select>
                </li>
            </menu>
        </nav>
    )
}