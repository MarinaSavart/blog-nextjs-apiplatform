import { Button, Col } from 'react-bootstrap';

export default function ListItems({ itemData, handleDelete }) {
  return (
    <Col
      lg="2"
      className="d-flex justify-content-between align-items-center category-items m-2 p-lg-3"
    >
      <span>{itemData.name}</span>
      <Button
        onClick={() => handleDelete(itemData.id)}
        variant="danger"
        size="sm"
      >
        X
      </Button>
    </Col>
  );
}
