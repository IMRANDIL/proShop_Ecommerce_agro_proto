import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Message from "../components/Message";
import Loader from "../components/Loader";
import { useDispatch, useSelector } from "react-redux";
import { Form, Button } from "react-bootstrap";
import FormContainer from "../components/FormContainer";
import { userDetails, userUpdateById } from "../actions/userActions";
import { USER_UPDATE_RESET } from "../constants/userConstants";

const UserEditScreen = () => {
  const { id } = useParams();

  const [email, setEmail] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);

  const [name, setName] = useState("");

  const navigation = useNavigate();
  const dispatch = useDispatch();
  const { loading, error, user } = useSelector((state) => state.userDetails);
  const {
    loading: loadingUpdate,
    error: updateError,
    success: updateSuccess,
  } = useSelector((state) => state.userUpdateById);

  useEffect(() => {
    if (updateSuccess) {
      dispatch({ type: USER_UPDATE_RESET });
      navigation("/admin/userlist");
    } else {
      if (!user.name || user._id !== id) {
        dispatch(userDetails(id));
      } else {
        setEmail(user.email);
        setName(user.name);
        setIsAdmin(user.isAdmin);
      }
    }
  }, [dispatch, user, id, navigation, updateSuccess]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      userUpdateById({
        _id: id,
        name,
        email,
        isAdmin,
      })
    );
  };

  return (
    <>
      <Link to="/admin/userlist" className="btn btn-light my-3">
        Go Back
      </Link>

      <FormContainer>
        <h1>Edit User</h1>

        {loadingUpdate && <Loader />}
        {updateError && <Message variant="danger">{updateError}</Message>}

        {loading ? (
          <Loader />
        ) : error ? (
          <Message variant="danger">{error}</Message>
        ) : (
          <Form onSubmit={submitHandler}>
            <Form.Group controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="email">
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="isadmin" style={{ margin: "17px" }}>
              <Form.Check
                type="checkbox"
                label="Is Admin"
                checked={isAdmin}
                onChange={(e) => setIsAdmin(e.target.checked)}
              />
            </Form.Group>

            <Button
              type="submit"
              variant="primary"
              style={{ borderRadius: "5px" }}
              className="my-3"
            >
              Update
            </Button>
          </Form>
        )}
      </FormContainer>
    </>
  );
};

export default UserEditScreen;
