import {
	AspectRatio,
	Box,
	Button,
	Flex,
	Heading,
	Icon,
	Image,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalFooter,
	ModalHeader,
	ModalOverlay,
} from '@chakra-ui/react'
import { FiEdit } from 'react-icons/fi'
import { AiFillDelete } from 'react-icons/ai'
import 'react-advanced-cropper/dist/style.css'
import { useRef, useState } from 'react'
import addItemStyles from 'styles/addItem.module.css'
import { Cropper } from 'react-advanced-cropper'

const CropImage = (
	{ img, imageData: { itemImages, setItemImages }, index, removeImage },
	setCoordinates
) => {
	const cropperRef = useRef(null)
	const [isCroppingModalOpen, setCroppingModal] = useState(true)
	const [canvas, setCanvas] = useState(null)
	const onCrop = (cropper) => {
		setCoordinates && setCoordinates(cropper.getCoordinates(), index)
		console.log('canvas', cropper.getCanvas())
		setCanvas(cropper.getCanvas())
	}
	const handleSave = () => {
		const cropper = cropperRef.current
		if (cropper) {
			const canvas = cropper.getCanvas()
			setCanvas(canvas.toDataURL())
		}
		setCroppingModal(false)
	}

	return (
		<>
			<Box
				key={Date.now() / 1000}
				className={`${addItemStyles.uploadBox} ${addItemStyles.imageBox}`}
			>
				{canvas && (
					<AspectRatio ratio={1}>
						<Image
							// src={`${img}?width=${itemImages[index]?.coordinates?.width}&height=${itemImages[index]?.coordinates?.height}&left=${itemImages[index]?.coordinates?.left}&top=${itemImages[index]?.coordinates?.top}`}
							src={canvas}
							alt={''}
							fit="cover"
							className={addItemStyles.singleImage}
						/>
					</AspectRatio>
				)}

				<Box pos={`absolute`} bottom={`5px`} right={`5px`}>
					<Flex px={2} py={1} bg={`primary.50`} gap={3} borderRadius={`5px`}>
						{/* <FiEdit
							as={Icon}
							className={addItemStyles.editIcon}
							bg="primary"
							cursor={`pointer`}
							title="Edit"
							onClick={() => setCroppingModal(true)}
						/> */}
						<AiFillDelete
							as={Icon}
							cursor={`pointer`}
							className={addItemStyles.deleteIcon}
							color="primary.500"
							bg="primary"
							title="Delete"
							onClick={() => removeImage(index)}
						/>
					</Flex>
				</Box>

				<Modal
					isCentered
					onClose={() => false}
					closeOnOverlayClick={false}
					isOpen={isCroppingModalOpen}
					motionPreset="slideInBottom"
				>
					<ModalOverlay />
					<ModalContent>
						<ModalHeader>
							<Heading size="sm">Crop</Heading>
						</ModalHeader>
						<ModalCloseButton />
						<ModalBody>
							<Cropper
								ref={cropperRef}
								src={img}
								// onChange={onCrop}
								className={'cropper'}
								stencilProps={{
									movable: true,
									aspectRatio: 1 / 1,
								}}
							/>
						</ModalBody>
						<ModalFooter>
							{/* <Button size="sm" mr={3} onClick={() => setCroppingModal(false)}>
								Close
							</Button> */}
							<Button
								variant="solid"
								colorScheme="primary"
								size="sm"
								onClick={handleSave}
							>
								Save
							</Button>
						</ModalFooter>
					</ModalContent>
				</Modal>
			</Box>
		</>
	)
}

export default CropImage
