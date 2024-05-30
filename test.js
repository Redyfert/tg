const tg = window.Telegram.WebApp
// const app = () =>{
//     useEffect(()=>{
//         tg.ready();
//     }, [])
//     const OnClose =()=>{
//         tg.close()
//     }
//     return(
//     <div className="App">

//     <button onclick={OnClose}></button>
//     </div>
// );}
let user = document.getElementById("name")
user.textContent = tg?.username

const TelegramBot = require('node-telegram-bot-api');
const token = '7293482454:AAHjXb85aslA-wM2A69Ey-MWxMeko7ov6Y8';
const webAppUrl = "https://hamsterkombat.io/"
const bot = new TelegramBot(token, {polling: true});

bot.on('message', async (msg) => {
  const chatId = msg.chat.id;
  const text = msg.text
  if(msg.text === "/start"){
    await bot.sendMessage(chatId, "Чимпупууу", {
      reply_markup:{
        keyboard:[
          [{text:"Хочу пиццы"}]
        ]
      }
    })
}
else if(text ==="Хочу пиццы"){
  bot.sendMessage(chatId, "нету пиццы((((", {
    reply_markup:{
      keyboard:[
        [{text:"Но я хочу пиццы((((((("}]
      ]
    }
  })
}
else if(text ==="Но я хочу пиццы((((((("){
bot.sendMessage(chatId,"тогда держи ссылку на пиццу!", {
  reply_markup:{
    inline_keyboard:[
      [{text:"Ооооо, сюююдаа!", web_app: {url:webAppUrl}}]
    ]
  }
})
}});