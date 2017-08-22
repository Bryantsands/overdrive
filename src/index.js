import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './Home';
import Form from './Form';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom'

ReactDOM.render(<Router>
<div>
<ul>
  <li><Link to="/">Home</Link></li>
  <li><Link to="/form">Add/Edit</Link></li>
</ul>
<hr />

<Route path="/" component = {Home} />
<Route path="/form" component = {Form} />


</div>
</Router>

, document.getElementById('root'));
registerServiceWorker();
