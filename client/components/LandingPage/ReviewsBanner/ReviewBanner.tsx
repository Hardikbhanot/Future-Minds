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
  const onPaginationBtnChange = (event: ChangeEvent) => {
    console.log(event);
    const paginationBtnClicked: string = event.target?.defaultValue;
    if (review_container && review_container.current) {
      // console.log(review_container.current);
      if (paginationBtnClicked === 'paginationBtn1') {
        review_container.current.scrollLeft -=
          first_review.current.offsetWidth * 2.2;
      } else if (paginationBtnClicked === 'paginationBtn2') {
        review_container.current.scrollLeft +=
          second_review.current.offsetWidth * 0.6;
      } else {
        review_container.current.scrollLeft +=
          third_review.current.offsetWidth * 2.2;
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
          onChange={(event: ChangeEvent) => onPaginationBtnChange(event)}
        />
        <input
          type='radio'
          name='paginationBtn'
          value='paginationBtn2'
          className={styles.pagination_btn}
          onChange={(event: ChangeEvent) => onPaginationBtnChange(event)}
        />
        <input
          type='radio'
          name='paginationBtn'
          value='paginationBtn3'
          className={styles.pagination_btn}
          onChange={(event: ChangeEvent) => onPaginationBtnChange(event)}
        />
      </div>
    </section>
  );
};

export default Review;
