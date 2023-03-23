import { ArrowUpRight } from "phosphor-react";
import { FirstContainer, SecondContainer, ThirdContainer } from "./styles";

import Section1 from '../../assets/Rectangle1.png'
import Section2 from '../../assets/Rectangle2.png'
import Section3 from '../../assets/Rectangle3.png'
import Section4 from '../../assets/section2.png'
import Section5 from '../../assets/Rectangle5.png'
import Section6 from '../../assets/Rectangle6.png'
import Section7 from '../../assets/Rectangle7.png'

import contatoImg from '../../assets/entreContato.png'
import { Map } from "../../components/Map";

export function AreaAtuacao() {

    return (

        <div>

            <FirstContainer>
                <div
                    className="content"
                >
                    <span>ÁREAS DE ATUAÇÃO</span>
                    <div>
                        <h2>Uma ampla gama de serviços em diversas áreas de atuação</h2>
                        <p>Nossos profissionais são selecionados com rigor e possuem conhecimentos aprofundados em suas áreas de atuação, além de uma visão estratégica e proativa para oferecer as melhores soluções jurídicas para cada caso.
                            <br /><br />
                            Nossa equipe é composta por profissionais altamente qualificados e experientes em suas áreas de atuação. Buscamos sempre oferecer serviços jurídicos de qualidade, personalizados e eficientes para nossos clientes.
                            <br /><br />
                            Se você precisa de serviços jurídicos em uma dessas áreas, ou em outras áreas de atuação, entre em contato conosco. Teremos prazer em ajudá-lo a solucionar seus problemas jurídicos e garantir seus direitos.
                        </p>

                        <button
                            onClick={() => window.location.href = 'https://wa.me/5581991220690?text=Quero+falar+com+um+advogado%21'}
                        >Atendimento Online<ArrowUpRight /></button>
                    </div>
                </div>

            </FirstContainer>

            <SecondContainer>

                <div className="boxImg">
                    <img src={Section1} />
                    <div className="gradient" />
                    <div>
                        <h2>CONSULTORIA JURÍDICA</h2>
                        <p>
                            Nossa consultoria jurídica na Stanley Rupert Jones oferece um serviço personalizado e acessível para ajudar nossos clientes a lidar com questões legais complexas. Nossa equipe de advogados altamente qualificados trabalha em estreita colaboração com nossos clientes, fornecendo aconselhamento jurídico claro e conciso para ajudá-los a tomar decisões informadas e alcançar seus objetivos.
                        </p>
                    </div>
                </div>
                <div className="boxImg">
                    <img src={Section2} />
                    <div className="gradient" />
                    <div>
                        <h2>DIREITO PREVIDENCIÁRIO</h2>
                        <p>O Direito Previdenciário é um ramo do direito que aborda as questões de risco social, no Brasil, sendo composto pela seguridade social, que compreende as áreas da saúde, assistência e previdência social. A previdência social regulamenta o acesso aos benefícios previdenciários, tais como aposentadoria por idade, aposentadoria por tempo de contribuição, aposentadoria por pontos, aposentadoria especial, pensão por morte, auxílio reclusão, salário maternidade, auxílio por incapacidade temporária (antigo auxílio doença), auxílio por incapacidade permanente (antiga aposentadoria por invalidez).</p>
                    </div>
                </div>
                <div className="boxImg">
                    <img src={Section3} />
                    <div className="gradient" />
                    <div>
                        <h2>DIREITO DA SAÚDE</h2>
                        <p>O Direito da Saúde é o ramo jurídico que trata sobre questões relacionadas ao Direito Constitucional à vida, à saúde e à dignidade da pessoa humana. Esse ramo se relaciona, ainda, ao SUS, aos planos de saúde e aos profissionais de saúde.</p>
                    </div>
                </div>
                <div className="boxImg">
                    <img src={Section4} />
                    <div className="gradient" />
                    <div>
                        <h2>DIREITO DO CONSUMIDOR</h2>
                        <p>Direito do consumidor é o ramo do direito que atende às relações de consumo, ou seja, aquelas travadas entre fornecedores (quem disponibiliza produtos ou serviços ao mercado) e consumidores (quem consome produtos ou serviços como destinatário final). É amparado pelo Código de Defesa do Consumidor (Lei 8.078/90).</p>
                    </div>
                </div>
                <div className="boxImg">
                    <img src={Section5} />
                    <div className="gradient" />
                    <div>
                        <h2>DIREITO DE FAMÍLIA E SUCESSÕES</h2>
                        <p>Direito de família é o ramo do Direito que trata das relações familiares e das obrigações e direitos decorrentes dessas relações. Aborda questões sobre o casamento, união estável, relações de parentesco, filiação, alimentos, bem de família, tutela, curatela e guarda.
                            O Direito das Sucessões é o ramo do Direito que regulamenta a transferência patrimonial, seja para dividir a herança, tratar de assuntos relacioandos a testamentos e resolver pendências deixadas pelo falecido ou transferir os bens para os herdeiros em virtude de lei ou testamentos.</p>
                    </div>
                </div>
                <div className="boxImg">
                    <img src={Section6} />
                    <div className="gradient" />
                    <div>
                        <h2>DIREITO DOS CONTRATOS</h2>
                        <p>É um ramo do Direito que se destina ao estudo à formação e aos efeitos dos contratos. Nestes termos, é a área que busca analisar as características desses documentos e entender os impactos que provocam nos envolvidos no acordo realizado visando resguardar as partes de uma possível violação das regras traçadas no contrato.</p>
                    </div>
                </div>
                <div className="boxImg">
                    <img src={Section7} />
                    <div className="gradient" />
                    <div>
                        <h2>MIGRAÇÃO, VISTOS E RESIDÊNCIA DE<br /> ESTRANGEIROS PARA O BRASIL</h2>
                        <p>A autorização de residência é concedida ao imigrante que pretenda trabalhar ou residir e se estabelecer temporária ou definitivamente no Brasil, desde que satisfaça as exigências previstas na Lei de Migração e seu regulamento. A Stanley Rupert Jones Advocacia presta assessoria a estrangeiros que tenham interesse de obter vistos no Brasil.</p>
                    </div>
                </div>

            </SecondContainer>

            <ThirdContainer bgImage={contatoImg}>

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

            </ThirdContainer>

        </div>

    )

}