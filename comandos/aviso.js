const Discord = require("discord.js");

module.exports.run = async (client, message, args) =>{

    message.delete().catch(O_o=>{});
    if(!message.member.hasPermission('MANAGE_MESSAGES'))
      return message.reply("você não tem permissão! :x:");
    
    const comousar = new Discord.RichEmbed()
      .setAuthor("Kally", client.user.avatarURL)
      .setTitle("k!aviso")
      .setDescription(`Irá avisar o usuário mencionado.`)
      .setColor("#22a7cc")
      .setFooter("© Kally - k!convite - kally.glitch.me")
      .addField("Como usar:", "`k!aviso @usuário <motivo>`\n`k!aviso @LockDzn#8368 Spam`")
      .addField("Permissão:", "O staff que for avisar o usuário tem que esta em um cargo com a permissão `Gerenciar mensagens`")
    
    let member = message.mentions.members.first();
    if(!member)
      return message.channel.send(message.author, comousar).then(msg => msg.delete(10000));
    
    let motivo = args.slice(1).join(' ');
    if(!motivo)
      return message.channel.send(message.author, comousar).then(msg => msg.delete(10000));
    
    member.send("**AVISADO:** Você foi avisado pelo motivo: `" + motivo + "`");
    
   const warn = new Discord.RichEmbed()
       .setAuthor(member.user.tag + ' | Warn', member.user.avatarURL)
       .setDescription(`${member.user.tag} (ID: ${member.user.id}) não respeitou as regras e foi avisado! :worried: `)
       .setColor("ff0000")

       .setThumbnail(member.user.avatarURL)

       .setTimestamp()
       .setFooter("© Kallyᴮᴱᵀᴬ Moderação", message.author.avatarURL)

        .addField("Motivo:", motivo)

        .addField("Staffer:", message.author)
        
    message.channel.send(warn)

}
