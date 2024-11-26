import React from "react";
import { useTheme } from "@mui/material/styles";

export const TabelaEpisodios: React.FC = () => {
    const theme = useTheme();

    const temporadas = [
        {
            temporada: 1,
            episodios: [
                { numero: 1, titulo: "O Início da Guerra", data: "10/10/2022" },
                { numero: 26, titulo: "Fim da Primeira Parte", data: "15/12/2022" },
            ],
        },
        {
            temporada: 2,
            episodios: [
                { numero: 27, titulo: "Retaliação dos Quincy", data: "05/07/2023" },
                { numero: 52, titulo: "Confronto Final", data: "15/09/2023" },
            ],
        },
    ];

    return (
        <table
            style={{
                width: "100%",
                borderCollapse: "collapse",
                marginTop: "20px",
                textAlign: "left",
                backgroundColor: theme.palette.background.paper,
                color: theme.palette.primary.contrastText,
                borderRadius: "8px",
                overflow: "hidden",
            }}
        >
            <thead
                style={{
                    backgroundColor: theme.palette.primary.main,
                    color: theme.palette.primary.contrastText,
                }}
            >
                <tr>
                    <th style={{ padding: "10px", borderBottom: `2px solid ${theme.palette.divider}` }}>
                        Temporada
                    </th>
                    <th style={{ padding: "10px", borderBottom: `2px solid ${theme.palette.divider}` }}>
                        Episódio
                    </th>
                    <th style={{ padding: "10px", borderBottom: `2px solid ${theme.palette.divider}` }}>
                        Título
                    </th>
                    <th style={{ padding: "10px", borderBottom: `2px solid ${theme.palette.divider}` }}>
                        Data de Lançamento
                    </th>
                </tr>
            </thead>
            <tbody>
                {temporadas.map((temporada) =>
                    temporada.episodios.map((episodio, index) => (
                        <tr
                            key={`${temporada.temporada}-${episodio.numero}`}
                            style={{
                                backgroundColor:
                                    index % 2 === 0
                                        ? theme.palette.background.default
                                        : theme.palette.background.paper,
                                color: theme.palette.text.primary,
                            }}
                        >
                            <td
                                style={{
                                    padding: "10px",
                                    borderBottom: `1px solid ${theme.palette.divider}`,
                                }}
                            >
                                {index === 0 ? temporada.temporada : ""}
                            </td>
                            <td
                                style={{
                                    padding: "10px",
                                    borderBottom: `1px solid ${theme.palette.divider}`,
                                }}
                            >
                                {episodio.numero}
                            </td>
                            <td
                                style={{
                                    padding: "10px",
                                    borderBottom: `1px solid ${theme.palette.divider}`,
                                }}
                            >
                                {episodio.titulo}
                            </td>
                            <td
                                style={{
                                    padding: "10px",
                                    borderBottom: `1px solid ${theme.palette.divider}`,
                                }}
                            >
                                {episodio.data}
                            </td>
                        </tr>
                    ))
                )}
            </tbody>
        </table>
    );
};
