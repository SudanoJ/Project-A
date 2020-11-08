module.exports = {
  run: (client, message, args) => {
    if (!message.member.hasPermission(['MANAGE_MESSAGES', 'ADMINISTRATOR'])) { return message.channel.send('> Você não pode usar esse comando!') }

   

    let argsresult
    const mUser = message.mentions.members.first()
    if(!mUser) return message.reply("Não consegui encontrar esse usuário!");

    if(message.deletable) message.delete();

      argsresult = args.slice(1).join(' ')
      if(!argsresult) argsresult = "Não específicado.";

     mUser.kick(argsresult).then(() => message.channel.send("> 🚫 | " + message.member + " expulsou o usuário " + mUser + " do servidor.\n> 🚫 | Motivo: " + argsresult)).catch(() => message.reply("Eu não tenho permissão para expulsar esse usuário."));
   
  },

  conf: {
    onlyguilds: true
  },

  get help () {
    return {
      name: 'kick',
      category: 'Moderação',
      description: 'Expulsa um usuario do discord.',
      usage: 'kick',
      admin: true
    }
  }

}
