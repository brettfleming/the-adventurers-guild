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
  console.log(apiData);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
        <>
        <Form></Form>
        </>
    )
  }
}
export default CreateCharacter;