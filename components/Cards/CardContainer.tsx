export default function CardContainer({children}: {children: JSX.Element}) {
    return (<div  className="card-container">
        {children}
    </div>)
}