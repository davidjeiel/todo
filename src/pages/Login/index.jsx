import { BG, Container, Spacer, Button, Input } from "../../styles";
import { useEffect, useState } from "react";
import { auth } from "../../config/FirebaseConfig";
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, Navigate } from "react-router-dom";


export default function Login()
{
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [
      signInWithEmailAndPassword,
      user,
      loading,
      error,
    ] = useSignInWithEmailAndPassword(auth);
  
    const handleLogin = async ()=>{
        await signInWithEmailAndPassword(email, password);
    }

    const loadStorageData = () => {
        const storageUser  = sessionStorage.getItem("@AuthFirebase:email");
        const storageToken = sessionStorage.getItem("@AuthFirebase:pass");
        if (storageToken && storageUser) {
            setUser(storageUser);
        }
    };

    useEffect(()=>{
        loadStorageData();
    }, [])

    useEffect(()=>{
        sessionStorage.setItem("@AuthFirebase:pass",  password);
        sessionStorage.setItem("@AuthFirebase:email", JSON.stringify(email));
    }, [ signInWithEmailAndPassword ])

    const handleLogon = ()=>{
        <Navigate to="/Logon"/>;
    }

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
        <Navigate to="T" />
      );
    }

    
    return(
        <BG>
            <Container>
                <div className="card-todo">
                    <h2 className="title">LOGIN</h2>
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
                        onClick={()=>handleLogin()}
                    >
                        ACESSAR

                    </Button> 
                    {/* <Button 
                        width="100%" 
                        onClick={loginWithGoogle}
                    >
                        ACESSAR COM GOOGLE

                    </Button>  */}                                        
                    <Link to="/Logon">
                        Novo cadastro
                    </Link>
                </div>                
            </Container>            
        </BG>
    )
}