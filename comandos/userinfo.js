const Discord = require('discord.js');
const moment = require("moment"); 
moment.locale('pt-BR') 
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

    var permissions = []; 
  
    const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;

   const randomColor = "F8F8FF".replace(/0/g, function () { return (~~(Math.random() * 16)).toString(16); }); 
    
   
    if(message.member.hasPermission("KICK_MEMBERS")){
        permissions.push("Expulsar membros");
    }
    
    if(message.member.hasPermission("BAN_MEMBERS")){
        permissions.push("Banir membros");
    }
    
    if(message.member.hasPermission("ADMINISTRATOR")){
        permissions.push("Administrador");
    }

    if(message.member.hasPermission("MANAGE_MESSAGES")){
        permissions.push("Gerenciar mensagens");
    }
    
    if(message.member.hasPermission("MANAGE_CHANNELS")){
        permissions.push("Gerenciar canais");
    }
  
    if(message.member.hasPermission("MANAGE_NICKNAMES")){
        permissions.push("Gerenciar apelidos");
    }

    if(message.member.hasPermission("MANAGE_ROLES")){
        permissions.push("Gerenciar cargos");
    }

    if(message.member.hasPermission("MANAGE_WEBHOOKS")){
        permissions.push("Gerenciar webhooks");
    }

    if(message.member.hasPermission("MANAGE_EMOJIS")){
        permissions.push("Gerenciar emojis");
    }

    if(permissions.length == 0){ 
        permissions.push("Nenhuma permissão detectada");
    }

    let embed = new Discord.MessageEmbed()
        .setAuthor(`${member.user.username}`, member.user.displayAvatarURL({dynamic: true}))
        .setColor('RANDOM')
        .setFooter(`Grove • Todos direitos reservados`, bot.user.displayAvatarURL({dynamic: true}))
        .setThumbnail(member.user.displayAvatarURL({dynamic: true}))
        .addField('Entrou aqui em',`\`${moment(member.joinedAt).format("LLL")}\``)
        .addField("Conta criada em",`\`${moment(member.user.createdAt).format("LLL")}\``, true)
        .addField("Permissões", `${permissions.join(', ')}`)
        .addField(`Cargos [${member.roles.cache.filter(r => r.id !== message.guild.id).map(a => `\`${a.name}\``).length}]`,`${member.roles.cache.filter(r => r.id !== message.guild.id).map(roles => `<@&${roles.id }>`).join(', ') || "Esse membro não possui cargos."}`, true)
        .setTimestamp()   

        message.channel.send({embed})
}
exports.help = { 
    name: 'userinfo',
      aliases: []
}