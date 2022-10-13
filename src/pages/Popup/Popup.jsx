import React, { useEffect } from 'react';
import logo from '../../assets/img/logo.svg';
import Greetings from '../../containers/Greetings/Greetings';
import './Popup.css';

const Popup = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/pages/Popup/Popup.jsx</code> and save to reload.
        </p>
        <button
          onClick={() => {
            fetch('http://localhost:3000/wallet/newMnemonic', {
              method: 'POST',
            })
              .then((res) => {
                return res.json();
              })
              .then(({ mnemonic }) => {
                return fetch('http://localhost:3000/wallet/newWallet', {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json',
                  },
                  body: JSON.stringify({
                    mnemonic,
                    password: '12341234',
                  }),
                });
              })
              .then((res) => {
                return res.json();
              })
              .then((response) => {
                console.log(response);
              });
          }}
        >
          값 받아오기12312
        </button>
      </header>
    </div>
  );
};

export default Popup;
