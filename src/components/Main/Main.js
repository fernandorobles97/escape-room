import ActionBar from "../ActionBar/ActionBar";
import Intro from "../Intro/Intro";
import Item from "../Item/Item";
import './Main.scss';

const Main = () => {
  console.log('main')
  // map through items here
  return (
    <main>
      <Intro />
      <ActionBar />
    </main>
  )
}

export default Main;
