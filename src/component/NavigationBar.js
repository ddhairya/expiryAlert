import { Navbar,Container, Nav } from "react-bootstrap";
import GStyle from "../assests/style/global";
import { MdAutorenew } from "react-icons/md";


const NavigationBar = () =>

<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="p-3">
  
  <Navbar.Brand href="#home" className="cyanColor xlfont font-weight-bold"><MdAutorenew strokeWidth="1" /> IT Renewals</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link href="#features">Add Item</Nav.Link>
      <Nav.Link href="#pricing">Remove Item</Nav.Link>
    </Nav>
  </Navbar.Collapse>

</Navbar>


export default NavigationBar