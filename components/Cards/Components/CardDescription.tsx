import LinesEllipsis from 'react-lines-ellipsis'
import responsiveHOC from 'react-lines-ellipsis/lib/responsiveHOC'

export default function CardDescription({description}: {description: string}) {

    const ResponsiveEllipsis = responsiveHOC()(LinesEllipsis)

    return (<div className="card-text "><ResponsiveEllipsis
        text={description}
        maxLine='4'
        ellipsis='...'
        trimRight
        basedOn='letters'
    />
    </div>)
}