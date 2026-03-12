import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function POST(request) {
    try {
        const body = await request.json();
        const { fullName, professionalRole, constituency, skills, idea } = body;

        // Basic validation
        if (!fullName || !professionalRole || !constituency || !skills || !idea) {
            return NextResponse.json(
                { error: "All fields are required" },
                { status: 400 }
            );
        }

        const registration = await prisma.registration.create({
            data: {
                fullName,
                professionalRole,
                constituency,
                skills,
                idea,
            },
        });

        return NextResponse.json(
            { message: "Registration successful", registration },
            { status: 201 }
        );
    } catch (error) {
        console.error("Registration error:", error);
        return NextResponse.json(
            { error: "Internal server error" },
            { status: 500 }
        );
    }
}
