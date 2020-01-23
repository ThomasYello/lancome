import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import wrappedForm from "../components/wrappedForm"

class form extends React.Component {
  render() {
    return (
      <Layout>
        <SEO title="ACCUEIL" />
        <h1> Forrmulaire </h1>

        <p> Veuillez remplir le formulaire ci dessous</p>
        <wrappedForm/>
      </Layout>
    )
  }
}

export default form
