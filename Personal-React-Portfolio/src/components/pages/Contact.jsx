import React from 'react'
import { useState } from 'react';
import { validateEmail } from '../../utils/helpers';
import '../../App'

export default function Contact() {  
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleInputChange = (e) => {
        const {target} = e;
        const inputType = target.name;
        const inputValue = target.value;

        if (inputType === 'email') {
            setEmail(inputValue);
        } else if (inputType === 'name') {
            setName(inputValue);        
        } else if (inputType === 'description') {
            setDescription(inputValue)
        }
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();

        if (!validateEmail(email)) {
            setErrorMessage('This is not a valid email');
            return
        }
        alert(`Thank you ${name}, I will be in contact soon!`);
        setEmail('');
        setName('');
        setDescription('');
    };

    return (
        <div className="container text-center">
      <h1>Please contact me here</h1>
      <form className="form" onSubmit={handleFormSubmit}>
        <input
          value={name}
          name="name"
          onChange={handleInputChange}
          type="text"
          placeholder="Name"
        />
        <input
          value={email}
          name="email"
          onChange={handleInputChange}
          type="email"
          placeholder="Email"
        />
        <input
          value={description}
          name="description"
          onChange={handleInputChange}
          type="text"
          placeholder="Description" 
        />
        <button type="submit">
          Submit
        </button>
      </form>
      {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
    </div>
    )
}
