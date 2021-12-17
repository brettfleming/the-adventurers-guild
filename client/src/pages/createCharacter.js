import React, { useState, useEffect } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import axios from 'axios';

import Auth from '../utils/auth';


const CreateCharacter = () => {
    const [characterFormData, setCharacterFormData] = useState({ name: '', race: '', class: '' })
    const [validated] = useState(false);
    const [showAlert, setShowAlert] = useState(false);
    let api = "https://www.dnd5eapi.co/api/"
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [classNameData, setClassNameData] = useState([])
    const [raceNameData, setRaceNameData] = useState([])
    const [apiData, setApiData] = useState([])
    useEffect(() => {
        fetch("https://www.dnd5eapi.co/api/classes")
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setClassNameData(result.results);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
        fetch("https://www.dnd5eapi.co/api/races")
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setRaceNameData(result.results);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, [])
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setCharacterFormData({ ...characterFormData, [name]: value });
    };
    const handleFormSubmit = async (event) => {
        event.preventDefault();

        // check if form has everything (as per react-bootstrap docs)
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        try {
            const response = ''

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

        setCharacterFormData({
            name: '',
            race: ''
        })
    };
    console.log(raceNameData);

    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
        return (
            <>
                <Form noValidate validated={validated} onSubmit={handleFormSubmit}>
                    <Alert dismissible onClose={() => setShowAlert(false)} show={showAlert} variant='danger'>
                        Something went wrong!
                    </Alert>
                    <Form.Group>
                        <Form.Label htmlFor='name'>Name</Form.Label>
                        <Form.Control
                            type='text'
                            placeholder='Name'
                            name='name'
                            onChange={handleInputChange}
                            value={characterFormData.name}
                            required
                        />
                        <Form.Control.Feedback type='invalid'>Name is required!</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label htmlFor='class'>Class</Form.Label>
                        <Form.Control
                            type='text'
                            placeholder='class'
                            name='class'
                            onChange={handleInputChange}
                            value={characterFormData.class}
                            required
                        />
                        <Form.Control.Feedback type='invalid'>class is required!</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group controlId="formGridState">
                        <Form.Label>Class</Form.Label>
                        <Form.Control as="select"
                            placeholder="class"
                            onChange={handleInputChange}
                            value={characterFormData.class}
                            required>
                            {classNameData.map((className) => {
                                return (
                                    <option key={className.index}>{className.name}</option>
                                )
                            })}
                        </Form.Control>
                    </Form.Group>

                </Form>
            </>
        )
    }
}
export default CreateCharacter;