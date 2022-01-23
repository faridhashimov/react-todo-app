import './todo-list-item.css';

const TodoListItem = (props) => {
    const {text, done, onToggleCheck, onToggleDelete} = props

    let className = 'list-item';
    
    if(done) {
        className += ' done';
    }

    return (
            <li className={className}>
                <p className='list-item-info'>
                   {text}
                </p>
                <div className="btns">
                    <button type="button"
                        onClick={onToggleCheck}>
                        <i className="fas fa-check"></i>
                    </button>
                    <button type="button">
                        <i className="fas fa-edit"></i>
                    </button>
                    <button type="button"
                        onClick={onToggleDelete}>
                        <i className="fas fa-trash-alt"></i>
                    </button>
                </div>
            </li>
    );
};

export default TodoListItem;
