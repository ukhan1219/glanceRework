"use client";

import React, { useEffect, useState, useContext } from 'react';
import { api } from '~/trpc/react';
import { TransactionsContext } from './TransactionsContext';

const AnalyticsComponent: React.FC = () => {
  const { transactions } = useContext(TransactionsContext)!;
  const [analytics, setAnalytics] = useState<string>('');

  const getAnalytics = api.openai.getAnalytics.useMutation();

  useEffect(() => {
    if (transactions.length === 0) return;

    const transactionSummary = transactions
      .map(transaction => `${transaction.merchantName}: $${transaction.amount} on ${transaction.date}, categorized as ${transaction.category}`)
      .join(", ");

    getAnalytics.mutate(
      { transactions: transactionSummary },
      {
        onSuccess: (data) => {
          if (data?.content) {
            setAnalytics(data.content);
          }
        },
      }
    );
  }, [transactions]);

  return (
    <div className='p-4'>
      {getAnalytics.isLoading ? (
        <p>Loading analytics...</p>
      ) : getAnalytics.isError ? (
        <p>Error fetching analytics: {getAnalytics.error.message}</p>
      ) : (
        <div>
          <p>{analytics}</p>
        </div>
      )}
    </div>
  );
};

export default AnalyticsComponent;

