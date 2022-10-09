import DataLoader from "../../components/DataLoader/DataLoader";
import VisualArtList from "../../components/VisualArt/VisualArtList";
import { getVisualArt } from "../../dao/visualArt/visualArt";

export default function VisualArtGallery() {

    return <DataLoader id="gallery" load={getVisualArt} render={(data) => data && (
        <>
            <div className="article-title text-center mx-auto">
                <h2>{"Artes visuales"}</h2>
            </div>
            <VisualArtList artwork={data} />
        </>
    )} />
}