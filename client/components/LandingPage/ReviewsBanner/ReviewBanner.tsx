import { ChangeEvent, useRef, useEffect } from 'react';
import Image from 'next/Image';

import styles from './ReviewBanner.module.scss';

const Review = () => {
  const review_container = useRef<HTMLDivElement>(null);
  const first_review = useRef<HTMLDivElement>(null);
  const second_review = useRef<HTMLDivElement>(null);
  const third_review = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (review_container.current) {
      // console.log(
      //   Math.ceil(review_container.current?.scrollLeft),
      //   Math.ceil(review_container.current?.scrollTop)
      // );
    }
  }, [review_container]);

  // scroll left or right
  const onPaginationBtnChange = (event: ChangeEvent<HTMLInputElement>) => {
    // console.log(event.target.value);
    const paginationBtnClicked: string = event.target.value;
    if (review_container && review_container.current) {
      // console.log(review_container.current);
      if (paginationBtnClicked === 'paginationBtn1' && first_review.current) {
        review_container.current.scrollLeft -=
          first_review.current.offsetWidth * 2.2;
      } else if (
        paginationBtnClicked === 'paginationBtn2' &&
        second_review.current
      ) {
        review_container.current.scrollLeft +=
          second_review.current.offsetWidth * 0.6;
      } else {
        if (third_review.current) {
          review_container.current.scrollLeft +=
            third_review.current.offsetWidth * 2.2;
        }
      }
    }
  };

  return (
    <section className={styles.review_section}>
      <div className={styles.review_container} ref={review_container}>
        <div className={styles.review_card} ref={first_review}>
          <p className={styles.review}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
            illum inventore repudiandae animi, ab iusto! Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Asperiores illum inventore
            repudiandae animi, ab iusto!Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Asperiores illum inventore repudiandae animi, ab
            iusto!
          </p>
          <div className={styles.reviewer_profile}>
            <Image
              src='/images/user1.jpg'
              alt='Picture of the reviewer'
              width={50}
              height={50}
            />
            <div className={styles.reviewer_details}>
              <h3 className={styles.reviewer_name}>Ayush Yadav</h3>
              <p className={styles.reviewer_position}>Web developer</p>
            </div>
          </div>
        </div>
        <div className={styles.review_card} ref={second_review}>
          <p className={styles.review}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
            illum inventore repudiandae animi, ab iusto! Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Asperiores illum inventore
            repudiandae animi, ab iusto! Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Asperiores illum inventore repudiandae animi, ab
            iusto!
          </p>
          <div className={styles.reviewer_profile}>
            <Image
              src='/images/user2.jpg'
              alt='Picture of the reviewer'
              width={50}
              height={50}
            />
            <div className={styles.reviewer_details}>
              <h3 className={styles.reviewer_name}>Ayush Yadav</h3>
              <p className={styles.reviewer_position}>Web developer</p>
            </div>
          </div>
        </div>
        <div className={styles.review_card} ref={third_review}>
          <p className={styles.review}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
            illum inventore repudiandae animi, ab iusto! Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Asperiores illum inventore
            repudiandae animi, ab iusto! Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Asperiores illum inventore repudiandae animi, ab
            iusto!
          </p>
          <div className={styles.reviewer_profile}>
            <Image
              src='/images/user3.jpg'
              alt='Picture of the reviewer'
              width={50}
              height={50}
            />
            <div className={styles.reviewer_details}>
              <h3 className={styles.reviewer_name}>Ayush Yadav</h3>
              <p className={styles.reviewer_position}>Web developer</p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.review_pagination_container}>
        <input
          type='radio'
          name='paginationBtn'
          value='paginationBtn1'
          defaultChecked
          className={styles.pagination_btn}
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            onPaginationBtnChange(event)
          }
        />
        <input
          type='radio'
          name='paginationBtn'
          value='paginationBtn2'
          className={styles.pagination_btn}
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            onPaginationBtnChange(event)
          }
        />
        <input
          type='radio'
          name='paginationBtn'
          value='paginationBtn3'
          className={styles.pagination_btn}
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            onPaginationBtnChange(event)
          }
        />
      </div>
      <div className={styles.review_animation}>
        <svg
          width='193'
          height='280'
          viewBox='0 0 193 280'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
          xmlnsXlink='http://www.w3.org/1999/xlink'
        >
          <path d='M193 0H0V280H193V0Z' fill='url(#pattern0)' />
          <defs>
            <pattern
              id='pattern0'
              patternContentUnits='objectBoundingBox'
              width='1'
              height='1'
            >
              <use
                xlinkHref='#image0'
                transform='translate(-0.0791984) scale(0.00562329 0.00387597)'
              />
            </pattern>
            <image
              id='image0'
              width='206'
              height='258'
              xlinkHref='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAM4AAAECCAMAAACBnBiNAAAAjVBMVEUAAAAlKjr9SVQlKjolKjolKjolKjr9SVQlKjr9SVQlKjolKjolKjolKjolKjolKjolKjolKjolKjolKjr9SVQlKjr9SVT9SVT9SVT9SVT9SVT9SVQlKjr9SVT9SVT9SVT9SVQlKjr9SVQlKjr9SVT9SVT9SVT9SVT9SVT9SVT9SVT9SVT9SVQlKjolKjowYtpLAAAAL3RSTlMAurqzF50JBaYND4KTMCGrOYt4KKBCGrOrppqTbiEUKLBNi2N4gmNXQjhuTTBYLBBKOvcAAAJnSURBVHja7d3JTuNQFEXR58QhjdMHKPo2VVQVhP//PIjCJAYh2chXJ8d7D4/0BmtyJY+cfNosk1GbLDPyvGuMPI/Ztk3yCI1uaHRDo5uj5j55hEY3NLp5aa7QyIZGNzS6OWpOkkdodEOjm5dmiUY2NLqh0c1Q0/XSzJNHaHRDI1vfS1OgUQ2Nbmh0Q6Pbh2aSLEKjGxrdjrw0CzSqodENjW6WmlWyCI1uaHQz04zRqIZGNzS6OWpmXpppsgiNbmh0G3lpemhUQ6MbGt0cNYM8WYRGNzS6eWlyNLKh0Q2NbkGa/sPTl/uhajqdAM9O04vQfOU5ZM3dbXlHg+a7RrmVplf1CA6DNINamqpHfXiprcmysZVmkKPZS0KTo0EjrTm7Ls0NaUZo0OyHpiFNT08zDdJcxGhmaNCgidEM0IRpxjGa8yDNUYzmtDSjQYPmsDUVDuFNjGbVjdEco0HTds3USzNDE6ZZxGiOvTQ3pRkNmtZpxnqayQ80FR6demnO0aBpu2blpemiCdMUMZqLYXlvRtNHg6YUmmY0Cz3NPEZzfYYGTds1r1aaCZo4zTJGcxmkSWjQ7IemIU2hpzmppal81m+DNFmM5g4NmrZr5mjQ1NNcxWgeyi/QoEFz0JplktPcx2hefqFBg8ZJM7LSbL9wnDRbT3XN7xjNY6rRVE+TitqaJKhJ/cJJs/U4aT6H5tv+oZENjW5odEOj206z9tIkj9Dohka3vx00qqHRDY1uaHTbaf4nj9DohkY3L80zGtnQ6IZGN0fNn+QRGt3Q6OaleUIjGxrd0OiGRrj17i+/Nq2tNO8eWc0bpeFvY7T+NOsAAAAASUVORK5CYII='
            />
          </defs>
        </svg>
      </div>
    </section>
  );
};

export default Review;
