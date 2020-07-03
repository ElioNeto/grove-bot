const Discord = require('discord.js')
const db = require('quick.db')
const ms = require('ms')

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

    const mute = db.get(`mute_${message.guild.id}`)
    if(!mute) return message.reply('❌ **|** Não hà nenhum cargo de mute setado!')

    var membro = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
    if(!membro) return message.reply('❌ **|** É preciso me informar um usuário!')
    if(membro === message.member) return message.reply('❌ **|** Você não pode silenciar você mesmo!')

    let Timer = args[1];

    if(!args[1]) return message.reply('❌ **|** Você precisa me informar o tempo que o usuário será silenciado!')

    if(args[1] <= 0) return message.reply('❌ **|** O tempo precisa ser maior que zero!')

    membro.roles.add(mute)
    message.channel.send(`✅ **|** O membro ${membro} foi silenciado por \`${ms(ms(Timer), {long: true})}\` com sucesso!`)

     setTimeout(function(){ 

     membro.roles.remove(mute)
     message.channel.send(`✅ **|** O membro ${membro} aprendeu a falar novamente!`)

  }, ms(Timer));
}


exports.help = {
  name: 'tempmute',
  aliases: []
}