interface Place {
  title: string;
  location: { name: string; country: string };
  image: string;
  mapLink: string;
  caption: string;
}

function PlaceEntry(props: Place): JSX.Element {
  return (
    <section>
      <img src={props.image} alt="" width="240" height="427" />
      <h1>{props.title}</h1>
      <h2>
        {props.location.name}, {props.location.country}{" "}
        <a href={props.mapLink}>
          <small>(map link)</small>
        </a>
      </h2>
      <p>{props.caption}</p>
    </section>
  );
}

export default PlaceEntry;
