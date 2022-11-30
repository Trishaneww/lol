import React from 'react';
import Form from 'react-bootstrap/Form';

export default function Contact() {
  return (
        <Form className='form'>
          <h1>Take A Coffee With Me</h1>
            <Form.Group  controlId="exampleForm.ControlInput1">
            <Form.Label></Form.Label>
            <Form.Control className='textbox' type="name" placeholder="name" />
          </Form.Group>
          <Form.Group  controlId="exampleForm.ControlInput1">
            <Form.Label></Form.Label>
            <Form.Control className='textbox' type="email" placeholder="name@example.com" />
          </Form.Group>
          <Form.Group  controlId="exampleForm.ControlTextarea1">
            <Form.Label></Form.Label>
            <Form.Control as="textarea" rows={6} />
          </Form.Group>
          <button className='form-btn'>Send</button>
        </Form>
      );
};
