const Discord = require("discord.js");

module.exports.run = async (client, message, args) =>{

    message.delete().catch(O_o=>{});
    if(!message.member.hasPermission('BAN_MEMBERS')) return message.reply("você não tem permissão! :x:").then(msg => msg.delete(6000));
    const comousar = new Discord.RichEmbed()
      .setAuthor("Kally", client.user.avatarURL)
      .setTitle("k!ban")
      .setDescription(`Irá banir o usuário mencionado.`)
      .setColor("#22a7cc")
      .setFooter("© Kally - k!convite - kally.glitch.me")
      .addField("Como usar:", "`k!ban @usuário <motivo>`\n`k!ban @LockDzn#8368 Otário`")
      .addField("Permissão:", "O staff que for banir tem que esta em um cargo com a permissão `Banir membros`")
     let member = message.mentions.members.first();
    if(!member)
        return message.channel.send(message.author, comousar).then(msg => msg.delete(10000));
     if(!member.bannable) 
        return message.reply("eu não posso banir esse usuário! Ele(a) têm um cargo maior.");

    let motivo = args.slice(1).join(' ');
    if(!motivo) motivo = "Não informado";
  
    await member.ban(`Banido por: ${message.author.tag} | Motivo: ` + motivo)
        .catch(error => message.reply(`Desculpa ${message.author}, eu não poderia banir por causa de: \```js\n${error}\````));
      
      
    const emojizoioban = client.guilds.get("420316735149965322").emojis.find("name", "zoioBAN");
    const banmsg = new Discord.RichEmbed()
        .setTitle(`${member.user.tag} | Banido`)
        .setDescription(`Você foi banido do servidor **${message.guild.name}**! ${emojizoioban}`)
        .setColor("#aa0303")
        .setThumbnail(member.user.avatarURL)
        .addField("📋 Motivo:", motivo)
        .setTimestamp()
        .setFooter("© Kally Moderação")
     
      
    const banido = new Discord.RichEmbed()
        .setTitle(`$member.user.tag} | Banido`)
        .setDescription(`**${member.user.tag}** foi banido do servidor! ${emojizoioban}`)
        .setColor("#aa0303")
        .setThumbnail(message.author.avatarURL)
        .addField("👮 Por:", message.author)
        .addField("📋 Motivo:", motivo)
        .setTimestamp()
        .setFooter("© Kally Moderação - k!convite")

    if(message.guild.channels.find("name", "punidos")){
        let guild = message.guild.channels.find("name", "punidos");   
        guild.send(banido).catch(O_o=>{});
        member.send(banmsg).catch(O_o=>{});
        message.channel.send(`:white_check_mark: | ${message.author} usuário punido com sucesso!`)
    }else if(message.guild.channels.find("name", "🚫punidos")){
        let guild = message.guild.channels.find("name", "🚫punidos");
        guild.send(banido).catch(O_o=>{});
        member.send(banmsg).catch(O_o=>{});
        message.channel.send(`:white_check_mark: | ${message.author} usuário punido com sucesso!`)
    } else if(message.guild.channels.find("name", "punições")){
        let guild = message.guild.channels.find("name", "punições");
        guild.send(banido).catch(O_o=>{});
        member.send(banmsg).catch(O_o=>{});
        message.channel.send(`:white_check_mark: | ${message.author} usuário punido com sucesso!`)
    }else if(message.guild.channels.find("name", "🚫punições")){
        let guild = message.guild.channels.find("name", "🚫punições");
        guild.send(banido).catch(O_o=>{});
        member.send(banmsg).catch(O_o=>{});
        message.channel.send(`:white_check_mark: | ${message.author} usuário punido com sucesso!`)
    } else {
        message.channel.send(banido)
        member.send(banmsg).catch(O_o=>{});
    }
}
