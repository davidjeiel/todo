import { useEffect, useState } from "react";
import { 
    Card, 
    Col, 
    Collapse, 
    ListGroup,  
    Button as BtnBoot,   
    Row, 
    Dropdown,
    DropdownButton,
    ButtonGroup
} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

export const List = (params)=>
{
    const [ open,  setOpen ] = useState(false);
    const [ check, setCheck ] = useState({});

    const [ list, setList ] = useState({});

    const handleItem = (id)=>{
        setOpen(!open);
    }

    const addItem = ()=>{
        setOpen(true);
    }

    const removeTask = ()=>{        
        setList('');
        console.debug('Remoção de lista');
    }

    const requestData = async ()=>{
        const data = {
            id: params.id,
            checked: params.checked,
            name: params.name
        };
        setList( data );
    }

    const share = async (name)=>{
        // if (navigator.share !== undefined) {
        // await navigator.share({
        //     title: 'compartilhamento de tarefa',
        //     text: name,
        //     url: 'https://davidjeiel.com',
        // })
        // .then(() => console.log('Compartilhado com sucesso'))
        // .catch((error) => console.log('Erro de compartilhamento', error));
        // }
    }

    useEffect(()=>{        
        requestData();
    }, []);

    const toggleChecked = ()=>
    {        
        setCheck(!check);
    }

    return(
         <>
            {
                list &&
                <Card 
                    key={"lista-"+params.id} 
                    className={ check===false ? "bg-white m-2": "bg-dark text-light opacity-75 text-decoration-line-through m-2"  
                    }>
                    <Card.Header>
                        <Row>
                            <Col md="1" className="pr-2" >
                                <DropdownButton 
                                    size="sm" 
                                    drop="up" 
                                    variant="outline-secondary"
                                    title=""
                                >
                                    <Dropdown.Item 
                                        onClick={  ()=>{ toggleChecked() } }
                                    >
                                        <Row>
                                            <Col sm="9">
                                                {
                                                    check ? 
                                                    "Desmarcar"
                                                    :
                                                    "Concluír"


                                                }
                                            </Col>
                                            <Col sm="2">
                                                <i className='bx bx-list-check'></i>
                                            </Col>
                                        </Row>
                                    </Dropdown.Item>
                                    <Dropdown.Item 
                                        onClick={  ()=>{ ()=>removeTask( )} }
                                    >
                                        <Row>
                                            <Col sm="9">
                                                Excluír
                                            </Col>
                                            <Col sm="2">
                                                <i className='bx bxs-trash'></i>
                                            </Col>
                                        </Row>
                                    </Dropdown.Item>
                                    <Dropdown.Item 
                                        onClick={ ()=>{ share(params.name) } }
                                    >
                                        <Row>
                                            <Col sm="9">
                                                Compartilhar
                                            </Col>
                                            <Col sm="2">
                                                <i className='bx bxs-share-alt'></i>
                                            </Col>
                                        </Row>
                                    </Dropdown.Item>
                                </DropdownButton>       
                            </Col>
                            <Col md="8">
                                <h5 className="text-center l-2">{ params.name }</h5>        
                            </Col>
                            <Col md="2">
                                <ButtonGroup>
                                    <BtnBoot 
                                        type="button"
                                        variant="outline-secondary"
                                        size="sm"
                                        onClick={ ()=>{ addItem(params.id) } }
                                        aria-expanded={open}
                                        aria-controls={"lista-"+params.id}
                                    >
                                        <i className='bx bx-plus'></i> 
                                    </BtnBoot>
                                    <BtnBoot 
                                        type="button"
                                        variant="outline-secondary"
                                        size="sm"
                                        onClick={ ()=>{ handleItem(params.id) } }
                                        aria-expanded={open}
                                        aria-controls={"lista-"+params.id}
                                    >   
                                        {
                                            !open? 
                                            <i className='bx bx-chevron-down' ></i>       
                                            :
                                            <i className='bx bx-chevron-up' ></i>       
                                        } 
                                    </BtnBoot>
                                </ButtonGroup>
                            </Col>
                        </Row>
                        
                    </Card.Header>                
                    <Collapse id={ "item"+ params.id } in={open}>
                        <Card.Footer>
                            <ListGroup id={`collapse-items-${ params.id }`}>
                                <ListGroup.Item                                  
                                    className="opacity-50"
                                >
                                    <Row>
                                        teste
                                    </Row>
                                </ListGroup.Item>
                            </ListGroup>
                        </Card.Footer>
                    </Collapse>
                </Card>
            }
        </>
    )
}