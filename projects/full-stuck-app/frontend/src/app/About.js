import React from 'react';

const About = () => {


        return (
            <div className="About-content">
                <h1>About My App</h1>
                <p>This App is a Picture database. User can add pictures of any Urls, 
                    by giving it a Tile, Url and a comment.
                    1.User can edit the picture url, title and comment.
                    2.user can delete a picture, by id from the Backend or by clicking the 
                    delete button after user clicked the picture title.
                    You can see all the collection from the databse and you can alter
                    it from the Mongodb if you are an administrator.
                    
                    
                </p>
            </div>
        )
    }

export default About;