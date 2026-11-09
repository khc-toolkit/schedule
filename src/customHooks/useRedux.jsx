// libs
import { useDispatch, useSelector } from "react-redux"

export default function useRedux(slice) {
  const dispatch = useDispatch();
  const data = useSelector(s => s[slice]);

  return [ data, dispatch ];
}
