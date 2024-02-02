import { NextResponse, NextRequest } from "next/server";
import Media from "@/core/classes/media/media";

export async function GET(req: NextRequest) {

    const media = new Media("1", "ANIME");

    return NextResponse.json({ message: await media.exists() ? "La media existe." : "La media no existe." });

}