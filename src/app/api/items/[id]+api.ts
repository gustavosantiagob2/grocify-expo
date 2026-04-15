import {
  deleteGrocifyItem,
  setGroceryItemPurchased,
  updateGroceryItemQuantity,
} from "@/lib/server/db-actions";
import { error } from "node:console";
import { request } from "node:http";

export async function PATCH(request: Request, { id }: { id: string }) {
  try {
    const body = await request.json();

    const item = body.quantity
      ? await updateGroceryItemQuantity(id, body.quantity)
      : await setGroceryItemPurchased(id, body.purchased ?? true);

    if (!item) return Response.json({error: "Item not found."}, {status: 404 })

    return Response.json({item})

  } catch (error) {
    console.log("ERRO EM MODIFICAR", error);
    const message =
      error instanceof Error ? error.message : "Failed to update item";
    return Response.json({ error: message }, { status: 500 });
  }
}

export async function DELETE(_request: Request, { id }: { id: string }) {
  try {
    await deleteGrocifyItem(id);
    return Response.json({ ok: true });
  } catch (error) {
    console.log("ERRO EM DELETAR", error);
    const message =
      error instanceof Error ? error.message : "Failed to delete item";
    return Response.json({ error: message }, { status: 500 });
  }
}
