import { useRouter } from "next/router"
import DataLoader from "../../components/DataLoader/DataLoader"
import VisualArtDisplay from "../../components/VisualArt/VisualArtDisplay"
import { getSingleVisualArtPiece } from "../../dao/visualArt/visualArt"
import {visualArt} from "../../components/types"

export default function SingleArticlePage(){
    const id = useRouter().query.id as string
    return <DataLoader<visualArt> id='unique-art-piece' load={getSingleVisualArtPiece} args={[id]} render={(data) => <VisualArtDisplay artwork={data}/>} />
}