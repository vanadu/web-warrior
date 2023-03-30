import React from 'react'
import Layout from '../../components/Layout'
// !VA Don't forget you need to use ES6 syntax to import the styles
import * as styles from '../../styles/projects.module.css'
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'

// !VA The exported query returns the data as props. Destructure out the data property. 
const Projects = ({ data }) => {
  // !VA Log the data. Create an object for the data returned in the props. Extract the allMarkdownRemark nodes.
  console.log(data)
  // !VA Chapter 15
  // !VA We aliased the allMarkdownRemark field to 'projects' in the query below, so we need to change that here too.
  // const projects = data.allMarkdownRemark.nodes
  const projects = data.projects.nodes
  // !VA Chapter 15: Destructure out the contact data from the returned query data
  const contact = data.contact.siteMetadata.contact

  // !VA Map through the projects array and render the queried data in the Link property, the h3 and the p elements. This is standard React procedure.
  // !VA Chapter 15: Add the email contact
  // !VA Chapter 17: Import the Img component, add an Img component, then provide the reference to the thumbs in the fluid prop.
  return (
    <Layout>
      <div className={styles.portfolio}>
        <h2>Portfolio</h2>
        <h3>Projects & Websites I've Created</h3>
        <div className={styles.projects}>
          {projects.map(project => (
            <Link to={"/projects/" + project.frontmatter.slug} key={project.id}>
              <div>
                <Img fluid={project.frontmatter.thumb.childImageSharp.fluid} />
                <h3>{ project.frontmatter.title }</h3>
                <p>{ project.frontmatter.stack }</p>
              </div>
            </Link>
          ))}
        </div>
        <p>Like what you see? Email me at {contact} for a quote!</p>
      </div>
    </Layout>
  );
}
 
export default Projects

// export page query
// !VA Chapter 13: import graphql. Export the query to a variable. Paste the query from GraphiQL, enclosing it in backticks. Change the query name to ProjectsPage. That will inject the return data into the component's props, see above.
// !VA Chapter 14: This query now includes ordering by date.
// !VA Chapter 15 now includes multiple queries in the ProjectsPage query - the site/siteMetadata/contact is also being queried. You can also NAME parts of the query, as below with the projects and site. This makes it more clear when logging the data because it provides a semantic name for the parts of the query. So instead of allMarkdownRemark and site, the query properties are names 'projects' and 'contact'. Now, the data is returned in the data prop as 'projects' not allMarkdownRemark, so that has to be changed in the prop above - the property is now called 'projects'. 
export const query = graphql`
query ProjectsPage {
  projects: allMarkdownRemark {
    nodes {
      frontmatter {
        slug
        stack
        title
        thumb {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      id
    }
  }
  contact: site {
    siteMetadata {
      contact
    }
  }
}
`
