import React, { Component } from 'react';


class TodoList extends Component{

  constructor(props){
    super(props);
      this.state={
        tarefa: ' ',
        items: []
      }

    }
    
  render(){
    return(
      <div>
          <form>
            <input type="text" placeholder="Nova Tarefa?" name="tarefa"
            value={this.state.tarefa} onChange={ (ev) => this.setState({tarefa: ev.target.value})} 
            ref={ (event) => this._tarefaInput = event} />
          </form>
          
          {this.state.tarefa}

      </div>
    )
  }
}

export default TodoList;
