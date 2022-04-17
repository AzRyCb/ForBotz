let fetch = require('node-fetch')
let { MessageType } = require('@adiwajshing/baileys')
let handler = async(m, { conn }) => {
    let desc = `
✧┈─━━ [ RULES ] ━━┈─✧

1️⃣ Pengguna dapat menggunakan semua perintah/command dengan batasan limit terkecuali user premium dengan limit tanpa batas/unlimited, dan tidak melakukan spam terhadap bot.
2️⃣ Pengguna yang mengirim hal atau data pribadi tidak akan disimpan oleh bot ini, dan tidak akan bertanggung jawab atas data pribadi tersebut!
3️⃣ Mohon untuk tidak Spam/Menelfon Bot karena beresiko no anda akan di *banned*
     
⭐ *Kebijakan Privasi*
1️⃣ Owner tidak akan menyalah gunakan data user
2️⃣ Owner tidak akan merekam data riwayat chat user
3️⃣ Owner berhak melihat data riwayat chat users.
4️⃣ Owner berhak melihat status users.
5️⃣ Owner dapat melihat riwayat chat, dan media yang dikirimkan users.
    
⭐ *Peraturan*
1️⃣ Users dilarang menelpon maupun memvideo call nomor bot.
2️⃣ Users dilarang mengirimkan berbagai bug, virtex, dll ke nomor bot.
3️⃣ Users diharap tidak melakukan spam dalam penggunaan bot.
4️⃣ Users dilarang menambahkan nomor bot secara illegal, untuk menambahkan silahkan hubungi owner.
5️⃣ Users diharap untuk tidak menyalah gunakan fitur fitur bot.
    
⭐ *Syarat Ketentuan*
1️⃣ Bot akan keluar dari group apabila sudah waktunya keluar.
2️⃣ Bot dapat mem-ban users secara sepihak terlepas dari users salah atau tidak.
3️⃣ Bot tidak akan bertanggungjawab atas apapun yang users lakukan terhadap fitur bot.
4️⃣ Bot akan memberlakukan hukuman: block atau ban terhadap users yang melanggar peraturan.
5️⃣ Bot bertanggung jawab atas kesalahan fatal dalam programing maupun owner.
`.trim()
  const button = {
        buttonText: 'Klik Di sini',
        description: desc,
        sections:  [{title: "Silahkan di pilih", rows: [
        {title: 'Menu Utama', description: "Kembali ke Menu Utama", rowId:".?"},
        {title: 'Sewa Bot', description: "Sewa bot dengan memasukkan bot ke grup kamu", rowId:".sewa"},
        {title: 'Group Bot', description: "join grup gc official bot", rowId:".gcbot"},
        {title: 'Cara Invit?', description: "Cara Memasukkan Bot Di GC", rowId:".tutorbot"},
        {title: 'Owner', description: "Owner/Creator Bot", rowId:".owner"},
       ] }],
        listType: 1
       }
    conn.sendMessage(m.chat, button, MessageType.listMessage, { quoted: m })
}

handler.tags = ['main', 'update']
handler.command = /^(rules|peraturan|ketentuan|rule)$/i
handler.help = ['rules']
module.exports = handler
