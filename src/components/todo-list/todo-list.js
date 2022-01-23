import TodoListItem from '../todo-list-item/todo-list-item';

import './todo-list.css'

const TodoList = (props) => {
    const {data, onToggleCheck, onToggleDelete} = props;

    const element = data.map(item => {
        const {id, ...items} = item;
        return (
            <TodoListItem 
            key={id}
            {...items}
            onToggleCheck={() => onToggleCheck(id)}
            onToggleDelete={() => onToggleDelete(id)}
            />
        )
    })

    return (
        <ul className="todo-list">
         {element}
        </ul>
    )

}

export default TodoList;