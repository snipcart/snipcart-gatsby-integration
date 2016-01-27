import React from 'react';
import moment from 'moment';
import DocumentTitle from 'react-document-title';
import { link } from 'gatsby-helpers';
import ReadNext from '../components/ReadNext';
import { rhythm, fontSizeToMS } from 'utils/typography'

import '../css/zenburn.css';

module.exports = React.createClass({
  render: function() {
    var post
    post = this.props.page.data;

    return (
      <DocumentTitle title={`${post.title} | ${this.props.config.blogTitle}`}>
        <div className="markdown" style={{
          position: 'relative'
        }}>
          <h1>{post.title}</h1>
          <div dangerouslySetInnerHTML={{__html: post.body}}/>
          
          <img
              alt={post.title}
              src={link(post.image)}
              style={{
                margin: '0 auto',
                display: 'block'
              }}
          />
          <a 
            href='#' 
            className='snipcart-add-item'
            data-item-id={post.id}
            data-item-price={post.price}
            data-item-image={post.image}
            data-item-name={post.title}
            data-item-description={post.description}
            data-item-url={"http://snipcart-gatsby.netlify.com" + post.path}
            style={{
              display: 'block',
              color: 'black',
              margin: '0 auto',
              width: '50px',
              border: '2px solid black',
              textAlign: 'center',
              marginBottom: rhythm(1),
              marginTop: rhythm(1),
            }}>Buy</a>
          
          <hr
            style={{
              marginBottom: rhythm(2)
            }}
          />
          <ReadNext post={post} {...this.props}/>
          <p>

            <img
              src={link("/the_great_gatsby.jpg")}
              style={{
                float: 'left',
                marginRight: rhythm(1/4),
                marginBottom: 0,
                width: rhythm(2),
                height: rhythm(2)
              }}
            />
            <strong>{this.props.config.authorName}</strong> can throw parties reaching unprecedented levels of epicness. With this Gatsby/Snipcart store, so can you!
          </p>
        </div>
      </DocumentTitle>
    );
  }
});
