import styled from 'styled-components'
import ActionBar from "../ActionBar/ActionBar";
import Intro from "../Intro/Intro";
import './Main.scss';
import { useState } from "react";

const StyledMain = styled.main`
  height: 100vh;
  background: no-repeat center center fixed url('${process.env.PUBLIC_URL}/images/tavern.png');
  background-size: contain;
`

const Main = () => {
  console.log('main')
  // map through items here

  return (
    <StyledMain>
      <Intro />
      <ActionBar />
    </StyledMain>
  )
}

export default Main;