import { Badge } from "@mui/material";
import { Search, ShoppingCart } from "@mui/icons-material";

import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 60px;
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  background-color: #fff5e5;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid gray;
  border-radius: 10px;
  padding: 5px;
  margin-left: 20px;
`;

const Input = styled.input`
  border: none;
  font-size: 18px;
  outline: none;
  background-color: #fff5e5;
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  font-weight: bold;
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const RightItem = styled.div`
  font-size: 18px;
  cursor: pointer;
  margin-right: 25px;
`;

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <SearchContainer>
            <Input />
            <Search style={{ fontSize: 16 }} />
          </SearchContainer>
        </Left>
        <Center>
          <Logo>Calvin Shop</Logo>
        </Center>
        <Right>
          <RightItem>Sign Up</RightItem>
          <RightItem>Sign In</RightItem>
          <RightItem>
            <Badge badgeContent={4} color="primary">
              <ShoppingCart />
            </Badge>
          </RightItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
