const Discord = require('discord.js');
const db = require("quick.db")

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
    .setDescription("<:incorreto:737091863558750279> **|** Mencione qual usuário deseja banir, e por qual motivo!")

    let a2 = new Discord.MessageEmbed()
    .setDescription("<:incorreto:737091863558750279> **|** Você não pode banir você mesmo!")

  var membro = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
  if (!membro) return message.channel.send(a1);
  if (membro === message.member) return message.channel.send(a2);

  let a3 = new Discord.MessageEmbed()
  .setDescription(`<:incorreto:737091863558750279> **|** Você precisa ser um moderador para fazer isto!`)

  let a4 = new Discord.MessageEmbed()
  .setDescription(`<:incorreto:737091863558750279> **|** Eu preciso ter a permissão de banir usuários para fazer isto!`)

  var motivo = args.slice(1).join(" ");
  if(!motivo) motivo = ("Nenhum motivo especificado.");
  if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send(a3); 
  if (!message.guild.me.hasPermission("BAN_MEMBERS")) return message.channel.send(a4); 

   let chx = db.get(`punchannel_${membro.guild.id}`);
  
    if(chx === null){

      let a5 = new Discord.MessageEmbed()
    .setDescription('<:incorreto:737091863558750279> **|** Não há nenhum canal de punição setado!')

      return message.channel.send(a5);
    }  
  
  var canal = bot.channels.cache.get(chx)

  let a6 = new Discord.MessageEmbed()
 .setDescription('<:membros:729454785216118794> **|** Você tem certeza que deseja banir este usuário?')

  let confirm_msg = await message.channel.send(a6)
      confirm_msg.react("729451917004242964");
      confirm_msg.react('729451886683619438')

      let filtro = (reaction, usuario) => reaction.emoji.id === "729451917004242964" && usuario.id === message.author.id;
      let coletor = confirm_msg.createReactionCollector(filtro, {max: 1});

          let embed = new Discord.MessageEmbed()
          .setColor('FF0000')
          .setTitle(`**MEMBRO BANIDO <:ban:729462106721746946>**`)
          .setDescription(`\n\n<:membros:729454785216118794> Membro: ${membro}\n\n<:equipe:729455442677203025> Motivo: **${motivo}**`)
          .setThumbnail(membro.user.displayAvatarURL({dynamic: true}))
          .setTimestamp()   
          .addField('<:info:729476860060237895> Observação', `Ningúem mandou descumprir as regras do servidor!`)
          .setFooter(`Grove • Todos direitos reservados`, bot.user.displayAvatarURL({dynamic: true}))
          coletor.on("collect", cp => {
          cp.remove(message.author.id);
          membro.ban();

          canal.send({embed})
          confirm_msg.delete()
          message.delete()
      })

      let filtro2 = (reaction, usuario) => reaction.emoji.id === "729451886683619438" && usuario.id === message.author.id;
          let coletor2 = confirm_msg.createReactionCollector(filtro2, {max: 1});

          let embed2 = new Discord.MessageEmbed()
          .setDescription('<:incorreto:737091863558750279> **|** Cancelado com sucesso.')
          coletor2.on('collect', cp => {

          message.channel.send(embed2)
          confirm_msg.delete()
          message.delete()
          
          })
 }

exports.help = {
  name: 'ban',
  aliases: ['banir']
}