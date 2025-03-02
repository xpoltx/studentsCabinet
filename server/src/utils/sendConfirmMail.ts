import mailjet from "node-mailjet";
import dotenv from "dotenv";


dotenv.config();

export async function sendConfirmMail(email:string, token: string): Promise <void> {
    try {
        const mail = mailjet.apiConnect(
            process.env.MAIL_JET_API_KEY!,
            process.env.MAIL_JET_SECRET_KEY!
        );
        const req = mail.post("send",{version: "v3.1"}).request({
            "Messages": [
                {
                    "From": {
                        "Email": process.env.GMAIL,
                        "Name": "Test name"
                    },
                    "To": [{
                        "Email": email,
                        "Name": "recep 1"
                    }],
                    "Subject": "Your confirmation code",
                    "TextPart": "Dear recep 1, Thx for reg, here is ur confirm code",
                    "HTMLPart": `<p> Please copy and paste this code: ${token}</p>`,
                }
            ]
        });

        await req;

    } catch (error) {
        throw error;
    }
}