import mailjet from "node-mailjet";
import dotenv from "dotenv";
import { EMAIL_VERIFY_TEMPLATE } from "./emailTemplate";

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
                    "HTMLPart": EMAIL_VERIFY_TEMPLATE.replace("{{ver_token}}", token),
                }
            ]
        });

        await req;

    } catch (error) {
        throw error;
    }
}