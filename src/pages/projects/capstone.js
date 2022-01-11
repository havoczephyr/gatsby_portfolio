import React from 'react'
import Layout from '../../components/Layout'
import {langFrames} from '../../styles/capstone.module.css'

export default function capstone() {
    return (
        <Layout>
        <div>
            <h1> Capstone Project: Steam Collector</h1>
            <p> The Steam Collector was a small-scale project I developed while I was in DevMountain's Foundations Program.
            Steam Collector is a full stack fully hosted webpage that utilizes a PostgresSql DB to store scraped data and then use that for easy music discovery.</p>
        </div>
        <div id={langFrames}>
            <div>
                <h3>Languages Used:</h3>
                <ul>
                    <li>Javascript</li>
                </ul>
            </div>
            
            <div>
                <h3>Frameworks Used:</h3>
                <ul>
                    <li>Express.js</li>
                    <li>Node.js</li>
                    <li>Axios.js</li>
                    <li>Cheerio.js</li>
                    <li>Sequelize.js</li>
                </ul>
            </div>
        </div>
        <center><iframe width="1024" height="576" src="https://www.youtube.com/embed/_62ZT0wLCn8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></center>
        </Layout>
    )
}
