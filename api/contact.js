import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ msg: "Método no permitido" });
  }

  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ msg: "Por favor rellena todos los campos" });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: `Mensaje de ${name}`,
      html: `
        <h3>Información</h3>
        <ul>
          <li>Nombre: ${name}</li>
          <li>Email: ${email}</li>
        </ul>
        <h3>Mensaje</h3>
        <p>${message}</p>
      `,
    });

    return res.status(200).json({ msg: "¡Gracias por contactar conmigo!" });
  } catch (error) {
    return res.status(500).json({ msg: "Error al enviar el email" });
  }
}