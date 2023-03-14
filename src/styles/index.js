import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
       
        text-decoration: none;
        outline: none;
        font-family: 'Poppins', sans-serif;        
    }
`

export const Container = styled.div`
    width: 100%;
    min-height: 895px;
    box-shadow: 8px 4px 4px rgba(0,0,0,0.25);
    border-radius: 10px;

    display: flex;
    flex-direction: column;
    align-items: center;

    padding: 12px 25px;

    .title{
        font-weight: 600;
        font-size: 48px;
        line-height: 72px;
        color: #fff;
        text-shadow: #120a31 1px 0 10px;
        margin-bottom: 10%;
    }

    .card-todo{
        max-width: 600px;
        position: relative;
        padding: 60px;
        background: rgba(255,255,255,0.25);
        backdrop-filter: blur(15px);
        border: 1px solid #fff;
        border-bottom: 1px solid rgba(255,255,255,0.5);
        border-right: 1px solid rgba(255,255,255,0.5);
        border-radius: 12px;
        box-shadow: 0 25px 50px rgba(0,0,0,0.7)
    }
`

export const Input = styled.input`    
    padding: 8px 24px;
    width: 80%;
    height: 50px;
    background: #ffffff;
    box-shadow: 0px 4px 4px rgba( 0,0,0, 0.25 );
    border-radius: 10px;
    border: none;

    font-weight: 700;
    font-size: 16px;
    line-weight: 24px;
    color: #172A2B;
`

export const Button = styled.button`
    display: flex;
    align-items: center;
    padding: 20px;
    width: ${ (props)=> props.width || "112px" };
    height: 50px;
    background: #172A2B;
    border-radius: 10px;
    border: none;

    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: #fbfbfb;
    cursor: pointer;

    &:hover{
        opacity: 0.4;
    }
    &:active{
        opacity: 0.6;
    }
`

export const Flex = styled.div`
    display: flex;
    flex-direction: ${ (props)=> props.direction || "column" };
    justify-content: ${ (props)=> props.justify || "center" };
    align-items: ${ (props)=> props.align || "center" };
    gap: ${ (props)=> props.gap || "16px" };
`

export const Spacer = styled.div`
    width: 100%;
    margin: ${ (props)=>{ props.margin || "30px" } };
`

export const Item = styled.li`
    padding: 20px 25px 24px;
    max-width: 98%;
    background: ${ (props)=> props.checked ? "#172A2B": "#FFF" };
    box-shadow: 0px 4px 4px rgba( 0,0,0, 0.25 );
    border-radius: 10px;    
    list-style: none;
    margin-top: 3%;
    margin-bottom: 3%;
    color: ${ (props)=> props.checked ? "#FFF":"#172A2B" };   
    display: flex;
    align-items: center;
    justify-content: space-between;
    
    P{
        flex-wrap: wrap;
        font-weight: 270;
        font-size: 16px;
        line-height: 24px;
        text-decoration-line: ${ (props)=> props.checked ? "line-through":"none" }; 
        width: 75%;
        overflow-wrap: break-word;
        word-wrap: break-word;
        word-break: break-word;
    }

    i{
        font-size: 24px;
        display: flex;
        color:  ${ (props)=> props.checked ? "#FFF":"#172A2B" };
    }

    button{
        background: transparent;
        border: none;
        cursor: pointer;
        &:hover{
            opacity: 0.4;
        }
        &:active{
            opacity: 0.6;
        }
    }
`

export const BG = styled.div`
    background-image: url("img/working.jpg");
    height: 100%;
    width: 100%;  
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover
`