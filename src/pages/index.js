import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Hero from '../components/herosection/Hero'
import Image from '../components/image'

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Hero/>
    <Image/>
  </Layout>
)

export default IndexPage
