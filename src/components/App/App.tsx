import Week from "../Week/Week";
import CreateCard from "../CreateCard/CreateCard";
import React, { useEffect, useState } from "react";
import DayTasks from "../Daytasks/DayTasks";
import { type Tasks } from "../Daytasks/DayTasks";
function App(){

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [day, setDay] = useState<string>('');
  const [tasks, setTasks] = useState<Tasks[]>();


  const handleOpenClose = () =>{
    if(isOpen === true){
      setIsOpen(false)
    }else{
      setIsOpen(true)
    }
  }

  const handelData = (formData:FormData) =>{
    const values = Object.fromEntries(formData) as unknown as Tasks;
    console.log(values);
    
    
    if(tasks === undefined){
      setTasks([{task: values.task, day: values.day, time: values.time, tag: values.tag}]);
    }else{
      const newObj = [...tasks, {task: values.task, day: values.day, time: values.time, tag: values.tag}];
    setTasks(newObj);
    
    }

    

      
    
    
    
  }
  
  useEffect(() =>{
    console.log(day)
    console.log(tasks)
  }, [day, tasks])
  
  return(
    <>
      <Week onClick={handleOpenClose} setDay={setDay}/>


    {isOpen &&

      <CreateCard  onClose={handleOpenClose} handelData={handelData}/>
    }
    {tasks !== undefined && tasks.length > 0 &&
      <DayTasks day={day} data={tasks}/>
    }
    
    </>
    
  )
}


export default App;