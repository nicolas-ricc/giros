import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { urlFor } from "../../dao/client";
import AuthorReference from "../Authors/AuthorReference";
import VisualArtCard from "../Cards/VisualArtCard";
import { visualArt } from "../types";

export default function VisualArtList({ artwork }: { artwork: visualArt[] }) {
    const [active, setActive] = useState<number | undefined>()

    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-10">
            <div className="grid gap-6 row-gap-5 lg:grid-cols-3">
                {artwork.map((piece, idx) => (
                    <div key={idx}>
                        <VisualArtCard artwork={piece} />
                    </div>
                ))}
            </div>
        </div>
    );
};