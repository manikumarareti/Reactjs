import logo from './logo.svg';
import './App.css';
import ButtonComponents from './components/functional/button/button';
import ListComponents from './components/functional/list/list';
import Button from './components/class/button';
import MapComponent from './components/functional/map/map';
import ToDo from './components/class/todo';
import Mounting from './components/class/lifecycle/mounting';

function App() {
  const Btn=[
  {
    ButtonText:"login",
    width:100,
    height:100,
    bgColor:"yellow"
  },
  {
    ButtonText:"signin",
    width:100,
    height:100,
    bgColor:"white"
  },
  {
    ButtonText:"reset",
    width:100,
    height:100,
    bgColor:"blue"
  }
]
  return (
    <>
    {/* {
      Btn.map(objbtn=>{
        const {ButtonText,width,height,bgColor}=objbtn
        return(
          <ButtonComponents ButtonText={ButtonText} bgColor={bgColor} width={width} height={height}/>
        )
      })
    } */}
      {/*  <ButtonComponents ButtonText={"Login"} bgColor={"blue"} width={100} height={100}/>
      <ListComponents/>
      <Button/> 
      <MapComponent />
      <ToDo/> */}
      
      <Mounting/>
    </>
  );
}

export default App;
