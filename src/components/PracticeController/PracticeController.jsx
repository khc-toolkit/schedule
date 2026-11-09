// components
import PracticeArtemisTheme from '../PracticeArtemisTheme';
import Practice from '../Practice/Practice';

// hook
import useTheme from '../../customHooks/useTheme';

export default function PracticeController({ data }) {
  const [theme] = useTheme();

  const isArtemisTheme = theme === 'colors_artemis_2';

  if (isArtemisTheme) {
    return <PracticeArtemisTheme data={data}/>
  }

  return <Practice data={data}/>
}