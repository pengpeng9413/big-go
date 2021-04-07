
import * as React from 'react';
import { hot } from "react-hot-loader/root";
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";
import {Layout} from './pages/base-layout'

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
          <Layout/>
         </Route>
       </Switch>
      </BrowserRouter>
    );
  }
}

export default hot(App);
