const {client, GatewayIntentBits} = require('discord.js');
const client = new Client({intents: [GatewayIntentBits.Guilds]});
const http = require('http');
const server = http.createServer((req, res)=>{res.writeHead(200); res.end('helloword/n');})
server.listen(3000, ()=>{console.log('server running on 3000');})
client.login(process.env.DISCORD_TOKEN);
