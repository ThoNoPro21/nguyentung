
import nodemailer from 'nodemailer';

export default async function handler(req: any, res: any) {
    if (req.method === 'POST') {
        const { to, subject, text } = req.body;

        // Cấu hình SMTP transport
        let transporter = nodemailer.createTransport({
            host: 'smtp.example.com', // SMTP server của bạn
            port: 587, // Cổng của SMTP server
            secure: false, // true for 465, false for other ports
            auth: {
                user: 'thoopppo45@gmail.com', // Email của bạn
                pass: 'thodepzai', // Mật khẩu email của bạn
            },
        });

        // Tạo email options
        let mailOptions = {
            from: '"Sender Name" <your-email@example.com>', // Người gửi
            to: to, // Người nhận
            subject: subject, // Tiêu đề email
            text: text, // Nội dung email
        };

        try {
            // Gửi email
            await transporter.sendMail(mailOptions);
            res.status(200).json({ message: 'Email sent successfully' });
        } catch (error) {
            res.status(500).json({ error: 'Error sending email', details: error });
        }
    } else {
        res.status(405).json({ message: 'Method Not Allowed' });
    }
}
