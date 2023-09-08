import Item from "../Item/Item";
import mockItems from './MockItems';
import './ActionBar.scss';

const ActionBar = () => {
  const items = mockItems.map(item => {
    return (
      <Item key={item.id} item={item.attributes} />
    );
  });

  return (
    <section>
      {items}
    </section>
  )
}

export default ActionBar;