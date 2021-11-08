import React from 'react';
import Form from '../Presentational/Form';
import Response from '../Presentational/Response';
import History from '../Presentational/History';

class RESTy extends React.Component {
    state = {url: '', history: [], method: '', displayResponse: [], jsonResponse: ''}

    // handle change for url search input
    // the event on url submit should update the URL for radio btn selection
    handleChange = (event) => {
        this.setState({ url: event.target.event })
    } 

    // handle submit .. 
    handleSubmit = async (event) => {
        event.preventDefault();
    }

    render() { 
        const { url, history, method, displayResponse, jsonResponse} = this.state;
        return (
            <>
            <Form 
                onSubmit={this.handleSubmit} 
                handleChange={this.handleChange}
                urlChange={url}
                method={method}
                jsonBody={jsonResponse}
            />
            <Response />
            <History />
            </>
        );
    }
}
 
export default RESTy;