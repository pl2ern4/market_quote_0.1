import React from  'react';
import {Button,Col,InputGroup,Form,FormControl,Dropdown,DropdownButton } from 'react-bootstrap';

export const FirstName = (params) =>{
    return (<Form.Group as={Col} controlId="formGridLastName">
                <Form.Label>Last Name<span className="required">*</span></Form.Label>
                <Form.Control required type="text" autoComplete="off" placeholder="Last Name" maxLength={10} onChange={params.handleChange('lastName','lastNameError','required')}/>
            </Form.Group>);
}