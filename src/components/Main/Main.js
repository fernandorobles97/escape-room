import ActionBar from "../ActionBar/ActionBar";
import Intro from "../Intro/Intro";
import { useDrop } from 'react-dnd';
import './Main.scss';
import { useState } from "react";

const Main = () => {
  const [contents, setContents] = useState(null);

  console.log('main')
  // map through items here

  const [{ isOver }, dropRef] = useDrop({
    accept: 'item',
    drop: ({ item }) => {
      // if () {
        
      // } else {
        
      // }
      setContents();
    },
    collect: (monitor) => ({
      isOver: monitor.isOver()
    })
  });

  return (
    <main>
      <Intro />
      <ActionBar />
      <div className="drop-zone" ref={dropRef} >Drop Stuff Here</div>
    </main>
  )
}

export default Main;
