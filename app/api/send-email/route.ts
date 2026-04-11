import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  const { firstName, lastName, email, organisation, enquiryType, message } = await request.json();

  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: parseInt(process.env.EMAIL_PORT || '587'),
    secure: process.env.EMAIL_SECURE === 'true',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  await transporter.sendMail({
    from: process.env.EMAIL_FROM,
    to: process.env.EMAIL_TO,
    subject: `New contact form submission from ${firstName} ${lastName}`,
    html: `<p><strong>Name:</strong> ${firstName} ${lastName}</p><p><strong>Email:</strong> ${email}</p><p><strong>Organisation:</strong> ${organisation}</p><p><strong>Enquiry Type:</strong> ${enquiryType}</p><p><strong>Message:</strong> ${message}</p>`,
  }).catch((error) => {
    console.error('Error sending email:', error);
    return Response.json({ success: false, error: 'Failed to send email' }, { status: 500 });
  });

  return Response.json({ success: true });
}