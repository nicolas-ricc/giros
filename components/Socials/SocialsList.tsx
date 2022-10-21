import Link from "next/link"
import { socialsTypeRedirectMap } from "./socialsTypeRedirectMap"

export default function SocialsList({ socials, allowedTypes }: { socials: Record<string, any>, allowedTypes: string[] }) {
    console.log(socials)
    return (<>
        {Object.entries(socials).map((typeAndValue: [string, string], idx: number) => {
            const socialType = typeAndValue[0]
            if(allowedTypes.includes(socialType)){
            const value = typeAndValue[1]
            const social = socialsTypeRedirectMap[socialType]
            return (
                <Link href={social.profile(value)} key={idx}>
                    <a className="link">
                        <div className="text-xl link-highlight">{social.icon}</div>
                    </a>
                </Link>)
                }
        })}
    </>)

}