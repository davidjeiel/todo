import { useState } from "react";
import { BG, Container, Input, Spacer, Button } from "../../styles";
import useAuth from "../../hooks/useAuth";
import { useNavigate, Link } from "react-router-dom";

export default function Login()
{
    const { signin } = useAuth();
    const navigate = useNavigate();

    const [email,  setEmail] = useState();
    const [pass ,  setPass ] = useState();
    const [error , setError] = useState();

    const handleLogin = ()=>{
        if(!email | !pass){
            setError("Preencha todos os campos");
        }

        const res = sigin(email, pass);

        if(res){
            setError(res);
            return;
        }

        navigate(home)
    }

    return(
        <BG>
            <Container>
                <div className="card-todo">
                    <h2 className="title">LOGIN</h2>
                    <Spacer  margin="150px"/>
                    <Input 
                        width="100%"
                        marginTop="3%"
                        marginBottom="3%"
                        placeholder="Usuário"
                        type="email"
                        onChange={ (e)=>[ setEmail( e.target.value ), setError("") ] }
                    />
                    <Spacer  margin="150px"/>
                    <Input 
                        width="100%"
                        marginTop="3%"
                        marginBottom="10%"
                        placeholder="Senha"
                        type="pass"
                        onChange={ (e)=>[ setPass( e.target.value ), setError("") ] }
                    />
                    <Button 
                        width="250px" 
                        onClick={ ()=>{handleLogin()} }
                    >
                        ENVIAR
                    </Button>                 
                    <Link to="/signup" className="texto">                            
                        Registro de usuário
                    </Link>                    
                </div>                
            </Container>            
        </BG>
    )
}