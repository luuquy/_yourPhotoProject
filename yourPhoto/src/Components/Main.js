import React, { Component } from "react";
import Home from "./Home/Home";
import AddPhoto from "./AddPhoto/AddPhoto";
import { Route, Link } from "react-router-dom";
import Single from "./Single/Single";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import ReactWOW from "react-wow";

class Main extends Component {
  state = { loading: true };
  componentDidMount() {
    this.props.startLoadingPost().then(() => {
      this.setState({ loading: false });
    });
    this.props.startLoadingComments();
  }
  render() {
    return (
      <div className="app">
        <Header></Header>
        <div className="container">
          <Route
            exact
            path="/"
            render={() => (
              <div>
                <Home {...this.props} />
              </div>
            )}
          />
          <Route
            path="/AddPhoto"
            render={({ history }) => (
              <AddPhoto {...this.props} onHistory={history} />
            )}
          />
          <Route
            exact
            path="/single/:id"
            render={(params) => (
              <Single
                loading={this.state.loading}
                {...this.props}
                {...params}
              />
            )}
          />
        </div>
        <Footer />
      </div>
    );
  }
}
export default Main;
