import { 
    Button, 
    Container as ContainerStyled, 
    Input, 
    Flex,
    BlurCard
} from "../../styles";
import { useState, useContext } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { List } from "./List";

export default function TaskList()
{

    const [ task,     setTask     ] = useState('');
    const [ taskList, setTaskList ] = useState([]);

    const addTask = ()=>{
        if(!task) { 
            alert('Por favor preencha uma tarefa') 
            setTask('');
        }else{ 
            const newTask = {
                id: Math.random(),
                name: task,
                checked: false
            }
            setTaskList([...taskList ,newTask]);
            setTask('');
        };   
    }

    const enterClick = (key)=>{
        if(key === "Enter"){
            addTask();
        }
    }

    return (
        <BlurCard width="100%">  
            <div className="box">
                <h1 className="title">LISTS</h1>
                <Flex direction="row" justify="space-between">
                    <Input 
                        value={task}
                        width="100%"
                        onChange={ e=>setTask(e.target.value) }  
                        placeholder="Digite sua tarefa"
                        onKeyDown={()=>enterClick(event.key)}
                    />
                    <Button 
                        width="50px" 
                        onClick={ ()=>{addTask()} }
                    >
                        +
                    </Button>
                </Flex>
                <div>
                    { 
                        taskList.map( t=>(
                            <List  
                                id={ t.id } 
                                key={ t.id } 
                                name={ t.name } 
                                checked={ t.checked }
                                setTaskList={setTaskList}
                                taskList={taskList}
                            />
                        )) 
                    }
                </div>    
            </div>      
        </BlurCard>                
    )
}