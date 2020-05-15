import React from 'react'
import NextHead from 'next/head'
import Head from '../../components/head'
import Layout from '../../components/layout'
import Footer from '../../components/footer'
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

  componentDidMount() {}

  render() {
    return (
      <>
        <NextHead>
          <link
            rel="stylesheet"
            href="/static/highlight/styles/monokai-sublime.css"
          />
          <title>一只写代码的熊猫 Blog</title>
        </NextHead>
        <Head index={0} />
        <Layout className={styles.list}>
          <div className={styles.content}>
            <div className="children">
              <h2 id="menu_0">申请免费HTTPS证书参考文章</h2>
              <pre>
                <code
                  dangerouslySetInnerHTML={{
                    __html: `  const request = require(&#39;request&#39;)
  const appid = &#39;&#39;
  const appscrect = &#39;&#39;
  request({
      url: \`https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&amp;appid=\${appid}&amp;secret=\${appscrect}\`,
      method: &#39;GET&#39;,
    }, async function(err, response, body) {
        body = JSON.parse(body)
        let access_token = body.access_token
        console.log(&#39;access_token&#39;,access_token)
        request({
            url:\`https://api.weixin.qq.com/cgi-bin/qrcode/create?access_token=\` + access_token,
            method:&#39;POST&#39;,
            json: true,
            headers:{
                &#39;Content-Type&#39;:&#39;application/x-www-form-urlencoded;charset=utf-8&#39;
            },
            body:JSON.stringify({&quot;expire_seconds&quot;: 604800, &quot;action_name&quot;: &quot;QR_SCENE&quot;, &quot;action_info&quot;: {&quot;scene&quot;: {&quot;scene_id&quot;: 123}}})
        },async function(err,resposne,body){
            console.log(&#39;get QRCode&#39;,body)
        })
    })`,
                  }}></code>
              </pre>
              <p>
                <a href="https://www.yodfz.com/detail/21/nginx%E9%85%8D%E7%BD%AELet's%20Encrypt%20https%E8%AF%81%E4%B9%A6%E4%B8%8E%E5%BC%80%E5%90%AFhttp2%E5%8D%8F%E8%AE%AE.html">
                  https://www.yodfz.com/detail/21/nginx%E9%85%8D%E7%BD%AELet's%20Encrypt%20https%E8%AF%81%E4%B9%A6%E4%B8%8E%E5%BC%80%E5%90%AFhttp2%E5%8D%8F%E8%AE%AE.html
                </a>
              </p>
              <h2 id="menu_1">正文</h2>
              <p>
                首先微信小程序官方文档中已经提及到，服务器TLS版本必须支持 1.2
                （启用1.2，禁用1.1和1.0等低版本），所以你需要确保自己的tls版本。
                如果还是有问题就按照以下方法进行。
              </p>
              <p>
                域名已经备案，后台已经配置，但是手机预览，还是请求失败，
                PC端是可以请求数据出来的
                新版开发者工具增加了https检查功能；可使用此功能直接检查排查ssl协议版本问题：
              </p>
              <p>可能原因：</p>
              <p>0：后台域名没有配置</p>
              <p>1：域名不支持https</p>
              <p>2：没有重启工具；</p>
              <p>
                3：域名没有备案，或是备案后不足24小时；备案未生效；感谢@小树提供的案例
              </p>
              <p>4：ssl协议有问题：具体请参考本文：</p>
              <blockquote>
                <p>
                  微信小程序开发SSL证书配置，解决request fail问题 解决方法
                  1、Geotrust先检查下你的站点。把一些常规的问题解决掉，比如中级证书没装，等等问题。
                  2、微信支持，且只支持ssl_protocols
                  TLSv1.2及以上版本;所以，你需要把SSL V2，SSL V3这些协议都删掉
                  3、加密方式ssl_ciphers AES128+EECDH:AES128+EDH:!aNULL;
                </p>
              </blockquote>
              <p>
                免费的证书可以到startssl.com，或阿里云 建议到阿里云。。。
                微信小程序免费SSL证书https、TLS版本问题的解决方案
              </p>
              <p>4：参考这个链接：</p>
              <blockquote>
                <p>
                  问题描述：https接口使用的是Symantec的免费DV证书，目前微信小程序在Android手机中显示正常，可是在iOS中出现异常”发生了SSL错误，无法建立与该服务器的安全连接。“
                  参考答案： 原因是因为SSL3.0被弃用了，而服务器需要把SSL关闭
                  启用TLS1.2
                  <a href="https://www.sslshopper.com/article-how-to-disable-ssl-2.0-in-iis-7.html">
                    https://www.sslshopper.com/article-how-to-disable-ssl-2.0-in-iis-7.html
                  </a>
                </p>
              </blockquote>
              <p>
                5：证书常见问题：参考
                <a href="https://pay.weixin.qq.com/wiki/doc/api/jsapi.php?chapter=10_4">
                  https://pay.weixin.qq.com/wiki/doc/api/jsapi.php?chapter=10_4
                </a>
              </p>
              <blockquote>
                <p>
                  （1）证书受信任的问题
                  部分国内签发的SSL证书，在Android上不受信任，推荐GeoTrust；
                </p>
              </blockquote>
              <p>
                {' '}
                （2）如果页面有动静分离，静态资源使用独立域名的话，也需要为该域名申请证书；
              </p>
              <p>
                {' '}
                （3）android低版本不支持SNI扩展，受此限制，一台服务器只能部署一个数字证书；
              </p>
              <p>
                如果有其他可能性，请在本帖内回复以给其他同学参考；如果以上不能解决你的问题，也请回复在底下
              </p>
              <p>
                6：同时测试ios和安卓，假如有一方可以，一方不行，则是证书问题，请选用受认可的证书
                检测地址：
                <a href="https://www.qcloud.com/product/ssl.html#userDefined10">
                  https://www.qcloud.com/product/ssl.html#userDefined10
                </a>
              </p>
              <p>
                配置指引地址：
                <a href="https://www.qcloud.com/doc/product/400/6973">
                  https://www.qcloud.com/doc/product/400/6973
                </a>
                1.Nginx 证书配置 2.Apache 证书配置 3.Tomcat 证书配置
              </p>
              <p>7：手机提示不能建立ssl安全连接可能的解决方法</p>
              <p>
                8：@”沉沦自己“的案例：证书是赛门铁克的，
                少了一份证书，配置的证书不是小程序https地址的证书，然后配置了一个中级证书，就ok了
              </p>
              <p>
                9：可以请求数据，真机预览无法请求服务器数据：感谢@Zero
                同学提供的此解决方案 检测地址：
                <a href="https://www.myssl.cn/tools/check-server-cert.html">
                  https://www.myssl.cn/tools/check-server-cert.html
                </a>
              </p>
              <p>10：https端口使用8443时无法访问，需改成443</p>
              <p>11：wx.request 请求参数method的value要大写(例如:GET)。</p>
              <p>12: 中间证书相关问题</p>
              <p></p>
              <details>
                <p></p>
                <p></p>
                <summary>服务器推送中间证书</summary>
                <p></p>
                <p></p>
                <p>
                  服务器推送中间证书，就是将中间证书，预先部署在服务器上，服务器在发送证书的同时，将中间证书一起发给客户端。我们部署证书，首先就要找到颁发服务器证书的中间证书，可以用中间证书下载工具
                  。 如果我们在服务器上不主动推送中间证书，可能会造成的问题
                  Android手机无法自动下载中间证书，造成验证出错，提示证书不可信，无法建立可信连接。
                  Java客户端无法自动下载中间证书，验证出错，可信连接失败。
                  内网电脑，在禁止公网的情况下，无法自动下载中间证书，验证出错，可信连接失败。
                  虽然我们不部署中间证书，在大多数情况，我们依然可以建立可信的HTTPS连接，但为了避免以上这些情况，我们必须在服务器上部署中间证书。
                </p>
                <p>
                  所以，为了确保我们在各种环境下都能建立可信的HTTPS连接，我们应该尽量做到以下几点：
                  1、必须在服务器上部署正确的中间证书，以确保各类浏览器都能获得完整的证书链，完成验证。
                </p>
                <p>
                  2、选择可靠的SSL服务商，有些小的CA机构，因为各种原因，造成他们的中间证书下载URL被禁止访问，即使我们在服务器上部署了中间证书，但也可能存在某种不可测的风险，这是我们应该尽力避免的。
                </p>
                <p>
                  3、中间证书往往定期会更新，所以在证书续费或者重新签发后，需要检查是否更换过中间证书。
                </p>
                <p></p>
              </details>
              ssl证书基础知识： 通常来说，SSL
              证书分为三大类，他们的安全性是递增的，当然价格和安全系数成正比。
              <p></p>
              <p>
                DV （Domain Validation Certificate） DV
                证书适合个人网站使用，申请证书时，CA
                只验证域名信息。几分钟之内就能签发。
              </p>
              <p>
                OV （ Organization Validation Certificate） OV
                证书需要认证公司的信息。1-2天签发。
              </p>
              <p>
                EV （ Extended Validation Certificate） EV
                证书的认证最为严格，一般会要求提供纸质材料。签发时间也较久。
              </p>
              <p>目前提供免费证书的云：</p>
              <p>
                1：腾讯云：
                <a href="https://www.qcloud.com/product/ssl">
                  https://www.qcloud.com/product/ssl
                </a>
              </p>
              <p>
                2：阿里云：
                <a href="https://common-buy.aliyun.com/?commodityCode=cas#/buy">
                  https://common-buy.aliyun.com/?commodityCode=cas#/buy
                </a>
              </p>
              <p>
                3：七牛云：
                <a href="https://support.qiniu.com/hc/kb/article/223541">
                  https://support.qiniu.com/hc/kb/article/223541
                </a>
              </p>
              <p>
                常见的ssl证书检测地址： 1：
                <a href="https://www.qcloud.com/product/ssl.html#userDefined10">
                  https://www.qcloud.com/product/ssl.html#userDefined10
                </a>
                此链接用户排查域名是否支持tsl1.2，证书与域名是否匹配；必须全绿才算通过；
              </p>
              <p>
                2：
                <a href="https://www.myssl.cn/tools/check-server-cert.html">
                  https://www.myssl.cn/tools/check-server-cert.html
                </a>
                此链接主要用于排查是否缺少中间证书，必须全绿才算通过；
              </p>
              <p>
                3:{' '}
                <a href="https://csr.chinassl.net/ssl-checker.html">
                  https://csr.chinassl.net/ssl-checker.html
                </a>
              </p>
              <p>
                4:{' '}
                <a href="https://www.ssllabs.com/ssltest/">
                  https://www.ssllabs.com/ssltest/
                </a>
                这个网站可以做握手仿真可以看哪些手机端版本，跟浏览器版本无法与https正常握手
              </p>
              <p>
                5:{' '}
                <a href="https://www.htbridge.com/ssl/">
                  https://www.htbridge.com/ssl/
                </a>
              </p>
              <p>常见问题的可能性：</p>
              <p>1：服务器不支持tsl1.0,1.1,1.2，导致提升，tsl需支持1.2；</p>
              <p>2：服务器缺少中间证书，需要安装中间证书；</p>
              <p>
                3：证书不受信任：苹果支持的证书列表：
                <a href="https://support.apple.com/zh-cn/HT204132">
                  https://support.apple.com/zh-cn/HT204132
                </a>
              </p>
              <p>4: 禁止无 sni 支持的客户端的访问</p>
              <p>如何排除是否还有证书问题：</p>
              <p>1：至少使用以上两个检测链接，全部通过；</p>
              <p>
                2：使用微信浏览器打开接口，看是否有数据，微信浏览器内有数据，则可排除是ssl证书问题，证明证书是受微信浏览器
                认可的；
              </p>
              <p>
                3：在小程序内打印接口数据，假如可以打印出数据，但是没有渲染，则可排除是证书问题，请查看其它问题；
              </p>
              <p>其他问题:</p>
              <h2 id="menu_2">
                ssl Server sent fatal alert: handshake_failure
              </h2>
              <ol>
                <li>
                  <a href="http://stackoverflow.com/questions/32208244/sslhandshakeexception-received-fatal-alert-handshake-failure-after-java-6-8">
                    http://stackoverflow.com/questions/32208244/sslhandshakeexception-received-fatal-alert-handshake-failure-after-java-6-8
                  </a>
                </li>
                <li>
                  <a href="http://www.cnblogs.com/walkerwang/p/5149189.html">
                    http://www.cnblogs.com/walkerwang/p/5149189.html
                  </a>
                </li>
                <li>
                  <a href="http://www.xiaotanzhu.com/2016/07/30/use-rc4-in-tencent-mail.html">
                    http://www.xiaotanzhu.com/2016/07/30/use-rc4-in-tencent-mail.html
                  </a>
                </li>
                <li>
                  <a href="http://www.itnose.net/detail/6703553.html">
                    http://www.itnose.net/detail/6703553.html
                  </a>
                </li>
              </ol>
              <p>参考资料</p>
              <ol>
                <li>
                  <a href="http://www.ruanyifeng.com/blog/2014/09/illustration-ssl.html">
                    http://www.ruanyifeng.com/blog/2014/09/illustration-ssl.html
                  </a>{' '}
                  图解SSL/TLS协议
                </li>
                <li>
                  <a href="http://www.ruanyifeng.com/blog/2014/02/ssl_tls.html">
                    http://www.ruanyifeng.com/blog/2014/02/ssl_tls.html
                  </a>{' '}
                  SSL/TLS协议运行机制的概述
                </li>
              </ol>
              <div>
                <div>
                  <img src="/static/images/zfb.jpg" alt="" />
                </div>
                <div></div>
              </div>
            </div>
            <div className="menuIndex wrapper">
              <a
                href="#menu_0"
                title="申请免费HTTPS证书参考文章"
                className="articleMenuList padding2">
                申请免费HTTPS证书参考文章
              </a>
              <a
                href="#menu_1"
                title="正文"
                className="articleMenuList padding2">
                正文
              </a>
              <a
                href="#menu_2"
                title="ssl Server sent fatal alert: handshake_failure"
                className="articleMenuList padding2">
                ssl Server sent fatal alert: handshake_failure
              </a>
            </div>
          </div>
        </Layout>
        <Footer />
      </>
    )
  }
}
