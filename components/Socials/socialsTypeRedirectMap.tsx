import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faFacebook, faTiktok, faTwitter} from '@fortawesome/free-brands-svg-icons'
import { LetterboxIcon } from '../static/svg/letterbox'

export const socialsTypeRedirectMap = (socialType: string, social: string): {href: string, icon: JSX.Element} => {
    switch (socialType) {
        case 'ig':
            return {
                href: `https://www.instagram.com/${social}`,
                icon: <FontAwesomeIcon icon={faInstagram}/>
            }
        case 'fb':
            return {
                href: `https://www.facebook.com/${social}`,
                icon: <FontAwesomeIcon icon={faFacebook}/>
            }
        case 'tiktok':
            return {
                href: `https://t.me/${social}`,
                icon: <FontAwesomeIcon icon={faTiktok}/>
            }
        case 'letterbox':
            return {
                href: `tel:${social}`,
                icon: <LetterboxIcon/>
            }
        case 'twitter':
            return {
                href: `tel:${social}`,
                icon: <FontAwesomeIcon icon={faTwitter}/>
            }
        default:
            return {
                href: social,
                icon: <p>O.O</p>
            }
    }
}