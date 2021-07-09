import { useContext, useEffect } from "react";
import { BrowserRouter, Switch, Route, useLocation } from "react-router-dom";
import Navbar from "./components/navber/Navbar";
import History from "./components/History/History";
import Giphy from "./Pages/Giphy/Giphy";
import ContextProvider, { stateContext } from "./components/context/Context";
import Reddit from "./Pages/Reddit/Reddit";


function App() {
  const {loading, data, error, dispatch, showHistory, isSmallScreen, setIsSmallScreen} = useContext(stateContext)

  const handleWidthWithScreen = ()=>{
    if(window.innerWidth > 800){
      setIsSmallScreen(false)
      console.log(false);
    }else{
      setIsSmallScreen(true)
      console.log(true);
    }
  }
  
  handleWidthWithScreen()
  useEffect(() => {
    window.addEventListener('resize', handleWidthWithScreen)
    return ()=>{
      window.removeEventListener('resize', handleWidthWithScreen)
    }
  }, [])

  // const dealWithLocalStorage = ()=>{
  //   if(localStorage){
  //     if(localStorage.key)
  //   }
  // }

  // useEffect(() => {
  //   dealWithLocalStorage()

  // }, [])

  

  //fetch searched data


  return (
      <BrowserRouter>
        <Navbar />
        <History />
          <Switch>
            <Route path="/" exact component={Giphy} />
            <Route path="/reddit" component={Reddit} />
          </Switch>
      </BrowserRouter>
  );
}

export default App;
