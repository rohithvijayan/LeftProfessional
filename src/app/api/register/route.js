import { getSQL } from '@/lib/lib';
import { NextResponse } from 'next/server';

export async function POST(request) {
    try {
        const sql = getSQL();
        const body = await request.json();
        const { fullName, email, whatsappNumber, dob, constituency, skills, idea } = body;

        // Basic validation
        if (!fullName || !email || !whatsappNumber || !dob || !constituency) {
            return NextResponse.json(
                { error: 'Missing required fields' },
                { status: 400 }
            );
        }

        const result = await sql`
            INSERT INTO registrations (full_name, email, whatsapp_number, dob, constituency, skills, idea)
            VALUES (${fullName}, ${email}, ${whatsappNumber}, ${dob}, ${constituency}, ${skills}, ${idea})
            RETURNING id, created_at
        `;

        return NextResponse.json(
            { message: 'Registration successful', id: result[0].id },
            { status: 201 }
        );
    } catch (error) {
        console.error('Registration error:', error);

        // Handle duplicate email
        if (error.code === '23505') {
            return NextResponse.json(
                { error: 'This email is already registered' },
                { status: 409 }
            );
        }

        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        );
    }
}
