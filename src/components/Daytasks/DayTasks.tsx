import { useState } from 'react'
import css from './DayTasks.module.css'
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaCheck } from "react-icons/fa6";
import { CiEdit } from "react-icons/ci";

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


    
    const [id, setId] = useState<string[]>([]);

    const handleCheck = (item: Tasks) =>{
        if(data !== undefined){
            
            setId([...id, item.id]);
            
        }
       
    }
    
    
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
                            <p className={css.inputsData}>{`Name: ${task.task}` }</p>
                            <p className={css.inputsData}>{`Time: ${task.time}` }</p>
                            
                            
                            
                            <button onClick={() => onEdit(task.id)}  className={css.markButton} type='button'>
                                <CiEdit size={25} className={css.iconEdit}/>
                            </button>
                            <button onClick={() => onDelete(task)}  className={css.markButton} type='button'>
                                <RiDeleteBin6Line size={25} className={css.iconDelete}/>
                            </button>
                            <button onClick={() => handleCheck(task)} className={css.markButton}>
                                <FaCheck size={25} className={css.iconCheck}/>
                            </button>
                            {id.includes(task.id)  &&
                                <p className={css.done}>Done!</p>
                            }
                            
                            
                        </li>
                    
                ))}
                
                    
                    
                
                
                
            </ul>
            </div>
            
            
        </div>
    )
}


export default DayTasks;