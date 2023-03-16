import { Link, useNavigate } from "react-router-dom";
import { BG, Container, Input, Spacer, Button } from "../../styles";
import useAuth from "../../hooks/useAuth";
import { useState } from "react";

export default function Signup()
{
    const { signin } = useAuth();
    const navigate   = useNavigate();

    const [email,  setEmail] = useState();
    const [emailValidate,  setemailValidate] = useState();
    const [pass ,  setPass ] = useState();
    const [error , setError] = useState();

    const handleSignup = () =>{
        if( !email | !pass | !setemailValidate ){
            setError( "Por favor preencha todos os campos" );
            return;
        }else if( email !== emailValidate ){
            setError( "Os emails devem ser iguais" );
            return;
        }

        const res = signup(email, pass);

        if(res){
            setError(res)
            return;
        }

        alert('Usuário cadastrado com sucesso');
        navigate('/');
    }

    return(
        <BG>
            <Container>
                <div className="card-todo">
                    <h2 className="title">CADASTRO</h2>
                    <Spacer  margin="150px"/>
                    <label>Usuário</label>
                    <Input 
                        width="100%"
                        marginTop="3%"
                        marginBottom="3%"
                        placeholder="Usuário"
                        type="email"
                        onChange={ (e)=>[ setEmail( e.target.value ), setError("") ] }
                    />
                    <Spacer  margin="150px"/>
                    <label>Senha</label>
                    <Input 
                        width="100%"
                        marginTop="3%"
                        marginBottom="10%"
                        placeholder="Senha"
                        type="pass"
                        onChange={ (e)=>[ setPass( e.target.value ), setError("") ] }
                    />
                    <Button 
                        width="100%" 
                        onClick={ ()=>{handleSignup()} }
                    >
                        ENVIAR
                    </Button>        
                    <Link to="/index" className="texto">                            
                        Já tem uma conta
                    </Link>           
                </div>                
            </Container>            
        </BG>
    )
}