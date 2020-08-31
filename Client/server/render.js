import fs from "fs";
import path from "path";
import express from "express";
import React from "react";
import ReactDom from "react-dom/server";
import serverRoutes from "../src/serverRouter";
import { StaticRouter } from "react-router-dom";
import { renderRoutes } from "react-router-config";

const app = express();

app.use("assets", express.static("static"));

app.get("^/$", (req, res) => {
  console.log("amm esto no se po rque no se ejecuta");
  const context = {};
  const app = ReactDom.renderToString(
    <StaticRouter location={req.url} context={context}>
      {renderRoutes(serverRoutes)}
    </StaticRouter>
  );

  console.log(app, "pos es app");
  const indexHtml = path.resolve(__dirname, "../static/index.html");
  fs.readFile(indexHtml, "utf8", (err, html) => {
    if (err) {
      console.error(err);
      return res.status(500).send("Some error happend");
    }

    if (context.status === 404) {
      res.status(404);
    }

    return res.send(
      html.replace('<main id="app"></main>', `<main id="app">${app}</main>`)
    );
  });
});

app.listen(5000, () => console.log("😎 server runing on port 5000"));
