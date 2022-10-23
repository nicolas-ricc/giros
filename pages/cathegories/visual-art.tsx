import DataLoader from "../../components/DataLoader/DataLoader";
import VisualArtList from "../../components/VisualArt/VisualArtList";
import { getVisualArt } from "../../data/visualArt/visualArt";

export default function VisualArtGallery() {

    return <DataLoader id="gallery" load={getVisualArt} render={(data) => data && (
        <VisualArtList artwork={data} />
    )} />
}