// // import { useEffect, useState } from 'react';
// // import AdminPanel from '~/components/AdminPanel.tsx';

// // const AdminPage = () => {
// //     const [isAuthenticated, setIsAuthenticated] = useState(false);

// //     useEffect(() => {
// //         const checkAuthentication = async () => {
// //             const urlParams = new URLSearchParams(window.location.search);
// //             //const uid = urlParams.get('uid');
// //             const uid = "stella2019"; // Hardcoded for testing

// //             // Check if uid is not null or undefined
// //             if (!uid) {
// //                 console.error('No uid found in URL');
// //                 setIsAuthenticated(false);
// //                 return;
// //             }

// //             // Make a request to the authentication endpoint
// //             const response = await fetch(`/api/admin@2001/${uid}`);
// //             console.log(response);
// //             if (response.status === 302) {
// //                 setIsAuthenticated(true); // If authenticated, set state to true
// //             } else {
// //                 setIsAuthenticated(false); // Otherwise, set state to false
// //             }
// //         };

// //         checkAuthentication();
// //     }, []);

// //     // Optionally, handle unauthorized access here
// //     if (!isAuthenticated) {
// //         return <div>Unauthorized access.</div>;
// //     }

// //     return <AdminPanel />;
// // };

// // export default AdminPage;


// // routes/admin-dashboard.tsx

// import React, { useEffect, useState } from 'react';

// const AdminDashboard = () => {
//     const [isAuthenticated, setIsAuthenticated] = useState(false);

//     useEffect(() => {
//         const checkAuthentication = async () => {
//             const response = await fetch('/api/master'); // Your endpoint to verify authentication status

//             if (response.ok) {
//                 setIsAuthenticated(true);
//             } else {
//                 window.location.href = '/'; // Redirect to login if not authenticated
//             }
//         };

//         checkAuthentication();
//     }, []);

//     if (!isAuthenticated) {
//         return <div>Loading...</div>; // Show loading state while checking authentication
//     }

//     return (
//         <div>
//             <h1>Admin Dashboard</h1>
//             <p>Welcome to the admin dashboard!</p>
//         </div>
//     );
// };

// export default AdminDashboard;
