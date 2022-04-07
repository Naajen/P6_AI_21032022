//Faire les require à l'app & le http
const http = require('http'); //module http pour createServer
const app = require('./app');


//fonction elle sert à quoi ??
const normalizePort = val => {
  const port = parseInt(val, 10);
  
  if (isNaN(port)) {
    return val;
  }
  if (port >= 0) {
    return port;
  }
  return false;
};

//en cas d'erreur !
const errorHandler = error => {
  if (error.syscall !== 'listen') {
    throw error;
  }
  const address = server.address();
  const bind = typeof address === 'string' ? 'pipe ' + address : 'port: ' + port;
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges.');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use.');
      process.exit(1);
      break;
    default:
      throw error;
  }
};

//Création du port 3000 & attendre les requetes envoyé
const port = normalizePort(process.env.PORT || '3000');
app.set('port', port);

//Creation du serveur createServer()
const server = http.createServer(app);

server.on('error', errorHandler);
//Si la liaison est bonne alors on envoi un message pour dire qu'il est sur écoute
server.on('listening', () => {
  const address = server.address();
  const bind = typeof address === 'string' ? 'pipe ' + address : 'port ' + port;
  console.log('Listening on ' + bind);
});

//Le serveur écoute le port 3000
server.listen(port);


/*
MODULES NODEMON
dans le backend faire un "npm install -g nodemon"

If nodemon.ps1 script ne fonctionne pas ouvrir powershell en admin

1)Get-ExecutionPolicy
# You should get 'Restricted'
 
2)Set-ExecutionPolicy Unrestricted

3) Get-ExecutionPolicy
# You should get 'Unrestricted'

4) Try nodemon server
*/