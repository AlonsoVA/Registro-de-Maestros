import express from "express";

const app =express();
app.set("port",6969);
app.listen(app.get("port"));
console.log("si jala");
