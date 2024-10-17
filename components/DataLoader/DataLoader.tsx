import { useQuery } from "react-query"
import LoadingState from "../LoadingState/LoadingState"

interface DataLoaderProps<TYPE> {
    id: string
    args?: any[]
    load: (...args: any) => Promise<TYPE>
    render: (data: TYPE) => JSX.Element
    options?: Record<string,any>
}

export default function DataLoader<TYPE>({id, args, load, render, options}: DataLoaderProps<TYPE>) {
    const {data, isLoading, isError, error} = useQuery([id, args], () => load(...(args || []), options))
    console.log("DEBUGGING - isError", error)
    return isLoading ? <LoadingState/> : isError ? <div> Error al cargar la página </div> : render(data)

}