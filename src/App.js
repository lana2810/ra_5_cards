import "./App.css";
import Cards from "./Cards";

function App() {
  const currentProps = {
    srsImage:
      "https://i.etsystatic.com/8835185/r/il/657b78/736963546/il_570xN.736963546_g5ze.jpg",
    cardTitle: "Card title",
    hrefTitle: "Go somewhere",
  };
  const currentProps2 = {
    srsImage: "",
    cardTitle: "Other card title",
    hrefTitle: "Go somewhere",
  };
  return (
    <>
      <Cards {...currentProps}>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
      </Cards>
      <Cards {...currentProps2}>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
      </Cards>
    </>
  );
}

export default App;
