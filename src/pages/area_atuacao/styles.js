import styled from "styled-components";

export const FirstContainer = styled.section`

    width: 100%;
    max-width: 1120px;
    margin: 10.5rem auto;

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
            margin-top: 2rem;
            margin-left: 2rem;

            &:hover {
                background-color: #003E7C;
            }
        }

    }

`


export const SecondContainer = styled.section`

    width: 99vw;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    @media screen and (max-width: 1100px) {
        width: 100vw;
    }
    .boxImg {
        position: relative;

        img {
            width: 99vw;
            height: 320px;
            object-fit: cover;
        }

        .gradient {
            width: 99vw;
            height: 320px;
            background: linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, #000000 100%);
        }

        div {
            top: 0;
            left: 0;
            position: absolute;
            height: 100%;
            display: flex;
            align-items: flex-start;
            justify-content: center;
            flex-direction: column;
            
            h2 {
                font-family: 'Nunito Sans';
                font-style: italic;
                font-weight: 400;
                font-size: 46px;
                line-height: 95px;
                color: #fff;
                padding: 0 2rem;
                @media screen and (max-width: 1100px) {
                    font-size: 1.5rem;
                    line-height: 1.2;
                }
            }
            p   {
                color: #fff;
                max-width: 70ch;
                padding: 0 2rem;
                @media screen and (max-width: 1100px) {
                    display: none;
                }
            }
        }

        &:nth-child(even) {
            div {
                top: 0;
                left: 0;
                position: absolute;
                width: 100%;
                height: 100%;
                display: flex;
                flex: 1;
                align-items: flex-end;
                justify-content: center;
                flex-direction: column;

            }

            .gradient {
                width: 99vw;
                height: 320px;
                background: linear-gradient(-90deg, rgba(0, 0, 0, 0) 0%, #000000 100%);
            }
        }
    }

`

export const ThirdContainer = styled.section`

    width: 100vw;
    background-image: url(${props => props.bgImage});
    background-size: cover;
    background-position-y: -8rem;

    .content {
        width: 100%;
        max-width: 1120px;
        margin: 0 auto 0;
        display: flex;
        align-items: flex-start;
        gap: 5rem;
        justify-content: center;
        padding: 5rem 0;
        @media screen and (max-width: 1100px) {
            flex-direction: column;
        }

        .firstContent {
            max-width: 50%;
            @media screen and (max-width: 1100px) {
                max-width: 80%;
                padding-left: 1rem;
            }

            h2 {
                font-family: 'Nunito Sans';
                font-style: normal;
                font-weight: 600;
                font-size: 42px;
                line-height: 74px;
                /* or 146% */
                @media screen and (max-width: 1100px) {
                    max-width: 80%;
                    line-height: 1.2;
                    font-size: 2rem;
                }
                letter-spacing: -0.03em;

                color: #FFFFFF;
            }

            p {
                font-family: 'Nunito Sans';
                font-style: normal;
                font-weight: 500;
                font-size: 20.925px;
                /* or 167% */


                color: #CECECE;
            }

            form {
                display: flex;
                align-items: flex-start;
                justify-content: center;
                flex-direction: column;
                gap: 1rem;
                margin-top: 1rem;

                input {
                    all: unset;
                    color: #fff;
                    width: 100%;
                    height: 50px;
                    background: rgba(0, 0, 0, 0.4);
                    border: 1px solid #000;
                    padding-left: 1.5rem;
                    border-radius: 99px;
                    transition: all 300ms ease;

                    &:focus {
                        border: 1px solid #3076B0;
                        box-shadow: 0 0 2px 0 #3076B0;
                    }
                }

                textarea {
                    all: unset;
                    color: #fff;
                    width: 95%;
                    height: 100px;
                    background: rgba(0, 0, 0, 0.4);
                    border: 1px solid #000;
                    padding: 1rem 1.5rem;
                    border-radius: 24px;
                    resize: none;
                    transition: all 300ms ease;

                    &:focus {
                        border: 1px solid #3076B0;
                        box-shadow: 0 0 2px 0 #3076B0;
                    }
                }

                button {
                    all: unset;
                    display: flex;  
                    width: 95%;
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
                    transition: all 300ms ease;

                    &:hover {
                        background-color: #003E7C;
                    }
                }
            }
        }

        .secondContent {

            header {
                display: grid;
                grid-template-columns: repeat(2, 1fr);

                h2 {
                    color: #fff;
                }

                p {
                    color: #fff;
                }
                @media screen and (max-width: 1100px) {
                    grid-template-columns: repeat(1, 1fr);
                    gap: 1rem;
                    padding: 0 1rem;
                }
            }
            

        }
    }




`