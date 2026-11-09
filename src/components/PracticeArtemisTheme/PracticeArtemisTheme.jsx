// components
import Practice from '../Practice/Practice';

// utils
import returnValueByLessonSlot from '../../utils/returnValueByLessonSlot';

// styles
import classes from './styles.module.css';

export default function PracticeArtemisTheme({ data }) {
  const { start } = data;
  const planetClassName = returnValueByLessonSlot(
    start,
    classes.root_1,
    classes.root_2,
    classes.root_3,
    classes.root_4,
  );

  return (
    <div className={`${classes.root} ${planetClassName}`}>
      <Practice data={data}/>
    </div>
  )
}