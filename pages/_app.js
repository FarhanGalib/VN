import '../styles/global.css'
import { ChakraProvider, extendTheme, Flex, Text } from '@chakra-ui/react'
import Head from 'next/head'
import Layout from '../components/layout/layout'
import { wrapper } from '../store/store'
import '@fontsource/ibm-plex-sans'
import theme from '../styles/theme'
import AuthModals from '../components/main/auth/modals/AuthModals'
import AuthAlertComponent from 'components/common/AuthAlertComponent'
import { useRef, useEffect } from 'react'
import { setAuth, setTokenLoader } from '../store/slices/authSlice'
import { useDispatch, useSelector } from 'react-redux'

const ViewPort = ({ Component, pageProps }) => {
	const { isTokenLoader, token } = useSelector((state) => state.auth)
	const auth = useRef(null)
	const dispatch = useDispatch()

	useEffect(() => {
		const token = localStorage.getItem('token')
		const user = localStorage.getItem('user')
			? JSON.parse(localStorage.getItem('user'))
			: ''
		if (token && user) {
			auth.current = { token, user }
			dispatch(setAuth(auth.current))
		}
	}, [])

	useEffect(() => {
		const tokenLS = localStorage.getItem('token')
		const userLS = localStorage.getItem('user')
		if (token) dispatch(setTokenLoader(false))
		if (!tokenLS && !userLS) {
			dispatch(setTokenLoader(false))
		}
	}, [token])

	if (isTokenLoader) {
		return (
			<Flex w={`100vw`} height={`100vh`} justify={`center`} align={`center`}>
				<Text>Loading...</Text>
			</Flex>
		)
	}
	
	if (!isTokenLoader) {
		return (
			<Layout>
				<AuthModals />
				{Component.PageLayout ? (
					Component.authLayout ? (
						<Component.authLayout>
							<Component.PageLayout breadCrumb={Component?.breadCrumb}>
								<Component {...pageProps} />
							</Component.PageLayout>
						</Component.authLayout>
					) : (
						<AuthAlertComponent />
					)
				) : (
					<Component {...pageProps} />
				)}
			</Layout>
		)
	}
}

const App = (props) => {
	return (
		<ChakraProvider theme={theme}>
			<Head>
				<link
					rel="stylesheet"
					href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
				/>
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
				<link
					href="https://fonts.googleapis.com/css2?family=Work+Sans:wght@300&display=swap"
					rel="stylesheet"
				/>
				<meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
				<meta name="description" content="Boilareplate" />
				<meta name="keywords" content="insurance" />
				<meta httpEquiv="Content-Security-Policy" content="upgrade-insecure-requests"/>
				<title>Varanin</title>
			</Head>
			<ViewPort {...props} />
		</ChakraProvider>
	)
}
export default wrapper.withRedux(App)
