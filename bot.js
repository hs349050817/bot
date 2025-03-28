const TelegramBot = require("node-telegram-bot-api");
const { SocksProxyAgent } = require("socks-proxy-agent");
const agent = new SocksProxyAgent("socks://127.0.0.1:33211");
// const bot = new Bot("8159361414:AAFcLSFyvulWsUqdoCYYvkSXPb9rFRO1WDQ");
const token = "8159361414:AAFcLSFyvulWsUqdoCYYvkSXPb9rFRO1WDQ";
const bot = new TelegramBot(token, {
  polling: true, // 启用 polling
  request: {
    agent, // 使用代理进行请求
  },
});

bot.onText(/\/ping/, (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(
    chatId,
    `<b>bold</b>, <strong>bold</strong>
<i>italic</i>, <em>italic</em>
<u>underline</u>, <ins>underline</ins>
<s>strikethrough</s>, <strike>strikethrough</strike>, <del>strikethrough</del>
<span class="tg-spoiler">spoiler</span>, <tg-spoiler>spoiler</tg-spoiler>
<b>bold <i>italic bold <s>italic bold strikethrough <span class="tg-spoiler">italic bold strikethrough spoiler</span></s> <u>underline italic bold</u></i> bold</b>
<a href="http://www.example.com/">inline URL</a>
<a href="tg://user?id=123456789">inline mention of a user</a>
<tg-emoji emoji-id="5368324170671202286">👍</tg-emoji>
<code>inline fixed-width code</code>
<pre>pre-formatted fixed-width code block</pre>
<pre><code class="language-python">pre-formatted fixed-width code block written in the Python programming language</code></pre>
<blockquote>Block quotation started\nBlock quotation continued\nThe last line of the block quotation</blockquote>
<blockquote expandable>Expandable block quotation started\nExpandable block quotation continued\nExpandable block quotation continued\nHidden by default part of the block quotation started\nExpandable block quotation continued\nThe last line of the block quotation</blockquote>`,
    {
      parse_mode: "HTML",
    }
  );
});
bot.onText(/\/start/, (msg) => {
  console.log(msg);

  const chatId = msg.chat.id;
  bot.sendPhoto(chatId, "https://res.megalake.games/lobby/envelope_banner.jpg", {
    //按钮
    reply_markup: {
      inline_keyboard: [
        [{ text: "PLAY ▶", web_app: { url: "https://lobby.megalake.games/" } }],
        [{ text: "DEPOSIT CRYPTO 💰", web_app: { url: "https://lobby.megalake.games/" } }],
        [{ text: "JOIN THE COMMUNTY", url: "https://t.me/+1xNimVu183s0NTU1" }],
        [{ text: "CONTACT SUPPORT", url: "https://lobby.megalake.games/" }],
      ],
    },
    //渲染模式
    parse_mode: "HTML",
    //内容
    caption: `Welcome, ${msg.chat.first_name}, to the WSM Telegram Casino! 🐂💰

Here, you can play your favourite Casino games 🎲 and bet on live sports ⚽️ directly from Telegram!

Our fully anonymous Telegram Casino accepts all major cryptocurrencies 💸 as well as the $WSM token.

🚀 Receive a HUGE 200% bonus on your initial deposit, just hit 'Play Now' ⬇️ [Terms here].

🍾 You can also earn a MASSIVE 25% Commission from all your invited players now! Just follow the steps below ⬇️
Hit 'Play Now' 🎮
Click 'Earn' 💰
Copy your affiliate link and share it with your friends! 🤝

Hit the “BUY CRYPTO” button and fund your account with a credit card or local payment method 💳.

🤔 If you have any questions, our dedicated support team is available 24/7 at @VivaGame ET or join our community by clicking below.`,
  });
});
console.log("启动");

// 启动 bot
bot.on("polling_error", (error) => console.log("Polling error:", error)); // 打印错误
