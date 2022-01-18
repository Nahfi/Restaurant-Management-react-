
import React from "react"
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText
  } from 'reactstrap';


const Navi=()=>{

    return(

        <div>
            <Navbar color="dark" dark expand="md">
        <div className="container">

        <NavbarBrand href="/">Resturant App</NavbarBrand>
        
        </div>
      </Navbar>
        </div>
    )
}
export default Navi;