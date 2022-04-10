let fs = require('fs')
let handler = async (m) => {
let stc = fs.readFileSync('./sticker/tag.webp')
conn.fakeReply(m.chat, stc, '60189830350@s.whatsapp.net', '*Kenapa Tag Owner Saya*')
}
handler.customPrefix = /^(@6285795035419)$/i
handler.command = new RegExp

module.exports = handler
