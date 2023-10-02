require('dotenv').config();
const {Client, IntentsBitField} = require('discord.js');

const client = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent,
        IntentsBitField.Flags.GuildMessageReactions,
    ],
});

client.on('ready', (c)=>{
    console.log(`The bot:${c.user.tag} is online.`);
});

client.on('messageCreate', (msg) =>{
    console.log(msg.content);
    msg.react('<:happy_sally:1158282208793083996>');
});

client.login(process.env.TOKEN);