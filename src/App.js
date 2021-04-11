import { Route, BrowserRouter as Router } from 'react-router-dom'
import { CreatePost } from './views/CreatePost';
import { Home } from "./views/Home";
import './App.css'

function App() {

  return (
    <div className="App">
      <Router>
        <Route path="/home" component={Home} />
        <Route path="/create-post" component={CreatePost} />
      </Router>
    </div>    
  );
}

export default App;
