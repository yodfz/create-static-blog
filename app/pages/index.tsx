import React from 'react'
import NextHead from 'next/head'
import Head from '../components/head'
import MyInfoCard from '../components/wiggets/MyInfoCard'
import Layout, { LayoutCol } from '../components/layout'
import ListItem from '../components/listItem'
import Footer from '../components/footer'
import styles from './index.less'

export default class Index extends React.PureComponent {
  constructor(props) {
    super(props)
  }

  // static async getInitialProps() {
  //   const articleData = await fetch(
  //     'https://www.yodfz.com/api/v1/article'
  //   ).then(res => res.json())
  //   return { article: articleData }
  // }

  render() {
    return (
      <>
        <NextHead>
          <title>一只写代码的熊猫 Blog</title>
        </NextHead>
        <Head index={0} />
        <Layout className={styles.list}>
          <LayoutCol className={styles.layoutLeft}>
            <ListItem />
          </LayoutCol>
          <LayoutCol className={styles.layoutRight}>
            <MyInfoCard />
            <div>1</div>
            <div>2</div>
            <div>=3</div>
            <div>4</div>
            <div>1</div>
            <div>1</div>
            <div>1</div>
            <div>1</div>
          </LayoutCol>
        </Layout>
        <Footer />
      </>
    )
  }
}
