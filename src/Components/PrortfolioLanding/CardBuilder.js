import React from 'react'
import {CardItems} from './CardItems'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './CardBuilder.css'
import {Link} from 'react-router-dom'

export class CardBuilder extends React.Component{
    render(){
        return(
            <div className = 'carditems'>
                {CardItems.map((index) => (
                    <div className = 'carditem' key = {index}>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={index.img} />
                            <Card.Body>
                                <Card.Title>{index.title}</Card.Title>
                                <Card.Text>
                                {index.text}
                                </Card.Text>
                                <Link to = {index.link}>
                                    <Button variant="secondary" >See More</Button>
                                </Link>
                                
                            </Card.Body>
                        </Card>
                    </div>
                ))}
            </div>

        )
    }
}