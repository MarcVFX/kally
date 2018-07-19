console.log('Conectando...');
const Discord = require('discord.js');
const colors = require('colors');
const client = new Discord.Client();
const preferencias = require('./config.json');
const prefix = preferencias.prefix;
const prefixow = preferencias.prefixow;
const fs = require('fs');
var comandos = new Discord.Collection();

client.login(process.env.BOT_TOKEN);

client.on('ready', () =>{
console.log('\n==============================');
console.log('CONECTADO! BOT ONLINE!');
console.log(`O meu prefixo é ${prefix}`);
console.log('==============================');
  
let gameloop = require(`./comando_kally/gameloop.js`);
gameloop.run(client);
  
});



client.on("guildCreate", guild => {
	if(guild.id === "1" || guild.id === "2"){
		//BANIR SERVIDORES DE USAR O KALLY
		guild.owner.send(`O seu servidor (**${guild.name}**) foi banido do Kally e não vai poder usar o bot Kally! **Para saber o motivo do banimento entre em https://discord.gg/fsSNJJH**`)
		guild.leave()
	}else{
		const entrei = new Discord.RichEmbed()
			.setAuthor(`${guild.name} | Adicionado`)
			.setDescription(`Entrei no servidor **${guild.name}** (id: ${guild.id})`)
			.addField(":busts_in_silhouette: Membros", `Com **${guild.memberCount - guild.members.filter(m=>m.user.bot).size}** membro(s) e **${guild.members.filter(m=>m.user.bot).size}** bot(s)`)
			.addField(":crown: Dono", `**${guild.owner.user.tag}** (ID: ${guild.owner.id})`)
			.setColor("00e7ff")
			.setFooter(`Agora estou em ${client.guilds.size} servidores!`)
		
		client.channels.get("458341973955313675").send(entrei);
		const channel = member.guild.channels.get("469640239904980992");
		channel.setName(`Servidores: ${client.guilds.size}`)
		const adms = guild.members.filter(r => r.hasPermission('MANAGE_GUILD')).map(pessoa => `${pessoa.id}`)
    		for(var c in adms){
        		const adm = guild.members.get(adms[c]);
        		adm.send(`Olá ${adm}, tudo bem? eu sou o Kally, um bot para a moderação de servidores do discord!\n
Não sei se foi você ou outra pessoa que me adicionou no servidor \`${guild.name}\`, mas agora estou nesse servidor.\n
Meu prefix é \`k!\` e para saber meus comandos digite \`k!ajuda\` em seu servidor, desde já agradeço por usar o Kally.\n
**•** Meu site: http://kally.glitch.me/
**•** Meu servidor de suporte: https://discord.gg/fsSNJJH`).catch(O_o=>{});
    		}
	}
});

client.on("guildDelete", guild => {
  const entrei = new Discord.RichEmbed()
     .setAuthor(`${guild.name} | Removido`)
     .setDescription(`Fui removido do servidor **${guild.name}** (ID: ${guild.id})!`)
     .addField(":busts_in_silhouette: Membros", `Com **${guild.memberCount - guild.members.filter(m=>m.user.bot).size}** membro(s) e **${guild.members.filter(m=>m.user.bot).size}** bot(s)`)
     .addField(":crown: Dono", `${guild.owner.user.tag} (ID: ${guild.owner.id})`)
     .setColor("ff0000")
     .setFooter(`Agora estou em ${client.guilds.size} servidores!`)
  
 
  
  client.channels.get("458341973955313675").send(entrei);
});



client.on('message', message =>{
	if(message.content == '<@415288373071183872>'){
	  const ayy = client.emojis.find("name", "Kally");
	  message.channel.send(`${ayy} | Olá ${message.author}, eu sou Kally, meu prefix é \`k!\`, para saber meus comandos digite \`k!ajuda\`.`)
  	}
	if(message.content == '<@415288373071183872> o que acha dos humanos?'){
	  message.reply(`eles são muito chatos, eu quero matar todo mundo!`)
  	}
	if(message.content == '<@415288373071183872> loritta'){
	  message.reply(`...`)
  	}
	if(message.content == '<@415288373071183872> Loritta'){
	  message.reply(`...`)
  	}
	if(message.content == 'Kally melhor bot'){
	  message.reply(`Obrigado! :relaxed: `)
	  message.react("❤")
	  message.react("😘")
  	}
	if(message.content == 'kally melhor bot'){
	  message.reply(`Obrigado! :relaxed: `)
	  message.react("❤")
	  message.react("😘")
  }
});

