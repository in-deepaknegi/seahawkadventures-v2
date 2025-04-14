export async function GET() {
    try {
        const response = await fetch(
            "https://mybusinessaccountmanagement.googleapis.com/v1/accounts",
            {
                headers: {
                    Authorization: `Bearer ${process.env.GOOGLE_ACCESS_TOKEN}`,
                },
            },
        );

        const data = await response.json();
        return Response.json(data);
    } catch (error) {
        return Response.json({ error: "API call failed" }, { status: 500 });
    }
}
