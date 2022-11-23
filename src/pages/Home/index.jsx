import { Container, TextoEscreveSozinho, ContainerTexto } from "./styles";
import { useEffect } from "react";

export function Home() {

    function typeWrite(elemento){
        const textoArray = elemento.innerHTML.split('');
        elemento.innerHTML = ' ';
        textoArray.forEach(function(letra, i){   
          
        setTimeout(function(){
            elemento.innerHTML += letra;
        }, 75 * i)
    
      });
    }
    
    useEffect(() => {

        const titulo = document.querySelector('.titulo-principal');
        typeWrite(titulo);

    }, [])

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
                <h2>A RAINHA RAMONA É O RETRATO DE UMA MULHER FORTE, ELA MOSTRA QUE MESMO DE LUTO, MESMO COM SEUS INIMIGOS TENTANDO SE APROVEITAR DO MOMENTO DIFICIL QUE ELA ESTÁ PASSANDO, ELA CONSEGUE MANTER SEU PAÍS UNIDO E PROTEGIDO.</h2>
            </ContainerTexto>

            <section>

            </section>
        </Container>
    )
}