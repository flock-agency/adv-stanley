import styled from "styled-components";

export const FoooterContainer = styled.footer`

    width: 100%;
    max-width: 1120px;
    margin: 2rem auto;

    .box {
        display: flex;
        align-items: flex-start;
        justify-content: space-between;

        @media screen and (max-width: 1100px) {
            gap: 2rem;
            flex-direction: column;
            padding: 0 3rem;
        }
    
        .flock {
            display: flex;
            align-items: center;
            color: #fff;
            gap: .5rem;
        }
    
        h2 {
            color: #000;
        }
    
        p {
            color: #111;

            a {
                all: unset;
                cursor: pointer;

                &:hover {
                    text-decoration: underline;
                }
            }
        }
    }


`
