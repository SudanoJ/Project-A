module.exports = {
  run: (client, message, args) => {
    if (!message.member.hasPermission(['MANAGE_MESSAGES', 'ADMINISTRATOR'])) { return message.channel.send('> Você não pode usar esse comando!') }

    let argsresult
    const mUser = message.mentions.members.first()
    if(!mUser) return message.reply("Não consegui encontrar esse usuário!");

    if(message.deletable) message.delete();

      argsresult = args.slice(1).join(' ')

      if(!argsresult) return message.reply("Específique uma mensagem para enviar.")

      mUser.send(argsresult).catch(() => message.reply("As mensagens privadas desse usuário estão desativadas!"));
   
  },

  conf: {},

  get help () {
    return {
      name: 'saypv',
      category: 'Moderação',
      description: 'Faz o bot enviar tal mensagem a um usuario.',
      usage: 'saypv',
      admin: true
    }
  }

}
