const Credits = (props) => {
    let creditsView = () => {
      const {credits} = props;
      return credits.map((credit) => {
        let date = credit.date.slice(0,10);
        return <li key={credit.id}>{credit.amount} {credit.description} {date} </li>
      });
    }
    return (
    	<div className="content-container">
    	   <h1>Credits</h1>
    	   {creditsView()}
    	</div>

    )
}
export default Credits;