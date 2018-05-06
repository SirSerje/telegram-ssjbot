const Bot = require('node-telegram-bot-api');
const request = require('request');
const token = "465330842:AAGl8YjnzejMHgPaUIbhhPJ8UpAYKOoxK-M";

const bot = new Bot(token, {polling: true});

function askAnswer(message, answer) {
    bot.onText(message, msg => {
        //console.log(msg);
        bot.sendMessage(msg.chat.id, answer);
    })
}

askAnswer(/[пП]ривет/,`Привет!`);
askAnswer(/[Hh]ello/,`Hello!`);
askAnswer(/погода/,`Не знаю, как за окном, но в душе будет солнечно`);
