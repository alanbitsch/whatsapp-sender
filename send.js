const { WAConnection, MessageType, MessageOptions, Mimetype } = require("@adiwajshing/baileys");
const fs = require("fs");
const id = `${process.argv[3]}@s.whatsapp.net`;
const dir = process.argv[2];
const fileList = fs.readdirSync(dir);
async function connectWhatsapp() {
    const conn = new WAConnection();
    conn.loadAuthInfo("./auth_info.json");
    await conn.connect();
    for (let file of fileList) {
        console.log(`\nSending: ${file}\n`);
        await conn.sendMessage(id,
            fs.readFileSync(dir+file),
            MessageType.document,
            { mimetype: "application/octet-stream",
            filename: file},
        )
        console.log(`\nSent: ${file}\n`);
    }
};

connectWhatsapp().catch((err) => console.log(`Unexpected error: ${err}`));