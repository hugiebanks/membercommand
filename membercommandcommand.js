const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('members')
        .setDescription('shows how many people are in the server'),

    async execute(interaction) {
        const total = interaction.guild.memberCount;
        const online = interaction.guild.members.cache.filter(m => m.presence?.status === 'online' || m.presence?.status === 'idle' || m.presence?.status === 'dnd').size;
        const boosts = interaction.guild.premiumSubscriptionCount || 0; // idk just in case

        await interaction.reply({ content: `total members: ${total}\nonline: ${online}\nboosts: ${boosts}`, ephemeral: false });
    }
};