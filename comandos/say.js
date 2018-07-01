const Discord = require("discord.js");

module.exports.run = async (client, message, args) =>{

   message.delete().catch(O_o=>{});
   const emojinop = client.guilds.get("420316735149965322").emojis.find("name", "KallyNop");
   if (!message.member.hasPermission('MANAGE_MESSAGES'))
      return message.reply("você não tem permissão! "+ emojinop).then(msg => msg.delete(10000));
   let kallyrole = message.guild.roles.find("name", "Kally");
   const comousar = new Discord.RichEmbed()
      .setAuthor("Kally", client.user.avatarURL)
      .setTitle("k!say")
      .setDescription(`Irá mandar um mensagem em embed.`)
      .setColor("#22a7cc")
      .setFooter("© Kally - k!convite - kally.glitch.me")
      .addField("Como usar:", "`k!say <mensagem>`")
      .addField("Permissão:", "Quem for usar o comando tem que esta em um cargo com a permissão `Gerenciar mensagens`")
      .addField("Como mudar a cor do say:", "Simples, para escolher a cor do anúncio só você mudar a cor do cargo **"+ kallyrole +"** (O cargo do Kally), se quiser uma cor aleatória só deixar na cor"+` "Padrão."`)   
      
   let mensg = args.join(" ");
   if(!mensg)
      return message.channel.send(message.author, comousar).then(msg => msg.delete(10000));
   if(!message.guild.roles.find("name", "Kally")) {
        const emojiaviso = client.guilds.get("420316735149965322").emojis.find("name", "KallyAviso");
        const anuncio = new Discord.RichEmbed()
            .setAuthor(message.author.tag, message.author.avatarURL)
            .setColor('#'+Math.floor(Math.random()*16777215).toString(16))
            
            .setDescription(mensg)
            
            .setTimestamp()
            .setFooter(`© Kally`)

        message.channel.send(anuncio)
        return;
    }
    if(kallyrole.color == "0"){
            const emojiaviso = client.guilds.get("420316735149965322").emojis.find("name", "KallyAviso");
            const anuncio = new Discord.RichEmbed()
                .setAuthor(message.author.tag, message.author.avatarURL)
                .setColor('#'+Math.floor(Math.random()*16777215).toString(16))
                
                .setDescription(mensg)
                
                .setTimestamp()
                .setFooter(`© Kally`)

            message.channel.send(anuncio)
        }else{
            const emojiaviso = client.guilds.get("420316735149965322").emojis.find("name", "KallyAviso");
            const anuncio = new Discord.RichEmbed()
                .setAuthor(message.author.tag, message.author.avatarURL)
                .setColor(kallyrole.color)

                .setDescription(mensg)
                
                .setTimestamp()
                .setFooter(`© Kally`)

            message.channel.send(anuncio)
            return;
        }   
}
