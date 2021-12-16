import React, { useState, useEffect } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';



const CreateCharacter = () => {
    const [validated] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
   let api ="https://www.dnd5eapi.co/api/"
   const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [ apiData, setApiData] = useState([])
  useEffect(() => {
    fetch("https://www.dnd5eapi.co/api/")
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setApiData(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    // check if form has everything (as per react-bootstrap docs)
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    try {
      const response = await loginUser(userFormData);

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
  console.log(apiData);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
        <>
        <Form noValidate validated={validated} onSubmit={handleFormSubmit}></Form>
        </>
    )
  }
}
export default CreateCharacter;