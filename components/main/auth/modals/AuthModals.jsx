import React from 'react';
import SigninModal from './SigninModal'
import SignUpModal from './SignUpModal'
import ForgetPasswordModal from './ForgetPasswordModal'
import OtpModal from './OtpModal'
import ForgetPasswordSubmitModal from './ForgetPasswordSubmitModal'

const AuthModals = () => {
  return (
    <>
      <SigninModal />
      <SignUpModal />
      <ForgetPasswordModal/>
      <OtpModal/>
      <ForgetPasswordSubmitModal/>
    </>
  );
};

export default AuthModals;