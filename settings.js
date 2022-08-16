//════════════(◇■◇)══════════════════════════════════//
//New Version//
//════════════(◇■◇)════════════════//

const fs = require('fs')
const chalk = require('chalk')

//Api Website\\
global.APIs = {
	zenz: 'https://zenzapis.xyz',
}

//Api Key\\
global.APIKeys = {
	'https://zenzapis.xyz': 'sanzychan01', //credit goes to sanzy yt, if api key expire, buy it and put it here?\\
}

//customize settings\\

global.alivemsg = `Alexa
My Creator is ChamodKeshan` //Costomize Alive Message (type your message in `` )

global.owner = ['+380944814219'] //Owner number in aive msg
global.premium = ['+380944814219'] //Owner Number info
global.ownernomer = '+380944814219' //Owner Number <<<
global.alive_logo = 'https://raw.githubusercontent.com/ChamodKeshan/Alexa-New/main/Alexa-New/media/main.jpg?token=GHSAT0AAAAAABXCNRVWU72ZQMJRKQ2Z5522YX3YTSA'
global.ownername = 'En*cuzier' 
global.botname = '*Queen👸Alexa*' 

global.button = '◇alexa◇'
global.myweb = ' https://raw.githubusercontent.com/ChamodKeshan/Alexa-New/main/Alexa-New/media/main.jpg?token=GHSAT0AAAAAABXCNRVWU72ZQMJRKQ2Z5522YX3YTSA'
global.btnurl = 'https://github.com' 

global.region = 'India, South India, Kerala'

global.packname = 'Queen-Alexa'
global.author = 'En*cuzier' 
global.prefa = ['','!','.','😂','❤','💠'] //Command Prefix eg:(.alive ,alive 😂alive)
global.sessionName = 'session'
global.sp = '⭔'


global.ig = 'https://github.com/Queen-Alexa'
global.footer = '©_Kumuthu.' // DO NOT CHANGE!

global.mess = { // Don't change
    success: 'Done ✅',
    admin: 'Only Admins can use it!😉',
    botAdmin: 'Bot wants to be an Admin😥',
    owner: 'Only Owner can use this!😉',
    group: 'Feature Used Only For Groups!',
    private: 'This Features Only For Private Chat!',
    bot: 'This Feature Is Only For Bot😝',
    wait: '👉👈Pleas Wait...',
    error: 'Error!!! Maybe Api Key Is Expired🤔!',
    endLimit: 'Your Daily Limit Has Expired, The Limit Will Be Reset Every 12 Hours',
}
// DO NOT CHANGE \\
    global.limitawal = {
    premium: "Infinity",
    free: 12,
    monayawal: 1000
}
   global.rpg = {
   darahawal: 100,
   besiawal: 15,
   goldawal: 10,
   emeraldawal: 5,
   umpanawal: 5,
   potionawal: 1
}
global.thumb = fs.readFileSync('./DragonMedia/image/red-_-dragon-kumuthu.jpg')
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
