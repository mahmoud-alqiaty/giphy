import { useContext, useEffect } from "react";
import { BrowserRouter, Switch, Route, useLocation } from "react-router-dom";
import Navbar from "./components/navber/Navbar";
import History from "./components/History/History";
import Giphy from "./Pages/Giphy/Giphy";
import ContextProvider, { stateContext } from "./components/context/Context";
import Reddit from "./Pages/Reddit/Reddit";
import { LOCALSTORAGE_HISTORY } from "./components/context/Reducers";


function App() {
  const {loading, data, error, dispatch, showHistory, isSmallScreen, setIsSmallScreen, firstSiteHistory, secondSiteHistory} = useContext(stateContext)

  const handleWidthWithScreen = ()=>{
    if(window.innerWidth > 800){
      setIsSmallScreen(false)
    }else{
      setIsSmallScreen(true)
    }
  }
  
  handleWidthWithScreen()
  useEffect(() => {
    window.addEventListener('resize', handleWidthWithScreen)
    return ()=>{
      window.removeEventListener('resize', handleWidthWithScreen)
    }
  }, [])

// connect search history with local-storage
  const dealWithLocalStorage = ()=>{
    if(localStorage){
      if(localStorage.getItem('history')){
        const localstorageHistory = localStorage.getItem('history')
        dispatch({type: LOCALSTORAGE_HISTORY, payload: JSON.parse(localstorageHistory)})
      } 
    }
  }
  
  useEffect(() => {
    dealWithLocalStorage()
  }, [])

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
