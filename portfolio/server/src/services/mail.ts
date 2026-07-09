import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false, // Use STARTTLS
  requireTLS: true,

  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },

  connectionTimeout: 10000,
  greetingTimeout: 10000,
  socketTimeout: 10000,
})

interface ContactEmail {
  name: string
  email: string
  message: string
}

export async function sendContactEmail({
  name,
  email,
  message,
}: ContactEmail) {
  try {
    // Verify SMTP connection
    await transporter.verify()

    const timestamp = new Date().toLocaleString('en-KE', {
      dateStyle: 'full',
      timeStyle: 'short',
    })

    await transporter.sendMail({
      from: `"Portfolio Contact Form" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      replyTo: email,
      subject: `📩 New Portfolio Message from ${name}`,

      text: `
New Portfolio Contact

Name: ${name}
Email: ${email}
Received: ${timestamp}

------------------------------------

${message}
`,

      html: `
      <div style="
        max-width:700px;
        margin:auto;
        font-family:Arial,Helvetica,sans-serif;
        background:#ffffff;
        border:1px solid #e5e7eb;
        border-radius:12px;
        overflow:hidden;
      ">

        <div style="
          background:#111827;
          padding:24px;
        ">
          <h2 style="
            margin:0;
            color:#ffffff;
          ">
            📩 New Portfolio Contact
          </h2>
        </div>

        <div style="padding:30px;">

          <table style="
            width:100%;
            border-collapse:collapse;
            margin-bottom:24px;
          ">
            <tr>
              <td style="padding:8px 0;font-weight:bold;width:120px;">
                Name
              </td>
              <td>${name}</td>
            </tr>

            <tr>
              <td style="padding:8px 0;font-weight:bold;">
                Email
              </td>
              <td>
                <a href="mailto:${email}">
                  ${email}
                </a>
              </td>
            </tr>

            <tr>
              <td style="padding:8px 0;font-weight:bold;">
                Received
              </td>
              <td>${timestamp}</td>
            </tr>
          </table>

          <h3 style="margin-bottom:12px;">
            Message
          </h3>

          <div style="
            background:#f8fafc;
            border-left:4px solid #2563eb;
            padding:18px;
            border-radius:8px;
            line-height:1.7;
            white-space:pre-wrap;
          ">
            ${message}
          </div>

          <p style="
            margin-top:30px;
            color:#6b7280;
            font-size:14px;
          ">
            Reply directly to this email to respond to
            <strong>${name}</strong>.
          </p>

        </div>
      </div>
      `,
    })

    console.log(`✅ Contact email received from ${name} (${email})`)
  } catch (error) {
    console.error('❌ Email sending failed:')
    console.error(error)
    throw error
  }
}