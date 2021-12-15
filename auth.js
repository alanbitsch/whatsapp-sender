const { WAConnection, MessageType } = require("@adiwajshing/baileys");
const fs = require("fs");
async function connectToWhatsApp() {
    const conn = new WAConnection();
    conn.on("open", () => {
        const authInfo = conn.base64EncodedAuthInfo();
        fs.writeFileSync(
            "auth_info.json",
            JSON.stringify(authInfo, null, "\t")
        );
        console.log("\nCredentials saved on auth_info.json\n");
    });
    await conn.connect();
    conn.close();
}
connectToWhatsApp().catch((err) => console.log("unexpected error: " + err));
