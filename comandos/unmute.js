const Discord = require("discord.js");

module.exports.run = async (client, message, args) =>{

    message.delete().catch(O_o=>{});
    if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply("você não tem permissão! :x:").then(msg => msg.delete(6000));
    const comousar = new Discord.RichEmbed()
      .setAuthor("Kally", client.user.avatarURL)
      .setTitle("k!unmute")
      .setDescription(`Irá desmutar o usuário mencionado.`)
      .setColor("#22a7cc")
      .setFooter("© Kally - k!convite - kally.glitch.me")
      .addField("Como usar:", "`k!unmute @usuário`\n`k!unmute @LockDzn#8368`")
      .addField("Permissão:", "O staff que for mutar tem que esta em um cargo com a permissão `Gerenciar Mensagens`")
    let member = message.mentions.members.first();
    if(!member)
        return message.channel.send(message.author, comousar).then(msg => msg.delete(10000));


  
    let muterole = message.guild.roles.find("name", "Mutado");
    if(!muterole){
        try {
            muterole = await message.guild.createRole({
                name: "Mutado",
                color: "#000000",
                permissions: []
            });
            message.guild.channels.forEach(async (channel, id) =>{
                await channel.overwritePermissions(muterole, {
                    SEND_MESSAGES: false,
                    ADD_REACTION: false,
                    CONNECT: false
                });
            });
        } catch (a) {
            console.error(a.stack);
        }
    }
    
    member.removeRole(muterole)

    const emojizoioban = client.guilds.get("420316735149965322").emojis.find("name", "zoioBAN");
    const desmutemsg = new Discord.RichEmbed()
        .setTitle(`${member.user.tag} | Desmutado`)
        .setDescription(`Você foi desmutado no servidor **${message.guild.name}**! :smiley:`)
        .setColor("#aa0303")
        .setThumbnail(member.user.avatarURL)
        .setTimestamp()
        .setFooter("© Kally Moderação")
     
      
    const desmutado = new Discord.RichEmbed()
        .setTitle(`${member.user.tag} | Desmutado`)
        .setDescription(`**${member.user.tag}** foi desmutado no servidor! :smiley:`)
        .setColor("#aa0303")
        .setThumbnail(message.author.avatarURL)
        .addField("👮 Por:", message.author)
        .setTimestamp()
        .setFooter("© Kally Moderação - k!convite")
        
    if(message.guild.channels.find("name", "punidos")){
        let guild = message.guild.channels.find("name", "punidos");   
        guild.send(desmutado).catch(O_o=>{});
        member.send(desmutemsg).catch(O_o=>{});
        message.channel.send(`:white_check_mark: | ${message.author} usuário despunido com sucesso!`)
    }else if(message.guild.channels.find("name", "🚫punidos")){
        let guild = message.guild.channels.find("name", "🚫punidos");
        guild.send(desmutado).catch(O_o=>{});
        member.send(desmutemsg).catch(O_o=>{});
        message.channel.send(`:white_check_mark: | ${message.author} usuário despunido com sucesso!`)
    } else if(message.guild.channels.find("name", "punições")){
        let guild = message.guild.channels.find("name", "punições");
        guild.send(desmutado).catch(O_o=>{});
        member.send(desmutemsg).catch(O_o=>{});
        message.channel.send(`:white_check_mark: | ${message.author} usuário despunido com sucesso!`)
    }else if(message.guild.channels.find("name", "🚫punições")){
        let guild = message.guild.channels.find("name", "🚫punições");
        guild.send(desmutado).catch(O_o=>{});
        member.send(desmutemsg).catch(O_o=>{});
        message.channel.send(`:white_check_mark: | ${message.author} usuário despunido com sucesso!`)
    } else {
        guild.send(desmutado).catch(O_o=>{});
        member.send(desmutemsg).catch(O_o=>{});
    }
}
