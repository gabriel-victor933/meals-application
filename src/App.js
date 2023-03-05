import "./assets/app.css"
import Favorites from "./components/Favorites"
import Meals from "./components/Meals"
import Modal from "./components/Modal"
import Search from "./components/Search"
import { useGlobalContext } from "./context"



function App() {

  const { showModal, favorites } = useGlobalContext()

  return (
    <div>
      <Search />
      {favorites.length > 0 && <Favorites />}
      {showModal && <Modal />}
      <Meals />
    </div >
  );
}

export default App;
