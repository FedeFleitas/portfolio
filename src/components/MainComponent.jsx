import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Header from './Header/Header';
import NavBar from './NavBar/NavBar';
import ChatBot from './Chatbot/ChatBot';
import ContactMe from './ContactMe/ContactMe';
import AboutMe from './AboutMe/AboutMe';
import Projects from './Projects/Projects';
import LandingPage from './LandingPage/LandingPage';
import Stack from './Skills/Skills';
import Experience from './Experience/Experience';
import ProjectDetail from './Projects/ProjectDetail';


export default function MainComponent() {

    return (
        <div>
            <Route path='/' component={Header} />
            <Route exact path='/home' component={LandingPage} />
            <Route exact path='/aboutme' component={AboutMe} />
            <Route exact path='/skills' component={Stack} />
            <Route exact path='/experience' component={Experience} />
            <Switch>
                <Route exact path='/projects/:projectName' component={ProjectDetail} />
                <Route exact path='/projects' component={Projects} />
            </Switch>
            <Route exact path='/contact' component={ContactMe} />
            <Route path='/' component={ChatBot} />
            <Route path='/' component={NavBar} />
            <Redirect to='/home' />
        </div>
    );
}