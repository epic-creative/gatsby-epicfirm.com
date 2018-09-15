import React, { Component } from 'react';
import Link from 'gatsby-link';
import Img from 'gatsby-image';

import { debounce } from 'lodash';

import NavigationBar from '../components/NavigationBar';
import Banner from '../components/Banner';
import Footer from '../components/Footer';

import Wrapper from '../components/Wrapper';
import SpotlightWrapper from '../components/SpotlightWrapper';
import Spotlight from '../components/Spotlight';
import Content from '../components/Content';
import FeaturedItems from '../components/FeaturedItems';
import SpecialLink from '../components/SpecialLink';

import pic01 from '../images/pic01.jpg';
import pic02 from '../images/pic02.jpg';
import pic03 from '../images/pic03.jpg';

class IndexPage extends Component {
  state = {
    isScrolled: false,
    isMounted: false,
  };

  constructor(props) {
    super(props);
  }

  bannerRef = React.createRef();

  scrollListener = debounce(() => {
    const { clientHeight } = this.bannerRef.current;
    if (window.scrollY >= clientHeight) this.setState({ isScrolled: true });
    else this.setState({ isScrolled: false });
  }, 66);

  componentDidMount() {
    window.addEventListener('scroll', this.scrollListener);

    // trigger banner animation
    setTimeout(() => {
      this.setState({ isMounted: true });
    }, 500);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.scrollListener);
  }

  render() {
    const { data, openMenu } = this.props;
    return (
      <div className={this.state.isMounted ? '' : 'is-preload'}>
        <NavigationBar
          siteTitle={data.site.siteMetadata.title}
          openMenu={openMenu}
          className={this.state.isScrolled ? '' : 'alt'}
        />
        <Banner siteTitle={data.site.siteMetadata.title} ref={this.bannerRef} />
        <SpotlightWrapper>
          <Spotlight>
            <a href="#" className="image">
              <Img sizes={data.pic01.childImageSharp.sizes} />
            </a>
            <Content>
              <h2 className="major">Consulting CTO</h2>
              <p>
      We offer technical leadership capable of understanding the business goals, the technical execution and translating between the two. We can help you grow a new team or mentor your existing team into a cohesive group of people who are passionate about their craft.
              </p>
            </Content>
          </Spotlight>
          <Spotlight>
            <a href="#" className="image">
              <Img sizes={data.pic02.childImageSharp.sizes} />
            </a>
            <Content>
              <h2 className="major">Remote Team Enablement</h2>
              <p>
              With experience in building completely distributed teams, we can help teach and mentor your organization to better work with remote collaborators and set up a culture of transparency and trust between in-office and remote workers.
              </p>
            </Content>
          </Spotlight>

          <Spotlight>
            <a href="#" className="image">
              <Img sizes={data.pic03.childImageSharp.sizes} />
            </a>
            <Content>
              <h2 className="major">Technical Training</h2>
              <p>With experience training at several Fortune 500 companies, we can help your team “level-up” in their knowledge of Modern Web technologies through on-site training or multi-month mentoring programs
              </p>
            </Content>
          </Spotlight>
        </SpotlightWrapper>
      </div>
    );
  }
}

export default IndexPage;
