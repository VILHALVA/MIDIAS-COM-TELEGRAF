const { Telegraf } = require('telegraf');
require('dotenv').config();

const bot = new Telegraf(process.env.BOT_TOKEN);

// Comando /start para dar as boas-vindas e mostrar as opções
bot.start((ctx) => {
    ctx.reply('Bem-vindo ao bot MIDIAS:\n' +
              '/foto - Envia uma foto\n' +
              '/musica - Envia uma musica\n' +
              '/video - Envia um video\n' +
              '/documento - Envia um livro');
});

// Comando /foto para enviar uma foto
bot.command('foto', (ctx) => {
    ctx.replyWithPhoto({ source: './MIDIAS/FOTO.png' })
        .catch((err) => {
            console.error('Erro ao enviar foto:', err);
            ctx.reply('Desculpe, ocorreu um erro ao enviar a foto.');
        });
});

// Comando /musica para enviar uma música
bot.command('musica', (ctx) => {
    ctx.replyWithAudio({ source: './MIDIAS/AUDIO.mp3' })
        .catch((err) => {
            console.error('Erro ao enviar música:', err);
            ctx.reply('Desculpe, ocorreu um erro ao enviar a música.');
        });
});

// Comando /video para enviar um vídeo
bot.command('video', (ctx) => {
    ctx.replyWithVideo({ source: './MIDIAS/VIDEO.mp4' })
        .catch((err) => {
            console.error('Erro ao enviar vídeo:', err);
            ctx.reply('Desculpe, ocorreu um erro ao enviar o vídeo.');
        });
});

// Comando /documento para enviar um documento
bot.command('documento', (ctx) => {
    ctx.replyWithDocument({ source: './MIDIAS/LIVRO.pdf' })
        .catch((err) => {
            console.error('Erro ao enviar documento:', err);
            ctx.reply('Desculpe, ocorreu um erro ao enviar o documento.');
        });
});

bot.launch();
console.log('Bot de Mídia (Tipos) está rodando...');
