import css from './JustDoIt.module.css'


type Props = {
    onClick: () => void;
}

function JustDoIt({onClick}: Props) {
    const now = new Date();
    const formatted = now.toLocaleString('en-US', {
    month: '2-digit',
    day: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true
    });


    return(
        <div className={css.wrapper}>
            <div className={css.block}>
                <h1 className={css.header}>Just do it!</h1>
                <button onClick={onClick} className={css.createButton} type="button">Create Task</button>
                <p className={css.datatext}>{formatted}</p>
            </div>
        </div>
        
    )
}


export default JustDoIt;