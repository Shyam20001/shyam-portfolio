// routes/api/check-auth.ts

import { Context } from "aleph/server/types.ts";

export async function GET(req: Request, ctx: Context) {
    const isAuthenticated = ctx.session?.isAuthenticated || false;

    return new Response(JSON.stringify({ isAuthenticated }), {
        status: isAuthenticated ? 200 : 401,
        headers: { "Content-Type": "application/json" },
    });
}
