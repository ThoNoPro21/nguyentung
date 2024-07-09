import { sendEmailType } from "@/types/sendEmail";

const sendEmail = async (data: sendEmailType) => {
    return await fetch('/api/sendEmail', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });
};

export default sendEmail;