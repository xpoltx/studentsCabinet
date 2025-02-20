import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

export async function sendConfirmMail(email: string, token: string): Promise<void> {
    const transporter = nodemailer.createTransport ({
        service: 'gmail',
        auth:{
            user: process.env.GMAIL,
            pass: process.env.GMAIL_PASSWORD, 
        },
    });

    const mailOptions = {
        from: process.env.GMAIL,
        to: email,
        subject: "Confirm reg",
        html: `<p>Будь ласка, скопіюйте цей код: 
                ${token}   `
    };
    await transporter.sendMail(mailOptions);
}