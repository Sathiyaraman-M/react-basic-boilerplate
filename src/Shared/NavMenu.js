import React, {useState} from 'react';
import {Collapse, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink} from "reactstrap";
import {Link} from "react-router-dom";
const NavMenu = () => {
    const [collapsed, toggleNavMenu] = useState(true);
    return (
        <header>
            <Navbar className="navbar-expand-sm navbar-toggleable-sm bg-dark navbar-dark border-bottom box-shadow mb-3" container>
                <NavbarBrand tag={Link} to="/">Advanced React</NavbarBrand>
                <NavbarToggler onClick={() => toggleNavMenu(!collapsed)} className="me-2 ms-auto" />
                <Collapse isOpen={!collapsed} className="d-sm-inline-flex flex-sm-row-reverse" navbar>
                    <ul className="navbar-nav flex-grow">
                        <NavItem>
                            <NavLink tag={Link} to="/">Index</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={Link} to="/counter">Counter</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={Link} to="/fetch-data">Fetch Data</NavLink>
                        </NavItem>
                    </ul>
                </Collapse>
            </Navbar>
        </header>
    );
};

export default NavMenu;