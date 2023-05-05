import {
    Nav,
    NavLogo,
    NavLink,
    Bars,
    NavMenu
} from "./NavbarElements";


const Navbar = () => {
    return (
        <>
           <Nav>
            <NavLogo to="/">
                <NavLogo>Logo</NavLogo>
            </NavLogo>
            <Bars />

            <NavMenu>
                <NavLink 
                  to="/"
                  activeStyle={{ color:'black' }}
                >
                    Home
                </NavLink>
                <NavLink 
                  to="/about"
                  activeStyle={{ color: 'black' }}
                >
                    About
                </NavLink>
                <NavLink 
                  to="/contact" 
                  activeStyle={{ color: 'black' }}
                >
                    Contact
                </NavLink>
               
                {/* <NavBtn>
                    <NavBtnLink to="/sign-up">Sign Up</NavBtnLink>
                </NavBtn> */}
            </NavMenu>
           </Nav> 
        </>
    );
};

export default Navbar;