import { getAuthorsSample } from "../../../dao/authors/authorsDAO";
import AuthorList from "../../Authors/AuthorList";
import DataLoader from "../../DataLoader/DataLoader";
import { author } from "../../types";

export default function EndSection({ authors }: { authors: author[] }) {
    return (authors && <section>
        <AuthorList authors={authors} />
    </section>)

}