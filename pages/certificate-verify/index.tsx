import styles from './index.module.scss';

const VerifyCertificate = () => {
  return (
    <section className={styles.certi_verify_page}>
      <div className={styles.fm_logo_container}>
        <img
          src='/images/logo_fm.svg'
          alt='FutureMinds logo'
          width={175}
          height={62}
          className={styles.fm_logo}
        />
      </div>
      <div className={styles.certi_verify_svg_container}>
        <div className={styles.certi_verify_container}>
          <img
            src='/images/certificate-verify.png'
            alt='Certificate Verify Img'
            width={160}
            height={169}
            className={styles.certi_verify_img}
          />
          <h2 className={styles.certi_verify_heading}>
            {'This certfificate is verified ;)'}
          </h2>
        </div>
        <svg
          className={[styles.circle_svg, styles.circle_svg_1].join(' ')}
          width='155'
          height='156'
          viewBox='0 0 155 156'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <ellipse
            cx='77.5'
            cy='78'
            rx='77.5'
            ry='78'
            fill='url(#paint0_linear)'
          />
          <defs>
            <linearGradient
              id='paint0_linear'
              x1='11.6626'
              y1='136.689'
              x2='172.713'
              y2='11.2291'
              gradientUnits='userSpaceOnUse'
            >
              <stop stopColor='#9AF2F2' />
              <stop offset='1' stopColor='#FDF0FF' />
            </linearGradient>
          </defs>
        </svg>
        <svg
          className={[styles.circle_svg, styles.circle_svg_2].join(' ')}
          width='134'
          height='134'
          viewBox='0 0 134 134'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <circle cx='67' cy='67' r='67' fill='url(#paint0_linear)' />
          <defs>
            <linearGradient
              id='paint0_linear'
              x1='10.0825'
              y1='117.413'
              x2='148.636'
              y2='8.78155'
              gradientUnits='userSpaceOnUse'
            >
              <stop stopColor='#B7CBFD' />
              <stop offset='1' stopColor='#FDF0FF' />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <svg
        className={styles.top_filter_svg}
        width='964'
        height='657'
        viewBox='0 0 964 657'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <g filter='url(#filter0_f)'>
          <ellipse cx='294' cy='52' rx='520' ry='455' fill='#C7F8FF' />
        </g>
        <defs>
          <filter
            id='filter0_f'
            x='-376'
            y='-553'
            width='1340'
            height='1210'
            filterUnits='userSpaceOnUse'
            colorInterpolationFilters='sRGB'
          >
            <feFlood floodOpacity='0' result='BackgroundImageFix' />
            <feBlend
              mode='normal'
              in='SourceGraphic'
              in2='BackgroundImageFix'
              result='shape'
            />
            <feGaussianBlur stdDeviation='75' result='effect1_foregroundBlur' />
          </filter>
        </defs>
      </svg>
    </section>
  );
};

export default VerifyCertificate;
