// hooks
import useRedux from '../customHooks/useRedux';

// slice actions
import { 
  updateOption as updateOptionAction,
} from "../store/slices/settingsSlice.slice.js";

export default function useSettingsOption(optionData) {
  const { key, defaultValue } = optionData;

  const [ settingsData, dispatch ] = useRedux("settingsSlice");
  const { options } = settingsData;
  const optionValue = options[key] ?? defaultValue;

  const toggleOption = () => {
    dispatch(updateOptionAction({
      key: key,
      value: !optionValue,
    }));
  }

  return [optionValue, toggleOption];
}