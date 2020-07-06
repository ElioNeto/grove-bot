const Discord = require('discord.js')
const db = require('quick.db')

exports.run = async (bot, message, args) => {

  var manutenção = await db.get(`manutenção`)
  
    if(!manutenção === true){

    let embedx = new Discord.MessageEmbed()

            .setTitle('**MANUTENÇÃO ATIVADA**')
            .setFooter(`Grove • Todos direitos reservados`, bot.user.displayAvatarURL({dynamic: true}))
            .setDescription('A manutenção foi ativada pelo meu desenvolvedor! Todos meus comandos estão desativados no momento. Não há uma previsão para voltar.')
            .setTimestamp()   
    
     return message.channel.send(embedx)
      
    } 

  const lennys = [
    '( ͠° ͟ʖ ͡°)',
    '( ͡~ ͜ʖ ͡°)',
    '( ͡ʘ ͜ʖ ͡ʘ)',
    '(° ͜ʖ °)',
    '( ‾ʖ̫‾)',
    '( ͡o ͜ʖ ͡o)',
    '( ͡° ͜ʖ ͡°)',
    '( ͡ಥ ͜ʖ ͡ಥ)',
    '¯\\_(ツ)_/¯',
    'ʕ•ᴥ•ʔ',
    '(▀̿Ĺ̯▀̿ ̿)',
    '(ง ͠° ͟ل͜ ͡°)ง',
    'ಠ_ಠ',
    "̿'̿'\\̵͇̿̿\\з=( ͠° ͟ʖ ͡°)=ε/̵͇̿̿/'̿̿ ̿ ̿ ̿ ̿ ̿",
    '[̲̅$̲̅(̲̅5̲̅)̲̅$̲̅]',
    "﴾͡๏̯͡๏﴿ O'RLY?",
    '[̲̅$̲̅(̲̅ ͡° ͜ʖ ͡°̲̅)̲̅$̲̅]',
    '(ᵔᴥᵔ)',
    '(¬‿¬)',
    '(☞ﾟヮﾟ)☞ ☜(ﾟヮﾟ☜)',
    '(づ￣ ³￣)づ',
    'ლ(ಠ益ಠლ)',
    'ಠ╭╮ಠ',
    '♪~ ᕕ(ᐛ)ᕗ',
    'ヾ(⌐■_■)ノ♪',
    '◉_◉',
    '\\ (•◡•) /',
    '༼ʘ̚ل͜ʘ̚༽',
    '┬┴┬┴┤(･_├┬┴┬┴',
    '┻━┻ ︵ヽ(`Д´)ﾉ︵ ┻━┻',
    '（╯°□°）╯︵( .o.)',
    'ಠ‿↼',
    '◔ ⌣ ◔',
    '(ノಠ益ಠ)ノ彡┻━┻',
    '(☞ﾟヮﾟ)☞ ☜(ﾟヮﾟ☜)',
    "̿ ̿ ̿'̿'\̵͇̿̿\з=(•_•)=ε/̵͇̿̿/'̿'̿ ̿",
    '(;´༎ຶД༎ຶ`)',
    '♥‿♥',
    'ᕦ(ò_óˇ)ᕤ',
    '(•_•) ( •_•)>⌐■-■ (⌐■_■)',
    '⌐╦╦═─ ಠ_ಠ , (¬‿¬)',
    '˙ ͜ʟ˙',
    ":')",
    '(°ロ°)☝',
    'ಠ⌣ಠ',
    '(；一_一)',
    '( ⚆ _ ⚆ )',
    '☜(⌒▽⌒)☞',
    "(ʘᗩʘ')",
    '¯\\(°_o)/¯',
    'ლ,ᔑ•ﺪ͟͠•ᔐ.ლ',
    '(ʘ‿ʘ)',
    'ಠ~ಠ',
    'ಠ_ಥ',
    'ಠ‿↼',
    '(>ლ)',
    '(ღ˘⌣˘ღ)',
    'ಠoಠ',
    'ರ_ರ',
    '◔ ⌣ ◔',
    '(✿´‿`)',
    'ب_ب',
    '┬─┬﻿ ︵ /(.□. ）',
    '☼.☼',
    '^̮^',
    '(>人<)',
    '>_>',
    '(/) (°,,°) (/)',
    '(･.◤)',
    '=U',
    '~(˘▾˘~)',
    '| (• ◡•)| (❍ᴥ❍ʋ)'
  ]

  var random = Math.floor(Math.random() * lennys.length)
  var lenny_rand = lennys[random]

  let embed = new Discord.MessageEmbed()
  .setDescription(lenny_rand)

  message.channel.send(embed)
}

exports.help = {
  name: 'lennys',
  aliases: ['lenny']
}