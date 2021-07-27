import { Navbar, Nav } from "react-bootstrap";
import { MdAutorenew } from "react-icons/md";
import { Link } from "react-router-dom";


const NavigationBar = () =>

<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="p-3">
  
  <Link to="/" className="cyanColor xlfont font-weight-bold txtDecNone"><MdAutorenew strokeWidth="1" /> IT Renewals</Link>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto ">
      <Link to="/add" className="nav-link m-2">Add Item</Link>
    </Nav>
  </Navbar.Collapse>

</Navbar>


export default NavigationBar