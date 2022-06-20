import PropTypes from 'prop-types';
import styles from './feedbackStyles.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div>
      {options.map(item => (
        <button
          className={styles.button}
          key={item.name}
          type="button"
          onClick={() => onLeaveFeedback(item)}
        >
          {item.name}
        </button>
      ))}
    </div>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      value: PropTypes.number,
      onChange: PropTypes.func,
    })
  ),
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
