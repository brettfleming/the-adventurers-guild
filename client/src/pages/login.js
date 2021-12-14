import React, { useState, useEffect } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';

function loginForm() {
    const [LoginFormData, setUserFormData] = useState({ email: '', password: '' });
    const [SignUpFormData, setUserFormData] = useState({ email: '', password: '', username: '', name: '' });
    const [validated] = useState(false);
    const [showAlert, setShowAlert] = useState(false);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setUserFormData({ ...userFormData, [name]: value });
    };


    return (
        <div>
            <div>
                <div>
                    <h2>Login</h2>
                    <Form noValidate validated={validated} onSubmit={handleLoginFormSubmit}>
                        <Alert dismissible onClose={() => setShowAlert(false)} show={showAlert} variant='danger'>
                            Something went wrong with your login credentials!
                        </Alert>
                        <Form.Group>
                            <Form.Label htmlFor='email'>Email</Form.Label>
                            <Form.Control
                                type='text'
                                placeholder='Your email'
                                name='email'
                                onChange={handleInputChange}
                                value={LoginFormData.email}
                                required
                            />
                            <Form.Control.Feedback type='invalid'>Email is required!</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label htmlFor='password'>Password</Form.Label>
                            <Form.Control
                                type='password'
                                placeholder='Your password'
                                name='password'
                                onChange={handleInputChange}
                                value={LoginFormData.password}
                                required
                            />
                            <Form.Control.Feedback type='invalid'>Password is required!</Form.Control.Feedback>
                        </Form.Group>
                        <Button
                            disabled={!(LoginFormData.email && LoginFormData.password)}
                            type='submit'
                            variant='success'
                            id="t-login-modal-btn">
                            Submit
                        </Button>
                    </Form>

                </div>
                <div>
                    <h2>Sign up</h2>

                </div>
            </div>
        </div>
    )
}

export default loginForm;