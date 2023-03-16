import { BG, Container, Spacer, Button } from "../../styles";
import { AuthGoogleContext } from "../../contexts/authGoogleContext";
import { useContext } from "react";
import { Navigate } from "react-router-dom";

export default function Login()
{
    const { signInGoogle, signed } = useContext( AuthGoogleContext )

    if( !signed ){
        return(
            <BG>
                <Container>
                    <div className="card-todo">
                        <h2 className="title">LOGIN</h2>
                        <Spacer  margin="150px"/>
                        <Button 
                            width="100%" 
                            onClick={ ()=>{signInGoogle()} }
                        >
                            ACESSAR

                        </Button> 
                    </div>                
                </Container>            
            </BG>
        )
    }else{
        return <Navigate to="/home"/>
    }
}