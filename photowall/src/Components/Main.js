import React, { Component } from "react";
import Title from "./Title";
import PhotoWall from "./PhotoWall";
import Photo from "./Photo";
import PropTypes from "prop-types";
import AddPhoto from "./AddPhoto";
import { Route } from "react-router-dom";

class Main extends Component {
  constructor() {
    super();
    this.state = {
      posts: [
        {
          id: "0",
          description: "Gray Elephant",
          imageLink:
            "https://images.unsplash.com/photo-1544211412-2a32426e7fd5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        },
        {
          id: "1",
          description: "Blue ??",
          imageLink:
            "https://images.unsplash.com/photo-1445820200644-69f87d946277?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        },
        {
          id: "2",
          description: "Orange Parrot!",
          imageLink:
            "https://images.unsplash.com/photo-1555169062-013468b47731?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        },
        {
          id: "3",
          description: "Tiger!",
          imageLink:
            "https://images.unsplash.com/photo-1488793207478-ff0892419e30?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        },
      ],
    };
    this.removePhoto = this.removePhoto.bind(this);
  }

  removePhoto(postRemoved) {
    console.log(postRemoved.description);
    this.setState((state) => ({
      posts: state.posts.filter((post) => post !== postRemoved),
    }));
  }

  componentDidMount() {}
  componentDidUpdate(preProps, prevState) {
    console.log(prevState.posts);
    console.log(this.state);
  }

  render() {
    return (
      <div>
        <Route
          exact
          path="/"
          render={() => (
            <div>
              <Title title={"YourPhotos"} />
              <PhotoWall
                posts={this.state.posts}
                onRemovePhoto={this.removePhoto}
                onNavigate={this.navigate}
              />
            </div>
          )}
        />
        <Route path="/AddPhoto" component={AddPhoto} />
      </div>
    );
  }
}

Photo.propTypes = {
  post: PropTypes.object.isRequired,
  onRemovePhoto: PropTypes.func.isRequired,
};

export default Main;
