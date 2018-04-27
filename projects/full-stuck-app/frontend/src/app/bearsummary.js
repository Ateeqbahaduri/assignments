import React from 'react';
import {Link} from 'react-router-dom';

const bearSummary = (props) => {
    const { _id, title, body, image_url} = props

    return (
        <section>
            <div>
                <h1><Link to = {`bears/${_id}`}>{ title }</Link></h1>
                <div>{ body }</div>
                <img src={image_url} alt="" />
            </div>
        </section>
    )
}
export default bearSummary;