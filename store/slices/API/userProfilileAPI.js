import { getApi, postApi } from 'utils/utils'

export const postProfilePhoto = async (data = {}) =>
	await postApi(`/update-profile-image`, data)

export const postBannerPhoto = async (data = {}) =>
	await postApi(`/update-banner`, data)

export const getMyProfile = async (params = {}) =>
	await getApi(`/my-profile`, params)

export const getIdentityTypeList = async (params = {}) =>
	await getApi(`/identity-types`, params)

export const saveProfile = async (data = {}) =>
	await postApi(`/update-profile`, data)

