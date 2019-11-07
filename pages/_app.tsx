import React from 'react';
import App from 'next/app';

import './root.scss';

class NeoScinapse extends App {
  render() {
    const { Component, pageProps } = this.props;
    return <Component {...pageProps} />;
  }
}

export default NeoScinapse;
