// import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
// import { authOptions } from "@/lib/authOptions";
import { getBoxById } from "@/prisma/queries";

// GET /api/v1/boxes/:id - Get a specific box by ID
export async function GET(request, { params }) {
  try {
    // const session = await getServerSession(authOptions);

    // if (!session || !session.user) {
    //   return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    // }

    const { id } = await params;
    const box = await getBoxById(id);

    if (!box) {
      return NextResponse.json({ error: "Box not found" }, { status: 404 });
    }

    return NextResponse.json(box);
  }
  catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Failed to fetch box" }, { status: 500 });
  }
}
