import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <div> <Navbar bg="dark" variant="dark">
    <Container>
      <Navbar.Brand href="#home">
        <img
          alt=""
          src="https://previews.123rf.com/images/sergeypykhonin/sergeypykhonin1604/sergeypykhonin160400032/55349018-restaurant-cafe-vector-logo-menu-dish-food-or-chef-icon.jpg"
          width="50"
          height="50"
          className="d-inline-block align-top"
        />{' '}
       Cafe Restero
      </Navbar.Brand>
    </Container>
  </Navbar>
  </div>
  )
}

export default Header