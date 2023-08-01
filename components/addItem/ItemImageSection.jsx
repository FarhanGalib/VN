import { Box, Flex } from '@chakra-ui/react'

import 'react-advanced-cropper/dist/style.css'
import { useRef, useState } from 'react'
import { RiImageAddFill } from 'react-icons/ri'
import addItemStyles from 'styles/addItem.module.css'
import CropImage from './CropImage'
import { setCoordinates } from 'react-advanced-cropper'

const ItemImageSection = ({ imageData: { itemImages, setItemImages } }) => {
	const inputRef = useRef()
	const [imageFiles, setImageFiles] = useState([])
	const [imageLinks, setImageLinks] = useState([])

	const onSelectFile = (e) => {
		if (e.target.files && e.target.files.length > 0) {
			let imgFiles = imageFiles
			imgFiles.push(e.target.files[0])

			let imgLinks = imageLinks
			imgLinks.push(URL.createObjectURL(e.target.files[0]))

			let itemImgs = itemImages
			itemImgs.push({
				imageFile: e.target.files[0],
				width: '',
				height: '',
				left: '',
				top: '',
			})

			setImageFiles(() => [...imgFiles])
			setImageLinks(() => [...imgLinks])
			setItemImages(() => [...itemImgs])
		}
	}

	const removeImage = (index) => {
		let imgFiles = imageFiles
		imgFiles.splice(index, 1)

		let imgLinks = imageLinks
		imgLinks.splice(index, 1)

		let itemImgs = itemImages
		itemImgs.splice(index, 1)

		setImageFiles(() => [...imgFiles])
		setImageLinks(() => [...imgLinks])
		setItemImages(() => [...itemImgs])
	}

	const setCoordinates = (coordinates = {}, index) => {
		const itemImagesCopy = itemImages
		itemImagesCopy[index] = { ...itemImages, ...coordinates }
		setItemImages(()=>[...itemImagesCopy])
	}

	return (
		<>
			<Flex
				gap={6}
				direction={{ base: 'column', sm: 'column', md: 'row', lg: 'row' }}
			>
				{/* <Grid w={{ base: '100%', sm: '100%', md: '30%', lg: '30%' }}> */}

				{imageLinks &&
					imageLinks.length > 0 &&
					imageLinks.map((imgLink, index) => (
						<CropImage
							key={imgLink}
							index={index}
							img={imgLink}
							imageData={{ itemImages, setItemImages }}
							removeImage={removeImage}
							setCoordinates={setCoordinates}
						/>
					))}

				<Box className={addItemStyles.uploadBox}>
					<Box>
						<button
							className={addItemStyles.uploadBtn}
							onClick={() => inputRef.current.click()}
						>
							<RiImageAddFill
								style={{
									fontSize: '30px',
									color: '#ce0078',
									margin: '0 auto',
								}}
							/>
						</button>
						<input
							ref={inputRef}
							type="file"
							style={{ display: 'none' }}
							accept="image/*"
							onChange={(e) => {
								// setFiles(e, 'a')

								onSelectFile(e)
								// inputRef.current.value = null
							}}
						/>
					</Box>
				</Box>

				{/* </Grid> */}
			</Flex>
		</>
	)
}

export default ItemImageSection
