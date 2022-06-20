const Discord = require("discord.js");
const db = require("quick.db");


exports.run = async (client, message, args) => {

const eğlence = new Discord.MessageEmbed()
.setColor("RANDOM")
.setAuthor(" MoonBot v1 sürümüyle sizlerle")
.setTitle(" ➤MoonBot Moderasyon komutları" )
 .setTimestamp()
.setDescription(" **m!ping** : Botun pingini gösterir. \n  **m!forceban** : Kullanıcıyı Sunucudan Banlar. \n  **m!ban** : Kullanıcıyı Sunucudan Banlar. \n **m!unban** : Banlanan Bir Kullanıcının Banını Açır. \n **m!id** : Etiketlenen Kişinin İD'sini Söyler. \n **m!küfür** : Yazıldığı Kanaldaki Küfürleri Engeller. \n **m!is** : Botun İstatiklerini Gösterir. \n **m!sa-as** : Botun Otomatik as Yazmasını Açar. \n **m!kick** : Kullanıcıyı Sunucudan Kick'ler. \n **m!sunucubilgi** : Sunucu Bilgilerini Gösterir. \n **m!sil** : En Fazla 100 Adet Mesaj Siler. \n **m!profil** : Kullanıcının Profil Bilgilerini Gösterir. \n **m!token** . Botun Tokenini Verir. \n **m!yetkilerim** : Sunucuda Yetkilerini Söyler. \n **m!link** : Yazıldığı Kanala Link Atılmasını Engeller. \n  **m!üyedurum** : Sunucudaki Üye Sayısını Söyler. \n **m!afk** : Afk Kalırsınız. \n **m!davet** : Botun Davet Linkini Verir. \n **m!sohbet-aç** : Kanalı Yazılabilir Duruma Getirirsiniz. \n **m!sohbet-kapat** : Kanalı Yazılamaz Duruma Getirirsiniz. ")
.setImage("https://cdn.discordapp.com/attachments/790999702765961258/791798016583008297/wp2490739.png")
message.channel.send(eğlence)
}

exports.conf = {
  enabled: true, 
  guildOnly: false, 
   aliases: [],
  permLevel: `Yetki gerekmiyor.` 
};

exports.help = {
  name: 'moderasyon',
  category: 'moderasyon',
  description: 'Yardım Menüsü.',
   usage:'moderasyon'
}