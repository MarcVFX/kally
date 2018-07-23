const Discord = require("discord.js");
const dateFormat = require('dateformat');

const now = new Date();
dateFormat(now, 'shortDate');

module.exports.run = async (client, message, args) =>{

    const online = client.guilds.get("418902107391918080").emojis.find("name", "online");
    const away = client.guilds.get("418902107391918080").emojis.find("name", "away");
    const ocupado = client.guilds.get("418902107391918080").emojis.find("name", "ocupado");
    const offline = client.guilds.get("418902107391918080").emojis.find("name", "offline");

    // TRADUÇÃO DAS REGIÕES
    if(message.guild.region === "brazil") var region = ":flag_br: Brasil";
    if(message.guild.region === "eu-central") var region = ":flag_eu: Europa Central";
    if(message.guild.region === "hongkong") var region = ":flag_hk: Hong Kong";
    if(message.guild.region === "japan") var region = ":flag_jp: Japão";
    if(message.guild.region === "russia") var region = ":flag_ru: Russia";
    if(message.guild.region === "singapore") var region = ":flag_sg: Cingapura";//
    if(message.guild.region === "southafrica") var region = ":flag_za: África do Sul";
    if(message.guild.region === "sydney") var region = ":flag_au: Sydney";
    if(message.guild.region === "us-central") var region = ":flag_us: Estados Unidos Centrais";
    if(message.guild.region === "us-east") var region = ":flag_us: Leste dos Estados Unidos";
    if(message.guild.region === "us-south") var region = ":flag_us: Sul dos Estados Unidos";
    if(message.guild.region === "us-west") var region = ":flag_us: Norte dos Estados Unidos Centrais";
    if(message.guild.region === "eu-west") var region = ":flag_eu: Europa Ocidental";


    let servericon = message.guild.iconURL;
    const serverinfo = new Discord.RichEmbed()
        .setAuthor(message.guild.name, servericon)
        .setColor(3447003)
        
        .addField(':computer: ID:', message.guild.id, true)
        .addField(':crown: Dono:', message.guild.owner.user.tag, true)
        .addField(':earth_americas: Região:', region, true)
        .addField(':busts_in_silhouette: Membros:', `**Total de membros**: ${message.guild.memberCount - message.guild.members.filter(m=>m.user.bot).size}
:robot: **Bot**: ${message.guild.members.filter(m=>m.user.bot).size}
${online} **Online**: ${message.guild.members.filter(m=>m.presence.status==="online").size}
${away} **Ausente**: ${message.guild.members.filter(m=>m.presence.status==="idle").size}
${ocupado} **Ocupado**: ${message.guild.members.filter(m=>m.presence.status==="dnd").size}
${offline} **Offline**: ${message.guild.members.filter(m=>m.presence.status==="offline").size}`)
        .addField(':calendar_spiral: Criado em:', dateFormat(message.guild.createdAt, 'dd/mm/yyyy') + " às " + dateFormat(message.guild.createdAt, 'H:MM'))
        .addField(':calendar_spiral: Você entrou em:', dateFormat(message.member.joinedAt, 'dd/mm/yyyy') + " às " + dateFormat(message.member.joinedAt, 'H:MM'))
        
        .setTimestamp()
        .setFooter("Kallyᴮᴱᵀᴬ", client.user.avatarURL);
  
    message.channel.send(serverinfo)
    
 }
