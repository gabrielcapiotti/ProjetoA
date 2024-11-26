import { Navegador } from "../components/NavegacaoConteudo/NavConteudo";
import { ConteudoEstilo } from "../components/PaginaConteudo/ConteudoEstilo";
import { PaginaConteudo } from "../components/PaginaConteudo/PaginaConteudo";
import { RodapeEstilo } from "../components/RodapeConteudo/RodapeEstilo";




export function PaginaLayout() {


    return (
        <>
            <Navegador />
            <PaginaConteudo />
            <RodapeEstilo />
        </>
    );
}
