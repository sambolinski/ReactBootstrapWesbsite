import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import ErrorPageContainer from "./Components/ErrorPageContainer"
import Layout from "./Components/Layout"
import NavigationBar from "./Components/NavigationBar"
import Jumbotron from "./Components/Jumbotron"
import './App.css';
import './Styling/Album.css'
import ProjectPageContainer from './Components/Projects/ProjectPageContainer';
import RenderPageContainer from './Components/Renders/RenderPageContainer';
import ProjectData from "./Assets/Data/Projects.json"

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      message: ""
    }
    this.updateMessage = this.updateMessage.bind(this);
  }
  
  updateMessage(text){
    this.setState({
        message: text
    });
  }
  
  render(){
    return (
        <React.Fragment>
          <NavigationBar/>
          <Jumbotron  message = {this.state.message}/>
          <Layout>
            <Router>
              <Switch>
                <Route exact path = "/projects/" render={(props) => <ProjectPageContainer updateMessage={this.updateMessage} {...props} /> } />
                <Route exact path = "/renders/" render={(props) => <RenderPageContainer updateMessage={this.updateMessage} {...props} /> }/>
                <Route exact path = "/renders/:id/" render={(props) => <RenderPageContainer updateMessage={this.updateMessage} {...props} /> } />
                <Route component={ErrorPageContainer} />
              </Switch>
            </Router>
          </Layout>
        </React.Fragment>
    );
  }
  }

export default App;
