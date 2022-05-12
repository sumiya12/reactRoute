import { ListGroup } from "react-bootstrap";
let style = {
  width: "300px",
};
function List() {
  return (
    <ListGroup style={style}>
      <ListGroup.Item>Hmtl Tags</ListGroup.Item>
      <ListGroup.Item>Css</ListGroup.Item>
      <ListGroup.Item>Color</ListGroup.Item>
      <ListGroup.Item>Image</ListGroup.Item>
    </ListGroup>
  );
}

export default List;
