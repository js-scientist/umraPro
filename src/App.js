import React from "react";
import {   Route, Switch } from "react-router-dom";

import BlogOverview from "./views/BlogOverview";
import { DefaultLayout } from "./layouts";
import routes from "./routes";

import "bootstrap/dist/css/bootstrap.min.css";
import "./shards-dashboard/styles/shards-dashboards.1.1.0.min.css";

export default class App extends React.Component { 
  render() {
    return (
      <div>
        <Switch>
          <div>
            <Route
              key={-1}
              exact={true}
              path={"/dashboard"}
              component={props => {
                return (
                  <DefaultLayout {...props}>
                    <BlogOverview {...props} />
                  </DefaultLayout>
                );
              }}
            />
            {routes.map((route, index) => {
              console.log(this.props.match.path + route.path);
              return (
                <Route
                  key={index}
                  path={route.path}
                  component={props => {
                    return (
                      <route.layout {...props}>
                        <route.component {...props} />
                      </route.layout>
                    );
                  }}
                />
              );
            })}
          </div>
        </Switch>
      </div>
    );
  }
}
