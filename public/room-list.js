const fetch = require("node-fetch");

const getRooms = async () => {
 try {
  const response = await fetch("http://localhost:3000/rooms");
  const jsonData = await response.json();

  console.log(jsonData)
 } catch (err) {
  console.error(err.message);
 }
}
getRooms()