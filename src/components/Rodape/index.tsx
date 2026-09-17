import { Link } from "react-router-dom"

import * as S from './styles'

import logo from '../../assets/images/logo.svg'
import instagram from '../../assets/images/instagram.png'
import facebook from '../../assets/images/facebook.png'
import twitter from '../../assets/images/twitter.png'



const Footer = () => (

    <S.Feet>
        <S.Content>
        <img src={logo} alt="Logo" />
        <S.Links>
            <ul>
                <Link to="https://www.instagram.com/">
                <img src={instagram} alt="Instagram" />
                </Link>
                <Link to="https://www.facebook.com/">
                <img src={facebook} alt="Facebook" />
                </Link>
                <Link to="https://www.twitter.com/">
                <img src={twitter} alt="Twitter" />
                </Link>
            </ul>
        </S.Links>
        <p >A efood é uma plataforma para divulgação de estabelecimentos, a responsabilidade pela entrega, qualidade <br />
        dos produtos é toda do estabelecimento contratado.
        </p>
        </S.Content>
    </S.Feet>
)

export default Footer