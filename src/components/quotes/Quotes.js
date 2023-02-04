import React, {useEffect, useState} from 'react'
import classes from "./Quotes.module.css";
import jsonData from "../../resources/quotes.json";
import QuoteRow from "./QuoteRow";

const Quotes = () => {
const [quotes, setQuotes] =  useState();
useEffect(() => {
    console.log("I'm in useEffect")
    const apiCall = async () => {
        fetch("https://dummyjson.com/quotes")
            .then(res => res.json())
            .then(data => setQuotes(data.quotes))
            .catch(err => console.error(err))
    }
    //setQuotes(JSON.parse(JSON.stringify(jsonData)).quotes);
    apiCall()
}, [])
    return (
        <table className={classes.quotesTable}>
            <thead>
                <th>Quote ID</th>
                <th>Author</th>
                <th>Quote</th>
            </thead>
            <tbody>
            {quotes && quotes.map((item) => <QuoteRow key={item.id} quotesData={item}/>)}
            </tbody>
        </table>
    );

}

export default Quotes;