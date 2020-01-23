import React from "react"

import Layout from "../components/layout"

import SEO from "../components/seo"

class merci extends React.Component {
  render() {
    return (
      <Layout>
        <SEO title="Merci !" />

        <h1> Nom et Prénom </h1>

        <p> Merci de votre participation !</p>
      </Layout>
    )
  }
}

export default merci
