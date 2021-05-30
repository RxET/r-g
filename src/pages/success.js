import React from "react"
// import Helmet from 'react-helmet';
import Layout from "../components/layout"

// import pic11 from '../assets/images/pic11.jpg';

const Success = props => (
  <Layout>
    {/*
    <Helmet>
      <title>Success Page</title>
      <meta name="description" content="Success Page" />
    </Helmet>
  */}

    <div id="main" className="alt">
      <section id="one">
        <div className="inner">
          <header className="major" style={{ textAlign: `center` }}>
            <h1>Thanks!</h1>
            <h2>We'll be in touch via e-mail with room block details</h2>
          </header>
        </div>
      </section>
    </div>
  </Layout>
)

export default Success
