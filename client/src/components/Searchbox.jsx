import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Searchbox = () => {
  const navigation = useNavigate();
  const [keyword, setKeyword] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    if (keyword.trim()) {
      navigation(`/search/${keyword}`);
    } else {
      navigation("/");
    }
  };
  return (
    <Form className="d-flex mt-3" onSubmit={submitHandler}>
      <Form.Control
        type="search"
        placeholder="Search Products..."
        className="me-2"
        aria-label="Search"
        style={{ borderRadius: "7px" }}
        name="q"
        onChange={(e) => setKeyword(e.target.value)}
      />
      <Button
        type="submit"
        variant="outline-success"
        style={{ borderRadius: "5px" }}
      >
        Search
      </Button>
    </Form>

    // <Form onSubmit={submitHandler} inline>
    //   <Form.Control
    //     type="text"
    //     name="q"
    //     onChange={(e) => setKeyword(e.target.value)}
    //     placeholder="Search Products..."
    //     className="mr-sm-2 ml-sm-5"
    //   ></Form.Control>
    //   <Button type="submit" variant="outline-success" className="p-2">
    //     Search
    //   </Button>
    // </Form>
  );
};

export default Searchbox;
