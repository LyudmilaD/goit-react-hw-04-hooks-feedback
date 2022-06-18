import PropTypes from 'prop-types';
import styles from './feedbackStyles.module.css';

const Statistics = ({ stat, total, positivePercentage }) => {
  return (
    <>
      {Object.entries(stat).map(([key, value]) => (
        <p className={styles.text} key={key}>
          {key}: {value}
        </p>
      ))}
      <p className={styles.text}> Total: {total}</p>
      <p className={styles.text}> Positive feedback: {positivePercentage}%</p>
    </>
  );
};
Statistics.propTypes = {
  stat: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }).isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
export default Statistics;
