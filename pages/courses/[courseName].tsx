import { useRouter } from 'next/router';

import styles from './DynamicCourses.module.scss';
import CourseDescription from '../../components/CourseDescription/CourseDescription';

const DynamicCourses = () => {
  const router = useRouter();
  // router.query.courseName;
  // console.log(router);
  // Call to backend
  const dummy_course = {
    courseId: '60cae54b18419ecedac7a52d',
    courseName: 'Web Development',
    coursePrice: 6000,
    courseImg:
      'https://images.pexels.com/photos/4348791/pexels-photo-4348791.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    courseInclude: [
      '70 Hrs. Live Classes',
      '50+ Topics Covered',
      'One to One Interaction with mentor',
      'Certificate of completion'
    ],
    courseBy: {
      instructorId: '60cae54b18419ecedac7a52d',
      instructorName: 'Admin'
    },
    courseLevel: 'Intermediate',
    courseCategory: ['professional', 'student'],
    courseDuration: 70,
    totalEnrolledStudents: 5,
    lastUpdated: '17/06/2021, 11:39:20',
    smallDescription:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa nisi illum veniam, doloribus quam eius!',
    largeDescription:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis mollitia repellat laboriosam at obcaecati nulla in quia fuga, eos cumque repudiandae vero porro dignissimos aliquam delectus sed ipsum ullam. Cumque maiores asperiores eligendi iure? Saepe autem eos cum exercitationem numquam unde eveniet laborum dolore hic. Cupiditate dolor corrupti, quaerat maiores mollitia est expedita incidunt ipsa beatae eligendi eius, illo dolorem quidem quos ut. Incidunt voluptates nisi libero, reprehenderit recusandae, ea officiis eos quidem asperiores possimus ducimus commodi ipsam cum maxime deserunt a tempore perspiciatis dicta quos. Accusamus sint vel voluptatem amet qui saepe delectus provident modi sit maxime, et totam.',
    whatWillYouLearnDesp: [
      'Build website from scratch',
      'Help customer reach the global market'
    ],
    topicsOfCourse: [
      {
        topicName: 'HTML: Introduction',
        topics: [
          'Introduction to HTML',
          'Heading Element',
          'Paraggraph Element',
          'Introduction to Chrome Inspector',
          'HTML Boilerplate',
          'List Elements',
          'Anchor Tags',
          'Images',
          'Comments'
        ],
        _id: '60cd8f716d82360c9744c393'
      },
      {
        topicName: 'HTML 5 & Semantic Tags',
        topics: [
          'What Exactly Is HTML5?',
          'Block vs. Inline Elements - Divs and Spans',
          'Intro to Semantic Markup',
          'Playing With Semantic Elements',
          'Screen Reader Demonstration',
          'VSCode Tip: Emmet'
        ],
        _id: '60cd8f716d82360c9744c393'
      },
      {
        topicName: 'HTML forms & tables',
        topics: [
          'Introduction HTML Tables',
          'Tables: TR, TD, and TH Elements',
          'Tables: Thead, Tbody, and Tfoot Elements',
          'Tables: Colspan & Rowspan',
          'The Form Element',
          'Common Input Types',
          'The All-Important Label',
          'HTML Buttons',
          'The Name Attribute',
          'Radio Buttons, Checkboxes, & Selects',
          'Range & Text Area'
        ],
        _id: '60cd8f716d82360c9744c393'
      },
      {
        topicName: 'Introduction to CSS',
        topics: [
          'What is CSS?',
          'Color & Background-Color Properties',
          'Colors Systems: RGB & Named Colors',
          'Colors Systems: Hexadecimal',
          'A Reminder On Semicolons & CSS',
          'Common Text Properties',
          'Font Size Basics With Pixels',
          'The Font Family Property'
        ],
        _id: '60cd8f716d82360c9744c393'
      }
    ],
    ratings: 4,
    requirements: ['Computer', 'Active Internet connection'],
    tags: ['frontend', 'backend', 'database', 'full-stack'],
    targetAudience: ['Anyone who is willing to invest his time']
  };

  return (
    <>
      <CourseDescription course={dummy_course} />
    </>
  );
};

export default DynamicCourses;
