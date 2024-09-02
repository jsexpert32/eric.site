import React from 'react';
import { Link } from 'react-scroll';
import './Footer.css';

const defaultDelay = window.defaultDelay;

class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bShow: false
    };

    this.showComponent = this.showComponent.bind(this);
  }

  showComponent() {
    this.setState({
      bShow: true
    });
  }

  componentDidMount() {
    setTimeout(this.showComponent, defaultDelay);
  }

  render() {
    let hideOrShow = 'hidden';
    if (this.state.bShow === true) {
      hideOrShow = '';
    }

    return (
      <div className={['footer-section', hideOrShow].join(' ')}>
        <div className="diagonal-shadow" />
        <div className="move-top-container">
          <Link
            className="move-top"
            to="home-section"
            spy={true}
            smooth={true}
            duration={500}
          >
            <span className="fa fa-angle-double-up" />
          </Link>
        </div>
        <div className="connect-me">
          <a
            className="social-icon"
            target="_blank"
            href="https://www.linkedin.com/in/eric-lee-451328138"
          >
            {' '}
            <span className="fa fa-linkedin" />{' '}
          </a>
          <a
            className="social-icon"
            target="_blank"
            href="https://www.facebook.com/ericlee.li.9847"
          >
            {' '}
            <span className="fa fa-facebook" />{' '}
          </a>
          <a
            className="social-icon"
            target="_blank"
            href="https://github.com/jsexpert32"
          >
            {' '}
            <span className="fa fa-github" />{' '}
          </a>
          {/*
          <a className="social-icon" onClick={this.startSkypeChat}>
            <span className="fa fa-skype" />
          </a>
          */}
          <a
            className="social-icon"
            target="_blank"
            href="mailto:eric.lee6174@gmail.com"
          >
            {' '}
            <span className="fa fa-envelope" />{' '}
          </a>
        </div>
        <div className="copyright">
          ERIC LEE<span className="year"> ©2023</span>
        </div>
      </div>
    );
  }
}

export default Footer;
