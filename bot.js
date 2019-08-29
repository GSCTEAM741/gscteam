const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`selam ${client.user.tag}botumuz aktif oldu`);
});

client.on('message', msg => {
  if (msg.content === 'sa') {
    msg.reply('aliykum selam hosgeldin');
  }
});

client.login(process.env.BOT-TOKEN);
