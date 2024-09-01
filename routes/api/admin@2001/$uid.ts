// export async function DELETE(req: Request, ctx: Context){
//     const bodyParams = await ctx.params.uid;
//     console.log("Params:", ctx.params); // Log the params to see what's being captured
//     console.log(JSON.stringify(bodyParams,null,2) )
//     return Response.json({ msg: `deleted successfully da`, val: bodyParams }, {
//       status: 200,
//       headers: { "Content-Type": "application/json" },    
//     })
//   }

// import {load} from "load-env"
// //console.log(await load({export: true}));
// export const config = load({export: true})
export async function GET(req: Request, ctx: Context) {
 // console.log("Params:", ctx.params); // Log the params to see what's being captured
  const uid = await ctx.params?.uid; // Safely access 'uid'
  //Deno.env.set("ADMIN_ROOT", "stella2019")
  const envUid = ctx.secret
  //console.log("[middleware:foo]", ctx.secret);
  
  //console.log("Environment UID:", envUid); // Log the environment variable
  //console.log("UID from URL:", uid); // Log the UID from the URL

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
