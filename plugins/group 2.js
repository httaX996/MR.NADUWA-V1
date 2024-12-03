const config = require('../config');
const { cmd, commands } = require('../command'); // Ensure `cmd` and `commands` are properly imported

// Anti-Link Command
cmd({
    pattern: "antilink",
    alias: ["al"],
    desc: "Enable or disable anti-link",
    category: "group",
    filename: __filename
},
async (conn, mek, m, { from, args, isGroup, isAdmins, reply }) => {
    if (!isGroup) return reply("This command can only be used in groups.");
    if (!isAdmins) return reply("You need to be an admin to use this command.");

    let option = args[0]?.toLowerCase();
    if (!option || (option !== "on" && option !== "off")) {
        return reply("Usage: .antilink on/off");
    }

    // Here you can integrate group settings logic (e.g., database or API to enable anti-link)
    reply(`Anti-Link has been turned ${option}.`);
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
    if (!isGroup) return reply("This command can only be used in groups.");
    if (!isAdmins) return reply("You need to be an admin to use this command.");

    let option = args[0]?.toLowerCase();
    if (!option || (option !== "on" && option !== "off")) {
        return reply("Usage: .welcome on/off");
    }

    // Integrate logic to manage welcome messages (e.g., update database)
    reply(`Welcome messages have been turned ${option}.`);
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
    if (!isGroup) return reply("This command can only be used in groups.");
    if (!isAdmins) return reply("You need to be an admin to use this command.");
    if (!mentionedJid?.[0]) return reply("Tag a user to kick.");

    try {
        await conn.groupParticipantsUpdate(from, [mentionedJid[0]], "remove");
        reply("User has been removed.");
    } catch (e) {
        console.error(e);
        reply("Failed to remove the user. Ensure the bot has admin rights.");
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
    if (!isGroup) return reply("This command can only be used in groups.");
    if (!isAdmins) return reply("You need to be an admin to use this command.");

    let option = args[0]?.toLowerCase();
    if (!option || (option !== "on" && option !== "off")) {
        return reply("Usage: .antispam on/off");
    }

    // Logic to enable/disable anti-spam in group settings
    reply(`Anti-Spam has been turned ${option}.`);
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
    if (!isGroup) return reply("This command can only be used in groups.");
    if (!isAdmins) return reply("You need to be an admin to use this command.");

    try {
        await conn.groupSettingUpdate(from, "announcement");
        reply("The group is now muted.");
    } catch (e) {
        console.error(e);
        reply("Failed to mute the group. Ensure the bot has admin rights.");
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
    if (!isGroup) return reply("This command can only be used in groups.");
    if (!isAdmins) return reply("You need to be an admin to use this command.");

    try {
        await conn.groupSettingUpdate(from, "not_announcement");
        reply("The group is now unmuted.");
    } catch (e) {
        console.error(e);
        reply("Failed to unmute the group. Ensure the bot has admin rights.");
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
    if (!isGroup) return reply("This command can only be used in groups.");
    if (!isAdmins) return reply("You need to be an admin to use this command.");
    if (!mentionedJid?.[0]) return reply("Tag a user to warn.");

    // Implement your warning logic (e.g., using a database)
    reply(`User has been warned.`);
});
