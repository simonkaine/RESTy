import React from 'react';

// Need method 
export default function Form({ onSubmit, urlChange, method, jsonBody }) {
    return (
        <section className="form">
        <form onSubmit={onSubmit}>
            <label htmlFor="url"></label>
                <input
                id="url" 
                type="url" 
                name="url" 
                placeholder="URL"
                onChange={urlChange}/>
            
            <section className="methods">
                <div>
                    <label htmlFor="get">GET</label>
                    <input id="get" type="radio" name="method" value="GET" onChange={urlChange} onChecked={method === 'GET'}/>
                    <label htmlFor="post">POST</label>
                    <input id="post" type="radio" name="method" value="POST" onChange={urlChange} onChecked={method === 'POST'}/>
                    <label htmlFor="patch">PATCH</label>
                    <input id="patch" type="radio" name="method" value="PATCH" onChange={urlChange} onChecked={method === 'PATCH'}/>
                    <label htmlFor="put">PUT</label>
                    <input id="put" type="radio" name="method" value="PUT" onChange={urlChange} onChecked={method === 'PUT'}/>
                    <label htmlFor="delete">DELETE</label>
                    <input id="delete" type="radio" name="method" value="DELETE" onChange={urlChange} onChecked={method === 'DELETE'}/>
                </div>
                <button aria-label="button">Let's see it!</button>
            </section>

            <section className="jsonField">
                <textarea placeholder="RAW JSON BODY" name="body" value={jsonBody}></textarea>
            </section>
        </form>
        </section>

    )
}