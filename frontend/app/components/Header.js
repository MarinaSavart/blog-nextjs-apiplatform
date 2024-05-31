
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row } from 'react-bootstrap';
import Navbar from "./Navbar";

export default function Header({ name }) {
    return (
        <Container className='mt-4'>
            <Navbar/>
            <Row>
                <h1 className='text-center my-4'>{ name }</h1>
            </Row>
        </Container>
    )
}