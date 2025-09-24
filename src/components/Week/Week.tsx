import type React from 'react';
import css from './Week.module.css'



interface WeekProps{
    onClick: () => void;
    setDay: (day: string) => void;
    onClose: () => void;
}
function Week({onClick, setDay, onClose}: WeekProps){

    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Sunday', 'Saturday'];

    const handelDay = (event: React.MouseEvent<HTMLButtonElement>) =>{
        const day = event.currentTarget.textContent
        setDay(day);
    }
    return(
        <div>
            <ul className={css.listDays}>
                {days.map((day) =>(
                    <li onClick={onClose} key={day}>
                        <button onClick={handelDay}   className={css.buttonDays} type="button">{day}</button>
                    </li>
                    
                ))}
                <li>
                    <button onClick={onClick} className={css.buttonDays} type="button">Create</button>
                </li>
            </ul>
        </div>
    )
}


export default Week;