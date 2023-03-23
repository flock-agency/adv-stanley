import styled from "styled-components";

export const FirstContainer = styled.section`

    width: 99vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 2rem;
    backdrop-filter: blur(125px);

    @media screen and (max-width: 1100px) {
        width: 100vw;
    }

    /* combinar imagem de fundo e gradiente */
    background-image: linear-gradient(to bottom, #ffffff00, #000000), url(${props => props.bannerImg});
    background-position: center center;
    background-size: cover;

    h1 { 
        font-family: 'Nunito Sans';
        font-style: normal;
        font-weight: 900;
        font-size: 54px;
        line-height: 1.4;
        text-align: center;

        color: #FFFFFF;
    }

    p {
        font-family: 'Nunito Sans';
        font-style: normal;
        font-weight: 800;
        font-size: 22px;
        
        @media screen and (min-width: 1100px) {
            line-height: 30px;
        }   


        text-align: center;

        color: #FFFFFF;
    }

    button {
        all: unset;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #fff;
        border-radius: 8px;
        background-color: #3076B0;
        padding: .65rem 1.5rem;
        font-family: 'Nunito Sans', sans-serif;
        font-size: 1.15rem;
        font-family: bold;
        text-decoration: none;
        cursor: pointer;
        transition: all 300ms ease;

        &:hover {
            background-color: #003E7C;
        }
    }

    @media screen and (max-width: 1100px) {
        gap: 1rem !important;

        h1 {
            font-size: 2rem;
        }

        p {
            font-size: .675rem;
            color: #fff !important;
        }        
    }

`

export const SecondContainer = styled.section`

    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);


    .box {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
        padding: 3rem 0;
        background-color: #212121;

        h2 {
            font-family: 'Nunito Sans';
            font-style: normal;
            font-weight: 700;
            font-size: 24px;
            line-height: 33px;
            /* identical to box height */

            letter-spacing: 0.05em;

            color: #FFFFFF;
        }

        p {
            font-family: 'Nunito Sans';
            font-style: normal;
            font-weight: 400;
            font-size: 14px;
            line-height: 160%;
            max-width: 30ch;
            /* or 26px */
                    
                    
            /* Anti-Flash White */
                    
            color: #EFF2F5;
        }
    }

    @media screen and (max-width: 1100px) {
        grid-template-columns: repeat(1, 1fr);
    }

`

export const ThirdSection = styled.section`

    margin: 5rem 0;
    width: 99vw;
    display: flex;
    align-items: center;
    flex-direction: column;


    .right {
        all: unset;
        position: absolute;
        right: 1%;
        top: 50%;
        z-index: 99;
        padding: 0.45rem .55rem;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        border-radius: 100%;
        background: #e9e9e9;
        transition: all 300ms ease;

        &:hover {
            background-color: #fff;
        }
    }
    .left {
        all: unset;
        position: absolute;
        left: -1%;
        top: 50%;
        z-index: 99;
        padding: 0.45rem .55rem;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        border-radius: 100%;
        background: #e9e9e9;
        transition: all 300ms ease;

        &:hover {
            background-color: #fff;
        }
    }


    .tagP {
        font-family: 'Nunito Sans';
        font-style: normal;
        font-weight: 500;
        font-size: 20px;
        line-height: 27px;
        letter-spacing: 0.345em;

        color: #3076B0;
    }

    .title {
        font-family: 'Nunito Sans';
        font-style: normal;
        font-weight: 800;
        font-size: 56.1934px;
        line-height: 77px;
        /* identical to box height */
        color: #000000;

        @media screen and (max-width: 1100px) {
            text-align: center;
        }
    }
    transition: all 300ms ease;

    .servicesContainer {
        position: relative;
        margin-top: 3rem;
        width: 80%;
        overflow: hidden;
        transition: all 300ms ease;

        .servicesContent {
    
            transform: translateX(${props => 295 * props.workCarousel}px);

            @media screen and (max-width: 1100px) {
                transform: translateX(${props => 295 * props.workCarousel}px);
            }

            width: 100%;
            gap: 2rem;
            display: flex;
            align-items: center;
            justify-content: flex-start;
            transition: all 300ms ease;

            img {
                width: 265px;
                height: 370px;
            }

            .box {
                position: relative;
                cursor: pointer;

                div {
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    padding: 1rem;

                    span {
                        padding: .3rem .5rem;
                        font-style: normal;
                        font-family: 'Nunito Sans';
                        font-weight: bold;
                        font-size: 12px;
                        line-height: 23px;
                        background-color: #3076B0;
                        color: #FFFFFF;
                    }

                    h2 {
                        margin-top: .3rem;
                        font-family: 'Nunito Sans';
                        font-style: normal;
                        font-weight: 800;
                        font-size: 22px;
                        color: #FFFFFF;
                    }
                }
            }
    
        }
    }

`

