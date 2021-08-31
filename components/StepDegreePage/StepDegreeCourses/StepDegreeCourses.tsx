import Link from 'next/link';

import styles from './StepDegreeCourses.module.scss';

const StepDegreeCourses = () => {
  return (
    <section className={styles.stepdegree_course_section}>
      <h2 className={styles.heading}>Choose Your Step Degree</h2>
      <p className={styles.description}>
        We crafted courses according to market demand
      </p>
      <div className={styles.course_card_container}>
        <div className={styles.card}>
          <h3 className={styles.card_heading}>Course Name</h3>
          <p className={styles.card_description}>Part Time | Six Months</p>
          <Link href='/stepdegree'>
            <a className={styles.card_know_more_link}>
              Know More{' '}
              <svg
                className={styles.know_more_arror_svg}
                width='26'
                height='8'
                viewBox='0 0 26 8'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M25.3536 4.35355C25.5488 4.15829 25.5488 3.84171 25.3536 3.64645L22.1716 0.464466C21.9763 0.269204 21.6597 0.269204 21.4645 0.464466C21.2692 0.659728 21.2692 0.976311 21.4645 1.17157L24.2929 4L21.4645 6.82843C21.2692 7.02369 21.2692 7.34027 21.4645 7.53553C21.6597 7.7308 21.9763 7.7308 22.1716 7.53553L25.3536 4.35355ZM0 4.5H25V3.5H0V4.5Z'
                  fill='black'
                />
              </svg>
            </a>
          </Link>
          <svg
            className={styles.honeycomb_svg}
            width='113'
            height='148'
            viewBox='0 0 113 148'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M22.1864 104.863C22.6911 104.577 23.3089 104.577 23.8136 104.863L26.74 106.522L29.6396 108.227C30.1397 108.521 30.4486 109.056 30.4532 109.636L30.48 113L30.4532 116.364C30.4486 116.944 30.1397 117.479 29.6396 117.773L26.74 119.478L23.8136 121.137C23.3089 121.423 22.6911 121.423 22.1864 121.137L19.26 119.478L16.3604 117.773C15.8603 117.479 15.5514 116.944 15.5467 116.364L15.52 113L15.5467 109.636C15.5514 109.056 15.8603 108.521 16.3604 108.227L19.26 106.522L22.1864 104.863Z'
              stroke='url(#paint0_linear)'
              strokeOpacity='0.37'
              strokeWidth='0.7'
            />
            <path
              d='M29.1864 91.8635C29.6911 91.5774 30.3089 91.5774 30.8136 91.8635L33.74 93.5222L36.6396 95.2271C37.1397 95.5212 37.4486 96.0562 37.4532 96.6363L37.48 100L37.4532 103.364C37.4486 103.944 37.1397 104.479 36.6396 104.773L33.74 106.478L30.8136 108.137C30.3089 108.423 29.6911 108.423 29.1864 108.137L26.26 106.478L23.3604 104.773C22.8603 104.479 22.5514 103.944 22.5467 103.364L22.52 100L22.5467 96.6363C22.5514 96.0562 22.8603 95.5212 23.3604 95.2271L26.26 93.5221L29.1864 91.8635Z'
              stroke='url(#paint1_linear)'
              strokeOpacity='0.37'
              strokeWidth='0.7'
            />
            <path
              d='M8.18639 130.863C8.69108 130.577 9.30892 130.577 9.81361 130.863L12.74 132.522L15.6396 134.227C16.1397 134.521 16.4486 135.056 16.4532 135.636L16.48 139L16.4532 142.364C16.4486 142.944 16.1397 143.479 15.6396 143.773L12.74 145.478L9.81361 147.137C9.30892 147.423 8.69108 147.423 8.18639 147.137L5.26002 145.478L2.36037 143.773C1.86028 143.479 1.55136 142.944 1.54675 142.364L1.52001 139L1.54675 135.636C1.55136 135.056 1.86028 134.521 2.36036 134.227L5.26001 132.522L8.18639 130.863Z'
              stroke='url(#paint2_linear)'
              strokeOpacity='0.37'
              strokeWidth='0.7'
            />
            <path
              d='M44.1864 91.8635C44.6911 91.5774 45.3089 91.5774 45.8136 91.8635L48.74 93.5222L51.6396 95.2271C52.1397 95.5212 52.4486 96.0562 52.4532 96.6363L52.48 100L52.4532 103.364C52.4486 103.944 52.1397 104.479 51.6396 104.773L48.74 106.478L45.8136 108.137C45.3089 108.423 44.6911 108.423 44.1864 108.137L41.26 106.478L38.3604 104.773C37.8603 104.479 37.5514 103.944 37.5467 103.364L37.52 100L37.5467 96.6363C37.5514 96.0562 37.8603 95.5212 38.3604 95.2271L41.26 93.5221L44.1864 91.8635Z'
              stroke='url(#paint3_linear)'
              strokeOpacity='0.37'
              strokeWidth='0.7'
            />
            <path
              d='M51.1864 78.8635C51.6911 78.5774 52.3089 78.5774 52.8136 78.8635L55.74 80.5222L58.6396 82.2271C59.1397 82.5212 59.4486 83.0562 59.4532 83.6363L59.48 87L59.4532 90.3637C59.4486 90.9438 59.1397 91.4788 58.6396 91.7729L55.74 93.4779L52.8136 95.1365C52.3089 95.4226 51.6911 95.4226 51.1864 95.1365L48.26 93.4779L45.3604 91.7729C44.8603 91.4788 44.5514 90.9438 44.5467 90.3637L44.52 87L44.5467 83.6363C44.5514 83.0562 44.8603 82.5212 45.3604 82.2271L48.26 80.5221L51.1864 78.8635Z'
              stroke='url(#paint4_linear)'
              strokeOpacity='0.37'
              strokeWidth='0.7'
            />
            <path
              d='M36.1864 78.8635C36.6911 78.5774 37.3089 78.5774 37.8136 78.8635L40.74 80.5222L43.6396 82.2271C44.1397 82.5212 44.4486 83.0562 44.4532 83.6363L44.48 87L44.4532 90.3637C44.4486 90.9438 44.1397 91.4788 43.6396 91.7729L40.74 93.4779L37.8136 95.1365C37.3089 95.4226 36.6911 95.4226 36.1864 95.1365L33.26 93.4779L30.3604 91.7729C29.8603 91.4788 29.5514 90.9438 29.5467 90.3637L29.52 87L29.5467 83.6363C29.5514 83.0562 29.8603 82.5212 30.3604 82.2271L33.26 80.5221L36.1864 78.8635Z'
              stroke='url(#paint5_linear)'
              strokeOpacity='0.37'
              strokeWidth='0.7'
            />
            <path
              d='M14.1864 91.8635C14.6911 91.5774 15.3089 91.5774 15.8136 91.8635L18.74 93.5222L21.6396 95.2271C22.1397 95.5212 22.4486 96.0562 22.4532 96.6363L22.48 100L22.4532 103.364C22.4486 103.944 22.1397 104.479 21.6396 104.773L18.74 106.478L15.8136 108.137C15.3089 108.423 14.6911 108.423 14.1864 108.137L11.26 106.478L8.36037 104.773C7.86028 104.479 7.55136 103.944 7.54675 103.364L7.52001 100L7.54675 96.6363C7.55136 96.0562 7.86028 95.5212 8.36036 95.2271L11.26 93.5221L14.1864 91.8635Z'
              stroke='url(#paint6_linear)'
              strokeOpacity='0.37'
              strokeWidth='0.7'
            />
            <path
              d='M23.1864 130.863C23.6911 130.577 24.3089 130.577 24.8136 130.863L27.74 132.522L30.6396 134.227C31.1397 134.521 31.4486 135.056 31.4532 135.636L31.48 139L31.4532 142.364C31.4486 142.944 31.1397 143.479 30.6396 143.773L27.74 145.478L24.8136 147.137C24.3089 147.423 23.6911 147.423 23.1864 147.137L20.26 145.478L17.3604 143.773C16.8603 143.479 16.5514 142.944 16.5467 142.364L16.52 139L16.5467 135.636C16.5514 135.056 16.8603 134.521 17.3604 134.227L20.26 132.522L23.1864 130.863Z'
              stroke='url(#paint7_linear)'
              strokeOpacity='0.37'
              strokeWidth='0.7'
            />
            <path
              d='M30.1864 117.863C30.6911 117.577 31.3089 117.577 31.8136 117.863L34.74 119.522L37.6396 121.227C38.1397 121.521 38.4486 122.056 38.4532 122.636L38.48 126L38.4532 129.364C38.4486 129.944 38.1397 130.479 37.6396 130.773L34.74 132.478L31.8136 134.137C31.3089 134.423 30.6911 134.423 30.1864 134.137L27.26 132.478L24.3604 130.773C23.8603 130.479 23.5514 129.944 23.5467 129.364L23.52 126L23.5467 122.636C23.5514 122.056 23.8603 121.521 24.3604 121.227L27.26 119.522L30.1864 117.863Z'
              stroke='url(#paint8_linear)'
              strokeOpacity='0.37'
              strokeWidth='0.7'
            />
            <path
              d='M65.1864 26.8635C65.6911 26.5774 66.3089 26.5774 66.8136 26.8635L69.74 28.5222L72.6396 30.2271C73.1397 30.5212 73.4486 31.0562 73.4532 31.6363L73.48 35L73.4532 38.3637C73.4486 38.9438 73.1397 39.4788 72.6396 39.7729L69.74 41.4779L66.8136 43.1365C66.3089 43.4226 65.6911 43.4226 65.1864 43.1365L62.26 41.4779L59.3604 39.7729C58.8603 39.4788 58.5514 38.9438 58.5467 38.3637L58.52 35L58.5467 31.6363C58.5514 31.0562 58.8603 30.5212 59.3604 30.2271L62.26 28.5221L65.1864 26.8635Z'
              stroke='url(#paint9_linear)'
              strokeOpacity='0.37'
              strokeWidth='0.7'
            />
            <path
              d='M21.1864 52.8635C21.6911 52.5774 22.3089 52.5774 22.8136 52.8635L25.74 54.5222L28.6396 56.2271C29.1397 56.5212 29.4486 57.0562 29.4532 57.6363L29.48 61L29.4532 64.3637C29.4486 64.9438 29.1397 65.4788 28.6396 65.7729L25.74 67.4779L22.8136 69.1365C22.3089 69.4226 21.6911 69.4226 21.1864 69.1365L18.26 67.4779L15.3604 65.7729C14.8603 65.4788 14.5514 64.9438 14.5467 64.3637L14.52 61L14.5467 57.6363C14.5514 57.0562 14.8603 56.5212 15.3604 56.2271L18.26 54.5221L21.1864 52.8635Z'
              stroke='url(#paint10_linear)'
              strokeOpacity='0.37'
              strokeWidth='0.7'
            />
            <path
              d='M72.1864 13.8635C72.6911 13.5774 73.3089 13.5774 73.8136 13.8635L76.74 15.5222L79.6396 17.2271C80.1397 17.5212 80.4486 18.0562 80.4532 18.6363L80.48 22L80.4532 25.3637C80.4486 25.9438 80.1397 26.4788 79.6396 26.7729L76.74 28.4779L73.8136 30.1365C73.3089 30.4226 72.6911 30.4226 72.1864 30.1365L69.26 28.4779L66.3604 26.7729C65.8603 26.4788 65.5514 25.9438 65.5467 25.3637L65.52 22L65.5467 18.6363C65.5514 18.0562 65.8603 17.5212 66.3604 17.2271L69.26 15.5221L72.1864 13.8635Z'
              stroke='url(#paint11_linear)'
              strokeOpacity='0.37'
              strokeWidth='0.7'
            />
            <path
              d='M79.1864 0.863468C79.6911 0.577408 80.3089 0.577408 80.8136 0.863469L83.74 2.52215L86.6396 4.22712C87.1397 4.52117 87.4486 5.05624 87.4532 5.63634L87.48 9L87.4532 12.3637C87.4486 12.9438 87.1397 13.4788 86.6396 13.7729L83.74 15.4779L80.8136 17.1365C80.3089 17.4226 79.6911 17.4226 79.1864 17.1365L76.26 15.4779L73.3604 13.7729C72.8603 13.4788 72.5514 12.9438 72.5467 12.3637L72.52 9L72.5467 5.63635C72.5514 5.05624 72.8603 4.52117 73.3604 4.22712L76.26 2.52214L79.1864 0.863468Z'
              stroke='url(#paint12_linear)'
              strokeOpacity='0.37'
              strokeWidth='0.7'
            />
            <path
              d='M50.1864 26.8635C50.6911 26.5774 51.3089 26.5774 51.8136 26.8635L54.74 28.5222L57.6396 30.2271C58.1397 30.5212 58.4486 31.0562 58.4532 31.6363L58.48 35L58.4532 38.3637C58.4486 38.9438 58.1397 39.4788 57.6396 39.7729L54.74 41.4779L51.8136 43.1365C51.3089 43.4226 50.6911 43.4226 50.1864 43.1365L47.26 41.4779L44.3604 39.7729C43.8603 39.4788 43.5514 38.9438 43.5467 38.3637L43.52 35L43.5467 31.6363C43.5514 31.0562 43.8603 30.5212 44.3604 30.2271L47.26 28.5221L50.1864 26.8635Z'
              stroke='url(#paint13_linear)'
              strokeOpacity='0.37'
              strokeWidth='0.7'
            />
            <path
              d='M57.1864 13.8635C57.6911 13.5774 58.3089 13.5774 58.8136 13.8635L61.74 15.5222L64.6396 17.2271C65.1397 17.5212 65.4486 18.0562 65.4532 18.6363L65.48 22L65.4532 25.3637C65.4486 25.9438 65.1397 26.4788 64.6396 26.7729L61.74 28.4779L58.8136 30.1365C58.3089 30.4226 57.6911 30.4226 57.1864 30.1365L54.26 28.4779L51.3604 26.7729C50.8603 26.4788 50.5514 25.9438 50.5467 25.3637L50.52 22L50.5467 18.6363C50.5514 18.0562 50.8603 17.5212 51.3604 17.2271L54.26 15.5221L57.1864 13.8635Z'
              stroke='url(#paint14_linear)'
              strokeOpacity='0.37'
              strokeWidth='0.7'
            />
            <path
              d='M51.1864 52.8635C51.6911 52.5774 52.3089 52.5774 52.8136 52.8635L55.74 54.5222L58.6396 56.2271C59.1397 56.5212 59.4486 57.0562 59.4532 57.6363L59.48 61L59.4532 64.3637C59.4486 64.9438 59.1397 65.4788 58.6396 65.7729L55.74 67.4779L52.8136 69.1365C52.3089 69.4226 51.6911 69.4226 51.1864 69.1365L48.26 67.4779L45.3604 65.7729C44.8603 65.4788 44.5514 64.9438 44.5467 64.3637L44.52 61L44.5467 57.6363C44.5514 57.0562 44.8603 56.5212 45.3604 56.2271L48.26 54.5221L51.1864 52.8635Z'
              stroke='url(#paint15_linear)'
              strokeOpacity='0.37'
              strokeWidth='0.7'
            />
            <path
              d='M66.1864 52.8635C66.6911 52.5774 67.3089 52.5774 67.8136 52.8635L70.74 54.5222L73.6396 56.2271C74.1397 56.5212 74.4486 57.0562 74.4532 57.6363L74.48 61L74.4532 64.3637C74.4486 64.9438 74.1397 65.4788 73.6396 65.7729L70.74 67.4779L67.8136 69.1365C67.3089 69.4226 66.6911 69.4226 66.1864 69.1365L63.26 67.4779L60.3604 65.7729C59.8603 65.4788 59.5514 64.9438 59.5467 64.3637L59.52 61L59.5467 57.6363C59.5514 57.0562 59.8603 56.5212 60.3604 56.2271L63.26 54.5221L66.1864 52.8635Z'
              stroke='url(#paint16_linear)'
              strokeOpacity='0.37'
              strokeWidth='0.7'
            />
            <path
              d='M58.1864 39.8635C58.6911 39.5774 59.3089 39.5774 59.8136 39.8635L62.74 41.5222L65.6396 43.2271C66.1397 43.5212 66.4486 44.0562 66.4532 44.6363L66.48 48L66.4532 51.3637C66.4486 51.9438 66.1397 52.4788 65.6396 52.7729L62.74 54.4779L59.8136 56.1365C59.3089 56.4226 58.6911 56.4226 58.1864 56.1365L55.26 54.4779L52.3604 52.7729C51.8603 52.4788 51.5514 51.9438 51.5467 51.3637L51.52 48L51.5467 44.6363C51.5514 44.0562 51.8603 43.5212 52.3604 43.2271L55.26 41.5221L58.1864 39.8635Z'
              stroke='url(#paint17_linear)'
              strokeOpacity='0.37'
              strokeWidth='0.7'
            />
            <path
              d='M28.1864 39.8635C28.6911 39.5774 29.3089 39.5774 29.8136 39.8635L32.74 41.5222L35.6396 43.2271C36.1397 43.5212 36.4486 44.0562 36.4532 44.6363L36.48 48L36.4532 51.3637C36.4486 51.9438 36.1397 52.4788 35.6396 52.7729L32.74 54.4779L29.8136 56.1365C29.3089 56.4226 28.6911 56.4226 28.1864 56.1365L25.26 54.4779L22.3604 52.7729C21.8603 52.4788 21.5514 51.9438 21.5467 51.3637L21.52 48L21.5467 44.6363C21.5514 44.0562 21.8603 43.5212 22.3604 43.2271L25.26 41.5221L28.1864 39.8635Z'
              stroke='url(#paint18_linear)'
              strokeOpacity='0.37'
              strokeWidth='0.7'
            />
            <path
              d='M35.1864 26.8635C35.6911 26.5774 36.3089 26.5774 36.8136 26.8635L39.74 28.5222L42.6396 30.2271C43.1397 30.5212 43.4486 31.0562 43.4532 31.6363L43.48 35L43.4532 38.3637C43.4486 38.9438 43.1397 39.4788 42.6396 39.7729L39.74 41.4779L36.8136 43.1365C36.3089 43.4226 35.6911 43.4226 35.1864 43.1365L32.26 41.4779L29.3604 39.7729C28.8603 39.4788 28.5514 38.9438 28.5467 38.3637L28.52 35L28.5467 31.6363C28.5514 31.0562 28.8603 30.5212 29.3604 30.2271L32.26 28.5221L35.1864 26.8635Z'
              stroke='url(#paint19_linear)'
              strokeOpacity='0.37'
              strokeWidth='0.7'
            />
            <path
              d='M29.1864 65.8635C29.6911 65.5774 30.3089 65.5774 30.8136 65.8635L33.74 67.5222L36.6396 69.2271C37.1397 69.5212 37.4486 70.0562 37.4532 70.6363L37.48 74L37.4532 77.3637C37.4486 77.9438 37.1397 78.4788 36.6396 78.7729L33.74 80.4779L30.8136 82.1365C30.3089 82.4226 29.6911 82.4226 29.1864 82.1365L26.26 80.4779L23.3604 78.7729C22.8603 78.4788 22.5514 77.9438 22.5467 77.3637L22.52 74L22.5467 70.6363C22.5514 70.0562 22.8603 69.5212 23.3604 69.2271L26.26 67.5221L29.1864 65.8635Z'
              stroke='url(#paint20_linear)'
              strokeOpacity='0.37'
              strokeWidth='0.7'
            />
            <path
              d='M44.1864 65.8635C44.6911 65.5774 45.3089 65.5774 45.8136 65.8635L48.74 67.5222L51.6396 69.2271C52.1397 69.5212 52.4486 70.0562 52.4532 70.6363L52.48 74L52.4532 77.3637C52.4486 77.9438 52.1397 78.4788 51.6396 78.7729L48.74 80.4779L45.8136 82.1365C45.3089 82.4226 44.6911 82.4226 44.1864 82.1365L41.26 80.4779L38.3604 78.7729C37.8603 78.4788 37.5514 77.9438 37.5467 77.3637L37.52 74L37.5467 70.6363C37.5514 70.0562 37.8603 69.5212 38.3604 69.2271L41.26 67.5221L44.1864 65.8635Z'
              stroke='url(#paint21_linear)'
              strokeOpacity='0.37'
              strokeWidth='0.7'
            />
            <path
              d='M36.1864 52.8635C36.6911 52.5774 37.3089 52.5774 37.8136 52.8635L40.74 54.5222L43.6396 56.2271C44.1397 56.5212 44.4486 57.0562 44.4532 57.6363L44.48 61L44.4532 64.3637C44.4486 64.9438 44.1397 65.4788 43.6396 65.7729L40.74 67.4779L37.8136 69.1365C37.3089 69.4226 36.6911 69.4226 36.1864 69.1365L33.26 67.4779L30.3604 65.7729C29.8603 65.4788 29.5514 64.9438 29.5467 64.3637L29.52 61L29.5467 57.6363C29.5514 57.0562 29.8603 56.5212 30.3604 56.2271L33.26 54.5221L36.1864 52.8635Z'
              stroke='url(#paint22_linear)'
              strokeOpacity='0.37'
              strokeWidth='0.7'
            />
            <path
              d='M73.1864 39.8635C73.6911 39.5774 74.3089 39.5774 74.8136 39.8635L77.74 41.5222L80.6396 43.2271C81.1397 43.5212 81.4486 44.0562 81.4532 44.6363L81.48 48L81.4532 51.3637C81.4486 51.9438 81.1397 52.4788 80.6396 52.7729L77.74 54.4779L74.8136 56.1365C74.3089 56.4226 73.6911 56.4226 73.1864 56.1365L70.26 54.4779L67.3604 52.7729C66.8603 52.4788 66.5514 51.9438 66.5467 51.3637L66.52 48L66.5467 44.6363C66.5514 44.0562 66.8603 43.5212 67.3604 43.2271L70.26 41.5221L73.1864 39.8635Z'
              stroke='url(#paint23_linear)'
              strokeOpacity='0.37'
              strokeWidth='0.7'
            />
            <path
              d='M95.1864 26.8635C95.6911 26.5774 96.3089 26.5774 96.8136 26.8635L99.74 28.5222L102.64 30.2271C103.14 30.5212 103.449 31.0562 103.453 31.6363L103.48 35L103.453 38.3637C103.449 38.9438 103.14 39.4788 102.64 39.7729L99.74 41.4779L96.8136 43.1365C96.3089 43.4226 95.6911 43.4226 95.1864 43.1365L92.26 41.4779L89.3604 39.7729C88.8603 39.4788 88.5514 38.9438 88.5467 38.3637L88.52 35L88.5467 31.6363C88.5514 31.0562 88.8603 30.5212 89.3604 30.2271L92.26 28.5221L95.1864 26.8635Z'
              stroke='url(#paint24_linear)'
              strokeOpacity='0.37'
              strokeWidth='0.7'
            />
            <path
              d='M81.1864 52.8635C81.6911 52.5774 82.3089 52.5774 82.8136 52.8635L85.74 54.5222L88.6396 56.2271C89.1397 56.5212 89.4486 57.0562 89.4532 57.6363L89.48 61L89.4532 64.3637C89.4486 64.9438 89.1397 65.4788 88.6396 65.7729L85.74 67.4779L82.8136 69.1365C82.3089 69.4226 81.6911 69.4226 81.1864 69.1365L78.26 67.4779L75.3604 65.7729C74.8603 65.4788 74.5514 64.9438 74.5467 64.3637L74.52 61L74.5467 57.6363C74.5514 57.0562 74.8603 56.5212 75.3604 56.2271L78.26 54.5221L81.1864 52.8635Z'
              stroke='url(#paint25_linear)'
              strokeOpacity='0.37'
              strokeWidth='0.7'
            />
            <path
              d='M88.1864 39.8635C88.6911 39.5774 89.3089 39.5774 89.8136 39.8635L92.74 41.5222L95.6396 43.2271C96.1397 43.5212 96.4486 44.0562 96.4532 44.6363L96.48 48L96.4532 51.3637C96.4486 51.9438 96.1397 52.4788 95.6396 52.7729L92.74 54.4779L89.8136 56.1365C89.3089 56.4226 88.6911 56.4226 88.1864 56.1365L85.26 54.4779L82.3604 52.7729C81.8603 52.4788 81.5514 51.9438 81.5467 51.3637L81.52 48L81.5467 44.6363C81.5514 44.0562 81.8603 43.5212 82.3604 43.2271L85.26 41.5221L88.1864 39.8635Z'
              stroke='url(#paint26_linear)'
              strokeOpacity='0.37'
              strokeWidth='0.7'
            />
            <path
              d='M103.186 39.8635C103.691 39.5774 104.309 39.5774 104.814 39.8635L107.74 41.5222L110.64 43.2271C111.14 43.5212 111.449 44.0562 111.453 44.6363L111.48 48L111.453 51.3637C111.449 51.9438 111.14 52.4788 110.64 52.7729L107.74 54.4779L104.814 56.1365C104.309 56.4226 103.691 56.4226 103.186 56.1365L100.26 54.4779L97.3604 52.7729C96.8603 52.4788 96.5514 51.9438 96.5467 51.3637L96.52 48L96.5467 44.6363C96.5514 44.0562 96.8603 43.5212 97.3604 43.2271L100.26 41.5221L103.186 39.8635Z'
              stroke='url(#paint27_linear)'
              strokeOpacity='0.37'
              strokeWidth='0.7'
            />
            <defs>
              <linearGradient
                id='paint0_linear'
                x1='23'
                y1='104'
                x2='23'
                y2='122'
                gradientUnits='userSpaceOnUse'
              >
                <stop stopColor='white' />
                <stop offset='1' stopColor='white' stopOpacity='0' />
              </linearGradient>
              <linearGradient
                id='paint1_linear'
                x1='30'
                y1='91'
                x2='30'
                y2='109'
                gradientUnits='userSpaceOnUse'
              >
                <stop stopColor='white' />
                <stop offset='1' stopColor='white' stopOpacity='0' />
              </linearGradient>
              <linearGradient
                id='paint2_linear'
                x1='9'
                y1='130'
                x2='9'
                y2='148'
                gradientUnits='userSpaceOnUse'
              >
                <stop stopColor='white' />
                <stop offset='1' stopColor='white' stopOpacity='0' />
              </linearGradient>
              <linearGradient
                id='paint3_linear'
                x1='45'
                y1='91'
                x2='45'
                y2='109'
                gradientUnits='userSpaceOnUse'
              >
                <stop stopColor='white' />
                <stop offset='1' stopColor='white' stopOpacity='0' />
              </linearGradient>
              <linearGradient
                id='paint4_linear'
                x1='52'
                y1='78'
                x2='52'
                y2='96'
                gradientUnits='userSpaceOnUse'
              >
                <stop stopColor='white' />
                <stop offset='1' stopColor='white' stopOpacity='0' />
              </linearGradient>
              <linearGradient
                id='paint5_linear'
                x1='37'
                y1='78'
                x2='37'
                y2='96'
                gradientUnits='userSpaceOnUse'
              >
                <stop stopColor='white' />
                <stop offset='1' stopColor='white' stopOpacity='0' />
              </linearGradient>
              <linearGradient
                id='paint6_linear'
                x1='15'
                y1='91'
                x2='15'
                y2='109'
                gradientUnits='userSpaceOnUse'
              >
                <stop stopColor='white' />
                <stop offset='1' stopColor='white' stopOpacity='0' />
              </linearGradient>
              <linearGradient
                id='paint7_linear'
                x1='24'
                y1='130'
                x2='24'
                y2='148'
                gradientUnits='userSpaceOnUse'
              >
                <stop stopColor='white' />
                <stop offset='1' stopColor='white' stopOpacity='0' />
              </linearGradient>
              <linearGradient
                id='paint8_linear'
                x1='31'
                y1='117'
                x2='31'
                y2='135'
                gradientUnits='userSpaceOnUse'
              >
                <stop stopColor='white' />
                <stop offset='1' stopColor='white' stopOpacity='0' />
              </linearGradient>
              <linearGradient
                id='paint9_linear'
                x1='66'
                y1='26'
                x2='66'
                y2='44'
                gradientUnits='userSpaceOnUse'
              >
                <stop stopColor='white' />
                <stop offset='1' stopColor='white' stopOpacity='0' />
              </linearGradient>
              <linearGradient
                id='paint10_linear'
                x1='22'
                y1='52'
                x2='22'
                y2='70'
                gradientUnits='userSpaceOnUse'
              >
                <stop stopColor='white' />
                <stop offset='1' stopColor='white' stopOpacity='0' />
              </linearGradient>
              <linearGradient
                id='paint11_linear'
                x1='73'
                y1='13'
                x2='73'
                y2='31'
                gradientUnits='userSpaceOnUse'
              >
                <stop stopColor='white' />
                <stop offset='1' stopColor='white' stopOpacity='0' />
              </linearGradient>
              <linearGradient
                id='paint12_linear'
                x1='80'
                y1='0'
                x2='80'
                y2='18'
                gradientUnits='userSpaceOnUse'
              >
                <stop stopColor='white' />
                <stop offset='1' stopColor='white' stopOpacity='0' />
              </linearGradient>
              <linearGradient
                id='paint13_linear'
                x1='51'
                y1='26'
                x2='51'
                y2='44'
                gradientUnits='userSpaceOnUse'
              >
                <stop stopColor='white' />
                <stop offset='1' stopColor='white' stopOpacity='0' />
              </linearGradient>
              <linearGradient
                id='paint14_linear'
                x1='58'
                y1='13'
                x2='58'
                y2='31'
                gradientUnits='userSpaceOnUse'
              >
                <stop stopColor='white' />
                <stop offset='1' stopColor='white' stopOpacity='0' />
              </linearGradient>
              <linearGradient
                id='paint15_linear'
                x1='52'
                y1='52'
                x2='52'
                y2='70'
                gradientUnits='userSpaceOnUse'
              >
                <stop stopColor='white' />
                <stop offset='1' stopColor='white' stopOpacity='0' />
              </linearGradient>
              <linearGradient
                id='paint16_linear'
                x1='67'
                y1='52'
                x2='67'
                y2='70'
                gradientUnits='userSpaceOnUse'
              >
                <stop stopColor='white' />
                <stop offset='1' stopColor='white' stopOpacity='0' />
              </linearGradient>
              <linearGradient
                id='paint17_linear'
                x1='59'
                y1='39'
                x2='59'
                y2='57'
                gradientUnits='userSpaceOnUse'
              >
                <stop stopColor='white' />
                <stop offset='1' stopColor='white' stopOpacity='0' />
              </linearGradient>
              <linearGradient
                id='paint18_linear'
                x1='29'
                y1='39'
                x2='29'
                y2='57'
                gradientUnits='userSpaceOnUse'
              >
                <stop stopColor='white' />
                <stop offset='1' stopColor='white' stopOpacity='0' />
              </linearGradient>
              <linearGradient
                id='paint19_linear'
                x1='36'
                y1='26'
                x2='36'
                y2='44'
                gradientUnits='userSpaceOnUse'
              >
                <stop stopColor='white' />
                <stop offset='1' stopColor='white' stopOpacity='0' />
              </linearGradient>
              <linearGradient
                id='paint20_linear'
                x1='30'
                y1='65'
                x2='30'
                y2='83'
                gradientUnits='userSpaceOnUse'
              >
                <stop stopColor='white' />
                <stop offset='1' stopColor='white' stopOpacity='0' />
              </linearGradient>
              <linearGradient
                id='paint21_linear'
                x1='45'
                y1='65'
                x2='45'
                y2='83'
                gradientUnits='userSpaceOnUse'
              >
                <stop stopColor='white' />
                <stop offset='1' stopColor='white' stopOpacity='0' />
              </linearGradient>
              <linearGradient
                id='paint22_linear'
                x1='37'
                y1='52'
                x2='37'
                y2='70'
                gradientUnits='userSpaceOnUse'
              >
                <stop stopColor='white' />
                <stop offset='1' stopColor='white' stopOpacity='0' />
              </linearGradient>
              <linearGradient
                id='paint23_linear'
                x1='74'
                y1='39'
                x2='74'
                y2='57'
                gradientUnits='userSpaceOnUse'
              >
                <stop stopColor='white' />
                <stop offset='1' stopColor='white' stopOpacity='0' />
              </linearGradient>
              <linearGradient
                id='paint24_linear'
                x1='96'
                y1='26'
                x2='96'
                y2='44'
                gradientUnits='userSpaceOnUse'
              >
                <stop stopColor='white' />
                <stop offset='1' stopColor='white' stopOpacity='0' />
              </linearGradient>
              <linearGradient
                id='paint25_linear'
                x1='82'
                y1='52'
                x2='82'
                y2='70'
                gradientUnits='userSpaceOnUse'
              >
                <stop stopColor='white' />
                <stop offset='1' stopColor='white' stopOpacity='0' />
              </linearGradient>
              <linearGradient
                id='paint26_linear'
                x1='89'
                y1='39'
                x2='89'
                y2='57'
                gradientUnits='userSpaceOnUse'
              >
                <stop stopColor='white' />
                <stop offset='1' stopColor='white' stopOpacity='0' />
              </linearGradient>
              <linearGradient
                id='paint27_linear'
                x1='104'
                y1='39'
                x2='104'
                y2='57'
                gradientUnits='userSpaceOnUse'
              >
                <stop stopColor='white' />
                <stop offset='1' stopColor='white' stopOpacity='0' />
              </linearGradient>
            </defs>
          </svg>
          <svg
            className={styles.fill_hexagon_svg_1}
            width='22'
            height='24'
            viewBox='0 0 22 24'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <g filter='url(#filter0_i)'>
              <path
                d='M9.0276 1.11796C10.2511 0.424477 11.7489 0.424476 12.9724 1.11796L16.22 2.95869L19.4379 4.85083C20.6502 5.56367 21.3991 6.8608 21.4103 8.26713L21.44 12L21.4103 15.7329C21.3991 17.1392 20.6502 18.4363 19.4379 19.1492L16.22 21.0413L12.9724 22.882C11.7489 23.5755 10.2511 23.5755 9.0276 22.882L5.78 21.0413L2.56208 19.1492C1.34975 18.4363 0.600853 17.1392 0.589673 15.7329L0.559999 12L0.589673 8.26713C0.600853 6.86081 1.34975 5.56367 2.56207 4.85083L5.78 2.95869L9.0276 1.11796Z'
                fill='white'
              />
            </g>
            <defs>
              <filter
                id='filter0_i'
                x='0.560059'
                y='0.597656'
                width='20.88'
                height='26.8043'
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
                <feColorMatrix
                  in='SourceAlpha'
                  type='matrix'
                  values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
                  result='hardAlpha'
                />
                <feOffset dy='4' />
                <feGaussianBlur stdDeviation='2' />
                <feComposite
                  in2='hardAlpha'
                  operator='arithmetic'
                  k2='-1'
                  k3='1'
                />
                <feColorMatrix
                  type='matrix'
                  values='0 0 0 0 0.0708333 0 0 0 0 0.4425 0 0 0 0 1 0 0 0 0.18 0'
                />
                <feBlend
                  mode='normal'
                  in2='shape'
                  result='effect1_innerShadow'
                />
              </filter>
            </defs>
          </svg>
          <svg
            className={styles.fill_hexagon_svg_2}
            width='42'
            height='48'
            viewBox='0 0 42 48'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <g filter='url(#filter0_i)'>
              <path
                d='M19.0276 1.11796C20.2511 0.424477 21.7489 0.424476 22.9724 1.11796L31.44 5.91739L39.8302 10.8508C41.0425 11.5637 41.7915 12.8608 41.8026 14.2671L41.88 24L41.8026 33.7329C41.7915 35.1392 41.0425 36.4363 39.8302 37.1492L31.44 42.0826L22.9724 46.882C21.7489 47.5755 20.2511 47.5755 19.0276 46.882L10.56 42.0826L2.16977 37.1492C0.957451 36.4363 0.208548 35.1392 0.197369 33.7329L0.119999 24L0.197369 14.2671C0.208548 12.8608 0.957448 11.5637 2.16977 10.8508L10.56 5.91739L19.0276 1.11796Z'
                fill='white'
              />
            </g>
            <defs>
              <filter
                id='filter0_i'
                x='0.119995'
                y='0.597656'
                width='41.76'
                height='50.8043'
                filterUnits='userSpaceOnUse'
                colorInterpolationFilters='sRGB'
              >
                <feFlood flood-opacity='0' result='BackgroundImageFix' />
                <feBlend
                  mode='normal'
                  in='SourceGraphic'
                  in2='BackgroundImageFix'
                  result='shape'
                />
                <feColorMatrix
                  in='SourceAlpha'
                  type='matrix'
                  values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
                  result='hardAlpha'
                />
                <feOffset dy='4' />
                <feGaussianBlur stdDeviation='2' />
                <feComposite
                  in2='hardAlpha'
                  operator='arithmetic'
                  k2='-1'
                  k3='1'
                />
                <feColorMatrix
                  type='matrix'
                  values='0 0 0 0 0.0708333 0 0 0 0 0.4425 0 0 0 0 1 0 0 0 0.19 0'
                />
                <feBlend
                  mode='normal'
                  in2='shape'
                  result='effect1_innerShadow'
                />
              </filter>
            </defs>
          </svg>
          <svg
            className={styles.stroke_hexagon_svg_1}
            width='38'
            height='42'
            viewBox='0 0 38 42'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M18.0138 1.70844C18.6256 1.3617 19.3745 1.3617 19.9862 1.70844L27.635 6.04379L35.2139 10.5001C35.82 10.8566 36.1945 11.5051 36.2001 12.2083L36.27 21L36.2001 29.7917C36.1945 30.4949 35.82 31.1434 35.2139 31.4999L27.635 35.9562L19.9862 40.2916C19.3744 40.6383 18.6256 40.6383 18.0138 40.2916L10.365 35.9562L2.78612 31.4999C2.17996 31.1434 1.80551 30.4949 1.79992 29.7917L1.73003 21L1.79992 12.2083C1.80551 11.5051 2.17996 10.8566 2.78612 10.5001L10.365 6.04378L18.0138 1.70844Z'
              stroke='white'
              strokeOpacity='0.47'
              strokeWidth='2'
            />
          </svg>
          <svg
            className={styles.stroke_hexagon_svg_2}
            width='86'
            height='65'
            viewBox='0 0 86 65'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M44.2393 1.83847L43.7462 2.70844L44.2393 1.83847ZM63.64 12.8348L64.1469 11.9728L64.1331 11.9648L63.64 12.8348ZM82.8634 24.1381L82.3566 25.0001L82.8634 24.1381ZM84.3427 26.7003L85.3427 26.6924L84.3427 26.7003ZM84.52 49L85.5199 49.0123L85.52 48.9921L84.52 49ZM1 49L0 48.9921V49H1ZM1.17727 26.7003L2.17724 26.7083L1.17727 26.7003ZM2.65657 24.1381L3.16344 25.0001H3.16344L2.65657 24.1381ZM21.88 12.8348L21.3869 11.9648L21.3731 11.9728L21.88 12.8348ZM41.2807 1.83847L41.7738 2.70844V2.70844L41.2807 1.83847ZM43.7462 2.70844L63.1469 13.7048L64.1331 11.9648L44.7324 0.968495L43.7462 2.70844ZM63.1331 13.6968L82.3566 25.0001L83.3703 23.2761L64.1469 11.9728L63.1331 13.6968ZM83.3428 26.7083L83.52 49.0079L85.52 48.9921L85.3427 26.6924L83.3428 26.7083ZM83.5201 48.9877L83.3293 64.4877L85.3291 64.5123L85.5199 49.0123L83.5201 48.9877ZM2 64.5V49H0V64.5H2ZM1.99997 49.0079L2.17724 26.7083L0.177299 26.6924L3.15905e-05 48.9921L1.99997 49.0079ZM3.16344 25.0001L22.3869 13.6968L21.3731 11.9728L2.1497 23.2761L3.16344 25.0001ZM22.3731 13.7048L41.7738 2.70844L40.7876 0.968496L21.3869 11.9648L22.3731 13.7048ZM2.17724 26.7083C2.18283 26.0051 2.55728 25.3566 3.16344 25.0001L2.1497 23.2761C0.937378 23.9889 0.188479 25.2861 0.177299 26.6924L2.17724 26.7083ZM82.3566 25.0001C82.9627 25.3566 83.3372 26.0051 83.3428 26.7083L85.3427 26.6924C85.3315 25.2861 84.5826 23.9889 83.3703 23.2761L82.3566 25.0001ZM44.7324 0.968495C43.5089 0.275014 42.0111 0.275016 40.7876 0.968496L41.7738 2.70844C42.3856 2.3617 43.1345 2.3617 43.7462 2.70844L44.7324 0.968495Z'
              fill='white'
              fillOpacity='0.9'
            />
          </svg>
          <svg
            className={styles.fill_circle_svg}
            width='54'
            height='54'
            viewBox='0 0 54 54'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <g filter='url(#filter0_d)'>
              <circle cx='27' cy='23' r='6' fill='white' />
            </g>
            <defs>
              <filter
                id='filter0_d'
                x='0'
                y='0'
                width='54'
                height='54'
                filterUnits='userSpaceOnUse'
                colorInterpolationFilters='sRGB'
              >
                <feFlood floodOpacity='0' result='BackgroundImageFix' />
                <feColorMatrix
                  in='SourceAlpha'
                  type='matrix'
                  values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
                  result='hardAlpha'
                />
                <feMorphology
                  radius='3'
                  operator='dilate'
                  in='SourceAlpha'
                  result='effect1_dropShadow'
                />
                <feOffset dy='4' />
                <feGaussianBlur stdDeviation='9' />
                <feComposite in2='hardAlpha' operator='out' />
                <feColorMatrix
                  type='matrix'
                  values='0 0 0 0 0.0708333 0 0 0 0 0.4425 0 0 0 0 1 0 0 0 0.25 0'
                />
                <feBlend
                  mode='normal'
                  in2='BackgroundImageFix'
                  result='effect1_dropShadow'
                />
                <feBlend
                  mode='normal'
                  in='SourceGraphic'
                  in2='effect1_dropShadow'
                  result='shape'
                />
              </filter>
            </defs>
          </svg>
          <svg
            className={styles.gradient_circle_svg}
            width='25'
            height='25'
            viewBox='0 0 25 25'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <circle cx='12.5' cy='12.5' r='12.5' fill='url(#paint0_linear)' />
            <defs>
              <linearGradient
                id='paint0_linear'
                x1='35.4167'
                y1='4.39791e-07'
                x2='-7.47645e-07'
                y2='17.7083'
                gradientUnits='userSpaceOnUse'
              >
                <stop stopColor='#0047FF' />
                <stop offset='1' stopColor='#00F0FF' />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default StepDegreeCourses;
