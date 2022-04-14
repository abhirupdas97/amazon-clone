import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useEffect ,useReducer } from "react";
import './App.css';
import Header from "./Header";
import "./Header.css"
import Home from './Home.js';
import Checkout from './Checkout';
import Login from './Login'
import {auth} from './firebase'
import reducer from "./reducer";
import { initialState } from "./reducer";

/*import {commerce} from './commerce.js'

const [state, setstate] = useState([]);

const commerce = new Commerce('pk_test_33036d7b2c2ae4c7ad41457f15a24d15518e78a1f9207');
//c = commerce.products.list();
//'pk...' <- this is the API key that we have got from their site.
//commerce.products.list().then((productt) => console.log(productt.data))
const fetch = async () =>{

    const response = await commerce.products.list();
    //console.log("resss",response)
    setstate(response.data);
};

console.log("c");
//commerce.products.data.list().then((productt) => console.log(productt));

*/
function App() {
  
/*  NOT RELATED 
const [state, setstate] = useState([]);
  console.log("ss",state);
    const fetch = async () =>{

      const response = await commerce.products.list();
      //console.log("resss",response)
      setstate(response.data);
  };
  
  useEffect( () =>{
    fetch();
  },[]);

  //console.log(state);
  */
const [state, dispatch] = useReducer(reducer, initialState);
console.log('App.js   state ->', state , ' dispatch ->',  dispatch)
  useEffect(() => {
    // will only run once when the app component loads...
    console.log('UseEffect executes',auth)

    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS (in App.js)>>> ", authUser);

      if (authUser) {
        // the user just logged in / the user was logged in
        console.log('inside if considrion  of authUser')
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      }

      else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <Router>
      <div className="App">
        
        <Switch>
          <Route path="/checkout">
            <Header/>
            <Checkout/>
          </Route>

          <Route path="/login">
            <Login/>
          </Route>

          <Route exact path="/">
            <Header />
            <Home />
          </Route>
          
        </Switch>
      </div>
    </Router>
    
  );
}

export default App;
