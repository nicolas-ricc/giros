import LinesEllipsis from 'react-lines-ellipsis'
import responsiveHOC from 'react-lines-ellipsis/lib/responsiveHOC'

export default function CardDescription({description, maxLines}: {description: string, maxLines?: number}) {

    const ResponsiveEllipsis = responsiveHOC()(LinesEllipsis)

    return (<div className="card-text"><ResponsiveEllipsis
        text={description}
        maxLine={maxLines || 4}
        ellipsis='...'
        trimRight
        basedOn='words'
    />
    </div>)
}