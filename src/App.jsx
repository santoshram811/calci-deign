import style from "./App.module.css";
import ButtonsContainer from "./components/ButtonsContainer";
import Display from "./components/Display";


function App() {
  return (
    <div className={style.calci}>
      <Display></Display>
   <ButtonsContainer></ButtonsContainer>
    </div>
  );
}

export default App;
