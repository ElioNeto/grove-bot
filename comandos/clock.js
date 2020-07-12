const db = require("quick.db");
const Discord = require("discord.js");
const c = require('../config.json');

exports.run = async (bot, message, args) => {

if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`<:alert:696822589208920124> **»** Kon'nichiwa **${message.author.username}**, você precisa da permissão \`ADMINISTRATOR\`.`)
    if (!args.join(" ")) return message.channel.send(erro)
    if (isNaN(args.join(' '))) return message.channel.send(erro)
   
    var canalblock = db.set(`messageid_${message.guild.id}`, args.join(" ").trim())

    message.channel.send(`<a:yep:698221405434806282> **»** Bloqueio realizado com sucesso. Eu não responderei à comandos no canal <#${canalblock}>!`)

}

exports.help = {
    name: 'lockcommand',
    aliases: ['lock', 'lockcmd']
}