const Discord = require("discord.js");
const fs = require("fs");
const bot = new Discord.Client();
const http = require('http');
const express = require('express');
const config = require('./config.json')
const app = express();
const db = require('quick.db')
const request = require('request')
const translator = require('@vitalets/google-translate-api')
const dotenv = require('dotenv')
bot.aliases = new Discord.Collection();

dotenv.config()

app.get("/", (request, response) => {
  console.log(Date.now() + " Ping Recebido");
  response.sendStatus(200);
});

app.listen(process.env.PORT);

bot.login(process.env.TOKEN);

bot.commands = new Discord.Collection();

fs.readdir("./comandos/", (err, files) => {
    if (err) console.error(err);
 
    let arquivojs = files.filter(f => f.split(".").pop() === "js");
    arquivojs.forEach((f, i) => {
        let props = require(`./comandos/${f}`);
        console.log(`Comando ${f} iniciado`)
        bot.commands.set(props.help.name, props)
    if(props.help.aliases) props.help.aliases.forEach(alias => bot.commands.set(alias, props));
    });

});

bot.on('ready', () => {
    console.log('Ready to be used');
    
    var tabela = [
         {name: 'digite g.ajuda', type: 'PLAYING'},
         {name: `em ${bot.guilds.cache.size} servidores`, type: 'STREAMING', url: 'https://www.twitch.tv/gaules'},
         {name: `${bot.channels.cache.size} canais`, type: 'WATCHING'},
         {name: `${bot.users.cache.size} usuários`, type: 'LISTENING'}
    ]

       function setStatus(){
           var altstatus = tabela[Math.floor(Math.random() * tabela.length)]
           bot.user.setActivity(altstatus)         
       }

       setStatus();
       setInterval(() => setStatus(), 30000)
});

bot.on('messageUpdate', async (oldMessage, newMessage) => {
  
    let chx = db.get(`logchannel_${oldMessage.guild.id}`);
   
    if(chx === null){
      return;
    }  
  
   if(oldMessage.author.bot) return;
  
   if(oldMessage.content === newMessage.content) return;
  
   var canal = bot.channels.cache.get(chx)
  
   let embeds = new Discord.MessageEmbed()
   .setColor('RANDOM')
   .setTitle('**MENSAGEM EDITADA**')
   .setThumbnail(oldMessage.author.displayAvatarURL({dynamic: true}))
   .setFooter(`Grove • Todos direitos reservados`, bot.user.displayAvatarURL({dynamic: true}))
   .addField(`**:writing_hand: Editada por:**`, oldMessage.author)
   .addField(`**:hash: No canal:**`, oldMessage.channel)
   .addField(`**:outbox_tray: Antes:**`, `\`\`\`${oldMessage.content}\`\`\``)
   .addField(`**:inbox_tray: Depois:**`, `\`\`\`${newMessage.content}\`\`\``)
   .setTimestamp()
   
   canal.send(embeds)
})

bot.on('messageDelete', message => {

    let chx = db.get(`logchannel_${message.guild.id}`);
   
    if(chx === null){
      return;
    }  
  
   var canal = bot.channels.cache.get(chx)
   
   if(message.author.bot) {
     return;
   } else {
  
   let embed = new Discord.MessageEmbed()
   .setColor('RANDOM')
   .setTitle('**MENSAGEM APAGADA**')
   .setThumbnail(message.author.displayAvatarURL({dynamic: true}))
   .setFooter(`Grove • Todos direitos reservados`, bot.user.displayAvatarURL({dynamic: true}))
   .addField(`**🗑️ Apagada por:**`, message.author)
   .addField(`**:hash: No canal:**`, message.channel)
   .addField(`**:clipboard: Mensagem:**`, `\`\`\`${message}\`\`\``)
   .setTimestamp()
   
   canal.send(embed)
     
   }
})

bot.on('guildMemberUpdate', (oldMember, newMember) => {
  
   var membros = [oldMember.nickname, newMember.nickname];

   if(membros[0] == null) {
     membros[0] = oldMember.user.username
   }

   if(membros[1] == null) {
     membros[1] = newMember.user.username
   }

    let chx = db.get(`logchannel_${oldMember.guild.id}`);
   
    if(chx === null){
      return;
    }  
  
   var canal = bot.channels.cache.get(chx)

   if(oldMember.nickname != newMember.nickname) {

    let embed = new Discord.MessageEmbed()
   .setColor('RANDOM')
   .setTitle('**APELIDO ALTERADO**')
   .setThumbnail(oldMember.user.displayAvatarURL({dynamic: true}))
   .setFooter(`Grove • Todos direitos reservados`, bot.user.displayAvatarURL({dynamic: true}))
   .addField(`**:writing_hand: Alterado por:**`, `\`${newMember.user.tag}\``)
   .addField(`**:outbox_tray: Antes:**`, `\`\`\`${membros[0]}\`\`\``)
   .addField(`**:inbox_tray: Depois:**`, `\`\`\`${membros[1]}\`\`\``)
   .setTimestamp()
   
   canal.send({embed})

   }
  
})

