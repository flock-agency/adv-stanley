import paraguaiBanner from '../../assets/paraguaiBanner.png'
import Banner from '../../assets/banner.png'

import contatoImg from '../../assets/entreContato.png'
import { SevenContainer } from "../home/styles";

import paragua from '../../assets/paragua.jpeg'
import brasil from '../../assets/brasil.jpeg'

export function Contato() {

    return (
        <div
            style={{
                marginTop: '8rem'
            }}
        >
            <SevenContainer bgImage={contatoImg}>

<div className="content">
    <div className="secondContent">
        <header>
            <div>
                <h2>Escritório no Paraguai</h2>
                <p>Av. República de Colômbia, 916<br />
                esquina Estados Unidos. Centro.<br />
                Assunção - Paraguai<br /><br/>
                </p>
            </div>
            <div>
                <h2>Contato</h2>
                <p>+595 992 508313 (WhatsApp)<br /><br />

                    contato@stanleyrupert.adv.br
                    <img 
                        src={paragua}
                        width={40}
                        /></p>
            </div>
        <img 
            src={paraguaiBanner}
            width={310}
            height={220}
        />
        </header>                        
        
    </div>

    <div className="secondContent"  style={{
        paddingBottom: '5rem',
        borderBottom: '2px solid #555'
    }}>

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
                    <img 
                        src={brasil}
                        width={40}
                    />
            </div>

            <img 
            src={Banner}
            width={310}
            height={220}
        />
        </header>
    </div>
</div>

</SevenContainer>


        </div>
    )

}