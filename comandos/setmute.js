const Discord = require("discord.js")
const db = require("quick.db")
const c = require('../config.json')

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
  
  if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply(`❌ **|** Você precisa ser um moderador para fazer isto!`); 

  let embed = new Discord.MessageEmbed()
  .setTitle('**COMO USAR O COMANDO DE MUTE**')
  .setColor('RANDOM')
  .setDescription(`Para usar este comando de mute, é preciso criar um cargo que NÃO tenha permissão de enviar mensagens e tem que ser a cima de todos os outros!\n\nNas configurações de categoria ou de um canal especifico, tem que adicionar ele sem a permissão de enviar mensagens, se tiver outros cargos com permissão marcada para enviar mensagens, desmarque deixando no meio!\n\nFeito isso é só digitar \`${c.prefix}setmute <cargo>\` e pronto!\n\nDepois para silenciar alguém é só digitar \`${c.prefix}mute <usuário>\`\n\nQualquer dúvida/sugestão você pode mandar entrando no [meu servidor do Discord!](https://discord.gg/drYKh7k)`)
  .setFooter(`Grove • Todos direitos reservados`, bot.user.displayAvatarURL({dynamic: true}))
  .setTimestamp()   
    
  let role = message.mentions.roles.first()

  if(!role) return message.channel.send(embed)

  if(role )
  
  db.set(`mute_${message.guild.id}`, role.id)
  
  message.channel.send(`✅ **|** Cargo de mute setado: ${role}`) 
  
}

exports.help = {
  name:'setmute',
  aliases: []
}