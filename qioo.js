/*
INI SC FREE BUKAN DI JUAL
KALAU MAU SC FREE BISA CEK DI YT
@ALWAYSAQIOO TZY
JANGAN LUPA SUBREK
RENAME ATAU REUPLOAD?
TAG GW*/


const fs = require('fs')
const chalk = require('chalk')

global.gr = 'https://chat.whatsapp.com/GJ0xeVUqEcACgn8zKjlcuF   '
global.ig = '@Alwaysaqioo' // ubah aja
global.email = 'alwaysaqioo@gmail.com' //serah
global.region = 'indonesia' // serah
//—————「 Set Nama Own & Bot 」—————//
global.ownername = 'Alwaysaqioo' //ubah jadi nama mu, note tanda ' gausah di hapus!
//=================================================//
global.owner = ['62887082474470'] // ubah aja pake nomor lu
//==========================BY Hw Mods=======================//
global.keyopenai = `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`
//====================BY Hw Mods=============================//
global.botname = 'Alwaysaqioo Botz' //ubah jadi nama bot mu, note tanda ' gausah di hapus!
global.packname = 'Alwaysaqioo' // ubah aja ini nama sticker
global.author = 'Alwaysaqioo' // ubah aja ini nama sticker
global.prefa = ['','!','.',',','🐤','🗿']
global.sessionName = 'qio' //Gausah Juga
global.sp = '⭔' // Gausah Juga
global.wlcm = []
global.wlcmm = []
global.anticall = true
//=================================================//
//Gausah Juga
global.limitawal = {
    premium: "Infinity",
    free: 100
}
//=================================================//
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})