import { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';

import AppInfo from '../app-info/app-info';
import TodoSearch from '../todo-search/todo-search';
import TodoFilter from '../todo-filter/todo-filter';
import ItemAddForm from '../item-add-form/item-add-form';
import TodoList from '../todo-list/todo-list';

import './app.css';


class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            todo: [
                {text: 'Почитать книгу Хоббит пустошь смауга', done: false, id: 1},
                {text: 'Сходить взять посылку', done: false, id: 2},
                {text: 'Посмотреть в озоне компьютерые столы', done: true, id: 3},
                {text: 'Сходить купить шапку', done: false, id: 4},
            ],
            term: '',
            filter: ''
        }
    }

    onToggleCheck = (id) => {
        this.setState(({todo}) => ({
            todo: todo.map(item => {
                if(item.id === id) {
                   return {...item, done: !item.done}
                }
                return item
            })
        }))
    }

    onToggleDelete = (id) => {
        this.setState(({todo}) => ({
            todo: todo.filter(item => {
                return item.id !== id;
            })
        }))
    }

    onAddTodo = (text) => {
        const newItem = {
            text,
            done: false,
            id: uuidv4()
        }
        this.setState(({todo}) => ({
            todo: [...todo, newItem]
        }))
    }

    searchData = (data, term) => {
        if (term.length === 0) {
            return data;
        }
        
        return data.filter(item => {
            return item.text.indexOf(term) > -1 });
    }

    onSearchTerm = (term) => {
        this.setState({term})
    }

    filterData = (data, filter) => {
        switch (filter) {
            case 'completedTodos':
                return data.filter(item => item.done);
            case 'uncompletedTodos':
                return data.filter(item => !item.done);
            default:
                return data;
        }
    }

    onFilterData = (filter) => {
        this.setState({filter})
    }

    render() {
        const {todo, term, filter} = this.state;
        const allTodos = todo.length;
        const completedTodos = (todo.filter(item => item.done)).length;
        const uncompletedTodos = allTodos - completedTodos;
        const data = this.filterData(this.searchData(todo, term), filter);
        console.log(data);

        
        return (
            <div className="app container-md">
                <AppInfo
                    allTodos={allTodos}
                    completedTodos={completedTodos}
                    uncompletedTodos={uncompletedTodos}/>

                <div className="search-form">
                    <div className='search-filter'>
                        <TodoSearch
                        onSearchTerm={this.onSearchTerm}
                        />
                        <TodoFilter
                        filter={filter}
                        onFilterData={this.onFilterData}/>
                    </div>
                    <ItemAddForm
                    onAddTodo={this.onAddTodo} />
                </div>

                <TodoList 
                    data={data}
                    onToggleCheck={this.onToggleCheck}
                    onToggleDelete={this.onToggleDelete} />
            </div>
        )
    }

 

}

export default App;