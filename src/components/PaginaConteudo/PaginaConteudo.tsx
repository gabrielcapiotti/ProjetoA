import { Typography } from "@mui/material";
import { ContainerAbaixo, ConteudoEstilo, Direita, Esquerda } from "./ConteudoEstilo";
import bleachVideo from "../../assets/trailer-bleach-ichigo.mp4";
import soundtrack from "../../assets/Vídeo sem título ‐ Feito com o Clipchamp.mp4";
import { TabelaEpisodios } from "../Tabelas/TabelaEpisodios";
import ichigo from "../../assets/download (58).jfif"
import JuhaBah from "../../assets/Bleach anime Fanclub.jfif"
import IchiBaha from "../../assets/yhwach vs ichigo_color by magimeokaArt.jfif"
import Ishida from "../../assets/✶.jfif"
import Golpe from "../../assets/download (60).jfif"

export function PaginaConteudo() {
    const handleVideoClick = (event: React.MouseEvent<HTMLVideoElement>) => {
        const videoElement = event.currentTarget;
        if (videoElement.paused) {
            videoElement.play();
        } else {
            videoElement.pause();
        }
    };

    const handleVideoEnd = (event: React.SyntheticEvent<HTMLVideoElement>) => {
        event.currentTarget.currentTime = 0;
        event.currentTarget.play();
    };

    return (
        <ConteudoEstilo>
            <audio
                src={soundtrack}
                autoPlay
                loop
                hidden
                onLoadedMetadata={(event) => {
                    event.currentTarget.volume = 0.20;
                }}
            >
            </audio>

            <Esquerda>
                <section>
                    <Typography style={{ marginBottom: "20px" }}>
                        <h2>O Ressurgimento dos Quincy</h2>
                        O arco começa com a revelação de que os Quincy, uma raça há muito considerada extinta, ainda existem.
                        Esses seres possuem habilidades especiais que os permitem manipular e absorver energia espiritual (Reishi),
                        tornando-os caçadores de Hollows. No entanto, ao contrário dos Shinigamis, que purificam as almas dos Hollows
                        para preservar o equilíbrio entre os mundos (a Soul Society e o Mundo Humano), os Quincy destroem essas almas
                        por completo. Mil anos antes dos eventos atuais, os Quincy foram quase exterminados pela Soul Society em uma
                        guerra brutal. Essa guerra foi necessária porque as ações dos Quincy ameaçavam o ciclo de reencarnação e o
                        equilíbrio cósmico. Porém, Yhwach, o progenitor dos Quincy, sobreviveu. Ele entrou em um estado de dormência
                        para recuperar suas forças, e agora desperta, determinado a acabar com a Soul Society e criar um novo mundo
                        sob seu domínio absoluto.
                    </Typography>
                    <Typography style={{ marginBottom: "20px" }}>
                        <h2>A Primeira Invasão: O Retorno de Yhwach</h2>
                        O arco começa com uma atmosfera de tensão. Vários Shinigamis patrulham o Mundo Humano e a Soul Society,
                        sentindo uma anormalidade espiritual crescente. É nesse momento que os Sternritter, a elite dos Quincy,
                        realizam um ataque surpresa contra a Soul Society. A primeira invasão é marcada por uma carnificina sem
                        precedentes:
                        <br />
                        A Técnica de Selamento de Bankai:
                        Os Quincy utilizam uma técnica inovadora chamada Bankai Sealing. Eles roubam e selam os Bankais dos Capitães
                        da Soul Society, desarmando-os de suas técnicas mais poderosas. Capitães como Byakuya Kuchiki, Tōshirō Hitsugaya
                        e outros são rapidamente derrotados. Byakuya, em particular, sofre uma das derrotas mais brutais, ficando à beira da morte.
                        A Força Devastadora de Yhwach:
                        <br /> <br />
                        Durante a invasão, Yhwach enfrenta o Capitão-Comandante Genryūsai Shigekuni Yamamoto, líder supremo da Soul Society.
                        Yamamoto utiliza todo o poder de sua Zanpakutō, Zanka no Tachi, a arma mais destrutiva entre os Shinigamis. Ele quase derrota
                        Yhwach, mas é enganado por um impostor. No confronto real, Yhwach subjuga Yamamoto e o mata, destruindo completamente sua Zanpakutō.
                        Esse momento simboliza o colapso da liderança da Soul Society. Ichigo Kurosaki Entra na Guerra:
                        <br />
                        Ichigo tenta intervir, mas é atrasado por os Sternritter. Ele chega tarde demais à Soul Society, encontrando-a em ruínas,
                        com muitos aliados mortos ou gravemente feridos.
                    </Typography>
                </section>
            </Esquerda>
            <Direita>
                <video
                    src={bleachVideo}
                    onClick={handleVideoClick}
                    onEnded={handleVideoEnd}
                    autoPlay
                    loop
                    muted
                    style={{
                        width: "95%",
                        height: "auto",
                        borderRadius: "20px",
                        cursor: "pointer",
                        border: "2px solid black",
                        marginBottom: "20px",
                        marginTop: "20px"
                    }}
                >
                </video>
                <TabelaEpisodios />
            </Direita>
            <ContainerAbaixo>
                <Direita>
                    <h2>A Herança de Ichigo Kurosaki e o Segredo dos Quincy</h2>
                    <Typography>
                        Após a devastadora primeira invasão dos Quincy, Ichigo tenta desesperadamente entender o motivo
                        de sua incapacidade de proteger a Soul Society. Ele se encontra abalado emocionalmente e espiritualmente.
                        Durante esses eventos, surgem indícios de que Ichigo tem uma conexão mais profunda com os Quincy do que jamais imaginou.
                        <br />
                        <h4>O Passado de Ichigo é Revelado</h4>
                        Após seu fracasso em derrotar Yhwach e a perda de seu Bankai, Ichigo busca respostas com Kisuke Urahara e Isshin Kurosaki, seu pai.
                        A revelação acontece gradualmente, culminando em um mergulho profundo no passado de sua mãe, Masaki Kurosaki, e sua relação com os Quincy.

                        <br />
                        <h4>Masaki Kurosaki, a Quincy Pura:</h4>
                        Masaki era uma Quincy pura, criada em uma das famílias mais respeitadas da ordem Quincy. Ela foi prometida em casamento a Ryūken Ishida, pai de Uryū Ishida (o amigo de Ichigo).
                        Durante um confronto com um Hollow extremamente poderoso, chamado Grand Fisher, Masaki foi gravemente ferida. Nessa batalha, ela conheceu Isshin Shiba (o verdadeiro nome de Isshin Kurosaki),
                        que na época era um Capitão Shinigami. Para salvar Masaki, Isshin sacrificou sua posição como Capitão e tornou-se humano, unindo suas vidas espirituais à dela. Esse ato de sacrifício permitiu
                        que Masaki sobrevivesse, mas ao custo de enfraquecer significativamente seus poderes Quincy. O Sangue Quincy em Ichigo: Ichigo herdou de Masaki não apenas sua humanidade, mas também suas habilidades Quincy.
                        Além disso, ele possui traços espirituais de Hollow, devido ao ataque que Masaki sofreu. Essa combinação única de linhagens — Shinigami, Quincy, humano e Hollow — faz de Ichigo um híbrido extremamente poderoso,
                        mas também o conecta diretamente a Yhwach, que é o progenitor dos Quincy. Yhwach e o Ritual de Auzwählen: Ichigo descobre que Masaki morreu porque Yhwach realizou o Auzwählen, uma técnica pela qual ele retira
                        os poderes de Quincy de seus descendentes considerados "impuros" para fortalecê-lo. O Auzwählen enfraqueceu Masaki no momento em que ela foi atacada por Grand Fisher, levando à sua morte. Isso cria um vínculo
                        de ódio pessoal entre Ichigo e Yhwach.
                        <br />

                        <h4>O Treinamento no Palácio do Rei das Almas</h4>
                        Após as revelações sobre seu passado, Ichigo é levado ao Palácio do Rei das Almas pela Divisão Zero. Este é um local sagrado e isolado, onde os maiores segredos da Soul Society estão guardados e onde residem os
                        protetores diretos do Rei das Almas.
                        <br />
                        <h4>A Divisão Zero e seus Membros:</h4>
                        A Divisão Zero é composta por Shinigamis de poder extraordinário, cada um responsável por criar algo essencial para a existência da Soul Society.
                        Por exemplo, Ōetsu Nimaiya, o criador das Zanpakutō, e Tenjirō Kirinji, um curandeiro lendário.

                        <h4>A Nova Zanpakutō de Ichigo:</h4>
                        Ōetsu Nimaiya revela que a antiga Zangetsu de Ichigo não era sua verdadeira Zanpakutō, mas uma manifestação do poder Quincy que residia dentro dele.
                        Ichigo forja duas novas lâminas, refletindo sua verdadeira natureza híbrida. Uma lâmina representa seu lado Shinigami, enquanto a outra representa
                        seu lado Quincy. Juntas, elas simbolizam seu domínio completo sobre seu poder.
                    </Typography>
                </Direita>
                <Esquerda>
                    <img src={ichigo}
                        style={{
                            width: "100%",
                            borderRadius: "20px",
                            cursor: "pointer",
                            border: "6px solid black",
                        }} />

                </Esquerda>
            </ContainerAbaixo>
            <ConteudoEstilo>
                <Esquerda>
                    <img src={JuhaBah}
                        style={{
                            width: "100%",
                            borderRadius: "20px",
                            cursor: "pointer",
                            border: "6px solid black",
                        }} />

                </Esquerda>
                <Direita>
                    <Typography>
                        <h2>A Segunda Invasão dos Quincy e o Verdadeiro Objetivo de Yhwach</h2>

                        Com Ichigo se fortalecendo no Palácio do Rei das Almas, Yhwach e os Sternritter lançam uma segunda invasão,
                        desta vez ainda mais destrutiva. Essa fase da guerra é marcada por batalhas individuais e a destruição de
                        estruturas fundamentais da Soul Society.

                        <h4>A Fúria dos Sternritter</h4>
                        Os Sternritter revelam novos níveis de poder, incluindo o Vollständig, uma forma avançada que supera o Bankai em força.
                        Eles atacam sem misericórdia, e muitos Capitães são forçados a ultrapassar seus próprios limites.

                        <h4>Zaraki Kenpachi e o Despertar de Sua Zanpakutō:</h4>

                        Zaraki Kenpachi enfrenta Gremmy, um Sternritter com o poder de materializar qualquer coisa que imaginar.
                        Durante a batalha, Zaraki desbloqueia o nome de sua Zanpakutō, Nozarashi, e libera seu verdadeiro poder pela primeira vez.
                        Isso demonstra o crescimento de Kenpachi e o coloca como um dos maiores combatentes da Soul Society.

                        <h4>A Morte do Rei das Almas:</h4>
                        Yhwach invade o Palácio do Rei das Almas e derrota facilmente a Divisão Zero.
                        Ele alcança o Rei das Almas e o destrói, iniciando o colapso da realidade. Com a morte do Rei das Almas,
                        as barreiras entre os mundos começam a se desfazer, criando um caos universal.
                    </Typography>
                </Direita>
            </ConteudoEstilo>

            <ContainerAbaixo>
                <Esquerda>
                    <Typography>
                        <h2>O Clímax: O Confronto Final contra Yhwach</h2>
                        A batalha final contra Yhwach ocorre em um cenário de puro caos e desespero.
                        Com a realidade desmoronando, a Soul Society e seus aliados fazem um último
                        esforço para deter Yhwach e impedir o colapso dos mundos. O confronto no
                        Palácio do Rei das Almas é não apenas o combate mais grandioso da série,
                        mas também o que carrega o maior peso emocional e filosófico, simbolizando
                        a luta pelo livre-arbítrio e pela coexistência.
                        <br />
                        <h2>Yhwach e o Poder de The Almighty</h2>
                        Yhwach, agora no auge de seu poder, revela toda a extensão de sua habilidade The Almighty,
                        um dos poderes mais devastadores e conceitualmente complexos de Bleach. Ele consegue ver
                        e alterar todos os futuros possíveis, transformando qualquer resultado desfavorável em uma
                        vitória para ele. Isso faz com que ataques físicos e estratégias táticas contra ele sejam
                        completamente inúteis. Não importa o quanto Ichigo e seus aliados tentem, Yhwach está
                        sempre um passo à frente.
                        <br />
                        Essa habilidade não é apenas um trunfo de batalha, mas também uma declaração de Yhwach
                        sobre o destino e o controle. Ele acredita que o futuro é algo que deve ser moldado
                        pela força, e que ele, como uma figura divina, é o único digno de decidir o destino
                        do universo. Essa crença entra em conflito direto com os ideais de Ichigo, que valoriza
                        a liberdade, a individualidade e a coexistência.

                        <h4>A Frustração de Ichigo e Seus Aliados:</h4>
                        Ichigo, Renji, Rukia e outros lutam bravamente, mas cada golpe desferido por eles é
                        antecipado e anulado por Yhwach. A habilidade de The Almighty coloca todos os personagens
                        em uma posição de extrema vulnerabilidade, pois qualquer ação contra Yhwach parece inútil.
                        O desespero começa a tomar conta, mas a determinação de Ichigo o impede de desistir.
                    </Typography>

                </Esquerda>
                <Direita>
                    <img src={IchiBaha}
                        style={{
                            width: "100%",
                            borderRadius: "20px",
                            cursor: "pointer",
                            border: "6px solid black",
                        }} />
                </Direita>
            </ContainerAbaixo>
            <ConteudoEstilo>
                <Esquerda>
                    <img src={Ishida}
                        style={{
                            width: "100%",
                            borderRadius: "20px",
                            cursor: "pointer",
                            border: "6px solid black",
                        }} />
                </Esquerda>
                <Direita>
                    <Typography>
                        <h2>Ishida Uryū e a Antítese</h2>
                        No momento mais crítico da batalha, Ishida Uryū, o amigo de longa data de Ichigo e descendente dos Quincy,
                        desempenha um papel essencial. Durante grande parte do arco, Ishida esteve em uma posição ambígua,
                        sendo considerado um traidor por se aliar aos Quincy e a Yhwach. No entanto, ele revela suas verdadeiras intenções no clímax.

                        <h4>A Habilidade Antithesis:</h4>
                        Uryū possui uma habilidade única chamada Antithesis, que lhe permite inverter as condições entre duas partes.
                        Se uma pessoa sofre dano e outra permanece ilesa, ele pode transferir o dano de uma para a outra, e vice-versa.
                        Ele utiliza Antithesis para neutralizar temporariamente o poder de The Almighty. Ao inverter as condições,
                        Uryū cria uma brecha que impede Yhwach de prever o futuro por alguns instantes, abrindo caminho para o ataque de Ichigo.
                        Esse momento não apenas destaca o crescimento de Ishida como personagem, mas também simboliza a reconciliação entre Shinigamis e Quincy.
                        Apesar de sua linhagem, Uryū escolhe lutar pelo bem maior, em vez de sucumbir ao ciclo de ódio que dominou sua raça por gerações.
                    </Typography>
                </Direita>
            </ConteudoEstilo>

            <ContainerAbaixo>
                <Esquerda>
                    <Typography>
                        <h2>O Golpe Final de Ichigo</h2>
                        Com a brecha criada por Ishida, Ichigo encontra sua oportunidade de atacar. Ele canaliza todo o poder de sua nova Zanpakutō,
                        que representa a verdadeira fusão de suas linhagens Shinigami e Quincy. Este momento é significativo, pois mostra que Ichigo
                        finalmente aceitou todas as partes de sua identidade, transformando suas diferenças em uma fonte de força.

                        <h4>A Técnica Final:</h4>

                        Ichigo utiliza sua lâmina principal, representando seu lado Shinigami, e a lâmina secundária, representando seu lado Quincy, em um ataque combinado.
                        O golpe final é devastador e consegue atravessar Yhwach, destruindo sua conexão com o futuro e encerrando sua existência. Yhwach tenta resistir até o
                        último momento, argumentando que o futuro inevitavelmente o levará à vitória, mas é derrotado pelas ações combinadas de Ichigo e seus aliados.
                        Com sua derrota, o colapso dos mundos é interrompido, e o equilíbrio começa a ser restaurado.
                    </Typography>
                </Esquerda>
                <Direita>
                    <img src={Golpe}
                        style={{
                            width: "100%",
                            borderRadius: "20px",
                            cursor: "pointer",
                            border: "6px solid black",
                        }} />
                </Direita>
            </ContainerAbaixo>
        </ConteudoEstilo>
    );
}
