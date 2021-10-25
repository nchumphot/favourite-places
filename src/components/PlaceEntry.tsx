interface Place {
  title: string;
  location: { name: string; country: string };
  image: string;
  mapLink: string;
  caption: string;
}

const PlaceEntry = (props: Place): JSX.Element =>
  (
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

// export default PlaceEntry;

const myFavouritePlaces: Place[] = [
  {title: "Two-in-One",
  location: { name: "Mosque-Cathedral of Córdoba", country: "Spain" },
  image: "./img/cordoba.jpg",
  mapLink: "https://goo.gl/maps/NceZmx1ti4eVDoqh7",
  caption: "Insert caption here"},

  {title: "Forever Summertime",
  location: { name: "Phuket", country: "Thailand" },
  image: "./img/phuket.jpg",
  mapLink: "https://goo.gl/maps/7UTxstsfDG6UwSNGA",
  caption: "Insert caption here"},

  {title: "Capital of the World",
  location: { name: "London", country: "England" },
  image: "./img/london.jpg",
  mapLink: "https://goo.gl/maps/gNA4bjbJGAQud1hf7",
  caption: "Insert caption here"},

  {title: "The Real 21st Century",
  location: { name: "Tokyo", country: "Japan" },
  image: "./img/tokyo.jpg",
  mapLink: "https://goo.gl/maps/wGuu4Qow4tYvFJ1N6",
  caption: "Insert caption here"}
];

export const placetoElement = myFavouritePlaces.map((places => PlaceEntry(places)));