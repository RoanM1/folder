const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});

client.login('NTQ3NjAzMTMyNTQxMzA0ODgy.D05L5Q.4NqkGSjueIHSEBZq_rbsF2YZcOA');