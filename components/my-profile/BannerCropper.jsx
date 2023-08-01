import {
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	Heading,
	ModalCloseButton,
	ModalBody,
	ModalFooter,
	Button,
} from '@chakra-ui/react'
import { useEffect, useRef } from 'react'
import { Cropper } from 'react-advanced-cropper'
import 'react-advanced-cropper/dist/style.css'

const BannerCropper = ({
	isCroppingModalOpen,
	setCroppingModal,
	handleSave,
	photoLink,
	ratio,
}) => {
	const cropperRef = useRef(null)

	// useEffect(() => {
	// 	console.log(photoLink)
	// }, [photoLink])
	return (
		<Modal
			isCentered
			onClose={() => setCroppingModal(false)}
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
						src={photoLink}
						className={'cropper'}
						stencilProps={{
							movable: true,
							aspectRatio: ratio || 4 / 3,
						}}
					/>
				</ModalBody>
				<ModalFooter>
					<Button size="sm" mr={3} onClick={() => setCroppingModal(false)}>
						Close
					</Button>
					<Button
						variant="solid"
						colorScheme="primary"
						size="sm"
						onClick={() => handleSave(cropperRef)}
					>
						Save
					</Button>
				</ModalFooter>
			</ModalContent>
		</Modal>
	)
}

export default BannerCropper
