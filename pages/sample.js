import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout/layout';
import utilStyles from '../styles/utils.module.css';
import { Button } from '@chakra-ui/react';
import { useSelector, useDispatch } from 'react-redux'
import Link from 'next/link';
import {
  Heading,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Text,
  Box
} from '@chakra-ui/react'
import { open, close } from '../store/slices/modalSlice'



export default function Home() {
  const modalValue = useSelector((state) => state.modal.open)

  const dispatch = useDispatch()

  return (
    <>
      <section className={utilStyles.headingMd}>
        <p>[Hello Team]</p>
        <Button colorScheme='brand'>Test Button</Button>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <Text textStyle='2xl'>Varanin Homepage</Text>
        <Link href="/reduxServersideprop">
          go to Redux
        </Link>
      </section>

      <Button colorScheme="primary" onClick={() => dispatch(open())}>Open Modal</Button>

      <Modal isOpen={modalValue} onClose={() => dispatch(close())}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            Testing Modal
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' onClick={() => dispatch(close())}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
