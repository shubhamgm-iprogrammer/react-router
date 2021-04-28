import classes from './QuoteItem.module.css';
import {Link,useParams} from "react-router-dom"
const QuoteItem = (props) => {
    
  const params = useParams()

  console.log(params)
  return (
    <li className={classes.item}>
      <figure>
        <blockquote>
          <p>{props.text}</p>
        </blockquote>
        <figcaption>{props.author}</figcaption>
      </figure>
      <Link to={`/quotes/${params.quoteId}`} className='btn'>
        View Fullscreen
      </Link>
    </li>
  );
};

export default QuoteItem;