bot.on('guildCreate', guild => {

  let users = bot.users.cache.size;
  let servidores = bot.guilds.cache.size;
  let canais = bot.channels.cache.size;
    setTimeout(() => {
     bot.channels.cache.get("737063422851547226").setName(`🌐 Servidores: ${servidores}`)
     bot.channels.cache.get("737064096834256938").setName(`💬 Canais: ${canais}`)
     bot.channels.cache.get("737063422851547227").setName(`👥 Usuários: ${users}`)
    }, 400)
  
  var canal = bot.channels.cache.get('737063423300599852')
  
  guild.owner.send(`<a:helloo:737094267096399914> **|** Olá ${guild.owner}, vi que me adicionou em seu servidor **${guild.name}** para saber meus comandos digite \`${config.prefix}ajuda\`\n\nAqui vai algumas dicas:\n\nPara que eu funcione perfeitamente, é preciso setar os canais.\n\n\`${config.prefix}setwelcome <canal>\` Para setar o canal de boas-vindas!\n\`${config.prefix}setgoodbye <canal>\` Para setar o canal de despedida!\n\`${config.prefix}setsugestion <canal>\`Para setar o canal de sugestões!\n\`${config.prefix}setpunishments <canal>\` Para setar o canal de punições!\n\`${config.prefix}setpatch <canal>\` Para setar o canal de patches!\n\`${config.prefix}setlogs <canal>\` Para setar o canal de logs!\n\`${config.prefix}setrole <cargo>\` Para setar um cargo que quando o usuário digitar \`${config.prefix}role\` irá ganhar\n\`${config.prefix}setmute <cargo>\` Para setar o cargo de mute\n\nTambém tenho meu servidor de suporte! digite \`${config.prefix}convite\` ou entre clicando no link a baixo\n\nhttps://discord.gg/xJMXX9A\n\nLá você poderá tirar suas dúvidas, reportar bugs, ter acesso com meu próprio criador e dar sugestões para eu melhorar cada vez mais! Espero que goste e que eu seja útil para você! :wink:`)
  
  let embed = new Discord.MessageEmbed()
  .setTitle('**ME ADICIONARAM EM UM SERVIDOR! <:Servidores:737101641655910501>**')
  .addField('**💻 Nome do servidor**', `\`${guild.name}\``)
  .addField('**<:id:737316544299663381> ID do servidor**', `\`${guild.id}\``)
  .addField('**<:pessoas:737094140264841257> Membros do servidor**', `\`${guild.members.cache.size}\``)
  .addField('**<:commandreload:737102191160197150> Canais do servidor**', `\`${guild.channels.cache.size}\``)
  .setFooter(`Dono do servidor: ${guild.owner.user.tag}`)
  .setThumbnail(guild.iconURL({dynamic: true}))
  .setColor('39FF14')
  .setTimestamp()
  
  canal.send(embed)
  
})

bot.on('guildDelete', guild => {

  let users = bot.users.cache.size;
  let servidores = bot.guilds.cache.size;
  let canais = bot.channels.cache.size;
    setTimeout(() => {
     bot.channels.cache.get("737063422851547226").setName(`🌐 Servidores: ${servidores}`)
     bot.channels.cache.get("737064096834256938").setName(`💬 Canais: ${canais}`)
     bot.channels.cache.get("737063422851547227").setName(`👥 Usuários: ${users}`)
    }, 400)
  
  guild.owner.send(`<a:helloo:737094267096399914> **|** Olá ${guild.owner}, vi que você me retirou do seu servidor **${guild.name}**, eu gostaria de saber o motivo :confused:\n\n Se você puder me informar o motivo na qual levou você a me **expulsar** do seu servidor, tenho meu próprio servidor no Discord para suporte, lá você pode conversar com o meu criador e dar sua opinião para que eu melhore cada vez mais!\n\nhttps://discord.gg/xJMXX9A\n\n Espero você lá, pense em mim, me de mais uma chance! :wink:`)
  
  var canal = bot.channels.cache.get('737063423300599852')
  
  let embed = new Discord.MessageEmbed()
  .setTitle('**ME REMOVERAM EM UM SERVIDOR! <:Servidores:737101641655910501>**')
  .addField('**💻 Nome do servidor**', `\`${guild.name}\``)
  .addField('**<:id:737316544299663381> ID do servidor**', `\`${guild.id}\``)
  .addField('**<:pessoas:737094140264841257> Membros do servidor**', `\`${guild.members.cache.size}\``)
  .addField('**<:commandreload:737102191160197150> Canais do servidor**', `\`${guild.channels.cache.size}\``)
  .setThumbnail(guild.iconURL({dynamic: true}))
  .setFooter(`Dono do servidor: ${guild.owner.user.tag}`)
  .setColor('FF0000')
  .setTimestamp()
  
  canal.send(embed)
  
})


