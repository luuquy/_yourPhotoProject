import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./Photo.css";

function Photo(props) {
  const post = props.post;
  return (
    <figure className="figure">
      <Link to={`/single/${post.id}`}>
        {" "}
        <img className="photo" src={post.imageLink} alt={post.description} />
      </Link>
      <figcaption>
        {" "}
        <p className="status">
          {" "}
          <span> Status: </span> "{post.description}"{" "}
        </p>{" "}
      </figcaption>
      <div className="button-container">
        <button
          className="button-container-remove"
          onClick={() => {
            props.startRemovingPost(props.index, post.id);
            props.history.push("/");
          }}
        >
          {" "}
          Remove{" "}
        </button>
        <Link className="button btn-comment" to={`/single/${post.id}`}>
          <div className="comment-count">
            <div className="speech-bubble">
              {" "}
              <i className="fa fa-comments" aria-hidden="true"></i>
            </div>
            <div className="count-cmt">
              {" "}
              {props.comments[post.id] ? props.comments[post.id].length : 0}
            </div>
          </div>
        </Link>
      </div>
    </figure>
  );
}
Photo.propTypes = {
  post: PropTypes.object.isRequired,
};
export default Photo;
