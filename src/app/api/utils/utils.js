import nodemailer from "nodemailer"
let transport;

export function createNodeMailConnection() {
    transport = nodemailer.createTransport({
      pool: true,
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: process.env.NEXT_PUBLIC_EMAIL,
        pass: process.env.NEXT_PUBLIC_PASSWORD,
      },
    });
    return transport
  }
  
  export async function sendNodmailEmail(user) {
    console.log(user)
    const info = await transport.sendMail({
      from: user?.email,
      to: process.env.NEXT_PUBLIC_EMAIL,
      subject: `${String(user?.fullName).toUpperCase()} - ${user?.subject}`,
      html: `<div><p>${user?.summary}</p><br /><b>Note: This email comes from amit sharma website</b></div>`,
    });
    return info;
  }