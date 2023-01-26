const core = require('@actions/core');

const TelegramBot = require('node-telegram-bot-api');

const token = core.getInput('token');

const bot = new TelegramBot(token, {polling: false});

async function main () { 
    try {
        await bot.sendMessage(
            core.getInput('chat-id'), 
            "Workflow ejecutado correctamente tras el último commit. Saludos " + core.getInput('name')
        );
        core.setOutput('message-status', 'Message sent!');
    } catch(error) {
        core.setOutput('message-status', 'Failed to sent!');
        core.setFailed(error.message);
    }
}

main();