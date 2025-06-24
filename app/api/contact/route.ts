import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  const data = await req.json();
  const { fornavn, etternavn, epost, telefon, firma, melding } = data;

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com", // Gmail SMTP
    port: 465,
    secure: true,
    auth: {
      user: process.env.SMTP_USER, // e.g. kesara@gmail.com
      pass: process.env.SMTP_PASS, // App password from Gmail
    },
  });

  const mailOptions = {
    from: `"ADDVIA Nettside" <${process.env.SMTP_USER}>`, // ✅ Use your own Gmail address
    to: "kontakt@addvia.no", // ✅ The inbox you want to receive at
    replyTo: epost, // ✅ User's email goes here for replying
    subject: "Ny henvendelse fra nettsiden",
    text: `
Navn: ${fornavn} ${etternavn}
E-post: ${epost}
Telefon: ${telefon}
Firma: ${firma}

Melding:
${melding}
    `,
  };

  try {
    const result = await transporter.sendMail(mailOptions);
    console.log("✅ E-post sendt:", result.accepted);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("❌ Feil ved sending:", error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
