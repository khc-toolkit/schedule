// components
import ThemeButton from '../../components/ThemeButton';

// hooks
import useTheme from '../../customHooks/useTheme.jsx';

// constants
import themesData from '../../constants/themes.js';

// styles
import classes from './styles.module.css';

export default function ThemePage() {
  const [_theme, setTheme] = useTheme();
  const buttons = themesData;

  const onClickTheme = (className) => {
    setTheme(className);
  }

  return (
    <div className={classes.root}>
      {
        buttons.map(themeData =>
          <ThemeButton
            key={themeData.theme}
            themeData={themeData}
            onClickTheme={onClickTheme}
          />
        )
      }
    </div>
  )
}
