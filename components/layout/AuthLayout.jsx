import AuthAlertComponent from 'components/common/AuthAlertComponent'
import { useSelector, useDispatch } from 'react-redux'
import { Flex, Text } from '@chakra-ui/react'
import { setTokenLoader } from '../../store/slices/authSlice'
import { useEffect } from 'react'
const AuthLayout = ({ children }) => {
	const authData = useSelector((state) => state.auth);
	const { isTokenLoader, isSignedIn, token, user } = authData;
	const dispatch = useDispatch();

	let Token
	useEffect(() => {
		if (isSignedIn) {
			dispatch(setTokenLoader(false));
		}
		return;
		// Token = localStorage.getItem('token')
	}, [authData])

	return (
		<>
			{
				token && user ? children : <AuthAlertComponent />
			}
		</>
	)
}

export default AuthLayout
