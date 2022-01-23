import './app-info.css';

const AppInfo = ({allTodos, completedTodos, uncompletedTodos}) => {

    return (
        <div className="app-info">
            <h1 className='fs-1 text-center'>Управляй делами легко!</h1>
            <hr />
            <h3 className='fs-5'>Общее количество дел: {allTodos} </h3>
            <h3 className='fs-5'>Количество незавершенных дел: {uncompletedTodos}</h3>
            <h3 className='fs-5'>Количество завершенных дел: {completedTodos} </h3>
        </div>
    )
}

export default AppInfo;