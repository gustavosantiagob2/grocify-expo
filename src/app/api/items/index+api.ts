import { createdGroceryItem, listGroceryItems } from "@/lib/server/db-actions";
import { stat } from "node:fs";

export async function GET() {
  try {
    const items = await listGroceryItems();

    return Response.json({ items });
  } catch (error) {
    console.error("ERRO NO BANCO:", error); 
    const message = error instanceof Error ? error.message : "Failed to fetch items";
    return Response.json({ error: message }, { status: 500 });
  }
}

export async function POST(request: Request){
    try {
        const body = await request.json();
        const {name, category, quantity, priority} = body;

        if(!name || !category || !priority) 
            return Response.json({error: "Please provide all required field."}, {status: 400});
        
        const item = await createdGroceryItem({name,category,quantity,priority});

        return Response.json({item},{status: 201});

    } catch (error) {
        console.log("ERRO NA CRIAÇÃO:",error)
        const message = error instanceof Error ? error.message : "Failed to create item";
        return Response.json({ error: message }, { status: 500 });
    }
}