export const FourContainer = styled.div`

    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    
    .content {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 1.25rem;
        @media screen and (max-width: 1100px) {
            grid-template-columns: repeat(1, 1fr);
        }
        div {
            padding: 1.5rem;
    
            background-color: #000;
    
            svg {
                color: #3076B0;
                width: 36px;
                height: 36px;
            }
    
            h2 {
                font-family: 'Nunito Sans';
                font-style: normal;
                font-weight: 800;
                font-size: 22px;
                color: #FFFFFF;
                max-width: 20ch;
            }
    
            p {
                margin-top: 1rem;
                font-family: 'Nunito Sans';
                font-style: normal;
                font-weight: 400;
                font-size: 13.4456px;
                line-height: 140%;
                /* or 19px */
                max-width: 40ch;
                        
                color: #FFFFFF;
            }
        }
    }

`

export const FiveContainer = styled.section`

    width: 100%;
    max-width: 1120px;
    margin: 5rem auto;

    .content {
        display: flex;
        align-items: flex-start;
        justify-content: center;
        flex-direction: column;

        span {
            font-family: 'Nunito Sans';
            font-style: normal;
            font-weight: 400;
            font-size: 14px;
            line-height: 160%;
            /* or 22px */

            letter-spacing: 0.5em;
            text-transform: uppercase;

            color: #3076B0;
        }

        h2 {
            font-family: 'Nunito Sans';
            font-style: normal;
            font-weight: 700;
            font-size: 36px;
            line-height: 56px;
            /* identical to box height, or 122% */

            letter-spacing: -0.03em;

            color: #1A1A1A;
            padding-left: 2rem;
            position: relative;

            &::before {
                position: absolute;
                left: 0;
                top: 10px;
                width: 4px;
                height: 60%;
                content: '';
                background: #3076B0;
            }
        }

        p {
            padding-left: 2rem;
        }

    }

`

export const PersonsContainer = styled.section`

    width: 100%;
    max-width: 1120px;
    margin: 5rem auto;
    display: flex;
    align-items: center;
    gap: 2rem;
    justify-content: center;
    flex-direction: column;

    .content {
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        gap: 1.25rem;   
 
        @media screen and (max-width: 1100px) {
            grid-template-columns: repeat(1, 1fr);
        }   

        .box {
            width: 280px;
            height: 360px;
            border-radius: 1rem;

            img {
                width: 280px;
                height: 360px;
                object-fit: cover;
            }

            overflow: hidden;
            position: relative;

            div {
                width: 90%;
                height: 90px;
                position: absolute;
                bottom: 0;
                left: 0;
                background: rgba(26, 81, 137, 0.55);
                mix-blend-mode: normal;
                backdrop-filter: blur(14.1694px);
                /* Note: backdrop-filter has minimal browser support */

                border-radius: 16.4559px;
                padding: 1rem;

                span {
                    font-style: normal;
                    font-size: 13.2248px;
                    line-height: 15px;
                    color: #EAEAEA;
                }

                h2 {
                    font-style: normal;
                    font-family: 'Nunito Sans';
                    font-style: normal;
                    font-weight: 700;
                    font-size: 20px;
                    line-height: 30px;

                    color: #fff;
                }

                p {
                    font-style: normal;
                    font-weight: 400;
                    font-size: 14px;
        
                    color: #ddd;
                }
                
            }

        }
    }

    button {
        all: unset;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #fff;
        border-radius: 8px;     
        background-color: #3076B0;
        padding: .65rem 1.5rem;
        font-family: 'Nunito Sans', sans-serif;
        font-size: 1.15rem;
        font-family: bold;
        text-decoration: none;
        cursor: pointer;
        transition: all 300ms ease;

        &:hover {
            background-color: #003E7C;
        }
    }

`

