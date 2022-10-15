import Image from "next/image";
import Link from "next/link";
import { contactInfo, getContactsAndSocials } from "../../dao/statics/staticsDAO";
import DataLoader from "../DataLoader/DataLoader";
import girosLogo from '../static/logo_giros_green.png'
import { contactTypeRedirectMap } from "./contactTypeRedirectMap";
import { socialsTypeRedirectMap } from "./socialsTypeRedirectMap";


interface FooterProps {
    contactInfo?: contactInfo
}

export const Footer = ({ contactInfo }: FooterProps) => {


    return (
        <DataLoader id='static-configs' load={getContactsAndSocials} options={{ initialData: contactInfo }} render={(data) => (
            <div className="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl text-reading">
                <div className="grid gap-10 row-gap-6 mb-4 sm:grid-cols-2 lg:grid-cols-4">
                    <div className="sm:col-span-2">
                        <Link href="/"><a
                            aria-label="Go home"
                            title="Company"
                        >
                            <Image
                                src={girosLogo}
                                alt={"giros logo"}
                                width={150}
                                height={70}
                            />
                        </a></Link>
                        <div className="lg:max-w-sm">
                            <p className="text-sm pl-2">
                            </p>
                        </div>
                    </div>
                    <div className="space-y-2 text-sm">
                        <p className="text-base font-bold">
                            Contacto
                        </p>
                        <div className="flex items-center mt-1 space-x-3">
                            {Array.isArray(contactInfo?.contacts.contact_drop) &&
                                contactInfo.contacts.contact_drop.length > 0 &&
                                contactInfo.contacts.contact_drop.map((contactType, idx) => {
                                    const value = contactInfo.contacts[contactType]
                                    const contact = contactTypeRedirectMap(contactType, value)
                                    return (
                                        <div key={idx} className="flex">
                                            <Link href={contact.href}><a
                                            className="link"
                                                aria-label={`Nuestro ${contact.title}`}
                                                title={`Nuestro ${contact.title}`}
                                            >
                                                <div className="text-xl link-highlight">{contact.icon}</div>
                                            </a></Link>
                                        </div>)
                                }

                                )}
                        </div>
                    </div>
                    <div  className="space-y-2 text-sm">
                        <p className="text-base font-bold">
                            Redes
                        </p>
                        <div className="flex items-center mt-1 space-x-3">
                            {Array.isArray(contactInfo?.social_networks.social_drop) &&
                                contactInfo.social_networks.social_drop.length > 0 &&
                                contactInfo.social_networks.social_drop.map((socialType, idx) => {
                                    const value = contactInfo.social_networks[socialType]
                                    const social = socialsTypeRedirectMap(socialType, value)

                                    return (
                                        <Link href={social.href} key={idx}>
                                            <a className="link">
                                                <div className="text-xl link-highlight">{social.icon}</div>
                                            </a>
                                        </Link>)
                                })}
                        </div>
                    </div>
                </div>
                <div className="flex flex-col-reverse justify-between pt-5 pb-10 border-t lg:flex-row">
                    <p className="text-sm ">
                        © Copyright 2022 Giros. Todos los derechos reservados.
                    </p>
                </div>
            </div>)} />
    );
};