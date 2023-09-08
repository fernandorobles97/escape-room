import { useDrag, DragPreviewImage } from 'react-dnd';
import './Item.scss';

const Item = ({ item }) => {
  const [{ isDragging }, dragRef, preview] = useDrag({
    type: 'item',
    item: { item },
    collect: (monitor) => ({
      isDragging: monitor.isDragging()
    })
  });

  return (
    <>
      {!isDragging && (
        <DragPreviewImage connect={preview} src={`${process.env.PUBLIC_URL}/images/${item.image}.png`} />
      )}
      <div >
        <img className='object' src={`${process.env.PUBLIC_URL}/images/${item.image}`} ref={dragRef} />
      </div>
    </>
  )
}

export default Item;
