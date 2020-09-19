import App from "./app";
import DBConnection from "./services/database/Connection";

async function Init() {
  await DBConnection();
  const port = App.get("port");
  await App.listen(port);
  console.log(`🖥 Server run on localhost:${port}`);
}

Init();
