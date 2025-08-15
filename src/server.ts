import express from "express";
import { PrismaClient } from "@prisma/client";

const port = 3000;
const app = express();
const prisma = new PrismaClient();

app.get("/cineproductions", async (req, res) => {
  const cineproductions = await prisma.cineproduction.findMany();
  res.json(cineproductions);
})

app.get("/movie", (req, res) => {
  res.send("Listagem de filmes");
});

app.listen(port, () => {   
    console.log(`Servidor rodando na porta ${port}`);
});