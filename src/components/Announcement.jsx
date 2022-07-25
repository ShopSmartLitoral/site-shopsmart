import styled from "styled-components";
import React, { useEffect, useState } from 'react'

const Container = styled.div`
  z-index: 10;
  width: 100%;
  position: fixed;
  height: 30px;
  background-color: #C70039;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
`;

const Announcement = () => {

  const [scroll, setScroll] = useState(0)

  return (
    <>
    { scroll === 0 && <Container scroll={scroll}>Frete grátis em compras acima de R$ 1.000,00!</Container> }
    </>
  )
};

export default Announcement;
