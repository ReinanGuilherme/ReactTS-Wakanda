import styled from "styled-components"

import imgHome from "../../assets/imgHome.jpg"
import imgSection3 from "../../assets/imgSection3.jpg"
import imgSection5 from "../../assets/imgSection5.jpg"
import imgSection7 from "../../assets/imgSection7.jpg"
import imgSection9 from "../../assets/imgSection9.jpg"

export const Container = styled.div`

    section {
        height: 100vh;
        padding: 100px 50px;
        
        background-position: bottom;
        background-size: cover;
        background-attachment: fixed;

        display: flex;
        align-items: center;

        h1 {
            color: #fff;
            text-align: center;
        }

        &:nth-child(1) {
            background-image: url(${imgHome});
            display: block;
        }

        &:nth-child(3) {
            background-image: url(${imgSection3});
            background-position: top;
        }

        &:nth-child(5) {
            background-image: url(${imgSection5});
        }

        &:nth-child(7) {
            background-image: url(${imgSection7});
        }

        &:nth-child(9) {
            background-image: url(${imgSection9});
        }
    }

    

`

export const ContainerTexto = styled.section`

            padding: 50px;
            max-height: 30vh;
            background-color: #202124;
            border-top: 3px solid #DAA520;
            border-bottom: 3px solid #DAA520;
            color: #fff;

            text-transform: uppercase;

            span {
                color: #DAA520;
            }

`

export const TextoEscreveSozinho = styled.div`


height: 100%;

display: flex;
align-items: flex-end;
justify-content: center;

    .container{
        
        background-color: #000;
    }

    .titulo-principal{
        font-size: 35px;
        max-width: 480px;
        text-align: center;
        font-family:'Courier New', Courier, monospace;
        color: #fff;
    }
    
    .titulo-principal:after{
    content: '|';
    margin-left: 5px;
    opacity: 1;
    animation: pisca .7s infinite;
    }
    /* Animação aplicada ao content referente a classe *.titulo-principal* resultando num efeito de cursor piscando. */

    @keyframes pisca{
        0%, 100%{
            opacity: 1;
        }
        50%{
            opacity: 0;
        }
    }

`
export const ContainerFooter = styled.footer`

            padding: 10px 50px;
            max-height: 10vh;
            background-color: #202124;
            border-top: 3px solid #DAA520;
            border-bottom: 3px solid #DAA520;
            color: #fff;

            text-transform: uppercase;
            text-align: right;
            font-size: 12px;

            span {
                color: #DAA520;
            }

`