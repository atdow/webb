import * as React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Layouts from "src/layouts/index";
import './styles/base.less'


class App extends React.PureComponent {
  public render() {
    return (
      <Router>
        <Layouts />
      </Router>
    );
  }
}

export default App;