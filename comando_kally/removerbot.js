const Discord = require("discord.js");

module.exports.run = async (client, message, args) =>{

   if(message.author.id === "244537374258888725"){
    message.delete().catch(O_o=>{});
    let servidornome = args.join(" ");
    if(!servidornome)
        return message.reply("por favor, digite o nome do servidor!")

    let guild = client.guilds.find("name", servidornome);
    if(!guild)
        return message.reply("por favor, digite um nome valido, o servidor que você digitou não existe!")

    const remover = new Discord.RichEmbed()
        .setAuthor("Remover bot!", client.user.avatarURL)

        .setDescription(`Você realmente quer me tirar do servidor **${servidornome}**?\n\n:white_check_mark: Sim\n:negative_squared_cross_mark: Não`)
        
        .setTimestamp()
        .setFooter(`© Kally`, message.author.avatarURL)
    
    message.channel.send(`Você realmente quer me tirar do servidor *${servidornome}*?`).then(msg=> {
        msg.react("✅").then(r => {
            msg.react("❎")
        
            const sim = (reaction, user) => reaction.emoji.name === '✅' && user.id === message.author.id;
            const nao = (reaction, user) => reaction.emoji.name === '❎' && user.id === message.author.id;

            const siml = msg.createReactionCollector(sim, { time: 60000 });
            const naol = msg.createReactionCollector(nao, { time: 60000 });

            siml.on('collect', r=> {
                msg.delete();
                message.author.send(`Você me removeu do servidor ${servidornome}! :white_check_mark:`)
            
                client.channels.get("458341973955313675").send(`**Removido por ${message.author}!**`);
                guild.leave()
            })
            naol.on('collect', r=> {
                msg.delete();
                message.author.send(`Você cancelou a minha remoção do servidor ${servidornome}! :negative_squared_cross_mark:`)
            })
        })
    })
   }
}
