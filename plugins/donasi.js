let handler = async m => m.reply(`
            .✵.GRUP SAD BOTZ.✵.

            https://chat.whatsapp.com/JYAahV5tYSi9BcBrU1gHFI
            https://saweria.co/joceylintangg
            https://instagram.com/joceylintangg
            https://tiktok.com/@joceylintangg
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
