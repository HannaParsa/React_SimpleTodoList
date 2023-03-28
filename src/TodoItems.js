import React, {Component} from 'react';

class TodoItems extends Component{
    constructor(props){
        super(props);
        this.creatTask = this.createTask.bind(this);
    }
    creatTask(item){
        return <li onClick={() => this.delete(item.key)} key={item.key}>{item.text}</li>
    }
    delete(key){
        return this.props.delete(key)
    }
    render(){
        var todoEntries = this.props.entries;
        var listItems =todoEntries.map(this.creatTask)
        return(
           <ul className = "theList"> {listItems}</ul>
        )
    }
}
export default TodoItems;