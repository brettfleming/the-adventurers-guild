import React, { useState } from 'react';
import { Modal, Tab, Button, CardGroup, Container, Card, Alert, Form } from 'react-bootstrap';
import ProfileForm from '../components/ProfileForm';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown'

const UserProfile = () => {



return (
  <>
    <div>
      <h2>Characters</h2>
        <div>
          <div>
            <h3>Name</h3>
          </div>
          <div>
            <p>class</p>
            <p>Race</p>
            <p>level</p>
          </div>
          <div>
            <p>stats</p>
          </div>
        </div>
    </div>
    <div>
      <h2>Friends</h2>
      <ul>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
    <div>
      <h2>Campaigns</h2>
    </div>
  <Button to='/create'>Create</Button>
  </>

);
 
}

export default UserProfile;