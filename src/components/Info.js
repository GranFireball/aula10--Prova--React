import { memo, useContext, useMemo } from "react";
import { UserContext } from "../context/UserContext";

function Info() {
    const dados = useContext(UserContext);

    const dadosTratados = useMemo(() => ({
        nome: dados.name.first + ' ' + dados.name.last,
        email: dados.email,
        dataNasc: dados.dob.date,
        localidade: dados.location.city,
        telefone: dados.phone
    }), [dados])

    return (
        <ul>
            <li>Nome: {dadosTratados.nome}</li>
            <li>Email: {dadosTratados.email}</li>
            <li>Data de Nascimento: {dadosTratados.dataNasc}</li>
            <li>Localidade: {dadosTratados.localidade}</li>
            <li>Telefone: {dadosTratados.telefone}</li>
        </ul>
    );
}

export default memo(Info)
