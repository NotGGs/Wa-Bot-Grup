import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'

global.owner = [
  ['6281215502214', '𝕲𝖗𝖊𝖌𝖔𝖗𝖎𝖚𝖘-𝕭𝖔𝖙', true],
  ['62895388290404', '𝕲𝖗𝖊𝖌𝖔𝖗𝖎𝖚𝖘', true], 
  ['6281336511500', 'Lionel', true],
  ['6287836742857' 'Andra', true]
] //Numeros de owner 

global.mods = ['6281325066061'] 
global.prems = ['62895415595496', '6281325066061', '6285656784897']
global.APIs = { // API Prefix
  // name: 'https://website'
  xteam: 'https://api.xteam.xyz', 
  nrtm: 'https://fg-nrtm.ddns.net',
  bg: 'http://bochil.ddns.net',
  fgmods: 'https://api-fgmods.ddns.net'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.xteam.xyz': 'd90a9e986e18778b',
  'https://zenzapis.xyz': '675e34de8a', 
  'https://api-fgmods.ddns.net': 'fg-dylux'
}

// Sticker WM
global.packname = '𝕲𝖗𝖊𝖌𝖔𝖗𝖎𝖚𝖘-𝕭𝖔𝖙' 
global.author = '@𝕲𝖗𝖊𝖌𝖔𝖗𝖎𝖚𝖘' 
global.fgig = '▢ Ikuti saya di Instagram \nhttps://www.instagram.com/nansoffc\n' 
global.dygp = 'https://chat.whatsapp.com/KLbE1i5U4y9I0OVli5jcKM'
global.fgsc = 'https://github.com/nanzone' 
global.fgyt = 'http://nansofficial.me/'
global.fgpyp = 'https://saweria.co/nansofficial'
global.fglog = 'https://i.ibb.co/Csp01NQ/nero-thumbnail.jpg' 

global.wait = '*⌛ _Loading..._*\n*▰▰▰▱▱▱▱▱*'
global.rwait = '⌛'
global.dmoji = '🤭'
global.done = '✅'
global.error = '❌' 
global.xmoji = '🔥' 

global.multiplier = 69 
global.maxwarn = '2' // máxima advertencias

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})