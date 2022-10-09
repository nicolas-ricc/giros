import { getAuthors, getAuthorsSample } from "../../../dao/authors/authorsDAO";
import AuthorList from "../../Authors/AuthorList";
import DataLoader from "../../DataLoader/DataLoader";

export default function EndSection(){

    return <DataLoader id='authors' load={getAuthorsSample} args={[6]} render={(data =>  
    <section>
        <AuthorList authors={data}/>
    </section>
    )}
    />
}