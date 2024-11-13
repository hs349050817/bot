const { Bot } = require("grammy");

const bot = new Bot("8159361414:AAFcLSFyvulWsUqdoCYYvkSXPb9rFRO1WDQ");

// 监听信息
bot.on("message:text", (ctx) => ctx.reply("已收到: " + ctx.message.text));

// 启动机器人
bot.start();
