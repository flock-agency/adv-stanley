import { Noticias, Novidades, UltimaNoticia } from "./styles";
import Banner from '../../assets/imagemExemple.png'

export function BlogPage() {

    return (

        <div style={{
            width: '100vw',
            height: 'auto',
            paddingBottom: '4rem',
            background: '#add8e6bc'
        }}>

            <Novidades>

                <div>
                    <h1>Útilmo Post</h1>
                </div>

                <UltimaNoticia>
                    <div className="box">
                        <div className="gradient">
                            <div>
                                <h2>8 DIREITOS QUE VOCÊ TEM E NÃO SABIA!</h2>
                                <p>2 horas atrás</p>
                            </div>
                        </div>
                        <img
                            src={Banner}
                        />
                    </div>
                    <div className="informations">
                        <h2>8 DIREITOS QUE VOCÊ TEM E NÃO SABIA!</h2>
                        <p>O dia 15 de março é reservado ao Consumidor, e para celebrar esta data, apresentamos ao público diversos direitos que, como consumidores, temos e muitas vezes não sabemos. Antes, um pouquinho de história para... ler mais</p>
                    </div>
                </UltimaNoticia>

                <div
                    style={{
                        marginTop: '3rem'
                    }}
                >
                    <h1>Posts</h1>
                </div>

                <Noticias>
                    <div className="box">
                        <img
                            src={Banner}
                        />
                        <h2>8 DIREITOS QUE VOCÊ TEM E NÃO SABIA!</h2>
                        <p>2 horas atrás</p>
                    </div>
                    <div className="box">
                        <img
                            src={Banner}
                        />
                        <h2>8 DIREITOS QUE VOCÊ TEM E NÃO SABIA!</h2>
                        <p>2 horas atrás</p>
                    </div>
                    <div className="box">
                        <img
                            src={Banner}
                        />
                        <h2>8 DIREITOS QUE VOCÊ TEM E NÃO SABIA!</h2>
                        <p>2 horas atrás</p>
                    </div>
                    <div className="box">
                        <img
                            src={Banner}
                        />
                        <h2>8 DIREITOS QUE VOCÊ TEM E NÃO SABIA!</h2>
                        <p>2 horas atrás</p>
                    </div>
                </Noticias>


            </Novidades>

        </div>

    )

}