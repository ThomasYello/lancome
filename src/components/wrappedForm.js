import React from "react"
import { navigate } from "gatsby"


class WrappedForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      nom: "",
      prenom: "",
      email: "",
      checked: false,
    }
  }


  handleSubmit = (event) => {
    event.preventDefault()
    const { nom, prenom, email, checked } = this.state
    if ( checked === true ) {
      navigate("/merci", {
        state: { nom, prenom, email },
      })
    } else {
      alert("veuillez accepter les conditions pour vous inscrire")
    }
  }

  handleChange = event => {
    event.preventDefault()
    this.setState({ [event.target.name]: event.target.value })
  }

  handleCheckbox = () => {
    const check = this.state.checked
    this.setState({ checked: !check })
  }

  render() {

    const { nom, prenom, email, checked } = this.state

    return (
      <div className="wrapper">
        <div className="from-wrapper">
          <form onSubmit={this.handleSubmit}>
            <div className="input_wrapper">
              <label htmlFor="nom">Nom</label>
              <input
                onChange={this.handleChange}
                type="text"
                name="nom"
                value={nom}
                required
              />
            </div>

            <div className="input_wrapper">
              <label htmlFor="prenom"> Prenom</label>
              <input
                onChange={this.handleChange}
                type="text"
                name="prenom"
                value={prenom}
                required
              />
            </div>

            <div className="input_wrapper">
              <label htmlFor="email"> Email</label>
              <input
                onChange={this.handleChange}
                type="email"
                name="email"
                value={email}
                required
              />
            </div>

            <div>
              <input
                type="checkbox"
                name="checked"
                onChange={this.handleCheckbox}
                checked={checked}
              />
              <label htmlFor="checked">J'accepte les conditions du site </label>
            </div>

            <div className="bouton">
              <button onSubmit={this.handleSubmit}> Valider </button>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default WrappedForm
