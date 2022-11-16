import React, { useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { getUsersLikes } from "../redux/actions/userActions";
import Loader from "../components/Loader";
import findMatches from "../utils/findMatches";

const MatchesPage = () => {
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const usersLikesList = useSelector((state) => state.usersLikesList);
  const { loading, error, userslikes } = usersLikesList;

  const theId = userInfo._id;
  const theGender = userInfo.yourGender;

  useEffect(() => {
    dispatch(getUsersLikes(theId, theGender));
  }, [dispatch, theId, theGender]);

  const result = findMatches(userInfo.likes, userslikes);

  const ResultDiv = ({ name, amount }) => {
    let classes = ``
    if(amount > 4){
      classes = '#28a745'
    } else {
      classes = '#e83283'
    }
    return (
      <div className="matches-results" style={{backgroundColor: classes}}>
        You have {amount/5 * 100}% match with {name}
      </div>
    );
  };

  return (
    <Row className="justify-content-md-center">
      <Col xs={12} md={6}>
        {loading && <Loader />}
        {result &&
          result.map((match) => {
            return <ResultDiv name={match.name} amount={match.amt} />;
          })}
      </Col>
    </Row>
  );
};

export default MatchesPage;
