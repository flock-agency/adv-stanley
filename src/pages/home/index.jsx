import { ArrowUp } from "phosphor-react";
import { FirstContainer, FiveContainer, PersonsContainer, SevenContainer } from "./styles";
import Banner from '../../assets/banner.png'
import Banner1 from '../../assets/service2.png'
import Stanley from '../../assets/stanleyBanner.png'
import resSocial from '../../assets/resSocial.jpg'
import paraguaiBanner from '../../assets/paraguaiBanner.png'

import Person1 from '../../assets/stanleyPerson.png'
import Person2 from '../../assets/Person2.png'
import Person3 from '../../assets/Person3.png'
import Person4 from '../../assets/Person4.png'
import Person5 from '../../assets/person5.png'
import Person6 from '../../assets/person6.png'
import Person7 from '../../assets/person7.png'
import Person8 from '../../assets/person8.png'
import Person9 from '../../assets/Person9.png'
import Person10 from '../../assets/Person10.png'

import contatoImg from '../../assets/entreContato.png'
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from "react";
import isMobile from 'is-mobile';
import { FirstContante, OtherThing } from "../sobre-nos/styles";

export function HomePage() {

    const [workCarousel, setWorkCarousel] = useState(0)
    const navigate = useNavigate()

    const [isMobileDevice, setIsMobileDevice] = useState(false);

    useEffect(() => {
        setIsMobileDevice(isMobile());
    }, []);

    return (

        <div>

            <FirstContainer bannerImg={Banner}>

                <h1>STANLEY RUPERT JONES <br />ADVOCACIA E CONSULTORIA JURÍDICA</h1>
                <p>Há mais de 14 anos prestando serviços jurídicos com excelência, buscando oferecer<br />
                    sempre o melhor, atendendo às demandas e aos interesses de seus clientes, em todo Brasil e no exterior.</p>

                <button
                    onClick={() => window.location.href = 'https://wa.me/5581991220690?text=Quero+falar+com+um+advogado%21'}
                >Atendimento online <ArrowUp /> </button>
            </FirstContainer>

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

                <OtherThing>
                    <div className="content">
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
                </OtherThing>

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

            <FiveContainer>
                <div
                    className="content"
                >
                    <span>Nosso time</span>
                    <div>
                        <h2>#SomosSRJadv</h2>
                        <p>Nossos profissionais são selecionados com rigor e possuem conhecimentos aprofundados em suas áreas de atuação, além de uma visão estratégica e proativa para oferecer as melhores soluções jurídicas para cada caso.</p>
                    </div>
                </div>

            </FiveContainer>

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
                            src={Person8}
                        />

                        <div>
                            <span>Bacharel em Direito</span>
                            <h2>Victor Pires</h2>
                            <p>Especialista em Direito Previdenciário.</p>
                        </div>
                    </div>
                    <div className='box'>
                        <img
                            src={Person2}
                        />

                        <div>
                            <span>Gestora</span>
                            <h2>Lorena Benitez</h2>
                            <p>Gestora de Marketing e Relacionamento.</p>
                        </div>
                    </div>
                    <div className='box'>
                        <img
                            src={Person3}
                        />

                        <div>
                            <span>Advogada</span>
                            <h2>Rosa Mendes</h2>
                            <p>Advogada especialista em Direito Previdenciário.</p>
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
                            src={Person10}
                        />

                        <div>
                            <span>Recepcionista</span>
                            <h2>Nayara Alves</h2>
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
                            <p>Advogada, especialista em Direito de Família e Sucessões.</p>
                        </div>
                    </div>
                    <div className='box'>
                        <img
                            src={Person7}
                        />

                        <div>
                            <span>Estagiária</span>
                            <h2>Ana Lívia Lúcio</h2>
                            <p>Estagiária de Direito.</p>
                        </div>
                    </div>
                    <div className='box'>
                        <img
                            src={Person9}
                        />

                        <div>
                            <span>Estagiária</span>
                            <h2>Karen Monteiro</h2>
                            <p>Estagiária de Direito.</p>
                        </div>
                    </div>
                </div>
                <button
                    onClick={() => window.location.href = 'https://wa.me/5581991220690?text=Quero+falar+com+um+advogado%21'}
                >
                    Entrar em contato
                </button>

            </PersonsContainer>
            {/* <SevenContainer bgImage={contatoImg}>

                <div className="content">
                    <div className="secondContent">
                        <header>
                            <div>
                                <h2>Escritório no Paraguai</h2>
                                <p>República de Colômbia, 916<br />
                                Avda. Parapiti e Estados Unidos.<br />
                                Assunção - Paraguai<br /><br/>
                                </p>
                            </div>
                            <div>
                                <h2>Contato</h2>
                                <p>+595 992 508313 (WhatsApp)<br /><br />

                                    contato@stanleyrupert.adv.br</p>
                            </div>
                        </header>                        
                        <img 
                            src={paraguaiBanner}
                            width={600}
                            height={380}
                        />
                        
                    </div>

                    <div className="secondContent">

                        <header>
                            <div>
                                <h2>Escritório no Brasil</h2>
                                <p>Empresarial Mauricio de Nassau Trade Center<br />
                                    Av. Oswaldo Cruz, 217<br />
                                    7º Andar, Sala 703<br />
                                    Caruaru - Pernambuco - Brasil</p>
                            </div>
                            <div>
                                <h2>Contato</h2>
                                <p>(81) 3721-9693 (fixo)<br />
                                    (81) 9.9122.0690 (whatsapp)<br /><br />

                                    contato@stanleyrupert.adv.br</p>
                            </div>
                        </header>

                        <img 
                            src={Banner}
                            width={600}
                            height={380}
                        />
                    </div>
                </div>

            </SevenContainer> */}

        </div>

    )

}