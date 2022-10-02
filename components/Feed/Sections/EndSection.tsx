import { getAuthors } from "../../../dao/authors/authorsDAO";
import AuthorList from "../../Authors/AuthorList";
import DataLoader from "../../DataLoader/DataLoader";

export default function EndSection(){

    return <DataLoader id='authors' load={getAuthors} render={(data =>  
    <section>
        <AuthorList authors={data}/>
    </section>
    )}
    />
}