import React from "react";
import {Container} from "reactstrap";
import NavMenu from "./NavMenu";

const Layout = (props) => {
    return (
        <>
            <NavMenu />
            <Container tag="main">
                {props.children}
            </Container>
        </>
    );
}

export default Layout;