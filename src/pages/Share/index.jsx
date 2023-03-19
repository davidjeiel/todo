import { BlurCard, Container } from "../../styles";
import { List } from "../TaskList/List";

export default function Share(params)
{
    const shareList = [
        {
            id: Math.random(),
            name: "Lista teste",
            check: true
        },
        {
            id: Math.random(),
            name: "Lista teste 2",
            check: false
        },
        {
            id: Math.random(),
            name: "Lista teste 3",
            check: true
        },
        {
            id: Math.random(),
            name: "Lista teste 4",
            check: false
        },
    ]
    return(        
        <BlurCard width="100%">
            <div className="box">
                <h1 className="title">
                    SHARE
                </h1>
                <div >
                    {
                        shareList.map(( list )=>(
                            <List 
                                key={list.id}
                                name={list.name}
                                id={list.id}
                                checked={list.check}
                            />
                        ))  
                    }
                </div>
            </div>
        </BlurCard>        
    )
}