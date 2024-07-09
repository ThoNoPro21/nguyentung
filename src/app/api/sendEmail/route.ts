import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

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
        const { emailFrom, phoneNumber, message } = await request.json();

        let transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 587,
            secure: false,
            auth: {
                user: "uongluong159@gmail.com",
                pass: process.env.CONTACT_FORM_PASS_LUONG,
            },
        } as TransportOptions);

        let mailOptions = {
            from: emailFrom,
            to: process.env.CONTACT_FORM_RECEIVE_EMAIL,
            subject: "Tôi muốn liên hệ với bạn",
            html: `<div className="flex justify-center items-center w-full"><table class="table-auto">
                        <thead>
                            <tr>
                            <th>Email</th>
                            <th>Số điện thoại</th>
                            <th>Nội dung</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <td>${emailFrom}</td>
                            <td>${phoneNumber}</td>
                            <td>${message}</td>
                            </tr>
                        </tbody>
                        </table></div>`,
        };
        await transporter.sendMail(mailOptions);
        return NextResponse.json(
            { message: "Email sent successfully",success: true },
            { status: 200 }
        );
    } catch (error) {
        return NextResponse.json(
            { error: "Error sending email",success: false, details: error },
            { status: 500 }
        );
    }
}
