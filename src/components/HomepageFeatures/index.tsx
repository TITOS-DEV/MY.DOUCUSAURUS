import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Efficiency First',
    Svg: require('@site/static/img/undraw_data-at-work_3tbf.svg').default,
    description: (
      <>
        Built for performance. I focus on delivering clean, functional solutions that get your project up and running without the overhead.
      </>
    ),
  },
  {
    title: 'Focus on the Core',
    Svg: require('@site/static/img/undraw_ai-research-assistant_cxx0.svg').default,
    description: (
      <>
        I handle the technical "chores" and architecture so you can focus on the big picture. Your code stays organized and scalable.
      </>
    ),
  },
  {
    title: 'Modern Stack Specialist',
    Svg: require('@site/static/img/undraw_writing-online_x665.svg').default,
    description: (
      <>
        Leveraging the power of React and modern frameworks to build reusable, high-quality interfaces that stand the test of time.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
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
