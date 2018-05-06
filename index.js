const Bot = require('node-telegram-bot-api');
const request = require('request');

const token = "465330842:AAGl8YjnzejMHgPaUIbhhPJ8UpAYKOoxK-M";
const url = 'http://sirserje.surge.sh/';
const trigger = 'I want to travel!';

const bot = new Bot(token, {polling: true});
bot.onText(/answer/, msg => {
    console.log(msg)

    bot.sendMessage(msg.chat.id, 'Ты получил ответ?')
})