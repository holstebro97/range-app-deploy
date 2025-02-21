import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const { password } = await request.json()
    const correctPassword = process.env.APP_PASSWORD

    if (!correctPassword) {
      return new NextResponse("Password not configured", { status: 500 })
    }

    if (password.trim() === correctPassword.trim()) {
      return new NextResponse("Password correct", { status: 200 })
    }

    return new NextResponse("Incorrect password", { status: 401 })
  } catch (error) {
    return new NextResponse("Error processing request", { status: 500 })
  }
}

