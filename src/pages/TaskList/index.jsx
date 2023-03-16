import { Button, Container, Input, Flex, Spacer, Item, BG } from "../../styles";
import { useState, useContext } from "react";
import { AuthGoogleContext } from "../../contexts/authGoogleContext";


export default function TaskList()
{
    const user = useContext(AuthGoogleContext);
    const userLogado = JSON.parse( user );
    console.debug(userLogado);

    const [ task, setTask ] = useState('');
    const [ taskList, setTaskList ] = useState([]);
    
    const lista = taskList.map( t=>(<Item key={t.id} direction="ow" checked={t.checked}>    
                                        <p>{ t.name }</p>        
                                        <Flex direction="row">
                                        <button type="button" onClick={
                                            ()=>removeTask( t.id )
                                        }>
                                            <i className='bx bxs-trash'></i>
                                        </button>
                                        <button 
                                            type="button" 
                                            onClick={ ()=>{ toggleChecked(t.id, t.checked) } }>
                                            <i className='bx bx-check'></i>            
                                        </button>
                                        <button 
                                            type="button" 
                                            onClick={ ()=>{ share(t.name) } }>
                                            <i className='bx bxs-share-alt'></i>          
                                        </button>
                                        </Flex>
                                    </Item>));


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

    const removeTask = (id)=>{
        const newList = taskList.filter((task => task.id !== id));
        setTaskList(newList);
    }

    const toggleChecked = (id, checked)=>{
        const index = taskList.findIndex((task => task.id === id));
        const  newList = taskList;
        newList[index].checked = !checked;
        setTaskList([...newList]);
    }

    const share = async (name)=>{
        if (navigator.share !== undefined) {
        await navigator.share({
            title: 'compartilhamento de tarefa',
            text: name,
            url: 'https://davidjeiel.com',
        })
        .then(() => console.log('Compartilhado com sucesso'))
        .catch((error) => console.log('Erro de compartilhamento', error));
        }
    }

    const enterClick = (key)=>{
        if(key === "Enter"){
            addTask();
        }
    }

    return (
        <BG>
            <Container>
                <div className="card-todo">
                    <h1 className="title">LISTA DE TAREFAS</h1>
                    <Spacer  margin="150px"/>
                    <Flex direction="row" justify="space-between">
                    <Input 
                        value={task}
                        width="100%"
                        onChange={ e=>setTask(e.target.value) }  
                        placeholder="Digite sua tarefa"
                        onKeyDown={()=>enterClick(event.key)}
                    />
                    <Button width="50px" onClick={ ()=>{addTask()} }>
                        +
                    </Button>
                    </Flex>
                    <Spacer  margin="16px"/>
                    <ul>{ lista }</ul>
                </div>  
            </Container>
        </BG>
    )
}