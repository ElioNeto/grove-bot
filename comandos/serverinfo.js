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

    let blockINVITE = '<:desativado:730235950046904330> Block invite:'

    if(blockinvite === true) {

      blockINVITE = '<:ativado:730235937166065752> Block invite:'

      bi.push('Ativado')
    } else {
      bi.push('Desativado')
    }

    let blockLINK = '<:desativado:730235950046904330> Block link:'

     if(blocklink === true) {
 
     blockLINK = '<:ativado:730235937166065752> Block link:'

      bl.push('Ativado')
    } else {
      bl.push('Desativado')
    }

    let embed = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setTitle('**INFORMAÇÕES DO SERVIDOR**')
    .setThumbnail(message.guild.iconURL({dynamic: true}))
    .addField('Informações', `<:pc:729460019111657503> Nome do servidor: \`${message.guild.name}\`
    <:membros:729454785216118794> Membros no servidor: \`${bot.guilds.cache.get(message.guild.id).members.cache.size}\`
    <:config:729463779292610623> Criador do servidor: \`${message.guild.owner.user.tag}\`
    <:globo:729463751287242793> Região do servidor: \`${regions[message.guild.region]}\`
    <:erro:729456202139828314> Filtro do servidor : \`${filterLevels[message.guild.explicitContentFilter]}\`
    <:id:729455876582277270> ID do servidor: \`${message.guild.id}\`
    <:discordveri:729471223398137907> Nível de verificação: \`${verificationLevels[message.guild.verificationLevel]}\`
    <:data:729464516898979872> Servidor criado em: \`${moment(message.guild.createdAt).format('LLL')}\`
    <:data:729464516898979872> Você entrou aqui em: \`${moment(message.member.joinedAt).format('LLL')}\`
    ${blockLINK} \`${bl.join(' ')}\`
    ${blockINVITE} \`${bi.join(' ')}\``)
    .addField('Estatísticas', `<:emoji:729467612253126666> Quantidade de cargos: \`${roles.length}\`
    <:emoji:729467612253126666> Quantidade de emojis: \`${emojis.size}\`
    <:emoji:729467612253126666> Emojis regulares: \`${emojis.filter(emoji => !emoji.animated).size}\`
    <a:sino:729452561031102494> Emojis animados: \`${emojis.filter(emoji => emoji.animated).size}\`
    <:nab:729467164553379920> Humanos: \`${members.filter(member => !member.user.bot).size}\`
    <:bot:729463406578499605> Robôs: \`${members.filter(member => member.user.bot).size}\`
    <:texto:729463024372547676> Canais de texto: \`${channels.filter(channel => channel.type === 'text').size}\`
    <:som:729463006341103618> Canais de voz: \`${channels.filter(channel => channel.type === 'voice').size}\``)
    .addField('Atividade dos usuários', `<:online:729460721963892826> Diponíveis: \`${members.filter(member => member.presence.status === 'online').size}\`
    <:ausente:729460709921915010> Ausentes: \`${members.filter(member => member.presence.status === 'idle').size}\`
    <:dnd:729460731619311678> Não perturbar: \`${members.filter(member => member.presence.status === 'dnd').size}\`
    <:offline:729459670061678693> Invisíveis: \`${members.filter(member => member.presence.status === 'offline').size}\``)    
    .setFooter(`Grove • Todos direitos reservados`, bot.user.displayAvatarURL({dynamic: true}))
    .setTimestamp()   

    message.channel.send({embed})
}

exports.help = {
    name: 'serverinfo',
    aliases: []
}