import { FBIcon } from "../static/svg/facebook"
import { IGIcon } from "../static/svg/instagram"
import { TWIcon } from "../static/svg/twitter"

export const socialsTypeRedirectMap = (socialType, social) => {
    switch (socialType) {
        case 'ig':
            return {
                href: `https://www.instagram.com/${social}`,
                icon: <IGIcon/>
            }
        case 'fb':
            return {
                href: `https://www.facebook.com/${social}`,
                icon: <FBIcon/>
            }
        case 'tiktok':
            return {
                href: `https://t.me/${social}`,
                icon: 'Telegram'
            }
        case 'letterbox':
            return {
                href: `tel:${social}`,
                icon: 'Teléfono'
            }
        case 'twitter':
            return {
                href: `tel:${social}`,
                icon: <TWIcon/>
            }
        default:
            return {
                href: social,
                icon: socialType
            }
    }
}