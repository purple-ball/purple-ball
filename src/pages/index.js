import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import styles from './index.module.css';

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      noNavbar={false}
      wrapperClassName={styles.layoutWrapper}
      description="个人艺术网站">
      <main className={styles.mainContainer}>
        <div className={styles.contentWrapper}>
          <div className={styles.leftSection}>
            <div className={styles.buttonGroup}>
              <Link
                className={clsx(styles.button)}
                to="/docs/intro">
                个人简介
              </Link>
              <Link
                className={clsx(styles.button)}
                to="/blog">
                作品集
              </Link>
            </div>
          </div>
          
          <div className={styles.rightSection}>
            <h1 className={styles.title}>艺术与科技的交融</h1>
            <p className={styles.description}>
              在这里，我将艺术的浪漫与技术的理性完美结合，
              创造出独特的数字艺术体验。如同莫奈笔下的光影交织，
              每一个像素都承载着对美的追求与创新的渴望。
            </p>
            <p className={styles.quote}>
              "艺术是永恒的，技术是瞬息万变的，
              而我追求的是在变与不变之间找到平衡。"
            </p>
          </div>
        </div>
      </main>
    </Layout>
  );
}
