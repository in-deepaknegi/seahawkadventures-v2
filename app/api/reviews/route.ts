import { NextRequest } from "next/server";
import QRCode from "qrcode";

export async function GET(req: NextRequest) {
    try {
        const url =
            "https://www.google.com/search?sca_esv=177fae3e0b1a050b&sxsrf=AHTn8zp__cRQzKSsgpQwsFfvU5FCIqBoJg:1746709787555&si=APYL9bs7Hg2KMLB-4tSoTdxuOx8BdRvHbByC_AuVpNyh0x2KzUBb5P7LC3y2u8_wIaxr44WnkkvfOJ0NwGG_Cg9sLNLxQBOrsX-zTCpWwVJJEkvN3OPo8hmxYggXnONBSVYTrl5A3ZpwfHd1KezQWOvCrp4IsjrvFA%3D%3D&q=Sea+Hawk+Adventures+Reviews&sa=X&ved=2ahUKEwj9xKaD-ZONAxWXzjgGHWCCLjcQ0bkNegQIKhAE&biw=1536&bih=872&dpr=1.25#lrd=0x39091100497dec09:0x723dbf644ff9f1a7,3";
        const qrBuffer = await QRCode.toBuffer(url, { type: "png" });

        return new Response(qrBuffer, {
            headers: {
                "Content-Type": "image/png",
                "Cache-Control": "public, max-age=31536000, immutable",
            },
        });
    } catch (error) {
        console.error("QR code generation error:", error);
        return new Response("Error generating QR code", { status: 500 });
    }
}
