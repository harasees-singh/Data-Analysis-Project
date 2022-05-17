import {useState} from "react"
function Data(){
    const [ text, setText ] = useState();

    const load = function(){
        fetch( './dataset_complete.csv' )
            .then( response => response.text() )
            .then( responseText => {
                setText( responseText );
            })
    };

    return (
        <div>
            <button onClick={ load }>load</button>
            <h2>text:</h2>
            <pre>{ text }</pre>
        </div>
    );
}
export default Data;