const express = require('express');
const app = express(); 
const port = process.env.PORT || 3000;
app.listen(port, () => { console.log('Server running')});
const {Client, GatewayIntentBits} = require('discord.js');
const client = new Client({intents: [GatewayIntentBits.Guilds]});
client.on('messageCreate', (message) => {
  if (message.author.bot) return;
  if (message.content === '!ping') {
    message.reply('Pong!');
  }
});

client.login(process.env.DISCORD_TOKEN);
