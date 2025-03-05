enum ResponseCode {
    SUCCESS = "SU",

     // HTTP Status 400
     VALIDATION_FAILED = "VF",
     DUPLICATE_FAILED = "DE",
     DUPLICATE_NICKNAME = "DN",
     DUPLICATE_TEL_NUMBER = "DT",
     NOT_EXISTED_USER = "NU",
     NOT_EXISTED_BOARD = "NB",
 
     // HTTP Status 401
     SIGN_IN_FAIL = "SF",
     AUTHORIZATION_FAIL = "AF",
 
     // HTTP Status 401
     NO_PERMISSION = "NP",
     // HTTP Status 500
     DATABASE_ERROR = "DBE"
}

export default ResponseCode;