import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, CardBody, CardText, CardTitle, Col } from 'react-bootstrap';


export default function Cards({ data, username }) {

  // console.log(data.category.name);
  return (
    <Col xs={12} s={12} md={6} xl={4}>
      <Link href={`/posts/${data.id}`}>
        
        <Card className='border-0 my-4 p-4 pb-1'>
          <CardTitle className='text-center mb-4'>{data.title}</CardTitle>
          <CardBody>
            <div className="d-flex justify-content-between align-items-center">
              <small>{new Date(data.createdAt).toLocaleDateString()}</small>
              <small>Category : {data.category.name}</small>
            </div>
            <CardText className='mt-3 mb-4'>{data.content.substring(0, 70)} ...</CardText>
            <div className="d-flex justify-content-between align-items-center">
              <div className="btn-group">
                <Link type="button" className="btn btn-sm btn-outline-primary" href={`/posts/${data.id}`}>View</Link>
                
                {(username == data.user.username) ? <Link type="button" className="btn btn-sm btn-outline-secondary" href={`/posts/${data.id}/edit`}>Edit</Link> : "" }
                {(username == data.user.username) ? <Link type="button" className="btn btn-sm btn-outline-danger" href={`/posts/${data.id}/delete`}>Delete</Link> : "" }
                
              </div>
              <small className="text-muted">Author : <cite title={`${data.user.username}`}>{data.user.username}</cite></small>
            </div>
          </CardBody>
        </Card>
      </Link>
    </Col>
  );
}