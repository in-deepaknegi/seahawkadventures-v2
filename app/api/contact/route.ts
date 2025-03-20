import { NextResponse } from "next/server";
import { ContactEmail } from "@/components/routes/shared/resend/contact-email";
import { render } from "@react-email/render";
import prisma from "@/lib/prisma";
import { sendEmail } from "@/lib/resend";
import { Resend } from "resend";
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
    try {
        // Parse request body
        const body = await request.json();
        const { name, email, message, subject } = body;

        // Validate required fields
        if (!name || !email || !message) {
            return NextResponse.json(
                { error: "Name, email, and message are required" },
                { status: 400 },
            );
        }

        // Save contact form submission to database
        try {
            await prisma.contact.create({
                data: {
                    name,
                    email,
                    subject: subject || "No Subject",
                    message,
                },
            });
        } catch (error) {
            console.error("Database error:", error);
            return NextResponse.json(
                { error: "Failed to save contact form submission" },
                { status: 500 },
            );
        }

        // Send contact email
        try {
            const emailHtml = await render(
                ContactEmail({
                    name,
                    email,
                    message,
                    subject,
                }),
            );

            await resend.emails.send({
                from: "Sea Hawk Adventures <mail-server@ui.cnippet.site>",
                to: email,
                subject: `New Contact Form Submission: ${subject || "No Subject"}`,
                html: emailHtml,
            });

            // const result = await sendEmail({
            //     to: email,
            //     // subject: `New Contact Form Submission: ${subject || "No Subject"}`,
            //     // html: emailHtml,
            //     subject: 'hello world',
            //     html: '<p>it works!</p>',
            // });

            // if (!result.success) {
            //     throw new Error(result.error as string);
            // }

            return NextResponse.json(
                { message: "Message sent successfully" },
                { status: 200 },
            );
        } catch (error) {
            console.error("Email sending error:", error);
            return NextResponse.json(
                { error: "Failed to send message", details: error instanceof Error ? error.message : "Unknown error" },
                { status: 500 },
            );
        }
    } catch (error) {
        console.error("Contact form error:", error);
        return NextResponse.json(
            { error: "An unexpected error occurred", details: error instanceof Error ? error.message : "Unknown error" },
            { status: 500 },
        );
    }
}
