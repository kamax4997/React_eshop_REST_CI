import React, { useState } from "react";
import {
  Collapse,
  Navbar as ReactNavbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavLink
} from "reactstrap";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <div>
      <ReactNavbar color='light' light expand='md'>
        <NavbarBrand tag={Link} color='primary' to='/'>
          Majestic Toys
        </NavbarBrand>
        <img
          className='card-img-top mt-6'
          alt={"Card cap"}
          src="imgs/car.jpeg"
          style={{ width: '80px', height: 'auto'}}
        />
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className='mr-auto' navbar>
          </Nav>
          {/* <NavLink tag={Link} to='/about'>
            About
          </NavLink> */}
        </Collapse>
      </ReactNavbar>
    </div>
  );
};

export default Navbar;
