import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import WrappedForm from "../components/wrappedForm"

class Form extends React.Component {
  render() {

    return (
      <Layout>
        <SEO title="ACCUEIL" />
        <h1> Formulaire </h1>

        <p> Veuillez remplir le formulaire ci dessous !</p>
        <WrappedForm />


      </Layout>
    )
  }
}

export default Form
