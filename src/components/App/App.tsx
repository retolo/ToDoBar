import Week from "../Week/Week";
import CreateCard from "../CreateCard/CreateCard";
import  { useEffect, useState } from "react";
import DayTasks from "../Daytasks/DayTasks";
import Modal from "../Modal/Modal";
import { type Tasks } from "../Daytasks/DayTasks";
function App(){

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isOpenTaskBar, setIsOpenTaskBar] = useState<boolean>(false);
  const [deleteItem, setDeleteItem] = useState<Tasks>();
  const [day, setDay] = useState<string>('');
  const [tasks, setTasks] = useState<Tasks[]>();
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [filterItem, setFilterItem] = useState<Tasks | undefined>(undefined)

  const handleOpenClose = () =>{
    if(isOpen === true){
      setIsOpen(false)
      
      
    }else{
      setIsOpen(true)
      setIsOpenTaskBar(false)
    }
  }

  const handelOpenTaskbar = () =>{
    setIsOpenTaskBar(true);
    setIsOpen(false)

  }

  const handelCloseTaskbar = () =>{
    if(isOpenTaskBar === true){
      setIsOpenTaskBar(false)
    }

  }


  const storageKey: string = 'UserTasks'
  const data = localStorage.getItem(storageKey);
  const handelData = (formData:FormData) =>{
    const values = Object.fromEntries(formData) as unknown as Tasks;
    if (!tasks || tasks.length === 0) {
      
      const userData = localStorage.getItem(storageKey);
      if(userData !== null){
        
        const newData = [...JSON.parse(userData), values];
        setTasks(newData)
        localStorage.setItem( storageKey,JSON.stringify(newData))
      }else{
        const newTasks = [values];
        setTasks(newTasks);
        localStorage.setItem(storageKey, JSON.stringify(newTasks));
      }
      
    }else{
      const userData = localStorage.getItem(storageKey);
      if(userData !== null){
        const newData = [...JSON.parse(userData), values];
        setTasks(newData)
        localStorage.setItem( storageKey,JSON.stringify(newData));
      }
    }
  }

 
  
  
    
   
  

  
    useEffect(() =>{
      const dataNew = localStorage.getItem(storageKey);
      if(dataNew !== null){
      const newData = [...JSON.parse(dataNew)];
      if(deleteItem !== undefined){
        const found = newData.filter((obj) => obj.id !== deleteItem.id);
        setTasks([...found])
        localStorage.setItem(storageKey, JSON.stringify(found));
      }

    }
    }, [deleteItem])
    
    
    
      
    


  const handelEditButton = (id: string) =>{
    setIsOpenModal(true);
    const getItem = localStorage.getItem(storageKey);

    if(getItem !== null){
      const data = [...JSON.parse(getItem)];

      const filterItem = data.find((item) => item.id === id);
      // console.log(filterItem)
      setFilterItem(filterItem)
    }
    
  }

  const handelDataForm = (formData: FormData) =>{
    const values = Object.fromEntries(formData) as unknown as Tasks;
    const getItem = localStorage.getItem(storageKey);
    
    if(getItem !== null){
      const data = [...JSON.parse(getItem)];

      const filterItems = data.filter((item) => item.id !== filterItem?.id);
      const editData = [...filterItems, {
        task: values.task.length !== 0 ? values.task : filterItem?.task,
        time: values.time.length !== 0 ? values.time : filterItem?.time,
        day: values.day.length !== 0 ? values.day : filterItem?.day,
        id: filterItem !== undefined ? filterItem.id : ''}]
        
      setTasks(editData)
      localStorage.setItem(storageKey, JSON.stringify(editData))
      console.log(filterItems);
    }

    
  }

  
  
  
  
  
  
  return(
    <>
      <Week onClose={handelOpenTaskbar} onClick={handleOpenClose} setDay={setDay}/>


    {isOpen &&

      <CreateCard  onClose={handleOpenClose} handelData={handelData}/>
    }
    {isOpenTaskBar === true  &&
      <DayTasks onEdit={handelEditButton} onDelete={setDeleteItem}  onClose={handelCloseTaskbar} day={day} data={data !== null ? JSON.parse(data) : undefined}/>
    }

    {isOpenModal &&
      <Modal onClose={() => setIsOpenModal(false)} handelData={handelDataForm}/>
    }
    
    </>
    
  )
}



export default App;