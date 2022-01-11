import React from "react"
import Layout from "../components/Layout"
import { btn, header, bodies, cc } from '../styles/home.module.css'
import { Link } from "gatsby"

export default function Home() {
  return (
    <Layout>
    <section className={header}>
  <div>
    <h2>My Name is Giovanni Giuseppe <br></br> D'Amico</h2>
    <h3>and I am a Software Engineer</h3>
    <Link className={btn} to='/projects'>My Portfolio Projects</Link>
  </div>
  <div className={bodies}>
    <img src= '/cc_transparent.png' alt='computer' id={cc}></img>
  </div>
  </section>
  </Layout>
  )
}