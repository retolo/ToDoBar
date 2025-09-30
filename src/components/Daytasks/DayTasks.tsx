import css from './DayTasks.module.css'

export interface Tasks{
    task: string
    day: string
    time: string
    id: string
}

interface DayTasksProps{
    data: Tasks[] | undefined
    day: string
    onClose: () => void
    onDelete: (task: Tasks) => void
    onEdit: (id: string) => void
    
}


function DayTasks({data, day, onClose, onDelete, onEdit}: DayTasksProps){


    
    
    return(
        
        <div className={css.blockTasks}>
            <h2 className={css.header}>Tasks {day}</h2>
            <svg onClick={onClose} className={css.icon} xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor"  viewBox="0 0 16 16">
                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
                </svg>
            <div>
                <ul className={css.list}>
                {data !== undefined && !data.some((dayTask) => dayTask.day === day) ? (
                    <li className={css.noTasks}><p>No tasks for these day...</p></li>
                ): (
                    data !== undefined && data
                        ?.filter((task) => task.day === day)
                        .map((task) =>
                    
                        <li className={css.liTasks} key={task.id}>
                            <input data-type={task.id} className={css.inputsData} disabled  defaultValue={`Name: ${task.task}`}/>
                            <input data-type={task.id} className={css.inputsData} disabled defaultValue={`Time: ${task.time}`}/>
                            
                            
                            <button onClick={() => onEdit(task.id)}  className={css.editButton} type='button'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"  viewBox="0 0 16 16">
                                    <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325"/>
                                </svg>
                            </button>
                            <button onClick={() => onDelete(task)}  className={css.deleteButton} type='button'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"  viewBox="0 0 16 16">
                                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
                                    <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
                                </svg>
                            </button>
                            <button className={css.checkButton}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"  viewBox="0 0 16 16">
                                    <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425z"/>
                                </svg>
                            </button>
                            
                        </li>
                    
                ))}
                
                    
                    
                
                
                
            </ul>
            </div>
            
            
        </div>
    )
}


export default DayTasks;