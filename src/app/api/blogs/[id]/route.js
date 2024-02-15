import { NextResponse } from "next/server";

export async function GET(req, context) {
    const { params } = context;
    return NextResponse.json({
        title: "HELLO WORLD"
    })
}