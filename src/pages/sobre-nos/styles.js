import styled from "styled-components";


export const FirstContante = styled.section`

    width: 100%;
    max-width: 1120px;
    margin: 5rem auto;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    gap: 3rem;
    @media screen and (max-width: 1100px) {
        flex-wrap: wrap;
        max-width: 100vw;
    }

    .firstContent {
        max-width: 50%;
        @media screen and (max-width: 1100px) {
            flex-wrap: wrap;
            padding: 0 1rem;
            max-width: 100%;
        }
        span {
            font-family: 'Nunito Sans';
            font-style: normal;
            font-weight: 400;
            font-size: 16.6429px;
            line-height: 23px;
            /* identical to box height */
            text-transform: uppercase;
            letter-spacing: 0.5em;

            color: #003E7C;
        }

        h1 {
            font-family: 'Nunito Sans';
            font-style: normal;
            font-weight: bold;
            font-size: 38px;

            color: #000000;
        }

        p {
            font-family: 'Nunito Sans';
            font-style: normal;
            font-size: 18px;
            line-height: 30px;

            color: #4F4F4F;
        }

        .thirdContent {

            margin-top: 5rem;

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
                margin-bottom: 1rem;
    
                &:hover {
                    background-color: #003E7C;
                }
            }
        }

    }
    
    .secondContent {

        border-radius: 12px;
        width: 50%;
        overflow: hidden;
        
        @media screen and (max-width: 1100px) {
            width: 100%;
            padding: 0 1rem;
        }

        img {
            width: 100%;
            object-fit: cover;
            border-radius: 12px;
        }

    }

`

export const OtherThing = styled.div`


        max-width: 720px;
        width: 100%;
        margin: 0 auto;

        .content {
                display: flex;
                align-items: center;
                justify-content: space-between;

                h2 {
                    font-style: normal;
                    font-weight: bold;
                    font-size: 49px;
                    line-height: 49px;
                    /* identical to box height */
                    @media screen and (max-width: 1100px) {
                        font-size: 1.35rem;
                    }

                    color: #3076B0;
                }
            }

`

export const SevenContainer = styled.section`

    width: 100vw;
    background-image: url(${props => props.bgImage});
    background-size: cover;
    background-position-y: -8rem;

    .content {
        width: 100%;
        max-width: 1120px;
        margin: 5rem auto 0;
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