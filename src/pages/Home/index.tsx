import { Container, TextoEscreveSozinho, ContainerTexto, ContainerFooter } from "./styles";

export function Home() {

    return (
        <Container>
            <section>
                <TextoEscreveSozinho>
                    <h1 className="titulo-principal"> ESSA É MINHA HOMENAGEM PARA TODAS AS MULHERES NEGRAS.</h1>
                </TextoEscreveSozinho>
            </section>

            <ContainerTexto>
                <h2>O FILME <span>WAKANDA PARA SEMPRE</span> REPRESENTA MUITO BEM A BELEZA E FORÇA DAS MULHERES NEGRAS.</h2>
            </ContainerTexto>

            <section>
                
            </section>

            <ContainerTexto>
                <h2><span>A RAINHA RAMONA</span> É O RETRATO DE UMA MULHER FORTE, ELA MOSTRA QUE MESMO DE LUTO, MESMO COM SEUS INIMIGOS TENTANDO SE APROVEITAR DO MOMENTO DIFICIL QUE ELA ESTÁ PASSANDO, ELA CONSEGUE MANTER SEU PAÍS UNIDO E PROTEGIDO.</h2>
            </ContainerTexto>

            <section>

            </section>

            <ContainerTexto>
                <h2><span>Shuri</span> é uma princesa africana do reino fictício de Wakanda. Sua maior característica é a inteligencia, sendo reconhecida como uma jovem Superdotada.</h2>
            </ContainerTexto>

            <section>

            </section>

            <ContainerTexto>
                <h2><span>As Dora Milaje</span>, A guarda real de Wakanda é formada apenas por mulheres, de acordo com a tradição. Elas são treinadas em diversos estilos de luta e manipulação de armas, mulheres extremamente habilidosas que causam temor aos seus inimigos.</h2>
            </ContainerTexto>

            <section>

            </section>

            <ContainerFooter>
                <h3>Desenvolvido por: Reinan Guilherme</h3>
            </ContainerFooter>
        </Container>
    )
}