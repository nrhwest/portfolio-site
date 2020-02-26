import React, {Component } from 'react';
import { Tabs, Tab, Grid, Cell } from 'react-mdl'
import { Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl'

class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            activeTab: 0 
        }
    }

    toggleCategories() {
        if (this.state.activeTab === 0) {
            return (
                <div className="projects-grid" >
                    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color:'white', height: '176px', background:'url(https://avatars2.githubusercontent.com/u/36595238?s=400&v=4) center / cover'}}>
                        Medinify
                    </CardTitle>
                    <CardText>Medinify is a general text classification package, with a focus on medical text. The package utilizes machine learning and natural language processing concepts.</CardText>
                    <CardActions border>
                        <Button colored>Github</Button>
                    </CardActions>
                    </Card>
                    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                        <CardTitle style={{color:'white', height: '176px', background:'url(https://avatars2.githubusercontent.com/u/36595238?s=400&v=4) center / cover'}}>
                            PaperScraper
                        </CardTitle>
                        <CardText>A web scraping tool to systematically extract the text of scientific papers and corresponding metadata from university accessible journals.</CardText>
                        <CardActions border>
                            <Button colored>Github</Button>
                        </CardActions>
                    </Card>
                    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                        <CardTitle style={{color:'white', height: '176px', background:'url(https://avatars2.githubusercontent.com/u/36595238?s=400&v=4) center / cover'}}>
                            Artificial Intelligence
                        </CardTitle>
                        <CardText>A repository of projects from my artificial intelligence course at VCU</CardText>
                        <CardActions border>
                            <Button colored>Github</Button>
                        </CardActions>
                    </Card>
                </div>
            );
        } else if (this.state.activeTab === 1) {
            return (
                <div>We're in Java yeah yeah yeah</div>
            );
        } else if (this.state.activeTab === 2) {
            return (
                <div>We're in Perl</div>
            );
        }
    }

    render() {
        return(
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({activeTab: tabId})} ripple>
                    <Tab>Python</Tab>
                    <Tab>Java</Tab>
                    <Tab>Perl</Tab>
                </Tabs>
                    <Grid>
                        <Cell col={12}>
                            <div className="content">
                                {this.toggleCategories()}   
                            </div>
                        </Cell>
                    </Grid>
            </div>
        );
    }
}

export default Projects;