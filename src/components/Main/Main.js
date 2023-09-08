import styled from 'styled-components'
import ActionBar from "../ActionBar/ActionBar";
import Intro from "../Intro/Intro";
import { useDrop } from 'react-dnd';
import './Main.scss';
import { useState } from "react";

const StyledMain = styled.main`
  height: 100vh;
  background: no-repeat center center fixed url('${process.env.PUBLIC_URL}/images/tavern.png');
  background-size: contain;
`


const Main = () => {
  const [contents, setContents] = useState({});

  console.log('main')
  // map through items here

  const [{ isOver }, dropRef] = useDrop({
    accept: 'item',
    drop: ({ item }) => {
      // if () {
        
      // } else {
        
      // }
      setContents(item);
      console.log(item)
    },
    collect: (monitor) => ({
      isOver: monitor.isOver()
    })
  });

  const styles = {
    backgroundImage: `url(${process.env.PUBLIC_URL}/images/${contents.image})`
  }

  console.log(contents)
  return (
    <StyledMain>
      <Intro />
      <ActionBar />
      <div className="drop-zone" ref={dropRef} style={styles} >Drop Contents Here</div>
    </StyledMain>
  )
}

export default Main;