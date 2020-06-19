import React, { useEffect } from "react";
import Photo from "../Photo/Photo";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Home(props) {
  return (
    <div>
      <div className="photoGrid row">
        {props.posts
          .sort(function (x, y) {
            return y.id - x.id;
          })
          .map((post, index) => (
            <Photo key={index} post={post} {...props} index={index} />
          ))}
      </div>
    </div>
  );
}

Home.prototype = {
  posts: PropTypes.array.isRequired,
  // onRemovePhoto: PropTypes.func.isRequired,
};

export default Home;
