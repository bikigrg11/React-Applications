import React, { Component } from 'react';
import { Form, FormGroup, ControlLabel, Button, FormControl} from 'react-bootstrap';

class SearchRecipes extends Component {
    render(){
        return(
            <Form inline>
                <FormGroup>
                    <ControlLabel>Ingredients</ControlLabel>
                    {' '}
                    <FormControl  type ="text" placeholder="garlic, chicken" />
                </FormGroup>
                {' '}
                <FormGroup>
                    <ControlLabel>Dish</ControlLabel>
                        {' '}
                    <FormControl  type ="text" placeholder="adobo" /> 
                </FormGroup>
                {' '}
                <Button>Submit</Button>
            </Form>
        )
    }
}

export default SearchRecipes;