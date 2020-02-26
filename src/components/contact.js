import React, {Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import { List, ListItem, ListItemContent } from 'react-mdl';

class Contact extends Component {
    render() {
        return(
            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell col={6}>
                        <h2>Nathan West</h2>
                        <img 
                            src={require('../images/nathan1.jpg')}
                            alt="hi"
                            className="nathan-img" 
                            style={{height: '250px'}}/> 
                        <p style={{width: '75%', margin: 'auto', paddingTop: '1em'}}>I can always be reached via email, cell phone, or Linkedin</p>
                    </Cell>
                    <Cell col={6}>
                        <h2>Contact Me!</h2>
                        <hr/>
                        <div classname="contact-list">
                            <List>
                                <ListItem>
                                    <ListItemContent style={{fontSize: '25px', fontFamily: 'Anton'}}>
                                        <i className="fa fa-phone-square" aria-hidden="true"/>(703) 973-1205
                                    </ListItemContent>
                                </ListItem>
                                <ListItem>
                                    <ListItemContent style={{fontSize: '25px', fontFamily: 'Anton'}}>
                                        <i className="fa fa-envelope" aria-hidden="true"/>nrhwest@gmail.com
                                    </ListItemContent>
                                </ListItem>
                                <ListItem>
                                    <ListItemContent style={{fontSize: '25px', fontFamily: 'Anton'}}>
                                        <i className="fa fa-linkedin" aria-hidden="true"/>linkedin.com/in/nrhwest
                                    </ListItemContent>
                                </ListItem>
                            </List>
                        </div>
                    </Cell>
                </Grid>


            </div>
        );
    }
}

export default Contact;