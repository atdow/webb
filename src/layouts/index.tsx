import Exception from "pages/exception/index";
import * as React from "react";
import {
  Redirect,
  Route,
  RouteComponentProps,
  Switch,
  withRouter
} from "react-router-dom";
import Header from "./header";
import Home from 'src/pages/home';
import "src/layouts/style";

interface IProps extends RouteComponentProps { }
class Layouts extends React.PureComponent<IProps> {
  public render() {
    return (
      <div className="layout-wrapper">
        <Header {...this.props} />
        <Switch>
          <Route path="/" component={Home} />
          <Route
            render={() => (
              <Exception
                title="404"
                desc="抱歉，你访问的页面不存在"
                showAction={true}
              />
            )}
          />
        </Switch>
      </div>
    );
  }
}

export default withRouter(Layouts);
