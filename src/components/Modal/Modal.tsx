import css from './Modal.module.css'

type ModalProps ={
    onClose: () => void
    handelData: (formData: FormData) => void
}
function Modal({onClose, handelData}: ModalProps){

     return(
        <div className={css.backDrop}>
            <div className={css.modal}>
                <svg
                onClick={onClose}
                className={css.icon}
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                fill="currentColor"
                viewBox="0 0 16 16"
                >
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
                </svg>

                <h3 className={css.header}>Edit task</h3>

                <div className={css.wrapper}>
                    <form action={handelData} className={css.formBlock}>

                        <input placeholder='Name: '  name="task" className={css.inputsOrder} type="text" />

                        <input placeholder='Time: '  name="time" className={css.inputsOrder} type="text" />

                        <input placeholder='Day: '  name="day" className={css.inputsOrder} type="text" />
                        
                        
                        
                        

                        <button  className={css.orderButton}  type="submit">
                        Submit
                        </button>
                    </form>
                </div>
            </div>
        </div>

    )
}


export default Modal;