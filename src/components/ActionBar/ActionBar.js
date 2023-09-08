import Item from "../Item/Item";
import { useState } from "react";
import { useDrop } from 'react-dnd';
import mockItems from './MockItems';
import './ActionBar.scss';

const ActionBar = () => {
  const [contents, setContents] = useState({});

  const items = mockItems.map(item => {
    return (
      <Item key={item.id} item={item.attributes} />
    );
  });

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

  // const styles = {
  //   backgroundImage: `url(${process.env.PUBLIC_URL}/images/${contents.image})`
  // }

  return (
    <section className='drop-zone' ref={dropRef} >
      {items}
    </section>
  )
}

export default ActionBar;