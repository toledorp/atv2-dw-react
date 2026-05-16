
import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

const TOKEN = "ded0b1b00ab10b515c67f9cdf7421e59";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const name = searchParams.get("name");

  if (!name) return NextResponse.json({ results: [] });

  try {
    const response = await axios.get(
      `https://superheroapi.com/api/${TOKEN}/search/${name}`
    );

    return NextResponse.json({ results: response.data.results || [] });
  } catch (error) {
    console.error("Erro na API route:", error);
    return NextResponse.json({ results: [] });
  }
}