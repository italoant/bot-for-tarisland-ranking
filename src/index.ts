import { ExClient } from "./structs/ExClient";

const client = new ExClient();
client.start();

export { client };
client.on("ready", () => {
  console.log("oi");
});

client.on("messageCreate", (message) => {
  message.author.id !== client.user?.id ? message.reply(message.content) : null;
});
