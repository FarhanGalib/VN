import {
	AspectRatio,
	Box,
	Button,
	Grid,
	Image,
	Input,
	Text,
} from '@chakra-ui/react'
import React, { useRef, useState } from 'react'
import editProfileStyles from 'styles/editProfile.module.css'
import { RiImageAddFill } from 'react-icons/ri'
import ImageCropper from 'components/common/ImageCropper'

const IdCardPhotoSection = ({ title, link, getFile, isRequired = false }) => {
	const [isCroppingModalOpen, setCroppingModal] = useState(false)
	const [photoLink, setPhotoLink] = useState(null)
	const [canvas, setCanvas] = useState(null)
	const [photoFile, setPhotoFile] = useState(null)

	const idPhotoRef = useRef(null)

	const handlePhotoChange = (e) => {
		if (e.target.files[0]) {
			setPhotoFile(e.target.files[0])
			setPhotoLink(URL.createObjectURL(e.target.files[0]))
			setCroppingModal(true)
		}
	}

	const handleBannerPhotoSave = (cropperRef) => {
		const cropper = cropperRef.current
		if (cropper) {
			const coordinates = cropper.getCoordinates()
			const canvas = cropper.getCanvas()
			getFile({ photo: photoFile, ...coordinates })
			setCanvas(canvas.toDataURL())
			setCroppingModal(false)
		}
	}

	return (
		<Box
			border={`1px solid #E2E8F0`}
			borderRadius={`8px`}
			height={{ base: `150px`, md: `200px` }}
			width={{ base: `150px`, md: `200px` }}
		>
			<Box
				width={`100%`}
				height={`100%`}
				overflow={`hidden`}
				cursor={`pointer`}
				display={`flex`}
				justifyContent={`center`}
				alignItems={`center`}
				onClick={() => idPhotoRef.current.click()}
			>
				{!canvas && !link ? (
					<RiImageAddFill
						w={`100%`}
						h={`100%`}
						style={{
							fontSize: '30px',
							color: '#ce0078',
							margin: '0 auto',
						}}
					/>
				) : (
					<AspectRatio
						ratio={1}
						maxH={{ base: '150px', md: '200px' }}
						w={{ base: '150px', md: '200px' }}
					>
						<Image
							src={canvas ? canvas : link}
							alt="barbecue"
							// layout="fill"
							fit="cover"
						/>
					</AspectRatio>
				)}

				<Input
					// isRequired={isRequired}
					ref={idPhotoRef}
					type="file"
					multiple
					style={{ display: 'none' }}
					onChange={(e) => {
						handlePhotoChange(e)
						idPhotoRef.current.value = null
					}}
				/>
			</Box>
			<Text align={`center`} fontSize={`sm`}>
				{title}
			</Text>
			<ImageCropper
				isCroppingModalOpen={isCroppingModalOpen}
				setCroppingModal={setCroppingModal}
				handleSave={handleBannerPhotoSave}
				photoLink={photoLink}
				ratio={1}
			/>
		</Box>
	)
}

export default IdCardPhotoSection
