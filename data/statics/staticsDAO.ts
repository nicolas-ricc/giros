import { cmsClient } from "../client"

export type contacts = {
    contact_drop: string[]
} & Record<string, string>

export type socials = {
    social_drop: string[]
} & Record<string, string>


export type contactInfo = {contacts: contacts, social_networks: socials}


export const getContactsAndSocials = async() => {
    const contactsAndSocials = (await cmsClient.fetch('*[_type in ["contacts", "social_networks"] && !(_id in path("drafts.**"))]'))
    
    const contactInfo = contactsAndSocials.reduce((prev, curr) => {
        const accum = prev
        accum[curr._type] = curr
        return accum
    }, {contacts: {}, social_networks: {}})
    return contactInfo
}

export const getAboutUs = async() => {
    const contact = (await cmsClient.fetch('*[_type == "contacts" && !(_id in path("drafts.**"))]'))
    return contact[0].aboutUs
}

