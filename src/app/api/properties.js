import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === "GET") {
    const properties = await prisma.property.findMany();
    res.status(200).json(properties);
  } else if (req.method === "POST") {
    const { title, description, price, imageUrl } = req.body;
    const property = await prisma.property.create({
      data: { title, description, price, imageUrl },
    });
    res.status(201).json(property);
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
