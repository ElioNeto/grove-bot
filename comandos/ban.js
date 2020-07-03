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

  var membro = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
  if (!membro) return message.reply("⚠️ **|** Mencione qual usuário deseja banir, e por qual motivo!");
  if (membro === message.member) return message.reply("❌ **|** Você não pode banir você mesmo.");

  var motivo = args.slice(1).join(" ");
  if(!motivo) motivo = ("Nenhum motivo especificado.");
  if (!message.member.hasPermission("BAN_MEMBERS")) return message.reply(`❌ **|** Você precisa ser um moderador para fazer isto!`); 
  if (!message.guild.me.hasPermission("BAN_MEMBERS")) return message.reply(`❌ **|** Eu preciso ter a permissão de banir usuários para fazer isto!`); 

   let chx = db.get(`punchannel_${membro.guild.id}`);
  
    if(chx === null){
      return message.reply('❌ **|** Não há nenhum canal de punição setado!');
    }  
  
  var canal = bot.channels.cache.get(chx)

  let confirm_msg = await message.reply('⚠️ **|** Você tem certeza que deseja banir este usuário?')
      confirm_msg.react("👍");

      let filtro = (reaction, usuario) => reaction.emoji.name === "👍" && usuario.id === message.author.id;
      let coletor = confirm_msg.createReactionCollector(filtro, {max: 1});

          let embed = new Discord.MessageEmbed()
          .setColor('FF0000')
          .setTitle(`**MEMBRO BANIDO**`)
          .setDescription(`\n\nMembro: ${membro}\n\nMotivo: **${motivo}**`)
          .setThumbnail(membro.user.displayAvatarURL({dynamic: true}))
          .setTimestamp()   
          .addField('OBSERVAÇÃO', `Ningúem mandou descumprir as regras do servidor!`)
          .setFooter(`Grove • Todos direitos reservados`, bot.user.displayAvatarURL({dynamic: true}))
          coletor.on("collect", cp => {
          cp.remove(message.author.id);
          membro.ban();

          canal.send({embed})
          confirm_msg.delete()
          message.delete()
      })
 }

exports.help = {
  name: 'ban',
  aliases: ['banir']
}