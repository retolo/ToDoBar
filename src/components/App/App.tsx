import Week from "../Week/Week";
import CreateCard from "../CreateCard/CreateCard";
import  { useEffect, useState } from "react";
import DayTasks from "../Daytasks/DayTasks";
import { type Tasks } from "../Daytasks/DayTasks";
function App(){

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isOpenTaskBar, setIsOpenTaskBar] = useState<boolean>(false);
  const [deleteItem, setDeleteItem] = useState<Tasks>();
  const [id, setId] = useState<string>();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [toggle, setToggle] = useState(false);
  
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
    
    
    useEffect(() =>{
      const dataNew = localStorage.getItem(storageKey);
      
      if(dataNew !== null){
        const newData = [...JSON.parse(dataNew)];
        const found = newData.find((obj) => obj.id === id);
        
        if(found !== undefined){
          
            const inputs = document.querySelectorAll(`[data-type="${found.id}"]`);
            inputs.forEach((input) =>{
              if(toggle){
                input.setAttribute('disabled', '')
                input.setAttribute('value', input.value);
                
                console.log(input);
                
              }else{
                input.removeAttribute('disabled');
                console.log(input);
              }
            });      
        }

      }
    }, [id, toggle]);
      
    


  const handelId = (id: string) =>{
    setId(id)

    if(id !== undefined){
      if(toggle === true){
        setToggle(false)
      }else{
        setToggle(true)
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
      <DayTasks onEdit={handelId} onDelete={setDeleteItem}  onClose={handelCloseTaskbar} day={day} data={data !== null ? JSON.parse(data) : undefined}/>
    }
    
    </>
    
  )
}



export default App;