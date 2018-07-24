const Discord = require("discord.js");
const fs = require("fs");
let warns = JSON.parse(fs.readFileSync("./warnings.json", "utf8"));

module.exports.run = async (client, message, args) =>{

    message.delete().catch(O_o=>{});
    if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply(`você não tem permissão! ${emojinop}`).then(msg => msg.delete(6000));
    const comousar = new Discord.RichEmbed()
      .setAuthor("Kally", client.user.avatarURL)
      .setTitle("k!avisos")
      .setDescription(`Irá mostra quantos avisos o usuário mencinado tem.`)
      .setColor("#22a7cc")
      .setFooter("© Kally - k!convite - kally.glitch.me")
      .addField("Como usar:", "`k!aviso @usuário`\n`k!aviso @LockDzn#8368`")
      .addField("Permissão:", "O staff que for ver os avisos tem que está em um cargo com a permissão `Gerenciar mensagens`")
    let member = message.mentions.members.first();
    if(!member)
        return message.channel.send(message.author, comousar).then(msg => msg.delete(10000));
    
    if(!warns[`${member.user.id}-${message.guild.id}`]) warns[`${member.user.id}-${message.guild.id}`] = {
        warns: 0
    };
    
    const avisoseb = new Discord.RichEmbed()
      .setAuthor(member.user.tag, member.user.avatarURL)
      .setDescription(`${member} tem **${warns[`${member.user.id}-${message.guild.id}`].warns}** avisos!`)
      .setColor("#22a7cc")
      .setFooter("© Kally - kally.glitch.me")
    message.channel.send(message.author, avisoseb)
   
   
   
}
