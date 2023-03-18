import { BG, Container, Spacer, Button, Input } from "../../styles";
import { useState } from "react";
import { auth } from "../../config/FirebaseConfig";
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, Navigate } from "react-router-dom";


export default function Logon()
{
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [
      createUserWithEmailAndPassword,
      user,
      loading,
      error,
    ] = useCreateUserWithEmailAndPassword(auth);

    if (error) {
      return (
        <div>
          <p>Error: {error.message}</p>
        </div>
      );
    }
    if (loading) {
      return <p>Loading...</p>;
    }
    if (user) {
      return (
        <div>
          <p>Registered User: {user.user.email}</p>
        </div>
      );
    }

    
    return(
        <BG>
            <Container>
                <div className="card-todo">
                    <h2 className="title">CADASTRO</h2>
                    <Spacer  margin="150px"/>
                    <Input 
                        type="email"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                        placeholder="Usuário"
                        width="100%"
                    />
                    <Input
                        type="password"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                        placeholder="Senha"
                        width="100%"
                    />
                    <Button 
                        width="100%" 
                        onClick={()=>createUserWithEmailAndPassword(email, password)}
                        textAlign="center"
                    >
                        CADASTRAR
                    </Button> 
                    {/* <Button 
                        width="100%" 
                        onClick={loginWithGoogle}
                    >
                        ACESSAR COM GOOGLE

                    </Button>  */}                                                            
                    <Link to="/Login">
                        Acesse sua conta
                    </Link>
                </div>                
            </Container>            
        </BG>
    )
}