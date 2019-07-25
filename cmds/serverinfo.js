exports.run = (client, message, args) => {
    const moment = require('moment')
    const Discord = require('discord.js')
    var embed = new Discord.RichEmbed()
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField('👾 Создатель', message.guild.owner, true)
    .addField('✏ Название', message.guild.name, true)
    .addField('📆 Создан', moment(message.guild.createdAt).format('HH:MM DD-MM-YY'), true)
    .addField('🥉 Роли', message.guild.roles.size, true)
    .addField('👫 Участники', message.guild.members.size, true)
    .setThumbnail(message.guild.iconURL)
    .setFooter(client.user.avatarURL)
    .setColor('RANDOM')
    message.channel.send(embed)
}
exports.help = {
    guildOnly: true,
    enabled: true,
    owner: false,
    name: 'serverinfo'
}