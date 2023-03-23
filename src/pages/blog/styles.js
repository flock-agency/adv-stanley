import styled from "styled-components";


export const Novidades = styled.section`

    width: 100%;
    max-width: 1120px;
    margin: 6rem auto;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    padding: 1.5rem;

    h1 {
        font-family: 'Nunito Sans';
        font-style: normal;
        font-weight: 700;
        font-size: 42px;
        line-height: 1.4;
    }

`

export const UltimaNoticia = styled.div`

    display: flex;
    align-items: flex-start;
    gap: 1rem;

    .informations {

        width: 20%;
        padding: 0 1rem;

    }

    .box {
        width: 85%;
        position: relative;
        border-radius: 8px;
        overflow: hidden;
        
        img {
            border-radius: 8px;
            width: 100%;
            height: 400px;
            object-fit: cover;
        }
        
        .gradient {
            border-radius: 8px;
            max-width: 100%;
            width: 100%;
            height: 400px;
            background: linear-gradient(#00000000, #000000);
            position: absolute;
            display: flex;
            flex-direction: column;
            justify-content: flex-end;

            div {
                padding: 1rem 1.5rem;
                
                h2 {
                    font-family: 'Nunito Sans';
                    font-style: normal;
                    font-weight: 900;
                    line-height: 1.4;  
                    color: #fff;
                }
    
                p {
                    font-family: 'Nunito Sans';
                    font-style: normal;
                    line-height: 1.4;  
                    color: #888;
                }
            }
        }
    }

`

export const Noticias = styled.div`

    width: 100%;
    max-width: 1120px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 2rem;

    .box {

        img {
            width: 240px;
            height: 140px;
            border-radius: 8px;
        }

        h2 {
            font-family: 'Nunito Sans';
            font-style: normal;
            font-weight: bold;
            line-height: 1.4;  
            font-size: 1.25rem;
            color: #000;
        }

        p {
            font-family: 'Nunito Sans';
            font-style: normal;
            color: #888;
        }

    }

`

export const Card = styled.div`
  width: 100vw;
  border-radius: 5px;
  overflow: hidden;
  background-color: #ffffff;
`;

export const CardImage = styled.img`
  width: 100%;
  height: 600px;
`;

export const CardBody = styled.div`
  padding: 16px;
  max-width: 1120px;
  margin: 0 auto;
  border-bottom: 1px solid #ddd;
`;

export const CardTitle = styled.h2`
  margin: 0 0 8px;
  font-size: 24px;
  font-weight: bold;
`;

export const CardDescription = styled.p`
  margin: 0;
  font-size: 14px;
  line-height: 1.5;
  color: #333;
`;
