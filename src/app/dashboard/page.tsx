// import React from 'react'
// import { getServerAuthSession } from '~/server/auth'
// import { redirect } from 'next/navigation'
// import AccountOverview from '../_components/AccountOverview';


// export default async function page() {
//   const session = await getServerAuthSession();

//   if (!session) {
//     return redirect('/login');
//   }

//   // const getAnalytics = api.openai.getAnalytics.useMutation();

//   return (
//     <div className='h-[calc(100vh-85px)] w-full flex items-center justify-center'>
//       <div className='grid h-full w-full grid-cols-3 grid-rows-2 gap-2.5 p-5 xl:m-32 lg:m-16 md:m-8 sm:m-4'>

//         {/* Grid Box 1 */}
//         <div className='col-span-2 row-span-1 relative rounded-xl bg-foreground'>
//           {/* Scrollable Content */}
//           {/* TODO ADD SOME SORT OF WAY TO KEEP BALANCE STUCK AT TOP, AND THEN HIDE STUFF BEHIND THE LABEL, AND SHOW ARROW TO SCROLL  */}
//           <div className='h-full hide-scrollbar overflow-auto rounded-xl'>
//             <AccountOverview />
//           </div>
//           {/* Label anchored to the bottom-left */}
//           <div className="absolute bottom-1 left-2">
//             <p className="text-lg font-bold">GRID LABEL HERE</p>
//           </div>
//         </div>

//         {/* Grid Box 2 */}
//         <div className='col-span-1 row-span-1 relative rounded-xl bg-foreground'>
//           <div className="absolute bottom-1 left-2">
//             <p className="text-lg fira-code-bold">GRID LABEL HERE</p>
//           </div>
//         </div>

//         {/* Grid Box 3 */}
//         <div className='col-span-3 row-span-1 relative rounded-xl bg-foreground'>
//           <div className='h-full hide-scrollbar overflow-auto rounded-xl'>
//             <p>ANALYSIS GOES HERE</p>
//           </div>
//           <div className="absolute bottom-1 left-2">
//             <p className="text-lg fira-code-bold">GRID LABEL HERE</p>
//           </div>
//         </div>

//         {/* Grid Box 4 */}
//         {/* <div className='col-span-2 row-span-1 relative rounded-xl bg-foreground'>
//           <div className="absolute bottom-1 left-2">
//             <p className="text-lg fira-code-bold">GRID LABEL HERE</p>
//           </div>
//         </div> */}
//       </div>
//     </div>
//   )
// }


// {/* 
// <p className='m-5'>
//   Welcome back, {session.user.name || 'User'}!
// </p>
// */}


// src/app/dashboard/page.tsx

import React from 'react';
import { getServerAuthSession } from '~/server/auth';
import { redirect } from 'next/navigation';
import AccountOverview from '../_components/AccountOverview';
import AnalyticsComponent from '../_components/AnalyticsComponent';
import { TransactionsProvider } from '../_components/TransactionsContext';

export default async function DashboardPage() {
  const session = await getServerAuthSession();

  if (!session) {
    return redirect('/login');
  }

  return (
    <div className='h-[calc(100vh-85px)] w-full flex items-center justify-center'>
      <TransactionsProvider>
        <div className='grid h-full w-full grid-cols-3 grid-rows-2 gap-2.5 p-5 xl:m-32 lg:m-16 md:m-8 sm:m-4'>
          {/* Grid Box 1 */}
          <div className='col-span-2 row-span-1 relative rounded-xl bg-foreground overflow-hidden'>
            {/* Scrollable Content */}
            <div className='h-full hide-scrollbar overflow-auto rounded-xl p-4 pb-12 relative'>
              <AccountOverview />
            </div>
            {/* Label anchored to the bottom-left */}
            <div className="absolute bottom-0 left-0 w-full bg-opacity-90 bg-foreground py-2 px-4 flex items-center justify-between z-10">
              <p className="text-lg font-bold">Account Overview</p>
              {/* Scroll Indicator */}
              <div className="flex items-center">
                <span className="text-sm">More</span>
                <svg className="w-4 h-4 ml-1 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {/* Down arrow icon */}
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v14m7-7H5" />
                </svg>
              </div>
            </div>
          </div>

          {/* Grid Box 2 */}
          <div className='col-span-1 row-span-1 relative rounded-xl bg-foreground'>
            <div className="absolute bottom-1 left-2">
              <p className="text-lg font-bold">GRID LABEL HERE</p>
            </div>
          </div>

          {/* Grid Box 3 */}
          <div className='col-span-3 row-span-1 relative rounded-xl bg-foreground overflow-hidden'>
            <div className='h-full hide-scrollbar overflow-auto rounded-xl p-4 pb-12 text-2xl relative'>
              <AnalyticsComponent />
            </div>
            <div className="absolute bottom-0 left-0 w-full bg-opacity-90 bg-foreground py-2 px-4 flex items-center justify-between z-10">
              <p className="text-lg font-bold">Analytics</p>
              {/* Scroll Indicator */}
              <div className="flex items-center">
                <span className="text-sm">More</span>
                <svg className="w-4 h-4 ml-1 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {/* Down arrow icon */}
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v14m7-7H5" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </TransactionsProvider>
    </div>
  );
}
