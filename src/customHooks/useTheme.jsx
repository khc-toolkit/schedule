// hooks
import useRedux from "./useRedux";

// slices action
import { setTheme as setThemeAction } from "../store/slices/themeSlice.slice";

export default function useTheme() {
  const [themeData, dispatch] = useRedux("themeSlice");
  const { theme } = themeData;

  const setTheme = (newTheme) => {
    dispatch(setThemeAction(newTheme));
  };

  return [theme, setTheme];
}
