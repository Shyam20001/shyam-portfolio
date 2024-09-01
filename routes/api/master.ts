
// export async function GET(req: Request, ctx: Context) {
//     const html = `
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Admin Authentication</title>
// </head>
// <body>
//     <h1>Admin Authentication</h1>
//     <script>
//         // Prompt for password
//         const pwd = prompt("Enter password:");

//         if (pwd !== null) {
//             // Send password via POST request
//             fetch('/api/master', {
//                 method: 'POST',
//                 headers: { 'Content-Type': 'application/json' },
//                 body: JSON.stringify({ pwd })
//             })
//             .then(response => response.text()) // Get the response as text
//             .then(text => {
//                 if (text.includes('Welcome to the Admin Page')) {
//                     document.write(text); // Display the admin page directly
//                 } else {
//                     alert('Unauthorized');
//                     window.location.href = '/'; // Redirect to the root URL
//                 }
//             })
//             .catch(error => {
//                 console.error('Error:', error);
//                 alert('An error occurred.');
//             });
//         }
//     </script>
// </body>
// </html>
//     `;

//     return new Response(html, { headers: { 'Content-Type': 'text/html' } });

// }

// export async function POST(req: Request, ctx: Context) {
//     const { pwd: formData } = await req.json();
//     console.log(`${formData} ~~~~~ ${ctx.secret.pwd}`);

//     if (formData === ctx.secret.pwd) {
//         // Define your HTML content as a string
//         const htmlContent = `
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Admin Page</title>
// </head>
// <body>
//     <h1>Welcome to the Admin Page</h1>
//     <p>You have been successfully authenticated!</p>
// </body>
// </html>
//         `;

//         // Return the HTML content with a 200 status code
//         return new Response(htmlContent, { 
//             status: 200,
//             headers: { 'Content-Type': 'text/html' }
//         });
//     } else {
//         // Return an error message with a 403 status code
//         return new Response('Not allowed', { status: 403 });
//     }
// }


export async function GET(req: Request, ctx: Context) {
    const html = `
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Admin Authentication</title>
</head>
<body>
    <h1>Admin Authentication</h1>
    <script>
        const pwd = prompt("Enter password:");

        if (pwd !== null) {
            fetch('/api/master', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ pwd })
            })
            .then(response => response.text())
            .then(text => {
                if (text.includes('Welcome to the Admin Page')) {
                    document.write(text);
                } else {
                    alert('Unauthorized');
                    window.location.href = '/';
                }
            })
            .catch(error => {
                console.error('Error:', error);
                alert('An error occurred.');
            });
        }
    </script>
</body>
</html>
    `;

    return new Response(html, { headers: { 'Content-Type': 'text/html' } });
}

export async function POST(req: Request, ctx: Context) {
    const { pwd: formData } = await req.json();
    console.log(`${formData} ~~~~~ ${ctx.secret.pwd}`);
    const db = ctx.secret.kv;

    if (formData === ctx.secret.pwd) {
        try {
            // Save data in KV store
            await db.set(["users", formData], formData);

            // Retrieve saved data
            const storedData = await db.get(["users", formData]);

            // Define HTML content as a string, including the retrieved data
            const htmlContent = `
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Admin Page</title>
</head>
<body>
    <h1>Welcome to the Admin Page</h1>
    <p>You have been successfully authenticated!</p>
    <p>Stored data: ${JSON.stringify(storedData,null,2) || 'No data found'}</p>
</body>
</html>
            `;

            // Return the HTML content with a 200 status code
            return new Response(htmlContent, {
                status: 200,
                headers: { 'Content-Type': 'text/html' }
            });
        } catch (error) {
            console.error('Error storing or retrieving data:', error);
            return new Response('Internal Server Error', { status: 500 });
        }
    } else {
        return new Response('Not allowed', { status: 403 });
    }
}
