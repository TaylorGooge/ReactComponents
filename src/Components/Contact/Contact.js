import React from 'react'
import { Navigation } from "../Navbar/Navbar"
import {Footer} from "../Footer/Footer"
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Image from 'react-bootstrap/Image'
import './Contact.css'


export class Contact extends React.Component{
    render(){
        return(
            <div >
                < Navigation />
                <div className = 'maindiv'>
                    <div className = 'childdiv'>
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                                <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Message</Form.Label>
                                <Form.Control as="textarea" rows={3} placeholder="Type Message here"/>
                            </Form.Group>
                            <Button variant="secondary" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </div>
                    <div className= 'childdiv'>
                        <Image className= 'contactimg' src = 'IMG/ContactPage/connect.jpeg'fluid></Image>
                    </div>
                </div>
                <Footer />
            </div>

        )
    }
}