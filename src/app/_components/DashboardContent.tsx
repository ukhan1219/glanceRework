"use client";

import React, { useState } from 'react';
import AccountOverview from './AccountOverview';
import AnalyticsComponent from './AnalyticsComponent';
import { Transaction } from './types';

const DashboardContent: React.FC = () => {
    const [transactions, setTransactions] = useState<Transaction[]>([]);

    return (
        <div className='grid h-full w-full grid-cols-3 grid-rows-2 gap-2.5 p-5 xl:m-32 lg:m-16 md:m-8 sm:m-4'>

            {/* Grid Box 1 */}
            <div className='col-span-2 row-span-1 relative rounded-xl bg-foreground'>
                <div className='h-full hide-scrollbar overflow-auto rounded-xl'>
                    <AccountOverview setTransactions={setTransactions} />
                </div>
                <div className="absolute bottom-1 left-2">
                    <p className="text-lg font-bold">Account Overview</p>
                </div>
            </div>

            {/* Grid Box 2 */}
            <div className='col-span-1 row-span-1 relative rounded-xl bg-foreground'>
                <div className="absolute bottom-1 left-2">
                    <p className="text-lg fira-code-bold">GRID LABEL HERE</p>
                </div>
            </div>

            {/* Grid Box 3 */}
            <div className='col-span-3 row-span-1 relative rounded-xl bg-foreground'>
                <div className='h-full hide-scrollbar overflow-auto rounded-xl text-2xl'>
                    <AnalyticsComponent transactions={transactions} />
                </div>
                <div className="absolute bottom-1 left-2">
                    <p className="text-lg font-bold">Analytics</p>
                </div>
            </div>

            {/* Other grid boxes */}
        </div>
    );
};

export default DashboardContent;
