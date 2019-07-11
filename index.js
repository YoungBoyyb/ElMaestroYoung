const Discrod = require("discord.js")
const client = new Discrod.Client()
const config = require("./config.json")
const token = process.env.token

//let prefix = "!"

client.login(config.token)

client.on("ready",() => {
    console.log("Bot Connecté !")
    client.user.setStatus("online")
    client.user.setActivity("Péter des culs !", {type: 1})
})

client.on("message", message => {
    if(message.content === "ping") {
    message.reply("pong")    
    }

    if(message.content === "tg") {
    message.reply("Va t'faire foutre laisse Brandon tkl")    
        }

    if(message.content === "Bonjour") {
    message.reply("Bonjour mes rayons de soleil... Bisou.")    
        }

    if(message.content === "bot") {
    message.reply("Laisse moi tkl merci.")    
        }


    if(message.content === "Bot") {
    message.reply("Laisse moi tkl merci.")    
        }

    if(message.content === "Je veux du cul") {
    message.reply("Du cul ???!!! Qui veux du cul ? Marie pète moi l'cul")    
        }

    if(message.content === "Pokemon") {
    message.reply("Pikachu attaque éclair")    
        }

    if(message.content === "Big ass") {
    message.reply("Du cul ???!!! Qui veux du cul ?")    
        }

    if(message.content === "Ass") {
    message.reply("Du cul ???!!! Qui veux du cul ?")    
        }

    if(message.content === "Bonjour Bot") {
    message.reply("Bonjour maître Young !")    
        }    
    
    if(message.content === "pute") {
    message.reply("C'est celui qui dit qui est")    
        }
    if(message.content === "Le bot n'aime que moi") {
    message.reply("Of course")   
        }
    if(message.content === "Cheh") {
    message.reply("C'est toi la chèvre !")   
        }
    if(message.content === "Marie") {
    message.reply("Marie pèèète moi l'cul j'ai dit !!!!!!")   
        } 
    if(message.content === "Young") {
    message.reply("Je t'aime tellement toi Young, t'es le plus fort, le plus beau, le meilleur, Bisou.")   
        } 
})

bot.login(token);
