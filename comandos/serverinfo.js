const Discord = require('discord.js')
const moment = require('moment')
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

    const verificationLevels = {
	NONE: 'Nenhum',
	LOW: 'Baixo',
	MEDIUM: 'Médio',
	HIGH: 'Alta',
	VERY_HIGH: 'Mais alta'
};

const regions = {
	brazil: 'Brasil',
	europe: 'Europa',
	hongkong: 'Hong Kong',
	india: 'índia',
	japan: 'Japão',
	russia: 'Rússia',
	singapore: 'Singapura',
	southafrica: 'África',
	sydeny: 'Sydeny',
	'us-central': 'US Central',
	'us-east': 'US East',
	'us-west': 'US West',
	'us-south': 'US South'
};

const filterLevels = {
	DISABLED: 'Desativado',
	MEMBERS_WITHOUT_ROLES: 'Sem cargo',
	ALL_MEMBERS: 'Todos'
};

    const roles = message.guild.roles.cache.sort((a, b) => b.position - a.position).map(role => role.toString());
    const members = message.guild.members.cache;
		const channels = message.guild.channels.cache;
    const emojis = message.guild.emojis.cache;

    let blocklink = db.get(`blocklink_${message.guild}`)

    let blockinvite = db.get(`blockinvite_${message.guild}`)

    var bi = [];
    
    var bl = [];

    if(blockinvite === true) {
      bi.push('Ativado')
    } else {
      bi.push('Desativado')
    }

     if(blocklink === true) {
      bl.push('Ativado')
    } else {
      bl.push('Desativado')
    }

    let embed = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setTitle('**INFORMAÇÕES DO SERVIDOR**')
    .setThumbnail(message.guild.iconURL({dynamic: true}))
    .addField('Informações', `💻 Nome do servidor: \`${message.guild.name}\`
    👤 Membros no servidor: \`${bot.guilds.cache.get(message.guild.id).members.cache.size}\`
    🔧 Criador do servidor: \`${message.guild.owner.user.tag}\`
    🌎 Região do servidor: \`${regions[message.guild.region]}\`
    🤬 Filtro do servidor : \`${filterLevels[message.guild.explicitContentFilter]}\`
    🆔 ID do servidor: \`${message.guild.id}\`
    ✅ Nível de verificação: \`${verificationLevels[message.guild.verificationLevel]}\`
    📅 Servidor criado em: \`${moment(message.guild.createdAt).format('LLL')}\`
    📅 Você entrou aqui em: \`${moment(message.member.joinedAt).format('LLL')}\`
    🚫 Block link: \`${bl.join(' ')}\`
    🚫 Block invite: \`${bi.join(' ')}\``, true)
    .addField('Estatísticas', `♾️ Quantidade de cargos: \`${roles.length}\`
    ♾️ Quantidade de emojis: \`${emojis.size}\`
    ✋🏼 Emojis regulares: \`${emojis.filter(emoji => !emoji.animated).size}\`
    👋 Emojis animados: \`${emojis.filter(emoji => emoji.animated).size}\`
    👱‍♂️ Humanos: \`${members.filter(member => !member.user.bot).size}\`
    🤖 Robôs: \`${members.filter(member => member.user.bot).size}\`
    💬 Canais de texto: \`${channels.filter(channel => channel.type === 'text').size}\`
    🔊 Canais de voz: \`${channels.filter(channel => channel.type === 'voice').size}\``)
    .addField('Atividade dos usuários', `🟢 Online: \`${members.filter(member => member.presence.status === 'online').size}\`
    🟡 Ausente: \`${members.filter(member => member.presence.status === 'idle').size}\`
    🔴 Não perturbe: \`${members.filter(member => member.presence.status === 'dnd').size}\`
    ⚪ Offline: \`${members.filter(member => member.presence.status === 'offline').size}\``)    
    .setFooter(`Grove • Todos direitos reservados`, bot.user.displayAvatarURL({dynamic: true}))
    .setTimestamp()   

    message.channel.send({embed})
}

exports.help = {
    name: 'serverinfo',
    aliases: []
}