import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faFacebook, faTiktok, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { LetterboxIcon } from '../static/svg/letterbox'

type socialProperties = { profile: (social: string) => string, share?: (url: string) => string, icon: JSX.Element }

export const socialsTypeRedirectMap: Record<string, socialProperties> = {
    'ig': {
        profile: (social: string) => `https://www.instagram.com/${social}`,
        icon: <FontAwesomeIcon icon={faInstagram} />
    },
    'fb': {
        profile: (social: string) => `https://www.facebook.com/${social}`,
        icon: <FontAwesomeIcon icon={faFacebook} />
    },
    'tiktok': {
        profile: (social: string) => `https://t.me/${social}`,
        icon: <FontAwesomeIcon icon={faTiktok} />
    },
    'letterbox': {
        profile: (social: string) => `tel:${social}`,
        icon: <LetterboxIcon />
    },
    'twitter': {
        profile: (social: string) => `tel:${social}`,
        share: (url: string) => `http://twitter.com/share?url=${url}`,
        icon: <FontAwesomeIcon icon={faTwitter} />
    },
    default: {
        profile: (social: string) => social,
        icon: <p>O.O</p>
    }
}