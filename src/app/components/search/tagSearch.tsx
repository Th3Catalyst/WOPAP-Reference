import tagSearch from "../../scripts/tagSearch";
import addTag from "../../scripts/addTag";

interface TagElementProps {
    tag: string;
}

export default function TagElement({ tag }: TagElementProps) {
    return (
        <li><button onClick={ () => {addTag({ tag }); tagSearch();}}>{ tag }</button></li>
    );
}