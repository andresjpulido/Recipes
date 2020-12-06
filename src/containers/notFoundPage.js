import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import PageNotFound from '../assets/images/404.png';

class NotFoundPage extends Component {

  render() {

    return (
      <div>
        <p style={{ textAlign: "center" }}>
          <img src={PageNotFound} alt=""/>
        </p>
        <p style={{ textAlign: "center" }}>
          <Link to="/">Go to Home </Link>
        </p>
      </div>
    )
  }

}

export default NotFoundPage;