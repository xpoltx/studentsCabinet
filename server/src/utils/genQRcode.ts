import  QRCode  from "qrcode";

export default async function generateQRcode(uuid:string): Promise<string> {
    try {
        const qrCodeDataURL = await QRCode.toDataURL(uuid);
        return qrCodeDataURL;
    } catch (error) {
        console.log('error gen qr code: ', error);
        throw error;
    }
    
}