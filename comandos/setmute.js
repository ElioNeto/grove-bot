const Discord = require("discord.js")
const db = require("quick.db")
const c = process.env.PREFIX

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
    .setDescription(`<:incorreto:737091863558750279> **|** Você precisa ser um moderador para fazer isto!`)

  if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(a1); 

  let embed = new Discord.MessageEmbed()
  .setTitle('**COMO USAR O COMANDO DE MUTE**')
  .setColor('RANDOM')
  .setDescription(`Para usar este comando de mute, é preciso criar um cargo que NÃO tenha permissão de enviar mensagens e tem que ser a cima de todos os outros!\n\nNas configurações de categoria ou de um canal especifico, tem que adicionar ele sem a permissão de enviar mensagens, se tiver outros cargos com permissão marcada para enviar mensagens, desmarque deixando no meio!\n\nFeito isso é só digitar \`${c.prefix}setmute <cargo>\` e pronto!\n\nDepois para silenciar alguém é só digitar \`${c.prefix}mute <usuário>\`\n\nQualquer dúvida/sugestão você pode mandar entrando no [meu servidor do Discord!](https://discord.gg/drYKh7k)`)
  .setFooter(`Grove • Todos direitos reservados`, bot.user.displayAvatarURL({dynamic: true}))
  .setTimestamp()   
    
  let role = message.mentions.roles.first()
  
    let a3 = new Discord.MessageEmbed()
    .setDescription(`<:correto:737091697615568957> **|** Cargo de mute setado: ${role}`)

  if(!role) return message.channel.send(embed)

  if(role )
  
  db.set(`mute_${message.guild.id}`, role.id)
  
  message.channel.send(a3) 
  
}

exports.help = {
  name:'setmute',
  aliases: []
}