import React from 'react';
import Layout from '@templates/Layout'
import Section from '../components/Section'
import BlogPost from '../components/BlogPost'
import { graphql } from 'gatsby'

export default (props) => {
    console.log(props);
    const lang = props.pageContext.intl.language;
    const posts = props.data.blogs.edges
        .filter(edge => edge.node.fileAbsolutePath.indexOf(`${lang}.md`) !== -1)
        .map(edge => {
            return edge.node.frontmatter;
        });

    return (
        <Layout>
            <Section>
                <h1>Blogs</h1>
                <div className="row pt-5">
                    {posts.map((post, i) => (
                        <div key={i} className="col-4">
                            <BlogPost {...post} />
                        </div>
                    ))}
                </div>
            </Section>
        </Layout>
    );
}

export const query = graphql`query {
    site: site {
        siteMetadata {
            title,
            email,
            name, 
            description,
            domain
        }
    }
    blogs:  allMarkdownRemark(
        sort: { order: ASC, fields: [frontmatter___date] }  
        limit: 1000
      )  {
        edges {
          node {
            fileAbsolutePath
            frontmatter {
                date
                title
                description
                image,
                slug
            }
          }
        }
      }
}`;