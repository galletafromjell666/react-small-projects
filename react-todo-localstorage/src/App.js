import logo from "./logo.svg";
import "./App.css";
import CreateElement from "./components/CreateElement/CreateElement";
import MainContainer from "./components/MainContainer/MainContainer";
import {useSelector} from "react-redux" 
function App() {
  const isCreateModalOpen = useSelector(state => state.createModal.isCreateModalOpen)
  return (
    <>
    {isCreateModalOpen && <CreateElement />}
      
      <MainContainer />
    </>
  );
}

export default App;
