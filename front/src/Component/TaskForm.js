import React, { useState } from 'react'
import {Form, Button, Col, Row} from 'react-bootstrap';
import { postTask } from '../helper/axiosHelper';

export const TaskForm = () => {

  const [form, setForm] = useState({})
  
  const handleOnChange = (e) =>{
    const {name, value} = e.target;
    console.log(name, value)

    setForm({
      ...form,
      [name]: value
    })
  }

  const handleOnSubmit = async (e) =>{
    e.preventDefault(); //protect data during page refresh
    console.log(form)

    //send data to api
    const respon = await postTask(form);
    console.log(respon)
  }

  return (
    <div>
    <Form >
      <Row className="mb-3">
        <Form.Group as={Col} md="4" onSubmit={handleOnSubmit}>
          <Form.Control
            required
            type="text"
            placeholder="Task Name"
            name="task"
            onChange={handleOnChange}
          />
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustom02">
          <Form.Control
            required
            type="number"
            placeholder="Times repeat"
            name="Repeat"
            onChange={handleOnChange}
          />
        </Form.Group>
      <Button type="submit">Create List</Button>
      </Row>
    </Form>

    </div>
  )
}
