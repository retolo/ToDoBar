import css from './CreateCard.module.css'
interface CreateCardProps{
    onClose: () => void;
    handelData: (formData:FormData) => void
}

function CreateCard({ onClose, handelData}: CreateCardProps){

    const id = crypto.randomUUID();
    
    return(
        <div className={css.formWrapper}>
            <svg onClick={onClose} className={css.icon} xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor"  viewBox="0 0 16 16">
                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
                </svg>
                
            <form action={handelData} className={css.formMain}>
                
                <label className={css.inputWrapper}>
                    
                    <input name='task' required className={css.input} placeholder="Enter new task" type="text"/>
                    
                </label>

                <label >
                    <input name='day' required className={css.input} placeholder="Enter day" type="text"/>
                    
                </label>

                <label >
                    <input name='time' required className={css.input} placeholder="Enter time" type="text"/>
                    
                </label>

                <label >
                    <input name='id' defaultValue={id + 1}  required className={css.inputLast} type="text"/>
                    
                </label>

                <button className={css.submitButton} type="submit">Add</button>
                
            </form>
        </div>
        
    )
}


export default CreateCard;