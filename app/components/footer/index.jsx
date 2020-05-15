import React from 'react'
import styles from './index.less'

const Footer = props => {
  return (
    <div className={styles.index}>
      <p>© 2017-2020 写代码的熊猫. All Rights Reserved 浙ICP备14015442号</p>
      <p></p>
      <div
        className={styles.hide}
        dangerouslySetInnerHTML={{
          __html: `<script>
            var _hmt = _hmt || [];
            (function() {
                var hm = document.createElement("script");
                hm.src = "https://hm.baidu.com/hm.js?1777f0fe0a70e49ecffcc2f72658af37";
                var s = document.getElementsByTagName("script")[0];
                s.parentNode.insertBefore(hm, s);
            })();
        </script>`,
        }}></div>
    </div>
  )
}

export default React.memo(Footer)
