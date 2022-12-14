const Discord = require('discord.js')
const { feedbackId } = require('./channelIDs.json')

module.exports = {
    name: "feedback",
    description: "feedback command (embed style)",

    async run (bot, message, args) {

        if(!args[0]) return message.reply('Please add a reason to feedback!')

        message.reply(`✉ | ${message.author.username}, Thanks for the feedback! :)`)

        const embed = new Discord.MessageEmbed()
        .setColor(0xdd9bb4)
        .setTitle(`${message.author.username}#${message.author.discriminator} (${message.author.id}) Fedback:`)
        .setDescription(`${args}`)
        .addField("On the server:", `${message.guild.name}`)
        .addField("Server ID:", `${message.guild.id}`)
        bot.channels.cache.get(feedbackId).send(embed)
    }
}