import { Button, Container, Input, Flex, Spacer, Item } from "./styles";

export default function App() {
  return (
    <Container>
      <h1 className="title">To-Do List</h1>
      <Spacer  margin="150px"/>
      <Flex direction={"row"} justify="space-between">
        <Input placeholder="Digite sua tarefa"/>
        <Button width="50px">
          +
        </Button>
      </Flex>
      <Spacer  margin="16px"/>
      <ul>
        <Item direction="ow" checked="">    
          <p>            
            Texto teste            
          </p>        
          <Flex direction="row">
            <button type="button">
              <i class='bx bxs-trash'></i>
            </button>
            <button>
              <i class='bx bx-check'></i>            
            </button>
          </Flex>
        </Item>
      </ul>
    </Container>
  )
}