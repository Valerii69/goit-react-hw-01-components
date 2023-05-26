import PropTypes from 'prop-types';
import css from './Statistics.module.css';

function getRandomHexColor() {
    return `#${Math.random()
      .toString(16)
      .slice(5,8)}`;
  }

export const Statistics = ({ title, stats }) => {
  return (
    <section className={css.statistics}>

      {title && <h2 className={css.title}>{title}</h2>}

      <ul className={css.statlist}>
      {stats.map(({ id, label, percentage }) => (
          <li
            key={id}
            className={css.item}
            style={{ border: "2px", borderRadius: 4, backgroundColor: getRandomHexColor() }}
          >
            <span className={css.label}>{label}</span>
            <span className={css.percentage}>{percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
    title: PropTypes.string,
    data: PropTypes.exact({
      id: PropTypes.number.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  };
console.log(Statistics)