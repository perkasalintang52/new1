let handler = async (m, { conn }) => {
	conn.sendFile(m.chat, 'https://yog-apikey.herokuapp.com/api/bokep?apikey=YogGanz', 'asupan.mp4', 'ππ₯πππ§π’π₯β’LINTANG\nSubscribe : https://instagram.com/joceylintangg', m)
}
handler.help = ['bkp']
handler.tags = ['asupan']

handler.command = /^(bkp)$/i
handler.premium = true
handler.register = true
handler.limit = 1
module.exports = handler


