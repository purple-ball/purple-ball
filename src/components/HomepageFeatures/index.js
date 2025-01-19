import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: '艺术灵感',
    description: (
      <>
        汲取印象派大师莫奈、梵高等人的创作灵感，将艺术与科技完美融合。
      </>
    ),
    background: 'feature-bg-1'
  },
  {
    title: '技术创新',
    description: (
      <>
        采用现代化的前端技术，打造流畅的用户体验与独特的视觉效果。
      </>
    ),
    background: 'feature-bg-2'
  },
  {
    title: '个性表达',
    description: (
      <>
        展现独特的个人风格，让每一个页面都成为艺术创作的画布。
      </>
    ),
    background: 'feature-bg-3'
  },
];

function Feature({title, description, background}) {
  return (
    <div className={clsx('col col--4')}>
      <div className={clsx(styles.featureCard, styles[background])}>
        <div className={styles.featureContent}>
          <h3 className={styles.featureTitle}>{title}</h3>
          <p className={styles.featureDescription}>{description}</p>
        </div>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
