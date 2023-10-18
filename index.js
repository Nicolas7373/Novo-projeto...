class HeroiDoJogo {
    constructor(nomeDoHeroi, idadeDoHeroi, tipoDoHeroi) {
      this.nomeDoHeroi = nomeDoHeroi;
      this.idadeDoHeroi = idadeDoHeroi;
      this.tipoDoHeroi = tipoDoHeroi;
    }
  
    ataque() {
      let ataque = "";
      switch (this.tipoDoHeroi) {
        case "mago":
          ataque = "usou magia";
          break;
        default:
          ataque = "usou um ataque desconhecido";
          break;
      }
      console.log(`O ${this.tipoDoHeroi} atacou usando ${ataque}`);
    }
  }
  
  // Criando uma instância de HeroiDoJogo com os parâmetros para um mago
  let heroi = new HeroiDoJogo("Nicolas", 21, "mago");
  
  // Chamando o método ataque() do objeto heroi
  heroi.ataque();