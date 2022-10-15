import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp, faTelegram } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faSquarePhone } from '@fortawesome/free-solid-svg-icons'

export const contactTypeRedirectMap = (contactType, contact) => {
    switch (contactType) {
        case 'email':
            return {
                href: `mailto:${contact}`,
                title: 'Email',
                icon: <FontAwesomeIcon icon={faEnvelope} />
            }
        case 'wp':
            return {
                href: `https://wa.me/${contact}`,
                title: 'Whatsapp',
                icon: <FontAwesomeIcon icon={faWhatsapp} />
            }
        case 'telegram':
            return {
                href: `https://t.me/${contact}`,
                title: 'Telegram',
                icon: <FontAwesomeIcon icon={faTelegram} />
            }
        case 'phone':
            return {
                href: `tel:${contact}`,
                title: 'Teléfono',
                icon: <FontAwesomeIcon icon={faSquarePhone} />
            }
        default:
            return {
                href: contact,
                title: contactType,
                icon: <></>
            }
    }
}