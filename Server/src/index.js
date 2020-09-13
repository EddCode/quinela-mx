import App from "./app";

async function Init() {
  const port = App.get("port");
  await App.listen(port);
  console.log(`🖥 Server run on localhost:${port}`);
}

Init();
