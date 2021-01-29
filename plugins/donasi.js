let handler = async m => m.reply(`
╭─「 Donasi • Pulsa 」
│ • Gopay [083141926925]
╰────
╭─「 Hubungi 」
│ > Ingin donasi? Wa.me/6283141926935
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
