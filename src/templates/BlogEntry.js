import React from "react"
import Layout from '@templates/Layout';
import SEO from '@components/SEO';
import Section from '@components/Section';

export default (props) => {
  const {html, frontmatter} = props.data.markdownRemark;
  const {site} = props.data;
  const {title, description} = frontmatter;

  return (
    <Layout {...site}>
      <SEO {...frontmatter} />
      <Section>
        <h2>{title}</h2>
        <p>{description}</p>
        <div dangerouslySetInnerHTML={{ __html: html }}></div>
      </Section>
      <Section color="dark">
        <h3>Comments</h3>
      </Section>
    </Layout>
  );
}

export const pageQuery = graphql`
  query($slug: String!) {
    site {
      siteMetadata {
        title,
        email,
        name, 
        description,
        domain
      }
    }
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
      }
    }
  }
`