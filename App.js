import React,  { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class App extends React.Component {
constructor(props) {
  super(props);
  this.state = {
   //sorteio: [], 
   contador:'Boa Sorte!',
   sorteador:[],
   titulo: "Sorteio 6 números da MegaSenna"
  }
}
 // Adicionando um número a lista.
 adiciona(num) {
   this.setState({ sorteador: this.state.sorteador.concat(num)})
}

// Atualizando o contador
 atualiza(num) {
  this.setState( {contador: this.state.contador = num})
  //this.setState( {sorteio: this.state.contador = num})

}

// Retornando um número aleatório
retornaNumero() {
  //Originalmente a megasena vai de 1 a 60 (aqui sorteia o numero 0 )
  var sorteio = 1 * (Math.floor(Math.random() * 60))
  if(sorteio != 0){
    return sorteio;
  }
}


render(){

  return(

    <View style={ styles.container } >
      <Text> {this.state.sorteio} </Text>
      <Text> {this.state.contador} </Text>
      <Button title = { this.state.titulo }
        onPress= { () => {
            
           // A lista deve conter menos de 60 elementos (mega vai de 1 a 59)
          if(this.state.sorteador.length < 60 ) {

            // Buscando um número aleatório
             var numero = this.retornaNumero()
               
             // Se o tamanho da lista for 0, então não há elementos nela
              if(this.state.sorteador.length === 0) {
                 // Adicionando um novo número aleatório a lista.
                 this.adiciona(numero)
                 // Atualizando o contador para exibir o pŕoximo número aleatório.
                 this.atualiza(numero)

            } else {
                 // Inserindos novos elementos na lista
                while(this.state.sorteador.includes(numero) ) {
                  numero = this.retornaNumero()
                }
                
                this.adiciona(numero)
                this.atualiza(numero)
                // Após sortear os 6 números da mega, muda o numero do botao
                if(this.state.sorteador.length == 5) {
                  this.setState( {titulo: this.state.titulo = "Fim do sorteio"})

                }

            }

        }
    } }

     />
  </View>
  );
 }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fffff',
    alignItems: 'center',
    justifyContent: 'center',
  },


});