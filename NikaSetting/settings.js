// Module
const fs = require('fs')

//Bot Settings
global.connect = true // True For Pairing // False For Qr
global.publicX = true // True For Public // False For Self
global.owner = ['6285751255204'] //Own Number
global.developer = "Depay" //Dev Name
global.botname = "nika" //Bot Name
global.version = "0.0.0" //Version Bot

//Sticker Setiings
global.packname = "Sticker By" //Pack Name 
global.author = "DepayTzyy" // Author

//Social Media Settings
global.ytube = "https://youtube.com/@DepayyAslii"
global.ttok = ""
global.igram = "https://instagram.com/@ohhdep"
global.chtele = ""
global.tgram = "https://t.me/depay110"

//Bug Name Settings
global.bak = {
Ios: " 𝐑̸̲͟𝐚𝐩̅𝐢̶̶̅͟𝐩̶̋𝐩̶𝐩̶̋𝐌𝐨̤͋𝐝̈́𝐬̽͢𝐬�? ",
Andro: "𝐑̸̲͟𝐚𝐩̅𝐢̶̶̅͟𝐩̶̋𝐩̶𝐩̶̋𝐌𝐨̤͋𝐝̈́𝐬̽͢𝐬�?", 
Crash: " ̶𝐑̸̲͟𝐚𝐩̅𝐢̶̶̅͟𝐩̶̋𝐩̶𝐩̶̋𝐌𝐨̤͋𝐝̈́𝐬̽͢𝐬�? ̶",
Freeze: "𝐑̸̲͟𝐚𝐩̅𝐢̶̶̅͟𝐩̶̋𝐩̶𝐩̶̋𝐌𝐨̤͋𝐝̈́𝐬̽͢𝐬�?",
Ui: "𝐑̸̲͟𝐚𝐩̅𝐢̶̶̅͟𝐩̶̋𝐩̶𝐩̶̋𝐌𝐨̤͋𝐝̈́𝐬̽͢𝐬�?"
}

//System Bot Settings
global.prefa = ['','!','.',',','🐤','🗿'] // Prefix // Not Change

let file = require.resolve(__filename)
require('fs').watchFile(file, () => {
  require('fs').unwatchFile(file)
  console.log('\x1b[0;32m'+__filename+' \x1b[1;32mupdated!\x1b[0m')
  delete require.cache[file]
  require(file)
})