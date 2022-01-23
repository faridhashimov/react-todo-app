import './todo-filter.css';

const TodoFilter = ({filter, onFilterData}) => {
    const buttonArr = [
    { name: 'all', label: 'Все дела'},
    { name: 'completedTodos', label: 'Завершенные дела'},
    { name: 'uncompletedTodos', label: 'Незавершенные дела'},
    ];

    const buttons = buttonArr.map(({name, label}) => {
        const active = filter === name;
        const clazz = active ? 'btn-light' : 'btn-outline-light'
        return (
            <button 
                type="button" 
                className={`btn ${clazz}`}
                key={name}
                onClick={() => onFilterData(name)}>
                {label}
            </button>
        )
    });

    return (
        <div>
             {buttons}
        </div>
    );
};

export default TodoFilter;