export const WeAreWe = styled.section`

    width: 100%;
    max-width: 1120px;
    margin: 5rem auto;

    .content {
        h2 {
            font-family: 'Nunito Sans';
            font-style: normal;
            font-weight: 700;
            font-size: 36px;
            line-height: 56px;
            /* identical to box height, or 122% */

            letter-spacing: -0.03em;

            color: #1A1A1A;
            padding-left: 2rem;
            position: relative;

            &::before {
                position: absolute;
                left: 0;
                top: 10px;
                width: 4px;
                height: 60%;
                content: '';
                background: #3076B0;
            }
        }

        p {
            padding-left: 2rem;
        }

    }

    .boxes {
        margin: 3rem 0;
        display: grid;
        grid-template-columns: repeat(3, 1fr);

        img {
            transform: scale(.8);
        }

        p {
            text-align: center;
            font-size: 13px;
            transform: translateY(-130%);
        }

        
    }
    
    @media screen and (max-width: 1100px) {
        .toHide {
            display: none !important;
        }
    }
`

export const OurServices = styled.section`

    width: 100%;
    max-width: 1120px;
    margin: 5rem auto;
    display: flex;
    align-items: center;
    gap: 2rem;
    justify-content: center;
    flex-direction: column;

    @media screen and (max-width: 1100px) {
        max-width: 100vw;
    }

    .content {
        h2 {
            font-family: 'Nunito Sans';
            font-style: normal;
            font-weight: 700;
            font-size: 36px;
            line-height: 56px;
            /* identical to box height, or 122% */

            letter-spacing: -0.03em;

            color: #1A1A1A;
            padding-left: 2rem;
            position: relative;

            &::before {
                position: absolute;
                left: 0;
                top: 10px;
                width: 4px;
                height: 60%;
                content: '';
                background: #3076B0;
            }
        }

        p {
            padding-left: 2rem;
        }

    }

    .boxes {
        margin: 3rem 0;
        display: grid;
        gap: 1rem;
        grid-template-columns: repeat(2, 1fr);
        @media screen and (max-width: 1100px) {
            grid-template-columns: repeat(1, 1fr);
            max-width: 100vw;
        }
        .box {
            @media screen and (max-width: 1100px) {
                max-width: 100vw;
            }
            cursor: pointer;

            width: 550px;
            height: 220px;
            overflow: hidden;
            border-radius: 1rem;
            display: flex;
            align-items: center;
            justify-content: center;
            position: relative;
            
            img {
                @media screen and (max-width: 1100px) {
                    max-width: 100vw;
                }
                width: 550px;
                height: 220px;
                object-fit: cover;
                border-radius: 1rem;
            }

            div {
                cursor: pointer;
                position: absolute;
                width: 100%;
                height: 100%;
                background: #00000050;
                display: flex;
                align-items: center;
                justify-content: center;

                h2 {
                    color: #fff;
                }
            }

        }
    }

    button {
        all: unset;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #fff;
        border-radius: 8px;     
        background-color: #3076B0;
        padding: .65rem 1.5rem;
        font-family: 'Nunito Sans', sans-serif;
        font-size: 1.15rem;
        font-family: bold;
        text-decoration: none;
        cursor: pointer;
        transition: all 300ms ease;

        &:hover {
            background-color: #003E7C;
        }
    }


`

export const SevenContainer = styled.section`

    width: 100vw;
    background-image: url(${props => props.bgImage});
    background-size: cover;

    .content {
        width: 100%;
        max-width: 1120px;
        margin: 5rem auto 0;
        display: flex;
        align-items: center;
        flex-direction: column-reverse;
        gap: 5rem;
        justify-content: center;
        padding: 5rem 0;
        
        .secondContent {
            img {
                border-radius: 16px;
            }
            
            header {
                display: flex;
                align-items: flex-start;
                justify-content: space-between;
                gap: 4rem;
                @media screen and (max-width: 1100px) {
                    flex-direction: column-reverse;
                }
                h2 {
                    color: #fff;
                    font-size: 2.5rem;
                }

p {
    color: #fff;
    font-size: 1.5rem;
                }
            }

            button {
                    all: unset;
                    display: flex;  
                    width: 90%;
                    align-items: center;
                    justify-content: center;
                    color: #fff;
                    border-radius: 8px;     
                    background-color: #3076B0;
                    padding: 1rem 1.5rem;
                    font-family: 'Nunito Sans', sans-serif;
                    font-size: 1.15rem;
                    font-family: bold;
                    text-decoration: none;
                    cursor: pointer;
                    margin-top: 2rem;
                    transition: all 300ms ease;

                    &:hover {
                        background-color: #003E7C;
                    }
                }

        }
    }




`