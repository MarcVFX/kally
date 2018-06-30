const Discord = require("discord.js");

module.exports.run = async (client, message, args) =>{

    message.delete().catch(O_o=>{});
    if(!message.member.hasPermission('KICK_MEMBERS')) return message.reply("você não tem permissão! :x:").then(msg => msg.delete(6000));
    const comousar = new Discord.RichEmbed()
      .setAuthor("Kally", client.user.avatarURL)
      .setTitle("k!kick")
      .setDescription(`Irá kikar o usuário mencionado.`)
      .setColor("#60d1f6")
      .setFooter("© Kally - kally.glitch.me")
      .addField("Como usar", "`k!kick @usuário <motivo>`")
      .addField("Permissão", "O staff que for kikar tem que está em um cargo com a permissão `Expulsar membros`")
     let member = message.mentions.members.first();
    if(!member)
        return message.channel.send(message.author, comousar).then(msg => msg.delete(10000));
     if(!member.bannable) 
        return message.reply("eu não posso expulsar esse usuário! Ele(a) têm um cargo maior.");

    let motivo = args.slice(1).join(' ');
    if(!motivo) motivo = "Não informado";
  
    await member.kick(`Expulso por: ${message.author.tag} | Motivo: ` + motivo)
      .catch(error => message.reply(`Desculpa ${message.author} Eu não poderia banir por causa de: ${error}`));
      
      
    const emojizoioban = client.guilds.get("420316735149965322").emojis.find("name", "zoioBAN");
    const kickmsg = new Discord.RichEmbed()
        .setTitle(`${message.author.tag} | Expulso`)
        .setDescription(`Você foi expulso do servidor **${message.guild.name}**! :worried:`)
        .setColor("#aa0303")
        .setThumbnail(member.user.avatarURL)
        .addField("📋 Motivo:", motivo)
        .setTimestamp()
        .setFooter("© Kally Moderação")
     
      
    const kikado = new Discord.RichEmbed()
        .setTitle(`${member.user.tag} | Expulso`)
        .setDescription(`**${member.user.tag}** foi expulso do servidor! :worried:`)
        .setColor("#aa0303")
        .setThumbnail(message.author.avatarURL)
        .addField("👮 Por:", message.author)
        .addField("📋 Motivo:", motivo)
        .setTimestamp()
        .setFooter("© Kally Moderação - k!convite")
        
    if(message.guild.channels.find("name", "punidos")){
        let guild = message.guild.channels.find("name", "punidos");   
        guild.send(kikado).catch(O_o=>{});
        member.send(kickmsg).catch(O_o=>{});
        message.channel.send(`:white_check_mark: | ${message.author} usuário punido com sucesso!`)
    }else if(message.guild.channels.find("name", "🚫punidos")){
        let guild = message.guild.channels.find("name", "🚫punidos");
        guild.send(kikado).catch(O_o=>{});
        member.send(kickmsg).catch(O_o=>{})
        message.channel.send(`:white_check_mark: | ${message.author} usuário punido com sucesso!`)
    } else if(message.guild.channels.find("name", "punições")){
        let guild = message.guild.channels.find("name", "punições");
        guild.send(kikado).catch(O_o=>{});
        member.send(kickmsg).catch(O_o=>{})
        message.channel.send(`:white_check_mark: | ${message.author} usuário punido com sucesso!`)
    }else if(message.guild.channels.find("name", "🚫punições")){
        let guild = message.guild.channels.find("name", "🚫punições");
        guild.send(kikado).catch(O_o=>{});
        member.send(kickmsg).catch(O_o=>{})
        message.channel.send(`:white_check_mark: | ${message.author} usuário punido com sucesso!`)
    } else {
        guild.send(kikado).catch(O_o=>{});
        member.send(kickmsg).catch(O_o=>{})
    }
}
