import React from 'react';
import { RouteHandler, Link } from 'react-router';
import sortBy from 'lodash/collection/sortBy';
import DocumentTitle from 'react-document-title';
import { link } from 'gatsby-helpers';
import { rhythm, fontSizeToMS } from 'utils/typography'

export default class extends React.Component {
  static data() {
    return {
      yo: true
    }
  }
  render() {
    let i, len, page, pageLinks, ref, ref1, ref2, title;
    pageLinks = [];
    ref = sortBy(this.props.pages, (page) => {
      let ref;
      return (ref = page.data) != null ? ref.date : void 0;
    }).reverse();
    for (i = 0, len = ref.length; i < len; i++) {
      page = ref[i];
      title = ((ref1 = page.data) != null ? ref1.title : void 0) || page.path;
      if (page.path && page.path !== "/" && !((ref2 = page.data) != null ? ref2.draft : void 0)) {
        pageLinks.push(
          <li
            key={page.path}
            style={{
              marginBottom: rhythm(1/4)
            }}
          >
            <Link to={link(page.path)}>{title}</Link>
          </li>
        );
      }
    }
    return (
      <DocumentTitle title={this.props.config.blogTitle}>
        <div>
          <p
            style={{
              marginBottom: rhythm(2.5)
            }}
          >
            <img
              src="./the_great_gatsby.jpg"
              style={{
                float: 'left',
                marginRight: rhythm(1/4),
                marginBottom: 0,
                width: rhythm(2),
                height: rhythm(2) 
              }}
            />
           Welcome to the Great Gatsby Store! This awesome static e-commerce demo shop is proudly powered by Gatsby & Snipcart.
          </p>
          <ul>
            {pageLinks}
          </ul>
        </div>
      </DocumentTitle>
    )
  }
}
