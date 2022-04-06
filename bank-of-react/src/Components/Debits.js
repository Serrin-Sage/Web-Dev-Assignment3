import React, { Component } from "react";


const Debits = (props) => {
    let debitView = () => {
        const {debits} = props;
        return debits.map((debit) => {
            let date = debit.date.slice(0,10);
            return <li key={debit.id}>{debit.amount} {debit.descriprion} {date}</li>
            });
        }
        return (
            <div>
                <h1>Debits</h1>
                {debitView}
            </div>
        )
}


export default Debits;