
import * as React from 'react';
// import { hot } from "react-hot-loader/root";
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";
import {Layout} from './pages/base-layout'
import Demo from './pages/example'
import Demo1 from './pages/example1'
import Demo2 from './pages/example2'
import Demo3 from './pages/example3'
import Demo4 from './pages/example4'

interface Props {
   name:string
}

class App extends React.Component<Props> {

  render() {
    const { name } = this.props;
    return (
      <BrowserRouter>
       <Switch>
         <Route path="/">
           {/* <Demo1/> */}
           <Demo4/>
           {/* <Layout/> */}
         </Route>
       </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
