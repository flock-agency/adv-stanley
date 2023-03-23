import { Clock, List, MapPin, Phone, X } from 'phosphor-react'
import { NavLink } from 'react-router-dom'
import { HeaderContainer, PhoneMenu } from './styles'

import Logo from '../../assets/logo.png'
import { useState } from 'react'

export function Header() {

    const [openMenu, setOpenMenu] = useState(false)

    return (

        <HeaderContainer>

            <div className='medium'>
                <img
                    src={Logo}
                />

                <div className='links'>
                    <NavLink to='/'>
                        INÍCIO
                    </NavLink>
                    <NavLink to='/area-atuacao'>
                        ÁREA DE ATUAÇÃO
                    </NavLink>
                    <NavLink to='/blog'>
                        BLOG
                    </NavLink>
                    <NavLink to='/contato'>
                        CONTATO
                    </NavLink>
                </div>

                <button
                    onClick={() => window.location.href = 'https://wa.me/5581991220690?text=Quero+falar+com+um+advogado%21'}
                >
                    <Phone
                        weight='fill'
                    />
                    (81) 99122-0690
                </button>
                <button onClick={() => setOpenMenu(true)} className='menu'>
                    <List size={21} />
                </button>

                {openMenu && <PhoneMenu>
                    <header>
                        <h2>
                            Links do site
                        </h2>

                        <span
                            onClick={() => setOpenMenu(false)}
                        >
                            <X size={32} />
                        </span>
                    </header>

                    <ul>
                        <li>
                            <NavLink to='/'>
                                Início
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/area-atuacao'>
                                Áreas de atuação
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/sobre-nos'>
                                Sobre nós
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/contato'>
                                Contato
                            </NavLink>
                        </li>
                    </ul>
                </PhoneMenu>}
            </div>
        </HeaderContainer>

    )

}