export const contactTypeRedirectMap = (contactType, contact) => {
    switch (contactType) {
        case 'email':
            return {
                href: `mailto:${contact}`,
                title: 'Email'
            }
        case 'wp':
            return {
                href: `https://wa.me/${contact}`,
                title: 'Whatsapp'
            }
        case 'telegram':
            return {
                href: `https://t.me/${contact}`,
                title: 'Telegram'
            }
        case 'phone':
            return {
                href: `tel:${contact}`,
                title: 'Teléfono'
            }
        default:
            return {
                href: contact,
                title: contactType
            }
    }
}