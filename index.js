const Discord = require('discord.js')
const db = require('quick.db')
const db2 = require('croxydb')
 const moment = require('moment')
require("moment-duration-format");
const client = new Discord.Client({"partials" : ['CHANNEL', 'MESSAGE']})
const {cords, Client, CommandHandler, EventHandler} = require('cords-handler')
const chclient = new Client()
const express = require('express');



let command_handler = new CommandHandler(client,chclient)
.setCommandFolder("./commands")
.setPrefix("!")
.setPrefix2("prefix ")


.loader();

let eventhander = new EventHandler(client, chclient)
.setEventFolder("./events")
.loader()



chclient.on("commandNotFound", async (data) => {
  console.log(data);
});

client.login("token")
