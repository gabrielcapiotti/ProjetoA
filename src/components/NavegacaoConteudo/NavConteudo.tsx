import { IconButton, Tooltip, useTheme } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { toggleTheme } from "../../store/slices/ThemeSlice";
import { BarraNavegacaoEstilo, ConteudoCentroEstilo, NavBotoes, NavegadorBotoes, } from "./NavEstilo";
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { Botoes } from "../Botoes/BotoesEstilo";


export function Navegador() {
    const theme = useTheme();
    const currentThemeMode = useSelector((state: RootState) => state.theme.theme);

    const dispatch = useDispatch();

    const handleToggleTheme = () => {
        dispatch(toggleTheme());
    };

    return (

        <BarraNavegacaoEstilo>
            <NavegadorBotoes>
                <section style={{ width: "70%", display: "flex" }}>
                    <Botoes>
                        <h4>Produtos</h4>
                    </Botoes>
                    <Botoes>
                        <h4>Empresa</h4>
                    </Botoes>
                    <Botoes>
                        <h4>Contatos</h4>
                    </Botoes>
                </section>
                <section style={{ width: "25%", display: "flex" }}>
                    <Botoes>
                        <h4>Conectar</h4>
                    </Botoes>
                    <Botoes>
                        <h4>Registrar</h4>
                    </Botoes>

                    <Tooltip title="Alternar Tema">
                        <IconButton size="large" color="inherit" onClick={handleToggleTheme}>
                            {currentThemeMode === 'dark' ? <DarkModeIcon /> : <LightModeIcon />}
                        </IconButton>
                    </Tooltip>
                </section>
            </NavegadorBotoes>
            <ConteudoCentroEstilo>
                <h1>Aqui está um título importante!</h1>
                <h4>Aqui está um subtitulo importante!</h4>
                <NavBotoes>
                    <Botoes>
                        <h4>Teste Gratis</h4>
                    </Botoes>
                    <Botoes>
                        <h4>Saiba Mais</h4>
                    </Botoes>
                </NavBotoes>
            </ConteudoCentroEstilo>
        </BarraNavegacaoEstilo>
    );
}
