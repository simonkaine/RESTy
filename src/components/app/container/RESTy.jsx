import React from 'react';
import Form from '../RESTy-app/Form';
import Response from '../RESTy-app/Response';

class RESTy extends React.Component {
    state = {search: ''}

    render() { 
        return (
            <>
            <Form />
            <Response />
            </>
        );
    }
}
 
export default RESTy;