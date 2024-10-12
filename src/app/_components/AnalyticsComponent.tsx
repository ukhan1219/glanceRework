// src/app/_components/AnalyticsComponent.tsx
"use client";

import React, { useEffect, useState } from 'react';
import { api } from '~/trpc/react'; // tRPC client hooks
import { Transaction } from './types';

interface AnalyticsComponentProps {
  transactions: Transaction[];
}

const AnalyticsComponent: React.FC<AnalyticsComponentProps> = ({ transactions }) => {
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
  // Remove getAnalytics from dependencies
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
