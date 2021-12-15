const { WAConnection, MessageType, MessageOptions, Mimetype } = require("@adiwajshing/baileys");
const fs = require("fs");
const id = `${process.argv[3]}@s.whatsapp.net`;
const fileList = fs.readdirSync(process.argv[2]);
async function connectWhatsapp() {
    const conn = new WAConnection();
    conn.loadAuthInfo("./auth_info.json");
    await conn.connect();
    for (let file of fileList) {
        await conn.sendMessage(id,
            fs.readFileSync(`test/${file}`),
            MessageType.document,
            { mimetype: "application/octet-stream",
            filename: file},
        )
    }
};

connectWhatsapp().catch((err) => console.log(`Unexpected error: ${err}`));