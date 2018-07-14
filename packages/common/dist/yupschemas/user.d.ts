import * as yup from "yup";
export declare const emailNotLongEnough = "email must be at least 3 characters";
export declare const passwordNotLongEnough = "password must be at least 3 characters";
export declare const invalidEmail = "email must be a valid email";
export declare const registerPasswordValidation: yup.StringSchema;
export declare const validUserSchema: yup.ObjectSchema<{}>;
