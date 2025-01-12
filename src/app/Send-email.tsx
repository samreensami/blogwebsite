// pages/api/send-email.js
import nodemailer from 'nodemailer';

export default async (req: { body: 
    { name: string; 
        email: any;
         message: any; }; }, 
         res: { status: (arg0: number) => { (): any; new(): any; 
            json: { (arg0: { success: boolean; error?: unknown; }): void; new(): any;
         };
         };
         }) => {
  const { name, email, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'samreen.sami84@gmail.com',
      pass: 'sam1984@@',
    },
  });

  const mailOptions = {
    from: email,
    to: 'samreen.sami84@gmail.com',
    subject: `New message from ${name}`,
    text: message,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true });
  } catch (error) {
    res.status(500).json({ success: false, error });
  }
};
