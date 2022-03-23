// import logo from './logo.svg';
// import './App.css';

import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import Menu from "./components/Menu";

function App() {
  return  (
     <body>
       <h1>Hello World</h1>
      <Menu/>
      <Button variant="primary">Primary</Button>
     </body>
  );
}

export default App;
