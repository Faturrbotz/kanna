let handler = function (m) {
	this.sendContact(m.chat, '6283813063969', 'Owner NekoBotz :)', m)
}

handler.customPrefix = ['🍭Owner Kannabot'] 
handler.command = new RegExp

module.exports = handler
