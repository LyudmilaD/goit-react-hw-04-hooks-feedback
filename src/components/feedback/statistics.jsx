import PropTypes from 'prop-types';
import styles from './feedbackStyles.module.css';

// const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
//   return (
//     <>
//       {Object.entries(good, neutral, bad, total, positivePercentage).map(
//         ([key, value]) => (
//           <p className={styles.text} key={key}>
//             {key}: {value}
//           </p>
//         )
//       )}
//       <p className={styles.text}> Total: {total}</p>
//       <p className={styles.text}> Positive feedback: {positivePercentage}%</p>
//     </>
//   );
// };
const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <>
      <h2 className={styles.title}>Statistics</h2>
      <ul className={styles.text}>
        <li>Good: {good}</li>
        <li>Neutral: {neutral}</li>
        <li>Bad: {bad}</li>
        <li>Total: {total}</li>
        <li>Positive feedback: {positivePercentage}%</li>
      </ul>
    </>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;