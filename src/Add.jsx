import React ,{Component} from 'react'; 



 class Add extends Component
{

    state={
        contenu : ''
    }
      changer = (e) =>
      {
          this.setState({contenu: e.target.value})
          

      }
    Submitt = (e) =>
     {
         e.preventDefault();
         this.props.addTodo(this.state);
        
        }
        render()
        {
    return(
        <div>
        
        <input type="text"  placeholder="todo" onChange={this.changer}/>

        <input type="button" value="ajouter" onClick={this.Submitt}/>
        </div>
    );
        }


}

export default Add;
