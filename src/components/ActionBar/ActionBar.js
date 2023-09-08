import { useDrop } from 'react-dnd';
import Item from "../Item/Item";
import mockItems from './mockItems.js';
import './ActionBar.scss';

const ActionBar = () => {
  const items = mockItems.map(item => {
    return (
      <Item key={item.id} name={item.name} />
    );
  });

  return (
    <section>
      {items}
    </section>
  )
}

export default ActionBar;