bot.on('guildMemberAdd', membro => {

    let image = db.get(`welimage_${membro.guild.id}`)

    if(image === null) image = `https://imagensbrasil.org/images/2020/06/26/BEM-VINDO74d4bfaab098010b.png`
  
    let chx = db.get(`welchannel_${membro.guild.id}`);
    var canal = bot.channels.cache.get(chx)
    if(!canal) return;

    let embed = new Discord.MessageEmbed()
    .setColor('39FF14')
    .setTitle('BEM-VINDO(A)')
    .setDescription(`Seja muito bem-vindo(a) ${membro} ao servidor **${membro.guild.name}** !\n\n Agora somos **${bot.guilds.cache.get(membro.guild.id).members.cache.size}** membros no servidor!`)
    .addField('<:info:729476860060237895> Observação', `Leia as regras para evitar punições!`)
    .setThumbnail(membro.user.displayAvatarURL({dynamic: true}))
    .setImage(image)
    .setFooter(`ID do membro: ${membro.id}`)
    .setTimestamp()

    canal.send(embed)  
});

bot.on('guildMemberRemove', membro => {

  let image = db.get(`leaimage_${membro.guild.id}`)

    if(image === null) image = `https://imagensbrasil.org/images/2020/06/26/ATE_MAIS.png`
  
    let chx = db.get(`godchannel_${membro.guild.id}`);
  
    if(chx === null){
      return;
    }  
  
    var canal = bot.channels.cache.get(chx)
    
    let embed = new Discord.MessageEmbed()
    .setColor('FF0000')
    .setTitle('**O MEMBRO SAIU**')
    .setDescription(`O membro ${membro} saiu do servidor **${membro.guild.name}**\n\n Agora somos **${bot.guilds.cache.get(membro.guild.id).members.cache.size}** membros no servidor!!`)
    .setThumbnail(membro.user.displayAvatarURL({dynamic: true}))
    .setFooter(`ID do membro: ${membro.id}`)
    .setImage(image)
    .setTimestamp()

    canal.send({embed})
});

bot.on('message', async message => {
  
  let traduction_channel = db.get(`traduction_system_channels_${message.channel.id}`)
  
  if(traduction_channel) {    
    if(message.author.id === traduction_channel.user1) {
      
      let web1 = db.get(`traduction_system_channels_${message.channel.id}_web${message.author.id}`)     
      const webhook = new Discord.WebhookClient(web1.id, web1.token)      
      let user_language = db.get(`users_${traduction_channel.user2}`)   
      let other_user_language;
      
      if(user_language.idioma === "PT") other_user_language = "Portuguese"
      if(user_language.idioma === "EN") other_user_language = "English"
      
      let user_languagee;  
      let user = db.get(`users_${message.author.id}`)

      if(user.idioma === "PT") user_languagee = "Portuguese"
      if(user.idioma === "EN") user_languagee = "English"
      
      let traducted_text = await translator(message.content, { from: user_languagee, to: other_user_language })
      
      if(!message.attachments.first() && !message.mentions.users.first()) {
      
      webhook.send(traducted_text.text)      
      }      
      message.delete()    
    }
    
    if(message.author.id === traduction_channel.user2) {
      
      let web2 = db.get(`traduction_system_channels_${message.channel.id}_web${message.author.id}`)    
      const webhook = new Discord.WebhookClient(web2.id, web2.token)      
      let user_language = db.get(`users_${traduction_channel.user1}`)     
      let other_user_language;
      
      if(user_language.idioma === "PT") other_user_language = "Portuguese"
      if(user_language.idioma === "EN") other_user_language = "English"
      
      let user_languagee;
      let user = db.get(`users_${message.author.id}`)
      
      if(user.idioma === "PT") user_languagee = "Portuguese"
      if(user.idioma === "EN") user_languagee = "English"
      
      let traducted_text = await translator(message.content, { from: user_languagee, to: other_user_language })
      
      if(!message.attachments.first() && !message.mentions.users.first()) {
      
      webhook.send(traducted_text.text)   
      }
      message.delete() 
    } 
  }
})

