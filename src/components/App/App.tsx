import Week from "../Week/Week";
import CreateCard from "../CreateCard/CreateCard";
import React, { useState } from "react";
import DayTasks from "../Daytasks/DayTasks";
import { type Tasks } from "../Daytasks/DayTasks";
function App(){

  const [isOpen, setIsOpen] = useState<boolean>(false);
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
    if(isOpenTaskBar === true){
      setIsOpenTaskBar(false)
    }else{
      setIsOpenTaskBar(true)
      setIsOpen(false)
    }
  }
  const storageKey: string = 'UserTasks'
  const data = localStorage.getItem(storageKey);

  const handelData = (formData:FormData) =>{
    const values = Object.fromEntries(formData) as unknown as Tasks;
    
    
    
    
    if(tasks === undefined){
      setTasks([{task: values.task, day: values.day, time: values.time, tag: values.tag}]);
    }else{
      const newObj = [...tasks, {task: values.task, day: values.day, time: values.time, tag: values.tag}];
      setTasks(newObj);
      localStorage.setItem(storageKey, JSON.stringify([...tasks, values]));
    
    }
  }
  
  
  
  
  
  
  return(
    <>
      <Week onClose={handelOpenTaskbar} onClick={handleOpenClose} setDay={setDay}/>


    {isOpen &&

      <CreateCard  onClose={handleOpenClose} handelData={handelData}/>
    }
    {isOpenTaskBar === true  &&
      <DayTasks  onClose={handelOpenTaskbar} day={day} data={data !== null ? JSON.parse(data) : undefined}/>
    }
    
    </>
    
  )
}


export default App;