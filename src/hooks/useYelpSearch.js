import { useEffect, useMemo, useState } from "react";
import yelpApi from "../api/yelp.api";

export default function useYelpSearch(searchTerm){

    const [results, setResults] = useState([]);
    const [error, setError] = useState();

    function hideError(){
        setError();
    }

    useEffect(() => {
        searchYelp(searchTerm)
    }, [searchTerm])

    function searchYelp(searchTerm){
        yelpApi.get('/search', {
            params: {
                searchTerm,
                limit: 50,
                location: 'miami'
            }
        }).then((res) => {
            setResults(res.data.businesses);
        }).catch(err => {
            setError(err.response.data.error.code);
        });
    }

    const sortedResults = useMemo(() => {
        const byPrice = results.reduce((allRests, curr) => {

            if(!curr.price){
                curr.price = '---'
            }

            if(!allRests[curr.price]){
                allRests[curr.price] = [];
            }

            allRests[curr.price].push(curr);

            return allRests;
        }, {});

        const sorted = Object.entries(byPrice).sort((a, b) => {

            const num$a = getNumDollars(a[0]);
            const num$b = getNumDollars(b[0]);

            return num$a - num$b;
        }).map((entry) => ({
            price: entry[0],
            results: entry[1]
        }));

        return sorted;
    }, [searchTerm, results.length]);

    return [sortedResults, error, hideError];
}

const getNumDollars = (dollarString) => dollarString.match(/\$*/)[0].length;