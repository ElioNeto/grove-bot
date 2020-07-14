const Discord = require('discord.js')
const db = require('quick.db')
const ms = require('ms')
const translate = require('@vitalets/google-translate-api');

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
    .setDescription(`<:incorreto:729451886683619438> **|** Você precisa ser um moderador para fazer isto!`)

    let a2 = new Discord.MessageEmbed()
    .setDescription('<:incorreto:729451886683619438> **|** Não hà nenhum cargo de mute setado!')

    let a3 = new Discord.MessageEmbed()
    .setDescription('<:incorreto:729451886683619438> **|** É preciso me informar um usuário!')

    let a4 = new Discord.MessageEmbed()
    .setDescription('<:incorreto:729451886683619438> **|** Você não pode silenciar você mesmo!')

    if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(a1); 

    const mute = db.get(`mute_${message.guild.id}`)
    if(!mute) return message.channel.send(a2)

    var membro = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
    if(!membro) return message.channel.send(a3)
    if(membro === message.member) return message.channel.send(a4)

    let a5 = new Discord.MessageEmbed()
    .setDescription('<:incorreto:729451886683619438> **|** Você precisa me informar o tempo que o usuário será silenciado!')

    let Timer = args[1];

    if(!args[1]) return message.channel.send(a5) 

    let a6 = new Discord.MessageEmbed()
    .setDescription('<:incorreto:729451886683619438> **|** O tempo precisa ser maior que zero!')

    let a7 = new Discord.MessageEmbed()
    .setDescription(`<:correto:729451917004242964> **|** O membro ${membro} foi silenciado por \`${ms(ms(Timer), {long: true})}\` com sucesso!`) 

    if(args[1] <= 0) return message.channel.send(a6)

    membro.roles.add(mute)
    message.channel.send(a7)

     setTimeout(function(){ 

       let a8 = new Discord.MessageEmbed()
       .setDescription(`<:correto:729451917004242964> **|** O membro ${membro} aprendeu a falar novamente depois de \`${ms(ms(Timer), {long: true})}\`!`)

     membro.roles.remove(mute)
     message.channel.send(a8)

  }, ms(Timer));
}

exports.help = {
  name: 'tempmute',
  aliases: []
}