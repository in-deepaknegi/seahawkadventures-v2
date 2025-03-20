import { ContactForm } from "@/components/contact-form";
import Footer from "@/components/globals/footer";
import Navbar from "@/components/globals/navbar";

export const metadata = {
    title: "Contact Us",
    description: "Get in touch with us. We'd love to hear from you!",
};

export default function ContactPage() {
    return (
        <>
            <Navbar />
            <main>
                <div className="container mx-auto px-4 py-12">
                    <ContactForm />
                </div>
            </main>
            <Footer />
        </>
    );
}
