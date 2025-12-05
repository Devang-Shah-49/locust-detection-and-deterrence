import Image from "next/image"
import { useEffect, useState, useRef } from 'react';
import { NextSeo } from "next-seo"
import SecurityIcon from '@material-ui/icons/Security';
import classes from "./about.module.scss"

const About = () => {

    const SEO = {
        title: "About",
        description: "This page includes What was the inspiration behind this project?",

        openGraph: {
            title: "About",
            description: "track locusts here",
        },
    }

    return (<h5>About</h5>)
}

export default About
