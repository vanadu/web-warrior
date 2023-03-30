import React from 'react'
import { graphql, Link, useStaticQuery } from 'gatsby'

// !VA Chapter 10: Import graphql and useStaticQuery from gatsby. In the component, get the data property from graphQL with the useStatusQuery hook. Note that we don't need to get props here - useStaticQuery calls data directly from GraphQL. You can only use this hook ONCE inside a component so you have to include all the properties you need in the single hook. The difference between static queries and page queries is that with the former you CANNOT USE QUERY VARIABLES!!!
// !VA Chapter 10: Explicitly providing the query SiteInfo keyword is optional on the first line of the useStaticQuery hook, i.e. query SiteInfo {
export default function Navbar() {
  const data = useStaticQuery(graphql`
     {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  // !VA Destructure the title from the siteMetadata and render it in the H1 tag.
  const { title } = data.site.siteMetadata

  return (
    <nav>
      <h1>{ title }</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/projects">Portfolio Projects</Link>
      </div>
    </nav>
  )
}