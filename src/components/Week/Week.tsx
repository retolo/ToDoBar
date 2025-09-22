import type React from 'react';
import css from './Week.module.css'



interface WeekProps{
    onClick: () => void;
    setDay: (day: string) => void;
    
}
function Week({onClick, setDay}: WeekProps){

    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Sunday', 'Saturday'];

    const handelDay = (event: React.MouseEvent<HTMLButtonElement>) =>{
        setDay(event.currentTarget.textContent);
    }
    return(
        <div>
            <ul className={css.listDays}>
                {days.map((day) =>(
                    <li key={day}>
                        <button onClick={handelDay} className={css.buttonDays} type="button">{day}</button>
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