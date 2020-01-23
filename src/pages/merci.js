import React from "react"

import Layout from "../components/layout"

import SEO from "../components/seo"

class merci extends React.Component {
  render() {

    const { nom, prenom, email } = this.props.location.state

    return (
      <Layout>
        <SEO title="Merci !" />

        <h1>Merci pour votre participation {nom} {prenom} </h1>

        <p> Un mail vous a été envoyé à : {email} !</p>
      </Layout>
    )
  }
}

export default merci
