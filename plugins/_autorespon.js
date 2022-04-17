let fs = require('fs')
let fetch = require('node-fetch')
let handler = m => m

handler.all = async function (m, { isBlocked }) {

    if (isBlocked) return
    if (m.isBaileys) return
    if (m.chat.endsWith('broadcast')) return
    let setting = db.data.settings[this.user.jid]
    let { isBanned } = db.data.chats[m.chat]
    let { banned } = db.data.users[m.sender]

    // ketika ditag
    try {
        if (m.mentionedJid.includes(this.user.jid) && m.isGroup) {
            await this.send2Button(m.chat,
                isBanned ? 'Botz tidak aktif (・へ・)' : banned ? 'kamu dibanned' : 'Lgi Sad gausah ngeTag',
                '',
                isBanned ? 'Unban' : banned ? 'Pemilik Bot' : '⋮☰ Menu',
                isBanned ? '.unban' : banned ? '.owner' : '.menu',
                m.isGroup ? 'Owner' : isBanned ? 'Donasi' : 'Donasi',
                m.isGroup ? '.nowner' : isBanned ? '.donasi' : '.donasi', m)
        }
    } catch (e) {
        return
    }

    // ketika ada yang invite/kirim link grup di chat pribadi
    if ((m.mtype === 'groupInviteMessage' || m.text.startsWith('https://chat') || m.text.startsWith('Buka tautan ini')) && !m.isBaileys && !m.isGroup) {
        this.send2Button(m.chat, await (await fetch(fla + 'sewa bot')).buffer(), `
╭═══ 〘 SEWA 〙
║ ┅ ๑————————————๑
║┊ ⌲ Sewa = 5k/grup (1 minggu)
║┊ ⌲ Sewa = 15k/grup (1 bulan)
║┊ ⌲ Sewa = 25k/grup (3 bulan)
╰═ ┅ ═══════
                        
༅ KEUNTUNGAN
                        
✧ Bebas Add bot ke grup
✧ bisa jaga grup kamu
✧ Bisa nyuruh Buka/Tutup Group
✧ bisa kick atau add seseorang
✧ Ada fitur khusus admin
✧ Ada fitur setting grup
✧ Antilink, antispam dll`.trim(), 'Menu', '#menu', 'Owner', '#owner', m)
}

    // salam
    let thx = /(terima?kasih|makasih|maacih|tengkyuh|tengks|arigatou)/i
    let dibalas = thx.exec(m.text)
    if (dibalas && !m.fromMe) {
        m.reply(`Sama-sama, , （ ・∀・）`)
    }

    // salam
    let reg = /(ass?alam|اَلسَّلاَمُ عَلَيْكُمْ|السلام عليکم)/i
    let isSalam = reg.exec(m.text)
    if (isSalam && !m.fromMe) {
        this.sendSticker(m.chat, fs.readFileSync('./src/salam.webp'), m, {sendEphemeral: true})
    }

    // backup db
    if (setting.backup) {
        if (new Date() * 1 - setting.backupDB > 1000 * 60 * 60) {
            let d = new Date
            let date = d.toLocaleDateString('id', {
                day: 'numeric',
                month: 'long',
                year: 'numeric'
            })
            await global.db.write()
            this.reply(global.owner[0] + '@s.whatsapp.net', `Database: ${date}`, null)
            this.sendFile(global.owner[0] + '@s.whatsapp.net', fs.readFileSync('./database.json'), 'database.json', '', 0, 0, { mimetype: 'application/json' })
            setting.backupDB = new Date() * 1
        }
    }

    // update status
    if (new Date() * 1 - setting.status > 1000) {
        let _uptime = process.uptime() * 1000
        let uptime = clockString(_uptime)
        await this.setStatus(`Im Botz 🤖 || ⏰ Aktif selama ${uptime} || 👥 User : ${Object.keys(global.db.data.users).length} User || 🎐 Mode: ${global.opts['self'] ? 'Private' : setting.groupOnly ? 'Hanya Grup' : 'Publik'}`).catch(_ => _)
        setting.status = new Date() * 1
    }

}

module.exports = handler

function clockString(ms) {
    let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
    let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
    let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
    return [h, ' H ', m, ' M ', s, ' S'].map(v => v.toString().padStart(2, 0)).join('')
}

function pickRandom(list) {
    return list[Math.floor(Math.random() * list.length)]
}
