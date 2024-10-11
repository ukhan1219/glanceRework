"use client";

import React, { useState } from 'react';
import PlaidLink from './PlaidLink'; // Import your PlaidLink component
import { Transaction } from './types';

const PlaidButton = () => {
  const [balance, setBalance] = useState<string | null>(null);
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [readyToOpen, setReadyToOpen] = useState<boolean>(false);
  const [openPlaid, setOpenPlaid] = useState<() => void>(() => {});

  return (
    <div className="flex flex-col items-center">
      {/* Display button */}
      <button
        onClick={() => {
          if (readyToOpen && openPlaid) {
            openPlaid();
          }
        }}
        disabled={!readyToOpen}
        className={`px-4 py-2 text-white bg-blue-600 rounded ${
          !readyToOpen ? 'opacity-50' : ''
        }`}
      >
        Connect Bank
      </button>

      {/* Display balance and transactions once fetched */}
      {balance && <p>Your balance is: ${balance}</p>}
      {transactions.length > 0 && (
        <div>
          <h3>Transactions:</h3>
          <ul>
            {transactions.map((txn, index) => (
              <li key={index}>
                {txn.date} - {txn.merchantName}: ${txn.amount}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Plaid Link (runs in the background and prepares the link token) */}
      <PlaidLink
        onOpen={(open, ready) => {
          setOpenPlaid(() => open);
          setReadyToOpen(ready);
        }}
        onSuccess={(publicToken) => {
          console.log("Public Token Received:", publicToken);
        }}
        setBalance={setBalance}
        setTransactions={setTransactions}
      />
    </div>
  );
};

export default PlaidButton;
