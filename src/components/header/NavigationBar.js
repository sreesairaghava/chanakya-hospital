import React, { Component } from 'react';
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
} from 'reactstrap';

class NavigationBar extends Component {
    state={
        isOpen: false
    }
    onClickToggle = () =>{
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
    render() {
        return (
            <div>
                <Navbar color="dark" dark expand="md" sticky={'top'}>
                    <NavbarBrand href="/">Chanakya Hospital</NavbarBrand>
                    <NavbarToggler onClick={this.onClickToggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                          <NavItem>
                          <NavLink href="/">Home</NavLink>
                          </NavItem>
                          <NavItem>
                          <NavLink href="/">About Us</NavLink>
                          </NavItem>
                          <NavItem>
                          <NavLink href="/">Contact Us</NavLink>
                          </NavItem>
                          <UncontrolledDropdown nav inNavbar>
                                <DropdownToggle nav caret>
                                  Our Doctors
                                  <DropdownMenu right>
                                  <DropdownItem >
                                      Dr.G.S.N Reddy
                                  </DropdownItem>
                                  <DropdownItem>
                                      Dr.Naveen Bharath
                                  </DropdownItem>
                                  <DropdownItem>
                                      Dr.Gopi Raviteja
                                  </DropdownItem>
                                  <DropdownItem>
                                      Dr.Chandana
                                  </DropdownItem>
                                  <DropdownItem>
                                      Dr.Prathyusha 
                                  </DropdownItem>
                                  </DropdownMenu>
                              </DropdownToggle>
                          </UncontrolledDropdown>

                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}

export default NavigationBar;