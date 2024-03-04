
import NovaCena from './NovaCena.js'; // Importo a classe da novaCena
import CenaJogavel from './CenaJogavel.js'; //Importo a classe da CenaJogavel
//Configurações do phaser
var config = {
  type: Phaser.AUTO,
  width: 650,
  height: 650,
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 0 },
      debug: false,
    },
  },
  //Lista das cenas adicionadas ao jogo
  scene: [
    NovaCena,
    CenaJogavel

] 
}

var game = new Phaser.Game(config);


  
 