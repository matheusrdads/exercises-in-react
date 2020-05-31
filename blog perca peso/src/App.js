import React, { Component } from 'react';
import './style.css';


//https://sujeitoprogramador.com/rn-api/?api=posts


class App extends Component{

    constructor(props){
        super(props);
        this.state = {
            nutri: []
        };

    }

    componentDidMount(){
        let url = 'https://sujeitoprogramador.com/rn-api/?api=posts'; // url recebeu a api
        fetch(url) // buscar a url
        .then((r)=> r.json())  // trasforma em json
        .then((json)=>{ // recebe de novo ja transformado em json
            let state = this.state; //comeca a usar a api
            state.nutri = json; //passa o json para o array nutri
            this.setState(state);// passa o estado
            console.log(json);// mostra no console
        })        

    }

     render(){
        return(
            <div className="container">
                <header>
                    <strong>React Nutri</strong>
                </header>

                {this.state.nutri.map((item)=>{
                    return(
                        <article key={item.id} className="post">
                            <strong className="titulo"> {item.titulo} </strong>
                            <img src={item.capa} className="capa" />
                            <p className="subtitulo">{item.subtitulo}</p>
                            <a className="botao" href="#">Acessar</a>
                        </article>
                    );
                })}

            </div>         
        );
    }
}

export default App;