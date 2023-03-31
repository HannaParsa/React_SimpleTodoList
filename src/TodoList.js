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

     }
     deleteItem(key){

     }
 }