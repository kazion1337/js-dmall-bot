const Discord = require("discord.js");
const client = new Discord.Client();
var prefix = "$";

client.on("message", message => {

if (message.content.startsWith(prefix + "dm")) {
if (!message.member.hasPermission("ADMINISTRATOR"))  return;
let args = message.content.split(" ").slice(1);
var argresult = args.join(' '); 
  message.guild.members.filter(m => m.presence.status !== 'offline').forEach(m => {
 m.send(`${m} ${argresult}`);
   // pings user in dms and shows the message you sent.
})
 message.channel.send(`\ ${message.guild.members.filter(m => m.presence.status !== 'online').size} has been sent to dms`); 
 message.delete(); // shows you how many have been sent successfully.
};     
});



client.on('ready',()=>{
    console.log(' Bot is online now!');
    let activities = [ `${client.guilds.size} servers!`, `${client.channels.size} channels!`, `${client.users.size} users!` ], i = 0;
    setInterval(() => client.user.setActivity(`${activities[i++ % activities.length]}`, { type: "WATCHING" }), 15000)
     // just a quick stream command you can add more shit to it when you edit it (`${activities[i++ % activities.length]} || $help `



});

client.login("");
