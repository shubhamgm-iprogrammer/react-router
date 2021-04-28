import React from 'react'
import {NavLink,useRouteMatch} from "react-router-dom"
import classes from "./MainNavigation.module.css"
const MainNavigation = () => {

    const match = useRouteMatch();

    
    return (
        <header className={classes.header}>
            <div className={classes.logo}>Greate Quotes</div>
            <nav className={classes.nav}>
                <ul>
                    <li>
                     <NavLink to="/quotes" activeClassName={classes.active}>AllQuotes</NavLink>
                    </li>
                    <li>
                     <NavLink to="/new-quote" activeClassName={classes.active}>Add A Quote</NavLink>
                    </li>
                </ul>
            </nav>
            
        </header>
    )
}

export default MainNavigation
