import React from "react"
import { navigate } from "gatsby"


class wrappedForm extends React.Component {
    constructor(props) {
        super(props)
    
        this.state = {
          form: [],
          nom: "",
          prenom: "",
          email: "",
          checked: true,
          password: ""
          
        }
      }

      handleSubmit = event => {
        event.preventDefault();
          
        const params = {
          nom: this.state.nom,
          prenom: this.state.prenom,
          email: this.state.email,
          checked: this.state.checked,
          password: this.state.password
    
    
        };
        if (params.checked === true) {
            
            const { nom, prenom, email, form, password } = this.state;
    
            navigate("/merci",
            {
              state: { nom, prenom, email, form, password }
    
            })
    
        } else {
          alert('veuillez accepter les conditions pour vous inscrire');
        }
    
      }
    

      handleChange = event => {
        event.preventDefault();
    
        this.setState({ [event.target.name]: event.target.value })
    
      }


  render() {
    return (
        <div className="wrapper">
        <h1>Mon formulaire</h1>

        <div className="from-wrapper">

          <form onSubmit={this.handleSubmit} >

            <div className="Nom">
              <label htmlFor="nom">Nom</label>
              <input onChange={this.handleChange} type='text' name='nom' value={nom} />

            </div>

            <div className="Prenom">
              <label htmlFor="prenom"> Prenom</label>
              <input onChange={this.handleChange} type='text' name='prenom' value={prenom} />

            </div>

            <div className="Email">
              <label htmlFor="email"> Email</label>
              <input onChange={this.handleChange} type='email' name='email' value={email} />

            </div>

            <div className="Email">
              <label htmlFor="password"> Mot de passe</label>
              <input onChange={this.handleChange} type='password' name='password' value={password} />

            </div>

            <div>
              <input type="checkbox" name="checked" onChange={this.handleCheckbox} checked={checked} />
              <label htmlFor="checked">J'accepte les conditions du site  </label>
              

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

export default wrappedForm