bot.on('message', message => {

let blacklist = ['.com', 'https:', 'http:', '.io', '.it', 'www.', '.xyz']

let foundInText = false;
for(var i in blacklist) {
  if(message.content.toLowerCase().includes(blacklist[i].toLowerCase())) foundInText = true;
}

let blocklink = db.get(`blocklink_${message.guild}`)

if (blocklink === true) {
  if(foundInText === true) {

  let embed2 = new Discord.MessageEmbed()
  .setColor('FF0000')
  .setTitle('**LINK BLOQUEADO <:incorreto:737091863558750279>**')
  .setDescription('É proibido o envio de links neste servidor!\n Leia as regras para evitar punições.')
  .setTimestamp()
  .setFooter(`Grove • Todos direitos reservados`, bot.user.displayAvatarURL({dynamic: true}))
  
  message.channel.send(embed2).then(msg => {
    msg.delete({timeout : 3000})
  })
  message.delete()
  } else return;
 }
})

bot.on('message', message => {
  let blockinvite = db.get(`blockinvite_${message.guild}`)

  let blacklist = ['discord.gg', 'top.gg']

  let foundInText = false;
  for(var i in blacklist) {
    if(message.content.toLowerCase().includes(blacklist[i].toLowerCase())) foundInText = true;
  }

if(blockinvite === true)
  if(foundInText === true) {

  let embed = new Discord.MessageEmbed()
  .setColor('FF0000')
  .setTitle('**CONVITE BLOQUEADO <:incorreto:737091863558750279>**')
  .setDescription('É proibido o envio de convites de outros servidores neste servidor!\n Leia as regras para evitar punições.')
  .setTimestamp()
  .setFooter(`Grove • Todos direitos reservados`, bot.user.displayAvatarURL({dynamic: true}))

  message.channel.send(embed).then(msg => {
    msg.delete({timeout : 3000})
  })
  message.delete()
  } else {
    return;
  }
})

bot.on('message', message => {
    if(message.author.bot) return;
    if(message.channel === "dm") return;
  
    let prefix = config.prefix;
    let messageArray = message.content.split(" ");
    let command = messageArray[0];
    let args = messageArray.slice(1);
    
    let mentionEmbed = new Discord.MessageEmbed()
    .setDescription(`<a:helloo:737094267096399914> **|** Olá ${message.author} meu prefixo aqui é \`${prefix}\` digite \`${prefix}ajuda\` para saber meus comandos!`)
    
    if(message.content.startsWith(`<@${bot.user.id}>`) || message.content.startsWith(`<@!${bot.user.id}>`)) return message.channel.send(mentionEmbed)
    if(message.content.includes(`<@${bot.user.id}>`) || message.content.includes(`<@!${bot.user.id}>`)) {
      message.react('737092622224719883')

      let heart = (reaction, usuario) => reaction.emoji.id === "737092622224719883" && usuario.id === message.author.id;
      let coracao = message.createReactionCollector(heart, {max: 1});
     
      coracao.on('collect', cp => {
        message.channel.send('<:love:737092622224719883> <:love:737092622224719883> <:love:737092622224719883>')
      })
    }

    var canal = bot.channels.cache.get('737335340733562961')

    if(message.content.startsWith(prefix)){
      canal.send(`**${message.author.tag}** usou o comando: **${message.content}** no servidor **${message.guild.name} ( ${message.guild.id} )** `)
    }
  
    if (!message.content.startsWith(prefix)) return;
  
    let arquivocmd = bot.commands.get(command.slice(prefix.length));

    if(arquivocmd) {
      if(arquivocmd) arquivocmd.run(bot, message, args, prefix);
    }  else {

           let errox = new Discord.MessageEmbed()
          .setFooter(`Grove • Todos direitos reservados`, bot.user.displayAvatarURL({dynamic: true}))
          .setTitle('**<:incorreto:737091863558750279> | ERRO**')
          .setDescription(`<:commandreload:737102191160197150> **|** Este comando não foi encontrado!\nDigite \`${prefix}ajuda\` para saber meus comandos!`)
          .setTimestamp()

           return;
    }
});

bot.login(process.env.TOKEN)