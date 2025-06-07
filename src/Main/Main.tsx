import React, { JSX } from 'react';
import './MainStyle.css';
import { Hero } from "../Hero/Hero";
import { AboutMe } from "../AboutMe/AboutMe";
import  { MyProjects } from "../MyProjects/MyProjects"
import  { Contact } from "../Contact/Contact";

export function Main(): JSX.Element {
    return (
        <>
            <Hero/>
            <AboutMe/>
            <MyProjects/>
            <Contact/>
        </>
    );
}