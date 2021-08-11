import { BrowserRouter as Router, Route, Switch } from 'react-router-dom' 
import Header from './containers/Header';
import ProductListing from './containers/ProductListing';
import ProductDetail from './ProductDetail'
function App() {
  return (
    <div>
      <Router>
        <Header/>
          <Switch>
          <Route path="/" exact component={ProductListing}/>
          <Route path="/product/:productId" exact component={ProductDetail} />
          </Switch>
      </Router>
    </div>
  );
}

export default App;
