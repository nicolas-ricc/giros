import VisualArtCard from "../Cards/VisualArtCard";
import { visualArt } from "../types";

export default function VisualArtList({ artwork }: { artwork: visualArt[] }) {
    return (
        <div className="px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-10">
            <div className="text-highlight text-5xl font-bold text-center lg:text-start lg:mx-16 pb-4 mb-4  border-b border-highlight">
               <h2>Artes visuales</h2>
            </div>
            <div className="grid gap-3 lg:gap-6 row-gap-5 lg:grid-cols-3 lg:mx-16 lg:pb-4">
                {artwork.map((piece, idx) => (
                    <div key={idx}>
                        <VisualArtCard artwork={piece} />
                    </div>
                ))}
            </div>
        </div>
    );
};