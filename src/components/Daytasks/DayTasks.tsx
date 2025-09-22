import css from './DayTasks.module.css'
import { useId } from 'react'
export interface Tasks{
    task: string
    day: string
    time: string
    tag: string
}

interface DayTasksProps{
    data: Tasks[]
    day: string
}


function DayTasks({data, day}: DayTasksProps){
    const id = useId();
    return(
        <div className={css.blockTasks}>
            <h2 className={css.header}>Tasks {day}</h2>
            <div>
                <ul>
                {data.map((task) =>
                    task.day === day ? (
                        <li key={id}>{task.task}</li>
                    ) : null
                )}
            </ul>
            </div>
            
            
        </div>
    )
}


export default DayTasks;