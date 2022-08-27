import {
   Box, Button,
   Center,
   Flex,
   Heading,
   Input
} from "@chakra-ui/react";
import {STYLED_THEME} from "../../shared/config";
import InputsFrom from "../../features/form/inputs";
import {useLocation} from "react-router";

export const Filtres = () => {
   const {pathname} = useLocation();

   return(
      <Center>
         {pathname === '/' || window.accountId !== '' &&
             <Box
                 bg={STYLED_THEME.BG_FILTRES}
                 w='70%'
                 p={4}
                 mt={10}
                 color={STYLED_THEME.COLOR}
                 borderRadius={15}
             >
                 <Flex
                     flexDirection="column"
                     justifyContent="space-between"
                     alignItems="center"
                 >
                     <Heading as='h2' size='xl'>Filtres</Heading>

                     <Box mt={5}>
                        {pathname === '/deposits' &&
                            <InputsFrom placeholder='Watched tokens' type='tokens'/>
                        }

                         <InputsFrom placeholder='Contract Ids' type='contracts'/>
                         <InputsFrom placeholder='Limit' type='limit'/>

                         <InputsFrom placeholder='From' type='from'/>
                         <InputsFrom placeholder='To' type='to'/>
                     </Box>
                 </Flex>
             </Box>
         }
      </Center>
   )
}