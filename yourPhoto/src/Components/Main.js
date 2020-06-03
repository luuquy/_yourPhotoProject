import React, { Component } from "react";
import Title from "./Title";
import PhotoWall from "./PhotoWall";
import Photo from "./Photo";
import PropTypes from "prop-types";
import AddPhoto from "./AddPhoto";
import { Route, Link } from "react-router-dom";
import { connect } from "react-redux";
import { removePost } from "../redux/actions";
class Main extends Component {
  constructor() {
    super();
  }

  render() {
    console.log(this.props);

    return (
      <div>
        <h1>
          <Link to="/">YourPhoto</Link>
        </h1>
        <Route
          exact
          path="/"
          render={() => (
            <div>
              <PhotoWall {...this.props} />
            </div>
          )}
        />
        <Route
          path="/AddPhoto"
          render={({ history }) => (
            <AddPhoto {...this.props} onHistory={history} />
          )}
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    posts: state,
  };
}

Photo.propTypes = {
  post: PropTypes.object.isRequired,
  // onRemovePhoto: PropTypes.func.isRequired,
};

export default Main;
