import Star from "./Star/Star";
import './Stars.css';

interface StarsProp {
  count: number;
}

function Stars(props: StarsProp): JSX.Element | null {
  const { count } = props;

  if (
    typeof count === 'number'
    && count >= 1
    && count <= 5
  ) {
    return (
      <>
        <div>This is stars component with { count } stars</div>
        <ul className="card-body-stars u-clearfix">
          { [...Array(count).keys()].map((key) => <Star key={key} />) }
        </ul>
      </>
    )
  }

  return null;
}

export default Stars;
