import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col, Card } from "react-bootstrap";
import Movie from "../components/Movie";
import Message from "../components/Message";
import Loader from "../components/Loader";
import FaveAlertModal from "../components/Modal";
import { listMovies } from "../redux/actions/movieActions";

const HomePage = () => {
  const dispatch = useDispatch();
  const movieList = useSelector((state) => state.movieList);
  const { loading, error, movies } = movieList;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    dispatch(listMovies());
  }, [dispatch]);

  return (
    <>
      <h1>Our Movie Selection</h1>

      {userInfo && userInfo.likes.length === 5 && <FaveAlertModal />}

      {userInfo && (
        <Row className="justify-content-md-center">
          <Col xs={12} md={6}>
            <Card className="bg-primary mb-3 p-2">
              <strong className="likesHeading">
                Like 5 movies and find your match! You have{" "}
                <span className="badge bg-secondary rounded-pill">
                  <strong>{userInfo.likes.length}</strong>
                </span>{" "}
                likes
              </strong>
            </Card>
          </Col>
        </Row>
      )}

      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <Row>
          {movies.map((movie) => (
            <Col key={movie._id} sm={12} md={6} lg={4} xl={3}>
              <Movie movie={movie} />
            </Col>
          ))}
        </Row>
      )}
    </>
  );
};

export default HomePage;
