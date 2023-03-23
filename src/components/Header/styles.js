import styled from "styled-components";

export const HeaderContainer = styled.header`
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 9999 !important;

    .top {
        width: 100%;
        height: 40px;
        background: #212121;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        gap: 4rem;
        padding: 0 3rem;

        div {
            display: flex;
            align-items: center;
            gap: .5rem;
            
        }
        
        p {
            font-size: .875rem;
            color: #fff !important;
        }

        @media screen and (max-width: 1100px) {
            display: none;
        }

    }


    .medium {

        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 3rem;
        height: 90px;
        background-color: #ffffff70;
        backdrop-filter: blur(25px);

        
        img {
            width: 115px;
            height: 90px;
        }
        
        @media screen and (max-width: 1100px) {
            padding: 0;
            max-width: 100vw;

            img {
                width: 95px;
                height: 75px;
            }

            .links {
                display: none !important;
            }

            button {
                display: none !important;
            }

            .menu {
                all: unset;
                margin-right: 2rem !important;
                display: flex !important;
                align-items: center;
                justify-content: center;
                color: #fff;
                border-radius: 8px;
                background-color: #3076B0;
                padding: .65rem .65rem;
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
        }

        .links {
            display: flex;
            align-items: center;
            gap: 2rem;

            a {

                font-family: 'Nunito Sans', sans-serif;
                font-size: 1.15rem;
                font-family: bold;
                text-decoration: none;
                cursor: pointer;
                color: #000;
                position: relative;    
            }

            .active {
                &::before {
                    content: '';
                    position: absolute;
                    left: 0;
                    bottom: 0;
                    width: 40%;
                    height: 3px;
                    background-color: #3076B0;
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
            background-color: #00A300;
            padding: .65rem 1.5rem;
            font-family: 'Nunito Sans', sans-serif;
            font-size: 1.15rem;
            font-family: bold;
            text-decoration: none;
            cursor: pointer;
            transition: all 300ms ease;

            &:hover {
                background-color: #007500;
            }
        }

        .menu {
            display: none;
        }

    }
    
`

export const PhoneMenu = styled.div`

    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: #ddd;

    header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 1rem ;

        width: 90%;

        span {
            display: flex !important;
            align-items: center;
            justify-content: center;
            color: #000;
        }
    }

    ul {
        width: 100%;
        padding: 2rem;
        list-style: none;

        li {
            padding: 1rem 2rem;
        
            a {
                font-size: 1.5rem;
                text-decoration: none;
            }

            border-bottom: 1px solid #444;
        }
    }

`