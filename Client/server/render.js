import fs from "fs";
import path from "path";
import express from "express";
import React from "react";
import ReactDom from "react-dom/server";
import serverRoutes from "../src/serverRouter";
import { StaticRouter } from "react-router-dom";
import { renderRoutes } from "react-router-config";

const app = express();

const staticFilesPath = path.resolve(__dirname, "..", "build");

app.use("/public", express.static(staticFilesPath));

app.get("*", (req, res) => {
  const context = {};
  const app = ReactDom.renderToString(
    <StaticRouter location={req.url} context={context}>
      {renderRoutes(serverRoutes)}
    </StaticRouter>
  );

  const indexHtml = path.resolve(__dirname, "../build/index.html");
  fs.readFile(indexHtml, "utf8", (err, html) => {
    if (err) {
      console.error(err);
      return res.status(500).send("Some error happend");
    }

    if (context.status === 404) {
      res.status(404);
    }

    console.log(app, "LOG app");

    return res.send(
      html.replace('<main id="app"></main>', `<main id="app">${app}</main>`)
    );
  });
});

app.listen(5000, () => console.log("😎 server runing on port 5000"));
