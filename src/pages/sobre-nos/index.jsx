import { ArrowUpRight, Person, PhoneCall } from "phosphor-react";
import { FourContainer, PersonsContainer } from "../home/styles";

import Banner1 from '../../assets/service2.png'

import Person1 from '../../assets/stanleyPerson.png'
import Person2 from '../../assets/Person2.png'
import Person3 from '../../assets/Person3.png'
import Person4 from '../../assets/Person4.png'
import Person5 from '../../assets/person5.png'
import Person6 from '../../assets/person6.png'
import Person7 from '../../assets/person7.png'
import Person8 from '../../assets/person8.png'

    import Construcao from '../../assets/construcao.png'
    import Stanley from '../../assets/stanleyBanner.png'
    import contatoImg from '../../assets/entreContato.png'
    import resSocial from '../../assets/resSocial.jpg'

import { FirstContante, SevenContainer } from "./styles";
import { Map } from "../../components/Map";

export function AboutUs() {

    return (

        <div>
            <FirstContante>

                <div className="firstContent">

                    <span>Sobre nos</span>
                    <h1>Protegendo seus direitos e garantindo justiça. Como podemos ajuda-lo?</h1>

                    <p>Com uma equipe de advogados e profissionais altamente capacitada e comprometida cada uma na sua área, têm o objetivo em comum de proteger os direitos dos clientes e garantir a justiça.<br /><br />
                        O Stanley Rupert Jones é um escritório de advocacia e consultoria jurídica que durante seus 14 anos vem transmitindo segurança e confiança para todos aqueles que buscam serviços jurídicos de qualidade.</p>

                    <div
                        className="thirdContent"
                    >
                        <button
                            onClick={() => window.location.href = 'https://wa.me/5581991220690?text=Quero+falar+com+um+advogado%21'}
                        >Entrar em contato</button>

                        <div className="otherThings">
                            <div>
                                <h2>+3k</h2>
                                <p>Clientes Satisfeitos</p>
                            </div>
                            <div>
                                <h2>+14 anos</h2>
                                <p>De atuação no Mercado</p>
                            </div>
                            <div>
                                <h2>+6.5k</h2>
                                <p>Casos Solucionados</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="secondContent">
                    <img
                        src={Construcao}
                    />
                </div>

            </FirstContante>

            <FourContainer>
                <div className="content">

                    <div>
                        <div
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '.5rem',
                                justifyContent: 'flex-start'
                            }}
                        >
                            <PhoneCall />
                            <h2>Atendimento Completo</h2>
                        </div>

                        <p>Somos especializados em analisar cada direito que você possui, mantendo nossa missão e cultura vivas em nossos atendimentos, para que os clientes tenham uma experiência incrível e diferenciada.</p>
                    </div>
                    <div>
                        <div
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '.5rem',
                                justifyContent: 'flex-start'
                            }}
                        >
                            <Person />
                            <h2>Paciência e Respeito</h2>
                        </div>

                        <p>Sabemos que lidar com questões jurídicas pode ser estressante e difícil para muitas pessoas, e por isso que nossa equipe de advogados está comprometida em oferecer um atendimento cuidadoso e respeitoso a todos os nossos clientes.</p>
                    </div>
                    <div>
                        <div
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '.5rem',
                                justifyContent: 'flex-start'
                            }}
                        >
                            <ArrowUpRight />
                            <h2>Processo Impecável</h2>
                        </div>

                        <p>Compreendemos que cada cliente é único, e cada caso exige uma abordagem personalizada. Por isso, nossos advogados dedicam tempo para ouvir e entender as necessidades e expectativas de cada cliente, e só então oferecer soluções que atendam suas necessidades.</p>
                    </div>

                </div>

            </FourContainer>

            <PersonsContainer>
                <div className="content">
                    <div className='box'>
                        <img
                            src={Person1}
                        />

                        <div>
                            <span>CEO & Fundador</span>
                            <h2>Stanley Rupert Jones</h2>
                            <p>Advogado especialista em Direito Previdênciario</p>
                        </div>
                    </div>
                    <div className='box'>
                        <img
                            src={Person2}
                        />

                        <div>
                            <span>Gestora</span>
                            <h2>Lorena Benitez</h2>
                            <p>Gestora de marketing e relacionamento.</p>
                        </div>
                    </div>
                    <div className='box'>
                        <img
                            src={Person3}
                        />

                        <div>
                            <span>Advogada</span>
                            <h2>Rosa Mendes</h2>
                            <p>Advogada especialista em direito previdenciário.</p>
                        </div>
                    </div>
                    <div className='box'>
                        <img
                            src={Person4}
                        />

                        <div>
                            <span>Recepcionista</span>
                            <h2>Cibelle Maciel</h2>
                            <p>Setor Administrativo.</p>
                        </div>
                    </div>
                    <div className='box'>
                        <img
                            src={Person5}
                        />

                        <div>
                            <span>Advogada</span>
                            <h2>Eloyse Viana</h2>
                            <p>Controller Jurídica, especialista em Direito Processual Civil..</p>
                        </div>
                    </div>
                    <div className='box'>
                        <img
                            src={Person6}
                        />

                        <div>
                            <span>Advogada</span>
                            <h2>Isabela Luzier</h2>
                            <p>Advogada, especialista em direito de família e sucessões.</p>
                        </div>
                    </div>
                    <div className='box'>
                        <img
                            src={Person7}
                        />

                        <div>
                            <span>Estagiária</span>
                            <h2>Ana Lívia Lúcio</h2>
                            <p>Estagiária de direito.</p>
                        </div>
                    </div>
                    <div className='box'>
                        <img
                            src={Person8}
                        />

                        <div>
                            <span>Bacharel em direito</span>
                            <h2>Victor Pires</h2>
                            <p>Especialista em direito previdenciário.</p>
                        </div>
                    </div>
                </div>
                <button
                    onClick={() => window.location.href = 'https://wa.me/5581991220690?text=Quero+falar+com+um+advogado%21'}
                >
                    Entrar em contato
                </button>

            </PersonsContainer>

            <div>

                <FirstContante>

                    <div className="firstContent">
                        <h1 style={{ color: '#3076B0' }}>MAIS DE 14 ANOS DE EXPERIÊNCIA</h1>

                        <p style={{
                            fontSize: '1rem'
                        }}>Stanley Rupert Jones, advogado, formado em Direito Pela Associação Caruaruense de Ensino Superior, em 2005, tendo em seguida cursado pós-graduação latu-sensu em Direito Constitucional, Civil e Tributário pela mesma instituição. É inscrito no quadro de advogados da OAB Subseccional de Pernambuco desde 02 de março de 2009, tendo se identificado desde então com a advocacia previdenciária, razão pela qual tornou-se especialista em Direito Previdenciário, cursando especialização na área e realizando vários cursos de atualização permanente. Nos seus 14 anos de advocacia sempre vem atuando com zelo, seriedade e compromisso em atender os anseios de nossos clientes.</p>
                    </div>

                    <div className="secondContent">
                        <img
                            src={Stanley}
                        />
                    </div>
                </FirstContante>

                <FirstContante style={{ flexDirection: 'row-reverse' }}>

                    <div className="firstContent">
                        <h1 style={{ color: '#3076B0', textAlign: 'right' }}>BUSCANDO SEMPRE A MELHOR SOLUÇÃO</h1>

                        <p style={{
                            fontSize: '1rem',
                            textAlign: 'right'
                        }}>Já nos primeiros períodos da faculdade, buscou aprender o cotidiano da advocacia por meio de estágios práticos no Fórum de Caruaru, em varas cíveis, de família, criminais e das relações de consumo. Também estagiou no Ministério Público e na Justiça Federal, além de ter praticado experiência também em escritórios de advocacia privados.</p>
                    </div>

                    <div className="secondContent">
                        <img
                            src={Banner1}
                            height={320}
                        />
                    </div>
                </FirstContante>

                <FirstContante>

                    <div className="firstContent">
                        <h1 style={{ color: '#3076B0', textAlign: 'left' }}>RESPONSABILIDADE SOCIAL</h1>

                        <p style={{
                            fontSize: '1rem',
                            textAlign: 'left'
                        }}>
                            Visando proporcionar o amplo e irrestrito acesso à justiça, nosso escritório desempenha advocacia e consultoria PRO BONO, seja por meio de assessoramento a entidades sociais ou de mutirões jurídicos de atendimento comunitário em áreas carentes, orientando a população sobre seus direitos e tirando as suas dúvidas sobre assuntos jurídicos.<br /><br />
                            Por meio dessas iniciativas, buscamos proporcionar às comunidades em situação de vulnerabilidade social,  o acesso à informação jurídica, contribuindo com o desenvolvimento humano e social.
                        </p>
                    </div>

                    <div className="secondContent">
                        <img
                            src={resSocial}
                            height={320}
                        />
                    </div>
                </FirstContante>

            </div>

            <SevenContainer bgImage={contatoImg}>

                <div className="content">
                    <div className="firstContent">
                        <h2>Que tal entrar em contato conosco ainda hoje?</h2>
                        <p>
                            Precisa de orientação jurídica? Clique no botão abaixo para ser direcionado ao nosso WhatsApp. Nossos advogados estarão prontos para atendê-lo com respeito, paciência e profissionalismo, ajudando-o a resolver suas dúvidas e questões legais. Aguardamos seu contato!
                        </p>

                        <form>

                            <button
                                onClick={() => window.location.href = 'https://wa.me/5581991220690?text=Quero+falar+com+um+advogado%21'}
                            >Entrar em contato</button>
                        </form>
                    </div>

                    <div className="secondContent">

                        <header>
                            <div>
                                <h2>Localização</h2>
                                <p>AV. OSWALDO CRUZ, 217<br />
                                    7º ANDAR, SALA 703<br />
                                    MAURICIO DE NASSAU - CARUARU/PE<br />
                                    CEP: 55012-040</p>
                            </div>
                            <div>
                                <h2>Contato</h2>
                                <p>(81) 3721-9693 (fixo)<br />
                                    (81) 9.9122.0690 (whatsapp)<br /><br />

                                    contato@stanleyrupert.adv.br</p>
                            </div>
                        </header>

                        <Map address='217 Av. oswaldo cruz, CARUARU, Brazil' />
                    </div>
                </div>

            </SevenContainer>
        </div>

    )

}