import React, { useEffect, useState } from 'react';
import styles from './App.module.scss';

function App() {
  const [firstName, setFirstName] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [lastName, setLastName] = useState('');
  const baseUrl = 'http://localhost:4000';

  return (
    <form className={styles.header}>
      <h1>😎 be my guest, be my guest 😎</h1>
      <label htmlFor="firstName">First name</label>
      <input
        id="firstName"
        placeholder="First Name"
        value={firstName}
        onChange={(event) => setFirstName(event.target.value)}
        disabled={isLoading ? 'disabled' : ''}
      />
      <label htmlFor="lastName">Last name</label>
      <input
        id="lastName"
        placeholder="Last Name"
        value={lastName}
        onChange={(event) => setLastName(event.target.value)}
        disabled={isLoading ? 'disabled' : ''}
      />
      <button>Add guest</button>
    </form>
  );
}

export default App;
