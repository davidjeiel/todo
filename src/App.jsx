import { Button, Container, Input, Flex, Spacer } from "./styles";

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
    </Container>
  )
}