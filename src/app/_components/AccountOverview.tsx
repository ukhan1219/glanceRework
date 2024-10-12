// AccountOverview.tsx
"use client";

import React, { useState, useContext } from "react";
import PlaidLink from "./PlaidLink";
import { TransactionsContext } from "./TransactionsContext";

export default function AccountOverview() {
  const [openPlaidLink, setOpenPlaidLink] = useState<(() => void) | null>(null);
  const [isPlaidReady, setIsPlaidReady] = useState(false);
  const [balance, setBalance] = useState<string | null>(null);
  const { transactions, setTransactions } = useContext(TransactionsContext)!;
  const [publicToken, setPublicToken] = useState<string | null>(null);

  const handleConnectBank = () => {
    if (openPlaidLink && isPlaidReady) {
      openPlaidLink();
    } else {
      console.log("Plaid link is not ready");
    }
  };

  const handlePlaidSuccess = (token: string) => {
    setPublicToken(token);
  };

  return (
    <div className="col-span-2 row-span-1 relative rounded-xl bg-foreground p-5">
      {/* Balance Display */}
      <div className="mb-5">
        <p className="text-4xl font-bold">
          Balance: <span className="text-green-400">${balance || "N/A"}</span>
        </p>
      </div>

      {/* Transactions List */}
      <div className="mb-5">
        <h2 className="text-2xl font-bold">Recent Transactions</h2>
        <ul>
          {transactions.map((transaction, index) => (
            <li key={index} className="mt-2">
              {transaction.merchantName}:{" "}
              <span className="text-red-500">${transaction.amount}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Connect Bank Button */}
      {publicToken === null && (
        <button
          className="bg-blue-600 text-white px-4 py-2 rounded-lg"
          onClick={handleConnectBank}
        >
          Connect a Bank with Plaid
        </button>
      )}

      {/* PlaidLink Component */}
      <PlaidLink
        onOpen={(open, ready) => {
          setOpenPlaidLink(() => open);
          setIsPlaidReady(ready);
        }}
        onSuccess={handlePlaidSuccess}
        setBalance={setBalance}
        setTransactions={setTransactions} // Use context's setTransactions
      />
    </div>
  );
}
