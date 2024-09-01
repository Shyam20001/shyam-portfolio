// // export async function DELETE(req: Request, ctx: Context){
// //     const bodyParams = await ctx.params.uid;
// //     console.log("Params:", ctx.params); // Log the params to see what's being captured
// //     console.log(JSON.stringify(bodyParams,null,2) )
// //     return Response.json({ msg: `deleted successfully da`, val: bodyParams }, {
// //       status: 200,
// //       headers: { "Content-Type": "application/json" },    
// //     })
// //   }

// // import {load} from "load-env"
// // //console.log(await load({export: true}));
// // export const config = load({export: true})
// export async function POST(req: Request, ctx: Context) {
//   console.log("Params:", ctx.params); // Log the params to see what's being captured
//   const uid = await ctx.params?.uid; // Safely access 'uid'
//   const formPwd = await req.json()
//   //Deno.env.set("ADMIN_ROOT", "stella2019")
//   const envUid = ctx.secret.adminRoot
//   const envPwd = ctx.secret.pwd
//   console.log("[middleware:foo]", ctx.secret.pwd);
  
//   console.log("Environment UID:", envUid); // Log the environment variable
//   console.log("UID from URL:", uid); // Log the UID from the URL

//   if (uid === envUid && formPwd === envPwd) { // Compare with environment variable 'UID'
//       return new Response(null, {
//           status: 302,
//           headers: {
//               "Location": "/admin-panel",
//           },
//       });
//   } else {
//       return new Response("Unauthorized", { status: 401 });
//   }
// }
/////////////////////////////////////////////////////////////////////////////////////////////////////////

// export async function POST(req: Request, ctx: Context) {
//   // Log parameters to verify what is being captured
//   console.log("Params:", ctx.params); 

//   // Safely access 'uid' from URL parameters
//   const uid = ctx.params?.uid; 

//   // Parse the request body as JSON
//   const { pwd: formPwd } = await req.json();
//   console.log("pwd from the body",formPwd)

//   // Access environment variables from the context
//   const envUid = ctx.secret.adminRoot;
//   const envPwd = ctx.secret.pwd;

//   // Log the environment variable and UID from URL for debugging
//   console.log("[middleware:foo]", ctx.secret.pwd);
//   console.log("Environment UID:", envUid);
//   console.log("UID from URL:", uid);

//   // Validate UID and password against environment variables
//   if (uid === envUid && formPwd === envPwd) {
//     return new Response(null, {
//       status: 302,
//       headers: {
//         "Location": "/admin-panel",
//       },
//     });
//   } else {
//     return new Response("Unauthorized", { status: 401 });
//   }
// }
