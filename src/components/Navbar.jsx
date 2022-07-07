import { Badge } from "@material-ui/core";
import { ShoppingCartOutlined, Search } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
import { Link } from 'react-router-dom'

const Container = styled.div`
  margin-top: 30px;
  z-index: 10;
  width: 100%;
  position: fixed;
  height: 90px;
  background-color: rgba(0, 0, 0, 0.8);
  color: white;
  ${mobile({
  height: "80px",
  zIndex: 10
})}
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: "10px 0px" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  text-align: center;
  justify-content: center;
  height: 90px;
  ${mobile({
  height: "70px",
  marginTop: -5
})}
`;

const Central = styled.div`
  display: block;
  flex: 2;
  height: 90px;
  align-items: center;
  justify-content: center;
  ${mobile({
  display: 'none'
})}
`;

const Menu = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  height: 50px;
`

const MenuMobile = styled.div`
  display: none;
  ${mobile({
  width: '20px',
  height: '20px',
  backgroundColor: '#c2c2c2'
})}
`
const Logo = styled.div`
  margin-top: -20px;
  font-size: 36px;
  font-weight: bold;
  ${mobile({ fontSize: "24px" })}
`;
const Right = styled.div`
  margin-top: -20px;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 90px;
  ${mobile({
  flex: 1,
  justifyContent: "center",
  alignItems: "center",
  height: "70px",
  marginTop: -5
})}
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;

const InputContainer = styled.div`
  width: 100%;
  height: 30px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  border: 1px solid lightgray;
  align-items: center;
  ${mobile({ width: "80%" })}
`;

const Input = styled.input`
  border: none;
  flex: 8;
  padding-left: 20px;
`;

const Button = styled.button`
  flex: 1;
  height: 30px;
  border: none;
  color: #1076D1;
  background-color: transparent;
`;

const linkStyle = {
  margin: "1rem",
  textDecoration: "none",
  color: 'white'
};

const Navbar = () => {

  return (
    <Container>
      <Wrapper>
        <Left>
          <Link style={linkStyle} to={'/'}>
            <MenuMobile>X</MenuMobile>
            <Logo>ShopSmart</Logo>
          </Link>
        </Left>
        <Central>
          <InputContainer>
            <Input placeholder="Pesquisar ex: iPhone, Xiaomi, Apple Watch..." />
            <Button>
              <Search />
            </Button>
          </InputContainer>
          <Menu>
            <Link style={linkStyle} to={'/'}>
              <MenuItem>iPhone</MenuItem>
            </Link>
            <Link style={linkStyle} to={'/'}>
              <MenuItem>Xiaomi</MenuItem>
            </Link>
            <Link style={linkStyle} to={'/'}>
              <MenuItem>Capinhas</MenuItem>
            </Link>
            <Link style={linkStyle} to={'/'}>
              <MenuItem>Pelicolas</MenuItem>
            </Link>
            <Link style={linkStyle} to={'/'}>
              <MenuItem>Notbook`s</MenuItem>
            </Link>
            <Link style={linkStyle} to={'/'}>
              <MenuItem>Consoles</MenuItem>
            </Link>
          </Menu>
        </Central>
        <Right>
          <MenuItem>Cadastar-se</MenuItem>
          <MenuItem>Login</MenuItem>
          <MenuItem>
            <Link style={linkStyle} to={'/cart'}>
              <Badge badgeContent={2} color="primary">
                <ShoppingCartOutlined />
              </Badge>
            </Link>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
