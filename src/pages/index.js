import React from "react"
import { graphql, Link } from 'gatsby'
import Layout from "../components/Layout"
// !VA Chapter 6: This is the +V3 syntax of style modules import, ES6 standard. Module files have to have this naming structure. This is basic React.
import * as styles from '../styles/home.module.css'
import Img from 'gatsby-image'

// !VA Chapter 3: Use standard React Link component for anchors
// !VA Chapter 7: use img tags with source pointing to the public folder. You could just put any assets in the static folder, but it's not the best way in Gatsby because .
// !VA Chapter 9: Export the GraphQL query to use it. I don't know why it's graphql here but graphiql in the browser. Import graphql from 'gatsby' and export the query inside backticks as below. Then destructure out the data property from the component props, destructure out the title and description properties of the data property, then you can render them in the component. 
// !VA Chapter 10: get rid of the the calls to GraphQL to get the data prop to get the title and description to render in the p tag below, we're not using that anymore. It's in the Navbar component now.
// export default function Home({data}) {
// !VA Chapter 16, now we need to destructure out the data object from the props returned from the image query at the bottom. To find out wherre to point the Img component to, drill down in the file object of the data prop. data -> file -> childImageSharp -> fluid.
export default function Home({ data }) {
  // !VA Chapter10: refactoring out the data props below, not needed anymore.
  console.log(data);
  // const { title, description } = data.site.siteMetadata
  return (
    <Layout>
      <section className={styles.header}>
        <div>
          <h2>Design</h2>
          <h3>Develop & Deploy</h3>
          <p>UX designer & web developer based in Manchester.</p>
          <Link className={styles.btn} to="/projects">My Portfolio Projects</Link>
        </div>
        {/* <img src="/banner.png" alt="site banner" style={{ maxWidth: '100%' }} /> */}
        <Img fluid={data.file.childImageSharp.fluid}/>
        
        {/* <p>{title } - { description } </p> */}
      </section>
    </Layout>
  )
}

// !VA Chapter 10 : Delete the query that returns the data prop, we dont' need it any more for this lesson
// export const query = graphql`
// query SiteInfo {
//   site {
//     siteMetadata {
//       description
//       title
//     }
//   }
// }
// `

// !VA Chapter 16: The following query is a) renamed from the default Query to Banner and 2) has a 'fragment' ...GatsbyImageSharpFluid the includes all the default properties that were provided in the GraphiQL query, i.e. sizes, src, and srcSet. GatsbyImageSharpFluid includes all of these query properties in the GatsbyImageSharpFluid fragment. IMPORTANT: You have to generate this as a 'file' query! childImageSharp is available through the file property. ImageSharp is all over the place, but if you don't do it from the file property, it won't return a path to the file in the data object!
export const query = graphql`
query Banner {
  file(relativePath: {eq: "banner.png"}) {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid
      }
    }
  }
}
`