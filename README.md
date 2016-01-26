## What is Gatsby?

[Gatsby](https://github.com/gatsbyjs/gatsby) is a static website generator built with emerging web technologies like React.js and Webpack.

It supports Markdown, HTML, and React.js components out of the box. It's also easy to add support for additional files types like SCSS, for example.



## Create your new Gatsby-powered website

First, you're gonna need to install the tool. It's pretty much straightforward as you can see:

    npm install -g gatsby

Quick note: Given the fact that i'm using a Windows computer, I had to modify one core Gatsby file to handle path problems that were causing dysfunctionalities. The quick fix I did was:

1- Go to 
`C:\Users\{....}\AppData\Roaming\npm\node_modules\gatsby\dist\isomorphic\create-route.js`

2-  Find all:  `handler = pagesReq("./" + page.requirePath);`
And replace them by:  `handler = pagesReq("./" + page.requirePath.replace('\\', '/'));`

For the purposes of this article, I decided to use the blog starter kit because it offers articles iteration on the front page and a single page for all items, exactly what I needed for my products.

    gatsby new snipcart-gatsby-integration https://github.com/gatsbyjs/gatsby-starter-blog

Just hit `gatsby develop` and you're good to go, you should have a running website on localhost:8000 with react-hot-loader functionalities.



## Configurations

First, we want to edit base configuration values like the blog title and the author name. To do so, go at the root of your project and edit the config.toml file. Mine looks like this:

    blogTitle = "Snipcart - Gatsby"
    authorName = "The Great Gatsby"



## Product definitions
Under the folder "pages", i'll need to add some products. To do so, you will need to create 1 folder per product with an index.md inside. Take a look at mines:

/pages/bow-ties/index.md

    ---
    title: Bow Ties
    layout: post
    
    id: "2"
    image: "/bow-ties.jpg"
    price: 7.00
    path: "/bow-ties/"
    description: "The bow-tie (not to be confused with the tae bo) is an aphrodisiac worn by male humans attempting to win one or more mates."
    ---
    
    
    The bow-tie (not to be confused with the tae bo) is an aphrodisiac worn by male humans attempting to win one or more mates. According to scientists (many of whom sport the style regularly), the bow-tie has been clinically proven to yield positive results. These findings were confirmed by the surge in popularity of the ties in the 1960's which led to a nation-wide public school banning.

/pages/dry-martini/index.md

    ---
    title: Dry Martini
    layout: post
    
    id: "3"
    image: "/dry-martini.jpg"
    price: 8.50
    path: "/dry-martini/"
    description: So tasty, so good."
    ---
    
    > "One Martini is all right. Two are too many, and three are not enough"


/pages/fireworks/index.md

    ---
    title: Fireworks
    layout: post
    
    id: "1"
    image: "/fireworks.jpg"
    price: 67.89
    path: "/fireworks/"
    description: "Fireworks is the art of packing a thin paper bag full over uber-dangerous explosives."
    ---
    
    Fireworks is the art of packing a thin paper bag full over uber-dangerous explosives, and igniting them so that they travel at screamin' speeds, preferably at the nerd in big glasses or the fag who sneaks off with your girlfriend. The dangerous explosives make sure that the wooden shards embed themselves deep into the skin of your victim and leave him pissed off and scarred for life.


## Integrating Snipcart into the store

At the root you sould have a file [html.jsx](https://github.com/snipcart/snipcart-gatsby-integration/blob/master/html.jsx), inside it just add your static file, just under the title tag.

     <link id="snipcart-theme" type="text/css" href="https://cdn.snipcart.com/themes/base/snipcart.css" rel="stylesheet" />
          <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js"></script>
          <script type="text/javascript" id="snipcart" data-api-key="{SNIPCART API KEY}

Now, I will add product buttons into the [md.jsx](https://github.com/snipcart/snipcart-gatsby-integration/blob/master/wrappers/md.jsx) file:

    <a 
      href='#' 
      className='snipcart-add-item'
      data-item-id={post.id}
      data-item-price={post.price}
      data-item-image={post.image}
      data-item-name={post.title}
      data-item-description={post.description}
      data-item-url={"http://snipcart-gatsby.netlify.com" + post.path}>
      Buy
    </a>

## Deploying using netlify

***Franc, on l'explique dans chaque putain de post.... J'ai pu trop d'inspiration. TU peux te fier à ça:***

https://snipcart.com/blog/static-site-ecommerce-snipcart-roots-integration
https://snipcart.com/blog/static-site-e-commerce-part-3-integrating-snipcart-with-hugo
https://snipcart.com/blog/static-site-e-commerce-integrating-snipcart-with-middleman

    npm install netlify-cli -g
    netlify init
    [answer some basic questions here...]
    netlify update -n snipcart-gatsby
    netlify deploy

## Final look

Hey, let's take a look at the look of our [store](http://snipcart-gatsby.netlify.com).

![enter image description here](http://i.imgur.com/fPcRNmX.png)

![Bow ties](http://i.imgur.com/OA9vdlJ.png)

![Dry Martini](http://i.imgur.com/KZmYwVF.png)

![Fireworks](http://i.imgur.com/hbR4zjJ.png)

So fresh and so clean, isn't?