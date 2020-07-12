const Discord = require("discord.js");
const cpuStat = require("cpu-stat");
const os = require('os');
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
  
  cpuStat.usagePercent(function (err, percent, seconds) {
  if (err) {
    return console.log(err);
  }
              
  let emb = new Discord.MessageEmbed()

  .setTitle('**USO DA CPU <:servidores:729462514928058417>**')
  .setThumbnail('https://image.flaticon.com/icons/png/512/1892/1892518.png')
  .addField("<:pc:729460019111657503> | **Modelo**", `\`${os.cpus().map(i => `${i.model}`)[0]}\``)
  .addField("<:cpu:730254692042407986> | **Uso**", `\`${percent.toFixed(2)}%\``)
  .addField("<:memoria:730254665576349768> | **Memória Utilizada**", `\`${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}\` / \`${(os.totalmem() / 1024 / 1024).toFixed(2)} MB\``)
  .setColor('RANDOM')
  .setTimestamp()
  .setFooter(`Grove • Todos direitos reservados`, bot.user.displayAvatarURL({dynamic: true}))
  
  message.channel.send(emb)

  })
}

exports.help = {
    name: 'cpu',
    aliases: ['cpuinfo']
}