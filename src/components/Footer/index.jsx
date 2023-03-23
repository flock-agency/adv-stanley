import { FacebookLogo, InstagramLogo, WhatsappLogo } from "phosphor-react";
import { FoooterContainer } from "./styles";
import Logo from '../../assets/logo.png'
import { NavLink, useNavigate } from "react-router-dom";

export function Footer() {
    const navigate = useNavigate()

    const handleClick = (scrollTop) => {
        const state = { scrollTop };
        navigate('/area-atuacao', { state });
    }

    return (
        <FoooterContainer>
            <div className="box">
                <div>
                    <img
                        src={Logo}
                        width={135}
                        height={105}
                    />

                    <p className="flock"><InstagramLogo weight="fill" size={20} /> @flockagency</p>
                </div>


                <div>
                    <h2>Áreas de atuação</h2>
                    <p>

                        <a onClick={() => handleClick(850)}>Previdenciário</a><br /><br />
                        <a onClick={() => handleClick(2150)}>Contratos</a><br /><br />
                        <a onClick={() => handleClick(1500)}>Consumidor</a><br /><br />
                        <a onClick={() => handleClick(2500)}>Família e Sucessões</a><br /><br />
                        <a onClick={() => handleClick(1180)}>Direito da Saúde</a><br /><br />
                        <a onClick={() => handleClick(520)}>Consultoria Jurídica</a><br /><br />

                    </p>
                </div>

                <div>
                    <h2>Legal</h2>
                    <p>

                        <NavLink>Termos de serviço</NavLink><br /><br />
                        <NavLink>Política de privacidade</NavLink><br /><br />

                    </p>
                </div>
            </div>
        </FoooterContainer >
    )

}