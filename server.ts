import { serve } from "aleph/server";
import denoDeploy from "aleph/plugins/deploy";
import react from "aleph/plugins/react";
import unocss from "aleph/plugins/unocss";
import config from "./unocss.config.ts";
import modules from "./routes/_export.ts";
import {load} from "load-env"
//console.log(await load({export: true})); load the environ mental variables in entry point then only it works
export const config2 = load({export: true})

serve({
  plugins: [
    denoDeploy({ modules }),
    react({ ssr: true }),
    unocss(config),
  ],
  middlewares: [
    {
      name: "secret",
      fetch: (_req, ctx) => {
        ctx.secret = Deno.env.get("ADMIN_ROOT");
        return ctx.next();
      },
    },
  ],
});
