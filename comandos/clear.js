const Discord = require('discord.js')
const c = require('../config.json')
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

    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply(`❌ **|** Você precisa ser um moderador para fazer isto!`); 
    if (!message.guild.me.hasPermission("MANAGE_MESSAGES")) return message.reply(`❌ **|** Eu preciso ter a permissão de gerenciar mensagens para fazer isto!`); 
    let clean = args.join(''); 

    if(isNaN(clean)) return message.reply('❌ **|** Você precisa me dizer um número!')
 
    if (clean < 2 || clean > 100) return message.reply('⚠️ **|** O número tem que ser de 2 a 100.')
    
    if (args.length === 0) return message.reply('⚠️ **|** O número tem que ser maior que 0.') 
    try { 
        message.channel.bulkDelete(clean) + 2 
        
        let embed = new Discord.MessageEmbed()

        .setTitle(`**LIMPEZA** :broom: `)
        .setDescription(`Limpei um total de \`${clean}\` mensagens.`)
        .setColor('RANDOM')
        .setFooter(`Grove • Todos direitos reservados`, bot.user.displayAvatarURL({dynamic: true}))
        .setTimestamp()   

        message.channel.send({embed}).then(msg => {
          msg.delete({ timeout: 3000 })
        })
    } catch(e){ 
        console.log(e); 
    }
}

exports.help = { 
    name: 'clear',
    aliases: ['limpar']
}