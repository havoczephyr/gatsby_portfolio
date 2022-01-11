import { Link } from 'gatsby'
import React from 'react'
import Layout from '../../components/Layout'
import { portfolio, project_images } from '../../styles/projects.module.css'

export default function index() {
    return (
        <Layout>
        <div className={portfolio}>
            <h2>Portfolio</h2>
            <h3>Projects & Websites I've Created</h3>
            <div>
                <Link to='/projects/capstone'><img src='/s_collector.png' alt='collector' className={project_images}></img></Link>
                <p><b>Steam Collector</b></p>
            </div>
        </div>
        </Layout>
    )
}