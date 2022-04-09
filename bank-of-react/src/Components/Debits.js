const Debits = (props) => {
    
  let debitsDisplay = () => {
    const {debits} = props;
    return debits.map((debit) => {
      let date = debit.date.slice(0,10);
      return (
      <div className="debit-container">
        <li key={debit.id}>{debit.amount} {debit.description} {date} </li>
      </div>
      )
    });
  }
    return (
    	<div className="content-container">
    	   <h1 className="debit-title">Debits</h1>
    	   {debitsDisplay()}
    	</div>

    )
}
export default Debits;