import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import { loginUser, createUser } from '../utils/API';
import Auth from '../utils/auth';

const LoginForm = () => {
    const [LoginFormData, setUserFormData] = useState({ email: '', password: '' });
    const [SignUpFormData, setSignUpFormData] = useState({ email: '', password: '', username: '', name: '' });
    const [validated] = useState(false);
    const [showAlert, setShowAlert] = useState(false);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setUserFormData({ ...LoginFormData, [name]: value });
    };
    const handleInputChange2 = (event) => {
        const { name, value } = event.target;
        setSignUpFormData({ ...SignUpFormData, [name]: value });
    };

    const handleLoginFormSubmit = async (event) => {
        event.preventDefault();

        // check if form has everything (as per react-bootstrap docs)
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        try {
            const response = await loginUser(LoginFormData);

            if (!response.ok) {
                throw new Error('something went wrong!');
            }

            const { token, user } = await response.json();
            console.log(user);
            Auth.login(token);
        } catch (err) {
            console.error(err);
            setShowAlert(true);
        }

        setUserFormData({
            username: '',
            email: '',
            password: '',
        });
    };

    const handleSignUpFormSubmit = async (event) => {
        event.preventDefault();
    
        // check if form has everything (as per react-bootstrap docs)
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
    
        try {
          const response = await createUser(SignUpFormData);
    
          if (!response.ok) {
            throw new Error('something went wrong!');
          }
    
          const { token, user } = await response.json();
          console.log(user);
          Auth.login(token);
        } catch (err) {
          console.error(err);
          setShowAlert(true);
        }
    
        setSignUpFormData({
          username: '',
          email: '',
          password: '',
          name: '',
        });
      };


    return (
        <>
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
                        <Form noValidate validated={validated} onSubmit={handleSignUpFormSubmit}>
                            <Alert dismissible onClose={() => setShowAlert(false)} show={showAlert} variant='danger'>
                                Something went wrong with your login credentials!
                            </Alert>
                            <Form.Group>
                                <Form.Label htmlFor='name'>Name</Form.Label>
                                <Form.Control
                                    type='text'
                                    placeholder='Your name'
                                    name='name'
                                    onChange={handleInputChange2}
                                    value={SignUpFormData.name}
                                    required
                                />
                                <Form.Control.Feedback type='invalid'>Name is required!</Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label htmlFor='username'>Username</Form.Label>
                                <Form.Control
                                    type='text'
                                    placeholder='Your username'
                                    name='username'
                                    onChange={handleInputChange2}
                                    value={SignUpFormData.username}
                                    required
                                />
                                <Form.Control.Feedback type='invalid'>Username is required!</Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label htmlFor='email'>Email</Form.Label>
                                <Form.Control
                                    type='text'
                                    placeholder='Your email'
                                    name='email'
                                    onChange={handleInputChange2}
                                    value={SignUpFormData.email}
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
                                    onChange={handleInputChange2}
                                    value={SignUpFormData.password}
                                    required
                                />
                                <Form.Control.Feedback type='invalid'>Password is required!</Form.Control.Feedback>
                            </Form.Group>
                            <Button
                                disabled={!(SignUpFormData.email && SignUpFormData.password && SignUpFormData.name && SignUpFormData.username)}
                                type='submit'
                                variant='success'
                                id="t-login-modal-btn">
                                Submit
                            </Button>
                        </Form>

                    </div>
                </div>
            </div>
        </>
    );
};

export default LoginForm;