import * as SHARED_VARIABLES from 'alt:shared-variables'

export const EVENTS = {
    CLIENT: {
      LOGIN: 'auth:loginUser',
      RESET_PASSWORD: 'auth:resetPasswordUser',
      OTP_VALIDATE: 'auth:otpValidate',
    },
    SERVER: {
      LOGIN_SUCCESS: 'auth:successAuthUser',
      LOGIN_FAIL: 'auth:failAuthUser',
      RESET_SUCCESS: 'auth:successResetPasswordUser',
      RESET_FAIL: 'auth:failResetPasswordUser',
      OTP_SUCCESS: 'auth:successOtpUser',
      OTP_FAIL: 'auth:novalidOtpUser',
    }
  };
  
  export const API_URL = `${SHARED_VARIABLES.API_URL}/v1/auth/login`;
  export const FRONTEND_URL = `${SHARED_VARIABLES.FRONTEND_URL}`;