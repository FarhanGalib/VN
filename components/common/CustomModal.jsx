import { Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay } from "@chakra-ui/react"

const CustomModal = ({
	isOpen,
	onClose,
	motionPreset = 'slideInBottom',
	Heading,
	modalBody,
	modalFooter,
    handleSave,
}) => {
	return (
		<Modal
			isCentered
			onClose={() => onClose()}
			isOpen={isOpen}
			motionPreset={motionPreset}
		>
			<ModalOverlay />
			<ModalContent>
				<ModalHeader>{Heading}</ModalHeader>
				<ModalCloseButton />
				<ModalBody>{modalBody}</ModalBody>
				<ModalFooter>
					{modalFooter}
					{/* <Button size="sm" mr={3} onClick={() => setCroppingModal(false)}>
						Close
					</Button>
					<Button
						variant="solid"
						colorScheme="primary"
						size="sm"
						onClick={() => handleSave(cropperRef)}
					>
						Save
					</Button> */}
				</ModalFooter>
			</ModalContent>
		</Modal>
	)
}

export default CustomModal
