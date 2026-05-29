import { demoProducts } from "@/data/products";

export async function POST(request) {
  const body = await request.json();

  return Response.json({
    success: true,
    products: demoProducts,
    userInput: body,
  });
}