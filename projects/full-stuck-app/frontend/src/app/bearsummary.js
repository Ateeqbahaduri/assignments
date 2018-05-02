import React from 'react';
import {Link} from 'react-router-dom';

const BearSummary = (props) => {
    const { _id, title, body, image_url} = props

    return (
        <section>
            <div className="bear-summary">
                <h1><Link to = {`bears/${_id}`}>{ title }</Link></h1>
                <div>{ body }</div>
                <img src={image_url} alt="" />
            </div>
        </section>
    )
}
export default BearSummary;