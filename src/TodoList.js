import React, {Component} from 'react';
import TodoItems from './TodoItems';
 class TodoList extends Component{
     constructor(props){
         super(props);
         this.state = {items: []};
         this.addItem = this.addItem.bind(this);
         this.deleteItem = this.deleteItem.bind(this);
     }
     addItem(e){
            if(this._inputElement.value !== ""){
               var newItem = {
                   text: this._inputElement.value,
                   key: Date.now()
               }
               this.setState((prevstate)=> {
                  return{
                      items: prevstate.items.concat(newItem)
                  }
               });
            }
            e.preventDefault();
            //will not add to list
     }
     deleteItem(key){
        var filteredItems = this.state.items.filter(function(item) {
			return (item.key !== key);
		});
         this.setState({items: filteredItems});
     }
     render(){
         return(

         )
     }
 }