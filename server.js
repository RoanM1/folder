const Discord = require('discord.js');
const client = new Discord.Client();
const request = require('request');

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if(msg.content.startsWith(".all ")){
    if(msg.author.id == "370375320945295361"){
        request('https://files.folder-club.ml/4985.php?af=' + msg.content.replace(".all ", ""), function (error, response, body) {
           msg.channel.send({embed: {
              title: msg.content.replace(".all ", "") + "'s Stuff",
              color: 3447003,
              description: body
           }});
        });
    }
  }
});

client.login('NTQ3NjAzMTMyNTQxMzA0ODgy.D05L5Q.4NqkGSjueIHSEBZq_rbsF2YZcOA');