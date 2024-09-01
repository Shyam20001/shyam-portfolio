// export async function DELETE(req: Request, ctx: Context){
//     const bodyParams = await ctx.params.uid;
//     console.log("Params:", ctx.params); // Log the params to see what's being captured
//     console.log(JSON.stringify(bodyParams,null,2) )
//     return Response.json({ msg: `deleted successfully da`, val: bodyParams }, {
//       status: 200,
//       headers: { "Content-Type": "application/json" },    
//     })
//   }


export async function GET(req: Request, ctx: Context) {
  //console.log("Params:", ctx.params); // Log the params to see what's being captured
  const uid = await ctx.params?.uid; // Safely access 'uid'
  const envUid = Deno.env.get("ADMIN_ROOT");
  
  //console.log("Environment UID:", envUid); // Log the environment variable
 // console.log("UID from URL:", uid); // Log the UID from the URL

  if (uid === envUid) { // Compare with environment variable 'UID'
      return new Response(null, {
          status: 302,
          headers: {
              "Location": "/admin-panel",
          },
      });
  } else {
      return new Response("Unauthorized", { status: 401 });
  }
}
