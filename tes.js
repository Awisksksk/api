const axios = require('axios');

const botToken = '7457836775:AAFFALTsWtM5t9IrCghsRz82BvvW158EKbU';
const chatId = '7696941035'; // Ganti dengan chat ID kamu

// Fungsi kirim teks ke Telegram
async function sendText(text) {
  const url = `https://api.telegram.org/bot${botToken}/sendMessage`;
  try {
    await axios.post(url, {
      chat_id: chatId,
      text: text,
    });
    console.log('Terkirim:', text);
  } catch (err) {
    console.error('Gagal kirim:', err.message);
  }
}

// Loop kirim teks terus-menerus
async function startLoop() {
  let count = 1;
  while (true) {
    const message = `JunaDevz Ni Bos Anti Backdoor`;
    console.log(`${count}`)
    await sendText(message);
    count++;
    await new Promise(resolve => setTimeout(resolve, 1000)); // delay 1 detik
  }
}

startLoop();
