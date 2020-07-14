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

     let a1 = new Discord.MessageEmbed()
    .setDescription('<:incorreto:729451886683619438> **|** Você precisa ser um moderador para fazer isto!')

     let a2 = new Discord.MessageEmbed()
    .setDescription('<:incorreto:729451886683619438> **|** Eu preciso ter a permissão de gerenciar mensagens para fazer isto!')

    let a3 = new Discord.MessageEmbed()
    .setDescription('<:incorreto:729451886683619438> **|** Você precisa me dizer um número!')

    let a4 = new Discord.MessageEmbed()
    .setDescription('<:incorreto:729451886683619438> **|** O número tem que ser de 2 a 100.')

    let a5 = new Discord.MessageEmbed()
    .setDescription('<:incorreto:729451886683619438> **|** O número tem que ser maior que 0.')

    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(a1); 
    if (!message.guild.me.hasPermission("MANAGE_MESSAGES")) return message.channel.send(a2); 
    let clean = args.join(''); 

    if(isNaN(clean)) return message.channel.send(a3)
 
    if (clean < 2 || clean > 100) return message.channel.send(a4)
    
    if (args.length === 0) return message.channel.send(a5) 
    try { 
        message.delete()
        message.channel.bulkDelete(clean)
        
        let embed = new Discord.MessageEmbed()

        .setTitle(`**LIMPEZA** :pushpin:`)
        .setDescription(`Limpei um total de \`${clean}\` mensagens.`)
        .setColor('RANDOM')
        .setFooter(`Grove • Todos direitos reservados`, bot.user.displayAvatarURL({dynamic: true}))
        .setTimestamp()   

        message.channel.send({embed}).then(msg => {
          msg.delete({ timeout: 2000 })
        })
    } catch(e){ 
        console.log(e); 
    }
}

exports.help = { 
    name: 'clear',
    aliases: ['limpar']
}