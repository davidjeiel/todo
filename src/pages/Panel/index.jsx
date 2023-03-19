import { Col, Row } from "react-bootstrap";
import { BG, Container } from "../../styles";
import Share from "../Share";
import TaskList from "../TaskList";

export default function Panel(params)
{
    return(    
        <BG>
            <Row 
                style={{ 
                    paddingTop: "10%",  
                    paddingBottom: "10%"
            }}>
                <Col md="1"/>                
                <Col md="4">                
                    <TaskList />   
                </Col>
                <Col md="1"/>
                <Col md="4">
                    <Share />     
                </Col>
                <Col md="1"/>
            </Row>
        </BG>    
    )
}