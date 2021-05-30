import React from "react"
import { navigate } from "gatsby"
import "./roomBlock.css"

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

export default class RoomBlock extends React.Component {
  state = {
    name: "",
    email: "",
  }
  handleInputChange = event => {
    const target = event.target
    const value = target.value
    const name = target.name
    this.setState({
      [name]: value,
    })
  }
  handleSubmit = event => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...this.state }),
    })
      .then(() => navigate("/success/"))
      .catch(error => alert(error))

    event.preventDefault()
  }
  render() {
    return (
      <div className="formContainer">
        <div className="infoBlock">
          <h2>Think you'll stay at the TWA?</h2>
          <h3>
            Leave us your email and we'll be in touch with lodging details
          </h3>
        </div>
        <div className="formBlock">
          <form
            name="contact"
            method="post"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            action="/success"
            onSubmit={this.handleSubmit}
          >
            <input type="hidden" name="bot-field" />
            <input type="hidden" name="form-name" value="contact" />

            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                id="name"
                value={this.state.name}
                onChange={this.handleInputChange}
              />
            </div>

            <div className="field half">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                name="email"
                id="email"
                value={this.state.email}
                onChange={this.handleInputChange}
              />
            </div>
            <input type="submit" value="Submit" className="special" />
          </form>
        </div>
      </div>
    )
  }
}

// export default RoomBlock
