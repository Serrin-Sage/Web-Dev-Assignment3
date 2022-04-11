const Credits = (props) => {

  let creditsDisplay = () => {
    const {credits} = props;
    return credits.map((credit) => {
      let date = credit.date.slice(0,10);
      return (
      <div className="credit-container">
        <div key = {credit.id} className="credit-item">
                    <h3>{credit.description}</h3>
                    <p>${credit.amount}</p>
                    <p>Date: {date} </p>
                </div>
      </div>
      )
    });
  }
    return (
    	<div className="credit-page">
    	   <h1 className="credit-title">Credits</h1>
         <div className="content-container">
            {creditsDisplay()}
         </div>
    	</div>

    )
}
export default Credits;