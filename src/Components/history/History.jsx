
import './History.scss';
export default function History(props) {
  console.log("render::::-----------",props.renderHistory)

  return (
 <section> 

   

  {props.renderHistory.map(history=> <pre key={props.renderHistory.indexOf(history)}>
    <pre>
      URL:
    {JSON.stringify(history.config.url, undefined, 2)} <br />
    Method:
    {JSON.stringify(history.config.method, undefined, 2)}
    </pre>
  {JSON.stringify(history.Results, undefined, 2)}
  {JSON.stringify(history.Headers, undefined, 2)}

    
  </pre>)}
 </section>
   
  )
}
