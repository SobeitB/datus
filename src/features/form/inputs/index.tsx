import {STYLED_THEME} from "../../../shared/config";
import {Input} from "@chakra-ui/react";
import {PropsInput} from "./types";
import {useImplementation} from "./helpers";
import { memo } from "react";

const InputsFrom = ({placeholder, type}:PropsInput) => {
   const state:any = useImplementation(type);

   return(
      <Input
         variant='outline'
         bg={STYLED_THEME.BG_INPUTS}
         color={STYLED_THEME.COLOR_INPUTS}
         borderWidth={2}
         borderColor={STYLED_THEME.BODER_FORMS}
         size='md'

         placeholder={placeholder}
         mt={type !== 'tokens' ? '10px' : 0}
         value={state[type]}
         onChange={state.onChange}
         type={type === 'to' || type === 'from' ? 'date' : 'text'}
      />
   );
}

export default memo(InputsFrom)