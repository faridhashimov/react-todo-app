import { Component } from 'react';

import './todo-search.css'

class TodoSearch extends Component {
    constructor(props){
        super(props);
        this.state = {
            term: ''
        }
    }

    onSearchTodo = (e) => {
        const term = e.target.value;
        this.setState({term});
        this.props.onSearchTerm(term);
    }

    render () {
        return (
            <div>
                <input className="form-control search-panel" 
                type="text" 
                placeholder="Что вы ищете?"
                value={this.state.term}
                onChange={this.onSearchTodo}/>
            </div>
        )
    }
    
}

export default TodoSearch;