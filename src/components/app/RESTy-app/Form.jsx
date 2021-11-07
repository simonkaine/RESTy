import React from 'react';

export default function Form({ search, onSubmit, onChange }) {
    return (
        <section className="form">
        <form onSubmit={onSubmit}>
            <label htmlFor="search">Search</label>
                <input
                id="url" 
                type="text" 
                name="url" 
                placeholder="URL"
                value={search}
                onChange={onChange}
                />
            
            <section className="methods">
                <div>
                    <label htmlFor="get">GET</label>
                    <input id="get" type="radio" name="method" value="GET"/>
                    <label htmlFor="post">POST</label>
                    <input id="post" type="radio" name="method" value="POST"/>
                    <label htmlFor="patch">PATCH</label>
                    <input id="patch" type="radio" name="method" value="PATCH"/>
                    <label htmlFor="put">PUT</label>
                    <input id="put" type="radio" name="method" value="PUT"/>
                    <label htmlFor="delete">DELETE</label>
                    <input id="delete" type="radio" name="method" value="DELETE"/>
                </div>
                <button aria-label="button">Let's see it!</button>
            </section>
        </form>
        </section>
    )
}