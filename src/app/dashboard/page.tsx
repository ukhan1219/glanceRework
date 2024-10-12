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


import React from 'react';
import { getServerAuthSession } from '~/server/auth';
import { redirect } from 'next/navigation';
import DashboardContent from './DashboardContent';

export default async function page() {
  const session = await getServerAuthSession();

  if (!session) {
    return redirect('/login');
  }

  return (
    <div className='h-[calc(100vh-85px)] w-full flex items-center justify-center'>
      <DashboardContent />
    </div>
  );
}