import React from "react"

import { Link } from "gatsby"
import Layout from "../components/layout"

import SEO from "../components/seo"

class IndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <SEO title="Accueil" />

        <h1> Présentation </h1>
        <p> Sur ce site vous pouvez vous inscrire et connecter !</p>

        <Link to="/form"> Inscription</Link>
      </Layout>
    )
  }
}

export default IndexPage
