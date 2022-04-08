let handler = async (m, { conn, text }) => {
    let name = m.fromMe ? conn.user : conn.contacts[m.sender]

  conn.reply(m.chat, `
*[ ⚠ ️] No etiquetes a mi creadora, si es algo urgente contacta con ella a su chat privado*
`.trim(), m)
    let mentionedJid = [m.sender]
}
handler.customPrefix = /@51940236711/i
handler.command = new RegExp

module.exports = handler
