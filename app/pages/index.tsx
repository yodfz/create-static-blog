import React from 'react'
import NextHead from 'next/head'
import Head from '../components/head'

export default class Index extends React.PureComponent {
  constructor(props) {
    super(props)
  }

  static async getInitialProps() {
    const articleData = await fetch(
      'https://www.yodfz.com/api/v1/article'
    ).then(res => res.json())
    return { article: articleData }
  }

  render() {
    return (
      <>
        <NextHead>
          <title>一只写代码的熊猫 Blog</title>
        </NextHead>
        <Head index={0} />
        
      </>
    )
  }
}
