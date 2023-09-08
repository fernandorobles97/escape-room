import ActionBar from "../ActionBar/ActionBar";
import Intro from "../Intro/Intro";
import { useDrop } from 'react-dnd';
import './Main.scss';
import { useState } from "react";

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
    <main>
      <Intro />
      <ActionBar />
      <div className="drop-zone" ref={dropRef} style={styles} >Drop Contents Here</div>
    </main>
  )
}

export default Main;