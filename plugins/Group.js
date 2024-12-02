const { cmd } = require('../command');
const { fetchJson } = require('../lib/functions');
const axios = require('axios');


// Joke Command
cmd({
  pattern: "joke",
  alias: ["funny"],
  react: "😂",
  desc: "Send a random joke",
  category: "fun",
  use: '.joke',
  filename: __filename
}, async (conn, mek, m, { from, quoted, reply }) => {
  try {
    const joke = await fetchJson('https://official-joke-api.appspot.com/random_joke');
    const jokeMessage = `
      😂 *Joke of the Day* 😂

      *Setup*: ${joke.setup}
      *Punchline*: ${joke.punchline}
    `;
    await reply(jokeMessage);
  } catch (error) {
    console.log(error);
    await reply("Sorry, I couldn't fetch a joke.");
  }
});

// Meme Command
cmd({
  pattern: "meme",
  alias: ["memes"],
  react: "🤣",
  desc: "Send a random meme",
  category: "fun",
  use: '.meme',
  filename: __filename
}, async (conn, mek, m, { from, quoted, reply }) => {
  try {
    const meme = await fetchJson('https://meme-api.com/memes');
    const memeMessage = `
      🤣 *Here’s a Meme for you* 🤣

      *Meme*: ${meme.url}
    `;
    await reply(memeMessage);
  } catch (error) {
    console.log(error);
    await reply("Sorry, I couldn't fetch a meme.");
  }
});

// Group Management Command - Add/Remove Member
cmd({
  pattern: "addmember",
  alias: ["addgroup", "adduser"],
  react: "➕",
  desc: "Add a member to the group (admin only)",
  category: "group",
  use: '.addmember <phone number>',
  filename: __filename
}, async (conn, mek, m, { from, quoted, reply, q }) => {
  try {
    if (!q) return await reply("Please provide the phone number of the member to add.");
    const phone = q.trim();
    // Replace with actual API logic to add a member to the group
    await conn.groupAdd(from, [phone]);
    await reply(`✅ Successfully added ${phone} to the group!`);
  } catch (error) {
    console.log(error);
    await reply("Sorry, I couldn't add the member.");
  }
});

// Group Management Command - Remove Member
cmd({
  pattern: "removemember",
  alias: ["removeuser", "kick"],
  react: "❌",
  desc: "Remove a member from the group (admin only)",
  category: "group",
  use: '.removemember <phone number>',
  filename: __filename
}, async (conn, mek, m, { from, quoted, reply, q }) => {
  try {
    if (!q) return await reply("Please provide the phone number of the member to remove.");
    const phone = q.trim();
    // Replace with actual API logic to remove a member from the group
    await conn.groupRemove(from, [phone]);
    await reply(`✅ Successfully removed ${phone} from the group!`);
  } catch (error) {
    console.log(error);
    await reply("Sorry, I couldn't remove the member.");
  }
});

// Admin Commands (Additional functionalities for admins)

cmd({
  pattern: "promote",
  alias: ["admin"],
  react: "🔼",
  desc: "Promote a member to admin (admin only)",
  category: "admin",
  use: '.promote <phone number>',
  filename: __filename
}, async (conn, mek, m, { from, quoted, reply, q }) => {
  try {
    if (!q) return await reply("Please provide the phone number of the member to promote.");
    const phone = q.trim();
    // Replace with actual API logic to promote to admin
    await conn.groupMakeAdmin(from, [phone]);
    await reply(`✅ Successfully promoted ${phone} to admin!`);
  } catch (error) {
    console.log(error);
    await reply("Sorry, I couldn't promote the member.");
  }
});

// Admin Command - Demote member
cmd({
  pattern: "demote",
  alias: ["removeadmin"],
  react: "🔽",
  desc: "Demote an admin (admin only)",
  category: "admin",
  use: '.demote <phone number>',
  filename: __filename
}, async (conn, mek, m, { from, quoted, reply, q }) => {
  try {
    if (!q) return await reply("Please provide the phone number of the admin to demote.");
    const phone = q.trim();
    // Replace with actual API logic to demote from admin
    await conn.groupDemoteAdmin(from, [phone]);
    await reply(`✅ Successfully demoted ${phone} from admin.`);
  } catch (error) {
    console.log(error);
    await reply("Sorry, I couldn't demote the member.");
  }
});
