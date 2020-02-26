import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class LandingPage extends Component {
    render() {
        return (
            // <div><h1>Sup muhfucka</h1></div>
            <div style={{width: '100%', margin: 'auto'}}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img 
                            src={require('../images/nathan1.jpg')}
                            alt="hi"
                            className="nathan-img" />

                        <div className="banner-text"><h1>Data Scientist</h1>
                        <hr/>
                        <p>Java | Python | C | Perl | Machine Learning | Natural Language Processing</p>

                        
                        <div className="social-links">
                            {/* LinkedIn Profile */}
                            <a href="https://linkedin.com/in/nrhwest" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-linkedin-square" aria-hidden="true" />
                            </a>
                            {/* Twitter Profile */}
                            <a href="https://twitter.com/natewst" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-twitter-square" aria-hidden="true" />
                            </a>
                            {/* Github Profile */}
                            <a href="http://github.com/nrhwest" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-github-square" aria-hidden="true" />
                            </a>
                        </div>
                        </div> 

                    </Cell>
                </Grid>
            
            </div>
        );
    }
}

export default LandingPage;