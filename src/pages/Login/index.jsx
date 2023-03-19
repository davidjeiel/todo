import { BG, Button, Input, BlurCard } from "../../styles";
import { useEffect, useState } from "react";
import { auth } from "../../config/FirebaseConfig";
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, Navigate } from "react-router-dom";
import { Col, Row } from "react-bootstrap";

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
        <Navigate to="../" />
      );
    }

    
    return(
        <BG>
            <Row 
                style={{ 
                    paddingTop: "10%",  
                    paddingBottom: "10%"
            }}>
                <Col md="2"/>                
                <Col md="8">                                    
                    <BlurCard width="70%">
                        <div className="box">
                            <h2 className="title">LOGIN</h2>
                            
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
                            <Link to="/Logon">
                                Novo cadastro
                            </Link>
                        </div>
                    </BlurCard>  
                </Col>
               
                <Col md="2"/>
            </Row>
        </BG> 
    )
}