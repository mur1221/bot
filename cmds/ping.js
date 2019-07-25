exports.run = (client, message, args) => {
    const Discord = require('discord.js')
    var embed = new Discord.RichEmbed()
    .setTitle('Pong!')
    .setDescription(`Latency **${client.ping}ms**`)
    .setColor('RANDOM')
    .setFooter(client.user.avatarURL)
    message.channel.send(embed)
}
exports.help = {
    usage: "ping",
    desc: 'Показывает пинг бота',
    group: 'general',
    guildOnly: false,
    enabled: true,
    owner: false,
    name: 'ping'
}