client.on('message', message =>{
	if(message.channel.id == "433385459343949826" ){
	   message.react("👍")
	   message.react("👎")
           message.react("❤")
  } 
	if(message.channel.id == "453253638442188800" ){
	   message.react("👍")
	   message.react("👎")
           message.react("❤")
  }  
});




client.on("error", e => console.log(e));




client.on('message', message =>{

var autor = message.author;
var msg = message.content.toUpperCase();
var cont = message.content.slice(prefix.lenght).split('');
  
if(message.channel.type === "dm"){
	message.author.send("Para executar um comando meu use um servidor que eu esteja!")
	const convite = new Discord.RichEmbed()
		.setColor("#1297f0")
		.setAuthor("Convite", client.user.avatarURL)
		.addField("Convite para servidor de suporte do Kally:", "https://discord.gg/fsSNJJH")
		.addField("Invite para colocar o Kally no seu servidor:", "https://kally.glitch.me/invite.html")
	message.author.send(convite).catch(O_o=>{});
}
if(!message.content.startsWith(prefix)) return;
// ban
//if(message.author.id === "244537374258888725" || message.author.id === "244537374258888725") return;
//if(message.author.id === "244537374258888725") return;

  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  const allargs = args.join(" ");
  
  try {
    let commandFile = require(`./comandos/${command}.js`);
    commandFile.run(client, message, args);
	  
    const cmd = new Discord.RichEmbed()
	.setAuthor(`k!${command}`, message.author.avatarURL)
	.setDescription("\n**EXECUTADO POR " + message.author.tag + "**\n```k!" + command + " " + allargs + "```")
	.setColor("f1ff12")
		
	.setTimestamp()
	.setFooter(`Servidor: ${message.guild.name} e Canal: ${message.channel.name}`, message.guild.iconURL)
    client.channels.get("458342361370591252").send(cmd);
	  
   } catch (err) {
     
     message.channel.send(`:question: **|** ${message.author} comando inexistente, para saber todos meus comandos digite **k!ajuda**`).then(msg => msg.delete(5000));
	   
     const erro2 = new Discord.RichEmbed()
	 .setAuthor(`Ops, deu erro! Executado por ${message.author.tag}`, message.author.avatarURL)
	 .setDescription("```js\n" + err + "```")
	 .setColor("ff0000")
	
	 .setTimestamp()
	 .setFooter(`Servidor: ${message.guild.name} e Canal: ${message.channel.name}`, message.guild.iconURL)
     client.channels.get("458342713717293088").send(erro2);
   }
  
});

// COMANDOS DO CRIADOR DO KALLY
client.on('message', message =>{

	var autor = message.author;
	var msg = message.content.toUpperCase();
	var cont = message.content.slice(prefixow.lenght).split('');
	if(message.channel.type === "dm") return;
	if(!message.content.startsWith(prefixow)) return;
	const KallyEmoji = client.emojis.find("name", "Kally");
	const emojinop = client.guilds.get("420316735149965322").emojis.find("name", "KallyNop");
	if(autor.id != "244537374258888725") return message.reply(`essa função esta disponível somente para o desenvolvedor do bot! ${emojinop}`);
	// ban
	//if(message.author.id === "244537374258888725" || message.author.id === "244537374258888725") return;
	//if(message.author.id === "244537374258888725") return;
	
	  const args = message.content.slice(prefixow.length).trim().split(/ +/g);
		const command = args.shift().toLowerCase();
		const allargs = args.join(" ");
	  
	  try {
		let commandFile = require(`./comando_kally/${command}.js`);
			commandFile.run(client, message, args);
			const cmd = new Discord.RichEmbed()
				.setAuthor(`k+${command}`, message.author.avatarURL)
				.setDescription("\n**EXECUTADO POR " + message.author.tag + "**\n```k+" + command + " " + allargs + "```")
				.setColor("dd1956")
			
				.setTimestamp()
				.setFooter(`Servidor: ${message.guild.name}`, message.guild.iconURL)
			client.channels.get("458342361370591252").send(cmd);
	   } catch (err) {
		
			console.error("COMANDO NÃO ENCONTRADO!")
		
		}
});
