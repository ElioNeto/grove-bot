const Discord = require('discord.js'); 
const weather = require('weather-js'); 
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
  
    weather.find({ 
        search: args, 
        degreeType: 'C' 
    }, function (err, result) { 
        if (err) console.log(err); 
        
        if (!result) return message.reply(`⚠️ **|** Você precisa me dizer uma cidade!`)
       
        if (!result[0]) return message.reply(`Desculpe, mas não encontrei essa cidade!`)
        let embed = new Discord.MessageEmbed()
            .setTitle('**☁️ CLIMA**')
            .setDescription(`**${result[0].location.name}**`)
            .addField(`**Temperatura**`, `${result[0].current.temperature}°C`)
            .addField(`**Sensação Térmica**`, `${result[0].current.feelslike}°C`)
            .addField(`**Umidade**`, `${result[0].current.humidity}%`)
            .addField(`**Vento**`, `${result[0].current.windspeed}`)
            .setColor('RANDOM')
            .setFooter(`Grove • Todos direitos reservados`, bot.user.displayAvatarURL({dynamic: true}))
            .setImage(result[0].current.imageUrl)
            .setTimestamp()   

        message.channel.send({embed})

    });
};

exports.help = { 
    name: 'clima',
    aliases: []
}