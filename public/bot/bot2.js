const clientId = '558984942114045952'
const scopes = ['rpc', 'rpc.api', 'messages.read'];
const rpc = require('discord-rpc')
const client = new RPC.Client({ transport: 'websocket' });

client.on('ready', () => {
  console.log('Logged in as', client.application.name);
  console.log('Authed for user', client.user.username);

  client.selectVoicechannel('');
});
client.login({ clientId, scopes });