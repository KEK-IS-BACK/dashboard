import {useState, useEffect} from 'react'
import {useDispatch} from "react-redux";
import {getOwnerData} from "../redux/authReducer";

const useInitial = (isAuth) => {
  const [isInitialized, setIsInitialized] = useState(false)
  const dispatch = useDispatch()

  useEffect(() => {
    if (!isInitialized && !isAuth && localStorage.getItem('userToken')) {
      setIsInitialized(true)
      dispatch(getOwnerData())
    } else {
      setIsInitialized(true)
    }
  }, [])

  return isInitialized
}

export default useInitial