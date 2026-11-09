// hooks
import useRedux from '../customHooks/useRedux';

// slice actions
import { 
	updateVersion as updateVersionAction
} from "../store/slices/versionSlice.slice";

export default function useVersion(key, lastVersion) {
	const [versionData, dispatch] = useRedux("versionSlice");
	const versions = versionData.versions;
	const version = +versions[key];

	const isShowUpdate = lastVersion > version;
	
	const updateVersion = () => {
		if (isShowUpdate) {
			dispatch(updateVersionAction({ key, value: lastVersion }));
		}
	};

	return [isShowUpdate, updateVersion];
}