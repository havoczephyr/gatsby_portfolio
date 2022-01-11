import React from 'react'
import Layout from '../components/Layout'
import {zyva, skillsList} from '../styles/about.module.css'

export default function about() {
    return (
        <Layout>
        <div>
            <img src='/giovanni.jpg' alt='about-us' id={zyva}/>
            <h1>About Page</h1>
            <p>I am a lifelong resident of the Garden State and an eternal student. There is alway something new to learn and I'm more than eager to learn all about it.</p>
            <p>To that end, I never really expected myself to dive into coding as much as I did. And yet, I've never felt more at home.</p>
            <h2>SKILLS</h2>
            <div id={skillsList}>
                <div>
                    <h3>Languages</h3>
                    <ul>
                        <li>Javascript</li>
                        <li>Python</li>
                        <li>GDscript</li>
                    </ul>
                </div>
                <div>
                    <h3>Markdown Languages</h3>
                    <ul>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>Markdown</li>
                    </ul>
                </div>
                <div>
                    <h3>Frameworks</h3>
                    <ul>
                        <li>Express.js</li>
                        <li>Node.js</li>
                        <li>Axios.js</li>
                        <li>Cheerio.js</li>
                        <li>Sequelize.js</li>
                        <li>Flask.py</li>
                        <li>Plotly.py</li>
                    </ul>
                </div>
            </div>
        </div>
        </Layout>
    )
}