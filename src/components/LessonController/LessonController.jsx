// components
import Lesson from '../Lesson/Lesson';
import LessonArtemisTheme from '../LessonArtemisTheme';

// hooks
import useTheme from '../../customHooks/useTheme';

export default function LessonController({ data }) {
  const [theme] = useTheme();

  const isArtemisTheme = theme === 'colors_artemis_2';

  if (isArtemisTheme) {
    return <LessonArtemisTheme data={data}/>
  }

  return <Lesson data={data}/>
}