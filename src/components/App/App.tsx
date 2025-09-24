import Week from "../Week/Week";
import CreateCard from "../CreateCard/CreateCard";
import React, { useState } from "react";
import DayTasks from "../Daytasks/DayTasks";
import { type Tasks } from "../Daytasks/DayTasks";
function App(){

  const [isOpen, setIsOpen] = useState<boolean>(false);
  // const [isClose, setIsClose] = useState<boolean>(false);
  const [isOpenTaskBar, setIsOpenTaskBar] = useState<boolean>(false);
  
  const [day, setDay] = useState<string>('');
  const [tasks, setTasks] = useState<Tasks[]>();

  
  
    
  
  

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
console.log(data);
  const handelData = (formData:FormData) =>{
    const values = Object.fromEntries(formData) as unknown as Tasks;
    console.log(values);
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
  
  
  
  
  
  
  return(
    <>
      <Week onClose={handelOpenTaskbar} onClick={handleOpenClose} setDay={setDay}/>


    {isOpen &&

      <CreateCard  onClose={handleOpenClose} handelData={handelData}/>
    }
    {isOpenTaskBar === true  &&
      <DayTasks  onClose={handelCloseTaskbar} day={day} data={data !== null ? JSON.parse(data) : undefined}/>
    }
    
    </>
    
  )
}


export default App;