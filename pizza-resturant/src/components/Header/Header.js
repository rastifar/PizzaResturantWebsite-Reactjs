import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import {
  HeaderContainer,
  HeaderContent,
  HeaderItems,
  HeaderH1,
  HeaderP,
  HeaderBtn,
} from "./HeaderStyles";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <HeaderContainer>
      <Navbar toggle={toggle} />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <HeaderContent>
        <HeaderItems>
          <HeaderH1>Different Pizza Ever...</HeaderH1>
          <HeaderP>Ready in 1 minute</HeaderP>
          <HeaderBtn>Order a pizza</HeaderBtn>
        </HeaderItems>
      </HeaderContent>
    </HeaderContainer>
  );
};

export default Header;
