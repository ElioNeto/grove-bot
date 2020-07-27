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

    let blockINVITE = '<:desativado:737105999663595682> Block invite:'

    if(blockinvite === true) {

      blockINVITE = '<:ativado:737105957963825154> Block invite:'

      bi.push('Ativado')
    } else {
      bi.push('Desativado')
    }

    let blockLINK = '<:desativado:737105999663595682> Block link:'

     if(blocklink === true) {
 
     blockLINK = '<:ativado:737105957963825154> Block link:'

      bl.push('Ativado')
    } else {
      bl.push('Desativado')
    }

    let embed = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setTitle('**INFORMAÇÕES DO SERVIDOR**')
    .setThumbnail(message.guild.iconURL({dynamic: true}))
    .addField('Informações', `💻 Nome do servidor: \`${message.guild.name}\`
    <:pessoas:737094140264841257> Membros no servidor: \`${bot.guilds.cache.get(message.guild.id).members.cache.size}\`
    <a:config:737103260459991080> Criador do servidor: \`${message.guild.owner.user.tag}\`
    <:globo:737356212026212403> Região do servidor: \`${regions[message.guild.region]}\`
    <:erro:737356271635923025> Filtro do servidor : \`${filterLevels[message.guild.explicitContentFilter]}\`
    <:id:737316544299663381> ID do servidor: \`${message.guild.id}\`
    <a:veri:737094028419399690> Nível de verificação: \`${verificationLevels[message.guild.verificationLevel]}\`
    <:Calendario:737097284541612032> Servidor criado em: \`${moment(message.guild.createdAt).format('LLL')}\`
    <:Calendario:737097284541612032> Você entrou aqui em: \`${moment(message.member.joinedAt).format('LLL')}\`
    ${blockLINK} \`${bl.join(' ')}\`
    ${blockINVITE} \`${bi.join(' ')}\``)
    .addField('Estatísticas', `<:emoji:737317098711154742> Quantidade de cargos: \`${roles.length}\`
    <:emoji:737317098711154742> Quantidade de emojis: \`${emojis.size}\`
    <:emoji:737317098711154742> Emojis regulares: \`${emojis.filter(emoji => !emoji.animated).size}\`
    <a:sino:737115714460319804> Emojis animados: \`${emojis.filter(emoji => emoji.animated).size}\`
    <:humanos:737356673076822058> Humanos: \`${members.filter(member => !member.user.bot).size}\`
    <:bot_simb:737102399629426698> Robôs: \`${members.filter(member => member.user.bot).size}\`
    <a:texto:737103192160075898> Canais de texto: \`${channels.filter(channel => channel.type === 'text').size}\`
    <:som:737356784481861682> Canais de voz: \`${channels.filter(channel => channel.type === 'voice').size}\``)
    .addField('Atividade dos usuários', `<:on:737092700716662865> Diponíveis: \`${members.filter(member => member.presence.status === 'online').size}\`
    <:ausente:737101962583212084> Ausentes: \`${members.filter(member => member.presence.status === 'idle').size}\`
    <:dnd:737102054501253143> Não perturbar: \`${members.filter(member => member.presence.status === 'dnd').size}\`
    <:Offiline:737101779719815189> Invisíveis: \`${members.filter(member => member.presence.status === 'offline').size}\``)    
    .setFooter(`Grove • Todos direitos reservados`, bot.user.displayAvatarURL({dynamic: true}))
    .setTimestamp()   

    message.channel.send({embed})
}

exports.help = {
    name: 'serverinfo',
    aliases: []
}