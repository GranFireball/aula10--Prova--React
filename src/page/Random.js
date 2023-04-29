import { useContext } from "react";
import Foto from "../components/Foto";
import Info from "../components/Info";
import { UserContext } from "../context/UserContext";

export default function Random(){
    const dados = useContext(UserContext);

    if(!dados){
        return <h1>Carregando...</h1>;
    }

    return(
        <>
        <Foto url={dados.picture.large}/>
        <Info/>
        </>
    );
}