import React from "react";
import yelp from "../api/yelp";

export default () => {

    const [ results, setResults ] = React.useState([]);
    const [ errorMessage, setErrorMessage ] = React.useState('');

    const searchApi = async newTerm => {
        try{
            const response = await yelp.get("/search", {
                params: {
                    limit: 50,
                    location: "san jose",
                    term: newTerm
                }
            })
            setResults(response.data.businesses);
        }catch(err){
            console.log(err);
            setErrorMessage("Something went wrong");
        }
    }

    React.useEffect(() => {
        searchApi("pasta");
    }, [])

    return {results, errorMessage, searchApi};
}