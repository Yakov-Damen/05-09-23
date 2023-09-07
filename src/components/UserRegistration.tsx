import React from "react";
import { Button, Form } from "react-bootstrap";
import { FieldValues, useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";

export default function UserRegistration() {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();

  const updateFetch = async (body: FieldValues) => {
    const res = await fetch(`http://localhost:3000/api/auth/register`, {
      method: "POST",
      headers: {
        authorization: "test-token",
        "content-type": "application/json",
      },
      body: JSON.stringify(body),
    });
    if (res.ok) navigate(`/`);
  };

  return (
    <>
      <Link to={"/"}>
        <button>Home</button>
      </Link>
      <form onSubmit={handleSubmit((data) => updateFetch(data))}>
        <h2>Registeration</h2>
        <div>
          <label htmlFor="email">Email</label>
          <input type="text" {...register("email")} />
          <label htmlFor="password">Password</label>
          <input type="password" {...register("password")} />
        </div>
        <button type="submit">Submit</button>
      </form>
      <Form onSubmit={handleSubmit((data) => updateFetch(data))}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      ;
    </>
  );
}
