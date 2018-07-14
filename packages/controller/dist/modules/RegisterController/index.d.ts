import * as React from "react";
import { RegisterMutationVariables } from "./__generated__/RegisterMutation";
interface Props {
    children: (data: {
        submit: (values: RegisterMutationVariables) => Promise<null>;
    }) => JSX.Element | null;
}
export declare const RegisterController: React.ComponentClass<Props>;
export {};
