import React from "react";
import { Card, Button } from "react-bootstrap";
import { updateUserProfile } from "../redux/actions/userActions";
import { useDispatch, useSelector } from "react-redux";

const MovieLiked = ({ movie }) => {
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const removeMovie = (id) => {
    const updatedLikes = userInfo.likes.filter((like) => like !== id);

    dispatch(
      updateUserProfile({
        id: userInfo._id,
        likes: updatedLikes,
      })
    );
  };

  return (
    <Card className="my-1 p-1 rounded">
      <Card.Img src={movie.image} variant="top" />
      <Button
        variant="danger"
        className="sm mt-1"
        onClick={() => removeMovie(movie._id)}
      >
        Remove
      </Button>
    </Card>
  );
};

export default MovieLiked;
