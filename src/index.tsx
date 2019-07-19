import "primeicons/primeicons.css";
import "primereact/resources/primereact.css";
import "primereact/resources/themes/nova-light/theme.css";
import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { Route, Switch } from "react-router-dom";
import { ConnectedRouter as Router } from "react-router-redux";
import "./styles/index.scss";
import { ROOT_URL } from "./ts/common/urls/urls";
import { DashboardPage } from "./ts/pages/dashboard/dashboard-component";
import { browserHistory, store } from "./ts/store/store";

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Switch>
        <Route exact path={ROOT_URL.urlTemplate} component={DashboardPage} />
        {/*         <Route
          render={props => (
            <DefaultTemplate
              {...props}
              title="404"
              subTitle="The page you requested was not found"
            />
          )}
        /> */}
      </Switch>
    </Router>
  </Provider>,
  document.getElementById("root")
);
