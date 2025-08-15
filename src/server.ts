import express from "express";
import { PrismaClient } from "@prisma/client";

const port = 3000;
const app = express();
const prisma = new PrismaClient();

app.get("/cineproductions", async (req, res) => {
    const cineproductions = await prisma.cineproduction.findMany({
        orderBy: { title: 'asc' },
        include: {
            genres: true,
            idioms: true,
            types: true
        },
    });
    res.json(cineproductions);
});

app.listen(port, () => {   
    console.log(`Servidor rodando na porta ${port}`);
});