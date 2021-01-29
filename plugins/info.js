let handler  = async (m, { conn, usedPrefix: _p }) => {
  conn.reply(m.chat, `
╠═〘 INFO BOT 〙 ═
╠➥ Dibuat dengan bahasa javascript via NodeJs
╠➥ Script: @Nurotomo
║
╠➥ Github: https://github.com
╠➥ Instagram: @Manuuuriosss_
║
╠═〘 Thanks To 
║
╠═〘 DONASI 〙 ═
╠➥ Tri : 6283141926935
║
║>Request? Wa.me/6283141926935
║
╠═〘 NfQ BOT 〙 ═
`.trim(), m)
}
handler.help = ['info']
handler.tags = ['info']
handler.command = /^(info)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

