import React from 'react'
import Item from './item'
import styles from './index.less'

const data = [
  {
    idx: 54,
    title: 'webpack优化-持久化缓存',
    description: null,
    content:
      '# 优化原理\n\n优化webpack打包速度一直是所有前端开发人员的痛点，为了加快打包编译速度，出现了各种技术进行优化。\n\n其中缓存技术是一种能大幅度提高打包速度的优化手段，使得整体打包时间大大缩短。\n\n\n\n# webpack babel-loader cache原理\n\nbabel-loader在打包的时候可以使用 cache技术，但是babel-loader的cache必须经过一次编译，才会将索引的文件与文件编译结果缓存在内存中。\n\n在后续的编译过程中，如果发现索引的文件已经缓存过了，那么会直接引用已经编译缓存的结果。\n\n缺点：必须要打包一次\n\n\n\n# HardSourceWebpackPlugin 插件\n\n持久化缓存结果至硬盘上，这个插件的机制是，第一次编译文件的时候，采用 文件的 hashCode 标记 结果。将编译结果与hashCode关联起来。\n\n第二次编译文件的时候，首先加载本地缓存结果（SSD非常快）。然后在进入正常编译环节的时候，插件会将需要编译的文件再次计算hashCode，如果此Code在缓存库中已经存在了，那么将直接跳过编译环节，直接输出编译结果。\n\n这里有几个问题解惑一下。\n\nimport引入的文件问题，其实缓存的结果并不是最终打包结果，只是babel-loder编译之后的结果集，在最终的打包（合并编译结果）情况下，如果引入的文件变动了，那么这个输出文件会从缓存中加载已编译的结果，再次重新打包写入dist，因为这个输出文件并没有变动，变动的仅仅是被引入文件。\n\n\n\n如何使用？\n\n```sh\nnpm install hard-source-webpack-plugin --save\n```\n\n在webpack.config.js插件字段中加入\n\n```js\nplugins: [\n        new HardSourceWebpackPlugin(),\n  ...\n  ]\n```\n\n\n\n# webpack 5\n\nHardSourceWebpackPlugin插件带来的效果是显著的，现在这个功能点包含webpack5中。详情可通过https://webpack.js.org/configuration/other-options/#cache 查看。\n\n当设置 cache.type: "filesystem" 时，webpack 会在内部以分层方式启用文件系统缓存和内存缓存。优先级为\n\n内存缓存->文件缓存->即时编译',
    tag: null,
    category: null,
    viewCount: 18,
    createDate: '2020-05-06T02:39:55.000Z',
    createdAt: '2020-05-06T02:39:55.073Z',
    updatedAt: '2020-05-14T07:58:43.562Z',
  },
  {
    idx: 53,
    title: '初识https',
    description: null,
    content:
      '**为什么要用https?**\n\nhttps 跟 http的区别，其实就是一个加密跟一个非加密的区别。我们为什么要加密呢？因为我们传输的内容在http协议上是全明文的，非常容易被其他人看到传输的内容(典型的如ARP欺骗)，这样的话在网页中的登录账号、登录密码等等信息会暴露无疑。\n\n而https协议将会加密传输的内容，就算被其他人看到了也无所谓，因为没有密钥是无法看到中间的内容的。\n\n\n\n**https涉及的加密算法**\n\n1. 对称加密\n\n>  对称加密就是加密的双方用的加密解密密钥都是同一个，加密比较大的数据的时候有加密快、效率高、计算量小的优势。如AES、DES。\n\n2. 非对称加密\n\n> 非对称加密拥有一对由私钥、公钥组成的密钥。公私钥加密的内容只能由对方解开，私钥由自己保管，公钥发给大家使用。这个加密的优势在于安全，因为密钥都是相对的。但是缺点显而易见就是慢。\n\n\n\n**http如何保证我们的传输安全**\n\n首先，我们从服务端上取得一个密码本（公钥+证书CA）。\n\n> 为什么需要证书呢？因为需要确认给我们的密码本是不是正规的。在我们的浏览器中内置了对这些证书的验证(数字签名)，防止被中间人篡改。\n\n接着我们在客户端上，使用公钥加密一段内容`（随机的对称加密密钥）`。然后将这段加密内容发送给服务端。\n\n服务端接收到了这段内容之后，使用私钥解密出`（随机的对称加密密钥）`。\n\n哈，那这样双方都拥有了一个`对称加密密钥`了，在上面，我们也了解到对称加密算法，在加密大的数据时候效率非常高。\n\n服务端使用`对称加密密钥`加密需要传输的内容，而客户端使用`对称加密密钥`解密服务端传递过来的内容。\n\n在这样的环境下，传输的内容得到了保证。从而防止我们传输的内容被其他人查阅与篡改。\n\n![Alt text](http://www.yodfz.com/upload/20200318/1584546026000.png)\n\n**小知识点**\n\n1. 用户可以自行导入根证书，从而保证私有签发证书有效性。\n2. 中间人攻击就是篡改服务端发回的证书，从而达到解密客户端发出的内容。\n3. 有部分手机在https通讯的时候对证书警告，是因为没有预置根证书。\n4. https本身还是基于http协议，只是提供了TLS/SSL协议在表示层进行了安全校验。\n\n',
    tag: null,
    category: null,
    viewCount: 115,
    createDate: '2020-03-18T15:40:29.000Z',
    createdAt: '2020-03-18T15:40:29.079Z',
    updatedAt: '2020-05-13T09:24:16.275Z',
  },
  {
    idx: 52,
    title: 'git内部文件保存原理浅析',
    description: null,
    content:
      '[TOC]\n\n> 简介:本教程旨在让你可以初步了解git内部是如何运作的，仅仅灌鸭模式让您能快速的了解git内部。如要发掘更多的细节、更多好玩的东西，建议多看git教程。推荐pro git这本书，此书可以在git官网下载。\n\n# 1. 基本入门\n\n## 1.1 git目录构成\n\n![Alt text](http://www.yodfz.com/upload/20200301/1583066678000.png)\n\nHEAD:当前被检出的分支指向一个refs hash code.\n\nbranches: 类似refs功能，新版已经不再使用了，废弃此目录。\n\nconfig:包含当前工作目录的配置信息，比如我们的git账号、密码、用户信息之类的。\n\ndescription: 供gitweb使用\n\nhooks:放置 服务端或者客户端的钩子脚本\n\ninfo:包含非记录在.gitignore内的排除文件\n\nobjects：git的数据仓库\n\nrefs：记录每个提交所指向对应版本文件的hash\n\nindex:暂存区内容\n\n## 1.2 hash code如何生成\n\ngit的hash code,是通过将当前文件内容与头部信息在一起做`SHA-1`校验运算得出来的校验和。\n\n### 1.2.1 什么是头部信息?\n\ngit 首先取得文件类型，然后添加一个空格，随后是数据内容长度，最后一个是空字节(null byte)。\n\n这就是一个git头部信息。\n![Alt text](http://www.yodfz.com/upload/20200301/1583066717000.png)\n\n### 1.2.2 什么是当前文件内容?\n\n就是当前修改的文件内容，不同的内容有不同的信息。git有三种存储类型`blob`,`tree`,`commit`。比如`blob`就是整体的文件内容。`tree`则是包含提交的文件列表。`commit`就是提交信息。\n\n\n\n# 2. 小试牛刀，看看git保存我们的提交的\n\n我们在`.git`目录中查看所有文件\n\n![Alt text](http://www.yodfz.com/upload/20200301/1583066743000.png)\n\n可以看到我们是没有index目录的。现在我们回到上一层，创建一个`test.md`文件，然后写点内容进去。\n\n![Alt text](http://www.yodfz.com/upload/20200301/1583066761000.png)\n\n接着，我们运行`git add .`将文件添加至暂存区。接着，我们来查看`.git`目录的文件与文件夹。\n![Alt text](http://www.yodfz.com/upload/20200301/1583066785000.png)\n\n可以看到，git创建了index文件。\n\n运行以下命令，来看看index中都包含了什么内容:\n![Alt text](http://www.yodfz.com/upload/20200301/1583066803000.png)\n\n一共运行了两个命令，第一个 `git ls-files --stage`是查看暂存区的文件内容，第二个`git cat-file -t e27963`是查看，符合这个hash值的文件类型。知道类型之后，可以使用这个命令来查看内容。\n\n![Alt text](http://www.yodfz.com/upload/20200301/1583066821000.png)\n\n可以看到，这个hash值对应的文件内容就是我输入的内容。\n\n现在我们`commit`保存修改。\n\n这个时候，`objects`文件夹中就出现了hash开头的文件夹，与对应的内容。\n\n![Alt text](http://www.yodfz.com/upload/20200301/1583066840000.png)\n\n通过`git cat-file`可以查看对应hash值中的内容。\n\n![Alt text](http://www.yodfz.com/upload/20200301/1583066859000.png)\n\n要注意一个点，就是 objects下的文件夹，后续都是hash code.比如 `be/49bf`,那么他的hash code就是`be49bf`(**“SHA-1 值的前两个字符作为子目录名称，后 38 个字符则作为子目录内文件的名称”**)。\n\n![Alt text](http://www.yodfz.com/upload/20200301/1583066878000.png)\n\n可以看到，这些hash结构的内容，对应的，分别是当前提交内容包含哪些文件、文件内容、commit信息。\n\n## 2.1 git是如何存储文件的？\n\n我对`test.md`文件末尾追加了一些内容。现在我们来看看，git存储中,test.md文件是多少大小。\n\n![Alt text](http://www.yodfz.com/upload/20200301/1583066901000.png)\n\n通过上图发现，最新提交的文件在git存储里面是`35`字节。那么，之前的版本是多少呢？我们来看看。\n\n![Alt text](http://www.yodfz.com/upload/20200301/1583066922000.png)\n\n是`17`个字节。由此，我们可以得出一个结论，所有的文件，每次修改提交在git中都是一个全新的文件。\n\n那么由此带来的一个问题就是，按照这样来说的话，我们的项目目录不是会很大？\n\ngit开发者也想到了这个问题，所以，我们在git push的时候是否会发现，有类似下面的信息：\n\n![Alt text](http://www.yodfz.com/upload/20200301/1583066948000.png)\n\n这个是git帮我们做了压缩。对应的git命令是`git gc`。我们来运行一下这个命令看看。\n\n![Alt text](http://www.yodfz.com/upload/20200301/1583066970000.png)\n\n可以看到，运行命令之后，`objects`下的内容都不见了。随之而来则是生成了`idx`,`pack`文件。\n\n新创建的**`包文件`**和**`索引文件`**。 包文件包含了刚才从文件系统中移除的所有对象的内容。 索引文件包含了包文件的偏移信息，我们通过索引文件就可以快速定位任意一个指定对象。\n\n使用`git verify-pack -v`来查看当前索引文件中包含了哪些内容\n\n![Alt text](http://www.yodfz.com/upload/20200301/1583066988000.png)\n\n由于前几次的文件过小，git还是采用了完全快照模式。所以进行了多次修改，我尝试将这个文件变大之后，现在我们可以看到 `e0ffd0c1`这个提交与`49bfbc`这个提交。git采用了差异保存模式保存文件。\n\ngit之所以让原始版本使用差异模式保存，是为了能快速访问文件的最新版本。\n\n\n\n# 3. git存储类型\n\n## 3.1 tree\n\n树对象，是保存文件内容变更的简化模型。通过下图可以发现，一个文件夹对应一棵树，如果包含了另外一个文件将，那么，将通过tree hash code 来访问。简单的说，就是tree仅有一层真实文件目录，文件夹都是通过引用来访问。\n\ntree由不同版本的文件组成。他们看起来像这样的结构:\n\n![Alt text](http://www.yodfz.com/upload/20200301/1583067008000.png)\n\n## 3.2 blob\n\nblob对应的都是实体文件信息。hash指定blob的文件名，存储在objects中，属于最原子结构。\n\n## 3.3 commit\n\n每一个commit信息，包含了指向的某个tree节点，父`commit`节点，提交人，提交信息等。\n![Alt text](http://www.yodfz.com/upload/20200301/1583067035000.png)\n\n![Alt text](http://www.yodfz.com/upload/20200301/1583067071000.png)',
    tag: null,
    category: null,
    viewCount: 178,
    createDate: '2020-03-01T12:51:43.000Z',
    createdAt: '2020-03-01T12:51:43.099Z',
    updatedAt: '2020-05-12T23:42:41.243Z',
  },
  {
    idx: 51,
    title: '远程开发新手向入门了解',
    description: null,
    content:
      '# 解决的痛点 \n\n由于迭代的业务发展，会需要将系统进行拆分以便**快速**迭代开发。另外，开发机相对鶸的硬件条件，使得对应多个项目时力不从心。开发的过程中是否会遇到内存爆涨，CPU暴涨，造成开发效率降低。\n\n所以我们寄希望于使用性能更强大的台式机或服务器来解决我们这个痛点。\n\n\n\n# 远程开发模式\n\n### 1. VSCode Remote SSH\n\nRemote - SSH模式的原理是在服务器上运行VSCode,而开发机仅仅做编辑与展示功能。并且vscode直接集成了远程ssh环境。并且VSCode支持映射远程端口至本地。\n\n\n\n### 2. Centos SMB 模式\n\n在远程服务器上部署SMB服务，将远程文件夹映射为本地文件夹，使用开发工具直接在共享文件夹中进行操作。文件将会自动同步至远程服务器。\n\n\n\n### 3. Webstorm Deployment SFTP 模式\n\n使用Webstorm自带的开发模式，使用SFTP协议同步文件至远程服务器。\n\n\n\n### 4. 部署 web 编辑器至开发服务器\n\n可以使用code-server或者其他在线web开发工具，部署在开发服务器上，然后通过web网页打开开发服务器上的网址，使用浏览器编辑代码。\n\n\n\n### 5. 使用 rsync 同步目录至开发服务器\n\n使用rsync同步本地文件夹的文件到开发服务器上，仅仅将开发服务器作为一个编译运行环境。\n\n\n\n# 开发服务器\n\n### 1. PM2直接开启服务\n\n使用PM2管理器开启服务，但是端口唯一，由于无法修改端口号造成开启相同服务的时候，需要手动修改端口号以避免端口侵占。\n\n\n\n### 2. Docker直接运行开发目录\n\n基于Node 12版本的Docker包，在外部指定映射端口号，直接使用Docker启动需要调试的开发目录，通过外部映射端口号或nginx反向代理进行访问。\n\n开发者可以在自己的服务器上假设nginx，通过nginx反向代理服务指定开发环境为开发服务器上某个端口号。可以联结各个子系统分支。还可以通过切换反代的目的地进行各种系统切换。\n\n\n\n优势:独立项目独立docker，可以自行重启服务，不同分支可以共存，并且随时切换分支。\n\n\n\n### 3. Docker 创建一个虚拟环境运行\n\n基于ubuntu 或 centos 创建一个docker虚拟机,将各个开发目录映射至虚拟机中，然后在虚拟机里面启动pm2管理各个子系统。\n\n优势:独立ip，作为一个独立机器运行在网络上，对于开发者来说就是一台独立服务器。\n\n\n\n\n\n# 方案选型 \n\n## 1. 开发机方案\n\n开发工具不限，在开发服务器上部署SMB服务，开放共享，支持共享访问与vscode的remote ssh 方式接入开发服务器开发。\n\n\n\n## 2. 开发服务器方案\n\n1. 首先部署SMB服务\n2. 开启SSH证书验证登录\n3. 设置SSH服务心跳保持链接\n4. 设定docker运行开发文件夹\n5. 初始化docker node包\n6. 使用开发服务器方案2，直接使用Docker运行开发目录\n\n\n\n### 为什么选择 开发服务方案2?\n\n单独创建一个虚拟环境的确可以更好的分割系统，但是**方案2**，可以直接使用脚本起一个新服务。\n\n独立的虚拟环境，需要自己进去重新初始化各种环境，个人认为，选型需要能快速的部署，快速开发。\n\n![image-20200116165408723](assets/image-20200116165408723.png)',
    tag: null,
    category: null,
    viewCount: 279,
    createDate: '2020-01-21T01:50:17.000Z',
    createdAt: '2020-01-21T01:50:17.795Z',
    updatedAt: '2020-05-14T01:41:43.711Z',
  },
  {
    idx: 50,
    title: '前端装饰器,AOP的使用',
    description: null,
    content:
      "# 什么是装饰器？\n\n## 了解AOP\n\n在学习js中的装饰器之间，我们需要了解`AOP`(面向切面编程)编程思想。\n\nAOP是一种可以通过预编译方式和运行期动态代理实现在不修改源代码的情况下给程序动态统一添加功能的一种技术。AOP实际是GoF设计模式的延续，设计模式孜孜不倦追求的是调用者和被调用者之间的解耦,提高代码的灵活性和可扩展性，AOP可以说也是这种目标的一种实现。\n\n我们简单的举个例子来说明AOP。\n\n![Alt text](http://www.yodfz.com/upload/20190717/1563350673000.png)\n\n这两个流程中，`验证用户`是共同的逻辑功能。那么在这儿，大家可能会想到抽取这个功能的代码，做成公共方法以便调用。\n\n但是，做成公共方法调用的话，是侵入你的主流程里面的，非常的不雅观，也会混淆你的控制流程。在这儿，`AOP`就有了用武之地。\n\n在一整个流程中，将`验证用户`这个功能切出来。而其他地方需要使用，只要将东西切进去即可。\n\n\n\n## JavaScript中的AOP:装饰Decorator\n\n在前端JS编程中，我们可以采用Decorator装饰器，来实现AOP编程。大家也经常在React中，使用`React-Redux`的装饰器，来辅助我们建立`HOC`高阶函数，连接Redux的Store。\n\n在进行实战之前，我们需要明确一个点就是：`装饰器对类的行为的改变，是代码编译时发生的，而不是在运行时。`\n\n\n\n## 装饰器使用\n\n```js\nclass index {\n  say () {\n    console.log('say hello!')\n  }\n}\n```\n\n我们先建立一个简单的类，这个类的作用，就是在执行`say()`的时候，打印出`say hello`。但是，在说话前，我们需要站起来。那怎么做？\n\n```js\nclass index {\n  say () {\n \t\tconsole.log('站起来')\n    console.log('say hello!')\n  }\n}\n```\n\n在使用装饰器之前，我们需要侵入主流程，将代码写入。而现在，我们有了装饰器这一个工具。\n\n```js\nclass index {\n  @up\n  say () {\n    console.log('say hello!')\n  }\n}\nfunction up (target,name,descriptor) {\n  const oldfn = target.descriptor.value\n  target.descriptor.value = function () {\n    console.log('站起来')\n    oldfn.call(this)\n  }\n  return target\n}\n```\n\n以上代码可以通过https://babeljs.io/repl编译后执行。通过编译后，我们执行以下代码:\n\n```js\nvar id = new index()\nid.say()\n```\n\n这个时候你会看到如下图:\n\n![Alt text](http://www.yodfz.com/upload/20190717/1563350688000.png)\n\n成功的为`say`方法装饰了一个`站起来`。\n\n\n\n至此，一个简单的装饰器范例已经完成。大家可以通过这种方式修改自己的代码，使自己的代码更加解耦。\n\n\n\n# 参考文章\n\nECMAScript 6 入门:http://es6.ruanyifeng.com/#docs/decorator\n\nhttps://blog.csdn.net/yanquan345/article/details/19760027",
    tag: null,
    category: null,
    viewCount: 1388,
    createDate: '2019-07-17T08:04:53.000Z',
    createdAt: '2019-07-17T08:04:53.278Z',
    updatedAt: '2020-05-14T09:09:06.726Z',
  },
  {
    idx: 49,
    title: '微信小程序 define is not defined？',
    description: null,
    content:
      '1. defined is not defined\n\n   > 1. 尝试更新开发者工具是否能解决\n   > 2. 查看当前网络是否有代理之类的，关闭，重启开发工具\n   > 3. 修改调试基础库版本 尝试启用 2.4.4\n\t > 4. `module.exports = {};`检查这种导出，末尾是否未添加分号...\n\n2. 长时间loading,无法请求数据\n\n   > 打开右上角调试模式，原因:网站链接非https协议，或者是不支持的https协议\n\n3. webview打开公众号文章，图片无法加载\n\n   > 公众号需要与小程序绑定在一起，并且图片地址需要在安全域名下\n',
    tag: null,
    category: null,
    viewCount: 5966,
    createDate: '2019-04-29T02:29:08.000Z',
    createdAt: '2019-04-29T02:29:08.354Z',
    updatedAt: '2020-05-14T01:44:35.719Z',
  },
  {
    idx: 48,
    title: '如何判断小程序全面屏',
    description: null,
    content:
      "由于苹果全面屏手机会在底部加屏蔽区，造成这些手机总是有问题。\n我们一般通过检查用户的设备类型，在白名单中查找，确定是否是全面屏手机。\n```js\nfunction check() {\n  const res = wx.getSystemInfoSync();\n  const model = res.model.toLowerCase();\n  const addHeightList = ['iphone x', 'iphone xr', 'iphone 11', 'iphone xs'];\n  let isAddHeight = false;\n  addHeightList.forEach((p) => {\n    if (model.indexOf(p) > -1) {\n      isAddHeight = true;\n    }\n  });\n  return isAddHeight;\n};\n```",
    tag: null,
    category: null,
    viewCount: 1514,
    createDate: '2019-04-26T06:43:44.000Z',
    createdAt: '2019-04-26T06:43:44.522Z',
    updatedAt: '2020-05-14T09:42:51.639Z',
  },
  {
    idx: 47,
    title: '微信支付之后的发送模版消息',
    description: null,
    content:
      '使用支付之后的prepay_id 推送微信消息\n可能会遇到\n```json\n{"errcode":41028,"errmsg":"invalid form id hint"}\n```\n然后你会各种检查自己的信息是否一致。\n\n但是有个关键点就是，如果你使用的是 开发工具生成的二维码支付，而不是真实环境进行支付。\n\n那么非常遗憾的告诉你，开发工具生成的二维码支付之后的prepay_id是不允许被用于推送消息的。\n',
    tag: null,
    category: null,
    viewCount: 965,
    createDate: '2019-04-13T16:09:48.000Z',
    createdAt: '2019-04-13T16:09:48.254Z',
    updatedAt: '2020-05-14T05:23:19.529Z',
  },
  {
    idx: 46,
    title: 'Node.js使用request获取 微信 二维码生成',
    description: null,
    content:
      "```js\nconst request = require('request')\nconst appid = ''\nconst appscrect = ''\nrequest({\n    url: `https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=${appid}&secret=${appscrect}`,\n    method: 'GET',\n  }, async function(err, response, body) {\n      body = JSON.parse(body)\n      let access_token = body.access_token\n      console.log('access_token',access_token)\n      request({\n          url:`https://api.weixin.qq.com/cgi-bin/qrcode/create?access_token=` + access_token,\n          method:'POST',\n          json: true,\n          headers:{\n              'Content-Type':'application/x-www-form-urlencoded;charset=utf-8'\n          },\n          body:JSON.stringify({\"expire_seconds\": 604800, \"action_name\": \"QR_SCENE\", \"action_info\": {\"scene\": {\"scene_id\": 123}}})\n      },async function(err,resposne,body){\n          console.log('get QRCode',body)\n      })\n  })\n```\n\n重点在于，是POST `JSON字符串`而不是POST `application/json`格式。这个微信文档写得很有误解。",
    tag: null,
    category: null,
    viewCount: 878,
    createDate: '2019-04-10T08:17:45.000Z',
    createdAt: '2019-04-10T08:17:45.156Z',
    updatedAt: '2020-05-14T05:58:49.557Z',
  },
  {
    idx: 45,
    title: 'IntelliJ下gradle location is incorrect',
    description: null,
    content:
      'mac 用homebrew下载了gradle,IntelliJ设置gradle路径：\n\n报错`gradle location is incorrect`\n\n需要设置到路径下的`libexec`\n\n另外，可以使用`brew info gradle`查看安装路径',
    tag: null,
    category: null,
    viewCount: 1413,
    createDate: '2019-04-07T15:06:28.000Z',
    createdAt: '2019-04-07T15:06:28.164Z',
    updatedAt: '2020-05-14T04:47:33.972Z',
  },
]

const ListItem = () => {
  return (
    <div className={styles.list}>
      {data.map(item => (
        <Item data={item} key={item.idx} />
      ))}
    </div>
  )
}

export default React.memo(ListItem)
