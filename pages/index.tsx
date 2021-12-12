import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Pia Player - 开源 Pia 戏播放器</title>
        <link
          rel="icon"
          href="/_next/image?url=https%3A%2F%2Fraw.githubusercontent.com%2Fbaranwang%2Fpia-player%2Fmain%2Fbuild%2Ficon.ico&w=256&q=75"
        />
        <meta name="description" content="开源 Pia 戏播放器" />
        <meta
          name="keywords"
          content={[
            'Pia Player',
            'Pia戏播放器',
            '戏鲸',
            '爱pia戏',
            '戏精',
            '走本',
            '即兴配音',
          ].join(', ')}
        />
      </Head>
      <div className={styles.container}>
        <main className={styles.main}>
          <Image
            src="https://raw.githubusercontent.com/baranwang/pia-player/main/build/icon.ico"
            width={128}
            height={128}
            alt=""
          />
          <h1 className={styles.title}>Pia Player</h1>
          <p className={styles.description}>开源 Pia 戏播放器</p>
          <div>
            <a className={styles.button} href="/api/latest/win32">
              <svg viewBox="0 0 64 64">
                <path d="M31 33v20H11V33h20Zm22 0v20H33V33h20ZM31 11v20H11V11h20Zm22 0v20H33V11h20Z" />
              </svg>
              Windows 版
            </a>
            <a className={styles.button} href="/api/latest/darwin">
              <svg viewBox="0 0 20 20">
                <path d="M16.0729 6.5214c-.093.0723-1.7248.9915-1.7248 3.0364 0 2.3651 2.0759 3.2017 2.1379 3.2223-.0103.0516-.3305 1.1464-1.0948 2.2618-.6816.9812-1.3943 1.9623-2.4787 1.9623s-1.3633-.63-2.613-.63c-1.2187 0-1.6525.6507-2.644.6507s-1.6835-.9089-2.4787-2.0243C4.2576 13.6889 3.514 11.6543 3.514 9.723c0-3.0984 2.014-4.7406 3.9969-4.7406 1.0535 0 1.9313.692 2.5923.692.63 0 1.6112-.7333 2.8092-.7333.4545.0001 2.0864.0415 3.1605 1.5803zm-3.7284-2.8918c.4957-.5887.8469-1.4046.8469-2.2205 0-.1136-.0103-.2272-.031-.3202-.8056.031-1.7661.5371-2.3445 1.2084-.4544.5164-.8779 1.3323-.8779 2.1586 0 .1239.0207.2479.031.2892.0516.0103.1343.0207.2169.0207.723-.0001 1.6318-.4855 2.1586-1.1362z" />
              </svg>
              macOS 版
            </a>
          </div>
        </main>
        <footer className={styles.footer}>
          <div>
            <a
              href="https://github.com/baranwang/pia-player"
              target="_blank"
              rel="noreferrer">
              <svg viewBox="0 0 16 16">
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
              </svg>
              GitHub
            </a>
            Copyright © 2021 Baran
          </div>
        </footer>
      </div>
    </>
  );
};

export default Home;
