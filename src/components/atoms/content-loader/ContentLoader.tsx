import { css } from 'css';
import styles from './content-loader.module.scss';

export const ContentLoader = () => {
  return (
    <div
      style={css({
        height: '100%',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#787878'
      })}
    >
      <div className={styles.loader}></div>
    </div>
  );
};
