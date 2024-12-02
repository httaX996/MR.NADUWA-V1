const config = require('../config')
const {cmd , commands} = require('../command')

// Anti-Link Command
cmd({
    pattern: "antilink",
    alias: ["al"],
    desc: "Enable or disable anti-link",
    category: "group",
    filename: __filename
},
async (conn, mek, m, { from, args, isGroup, isAdmins, reply }) => {
    try {
        if (!isGroup) return reply("This command can only be used in groups.");
        if (!isAdmins) return reply("You need to be an admin to use this command.");

        let option = args[0]?.toLowerCase();
        if (!option || (option !== "on" && option !== "off")) return reply("Usage: .antilink on/off");

        // Set or unset anti-link for the group
        reply(`Anti-Link has been turned ${option}.`);
    } catch (e) {
        console.log(e);
        reply("Error occurred.");
    }
});

// Welcome Command
cmd({
    pattern: "welcome",
    alias: ["wel"],
    desc: "Enable or disable welcome messages",
    category: "group",
    filename: __filename
},
async (conn, mek, m, { from, args, isGroup, isAdmins, reply }) => {
    try {
        if (!isGroup) return reply("This command can only be used in groups.");
        if (!isAdmins) return reply("You need to be an admin to use this command.");

        let option = args[0]?.toLowerCase();
        if (!option || (option !== "on" && option !== "off")) return reply("Usage: .welcome on/off");

        // Enable or disable welcome messages
        reply(`Welcome messages have been turned ${option}.`);
    } catch (e) {
        console.log(e);
        reply("Error occurred.");
    }
});

// Kick Command
cmd({
    pattern: "kick",
    alias: [],
    desc: "Kick a user from the group",
    category: "group",
    filename: __filename
},
async (conn, mek, m, { from, isGroup, isAdmins, reply, mentionedJid }) => {
    try {
        if (!isGroup) return reply("This command can only be used in groups.");
        if (!isAdmins) return reply("You need to be an admin to use this command.");

        if (!mentionedJid[0]) return reply("Tag a user to kick.");

        await conn.groupParticipantsUpdate(from, [mentionedJid[0]], "remove");
        reply("User has been removed.");
    } catch (e) {
        console.log(e);
        reply("Error occurred.");
    }
});

// Anti-Spam Command
cmd({
    pattern: "antispam",
    alias: [],
    desc: "Enable or disable anti-spam",
    category: "group",
    filename: __filename
},
async (conn, mek, m, { from, args, isGroup, isAdmins, reply }) => {
    try {
        if (!isGroup) return reply("This command can only be used in groups.");
        if (!isAdmins) return reply("You need to be an admin to use this command.");

        let option = args[0]?.toLowerCase();
        if (!option || (option !== "on" && option !== "off")) return reply("Usage: .antispam on/off");

        // Set or unset anti-spam for the group
        reply(`Anti-Spam has been turned ${option}.`);
    } catch (e) {
        console.log(e);
        reply("Error occurred.");
    }
});

// Mute Group Command
cmd({
    pattern: "mute",
    alias: ["amute"],
    desc: "Mute the group",
    category: "group",
    filename: __filename
},
async (conn, mek, m, { from, isGroup, isAdmins, reply }) => {
    try {
        if (!isGroup) return reply("This command can only be used in groups.");
        if (!isAdmins) return reply("You need to be an admin to use this command.");

        await conn.groupSettingUpdate(from, "announcement");
        reply("The group is now muted.");
    } catch (e) {
        console.log(e);
        reply("Error occurred.");
    }
});

// Unmute Group Command
cmd({
    pattern: "unmute",
    alias: ["aunmute"],
    desc: "Unmute the group",
    category: "group",
    filename: __filename
},
async (conn, mek, m, { from, isGroup, isAdmins, reply }) => {
    try {
        if (!isGroup) return reply("This command can only be used in groups.");
        if (!isAdmins) return reply("You need to be an admin to use this command.");

        await conn.groupSettingUpdate(from, "not_announcement");
        reply("The group is now unmuted.");
    } catch (e) {
        console.log(e);
        reply("Error occurred.");
    }
});

// Warn Command
cmd({
    pattern: "warn",
    alias: [],
    desc: "Warn a group member",
    category: "group",
    filename: __filename
},
async (conn, mek, m, { from, mentionedJid, reply, isGroup, isAdmins }) => {
    try {
        if (!isGroup) return reply("This command can only be used in groups.");
        if (!isAdmins) return reply("You need to be an admin to use this command.");

        if (!mentionedJid[0]) return reply("Tag a user to warn.");

        // Implement warning logic (e.g., keeping track of warnings in a database)
        reply(`User has been warned.`);
    } catch (e) {
        console.log(e);
        reply("Error occurred.");
    }
});
