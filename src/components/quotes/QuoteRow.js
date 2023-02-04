import React from 'react'

const QuoteRow = ( props ) => {

    return (<tr>
        <td>{props.quotesData.id}</td>
        <td>{props.quotesData.author}</td>
        <td>{props.quotesData.quote}</td>
    </tr>);
}

export default QuoteRow