import Content from "./content";

function Contents(props) {
  return (
    <ul id="concepts">
      {
        props.concepts.map((concept) => {
          return(
            <Content concept={concept} />
          )
        })
      }
    </ul>
  );
}

export default Contents;