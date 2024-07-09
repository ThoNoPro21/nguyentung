import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

interface TransportOptions {
    host: string;
    port: number;
    secure: boolean;
    auth: {
        user: string;
        pass: string;
    };
}

export async function POST(request: Request) {
    try {
        const { email, subject, message } = await request.json();

        let transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 587,
            secure: false,
            auth: {
                user: 'uongluong159@gmail.com',
                pass: 'ydes zlpa qnvj dhjb',
            },
        } as TransportOptions);

        let mailOptions = {
            from: email,
            to: 'Luông Uông <uongluong159@gmail.com>',
            subject: subject,
            html: `<p>${message}</p>`,
            text: message,
        };
        await transporter.sendMail(mailOptions);
        return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: 'Error sending email', details: error }, { status: 500 });
    }
}
