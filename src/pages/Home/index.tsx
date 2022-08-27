
import {Box, Button, Flex, Heading} from "@chakra-ui/react";
import {useNavigate} from "react-router";
import {STYLED_THEME} from "../../shared/config";

const Home = () => {
   const navigate = useNavigate();
   const onNavigate = (url:string) => () => {
      navigate(url);
   }

   return(
      <Flex
         flexWrap="wrap"
         justifyContent="center"
         mt="30px"
      >
         {window.accountId !== '' ?
             <>
                 <Box
                     bg={STYLED_THEME.BG}
                     width='300px'
                     m="0 5px 15px 5px"
                     maxW='sm'
                     borderWidth='1px'
                     borderRadius='lg'
                     overflow='hidden'
                 >
                     <Box p='6'>
                         <Box
                             mt='1'
                             fontWeight='semibold'
                             as='h2'
                             lineHeight='tight'
                             noOfLines={1}
                             fontSize={22}
                         >
                             Contracts id:
                         </Box>
                         <Button
                             margin="0 auto"
                             mt="10px"
                             bg={STYLED_THEME.COLOR}
                             color={STYLED_THEME.BG}
                             size='md'
                             onClick={onNavigate('/contracts')}
                         >
                             Next
                         </Button>
                     </Box>
                 </Box>

                 <Box
                     bg={STYLED_THEME.BG}
                     width='300px'
                     m="0 5px 15px 5px"
                     maxW='sm'
                     borderWidth='1px'
                     borderRadius='lg'
                     overflow='hidden'
                 >
                     <Box p='6'>
                         <Box
                             mt='1'
                             fontWeight='semibold'
                             as='h2'
                             lineHeight='tight'
                             noOfLines={1}
                             fontSize={22}
                         >
                             Watched tokens:
                         </Box>
                         <Button
                             margin="0 auto"
                             mt="10px"
                             bg={STYLED_THEME.COLOR}
                             color={STYLED_THEME.BG}
                             size='md'
                             onClick={onNavigate('/tokens')}
                         >
                             Next
                         </Button>
                     </Box>
                 </Box>

                 <Box
                     width='300px'
                     bg={STYLED_THEME.BG}
                     m="0 5px 15px 5px"
                     maxW='sm'
                     borderWidth='1px'
                     borderRadius='lg'
                     overflow='hidden'
                 >
                     <Box p='6'>
                         <Box
                             mt='1'
                             fontWeight='semibold'
                             as='h2'
                             lineHeight='tight'
                             noOfLines={1}
                             fontSize={22}
                         >
                             Total FT Deposits:
                         </Box>
                         <Button
                             margin="0 auto"
                             mt="10px"
                             bg={STYLED_THEME.COLOR}
                             color={STYLED_THEME.BG}
                             size='md'
                             onClick={onNavigate('/deposits')}
                         >
                             Next
                         </Button>
                     </Box>
                 </Box>
             </>
            :
            <Heading
               color={STYLED_THEME.BG}
               textAlign='center'
               mt="120px"
            >Please connect near wallet</Heading>
         }
      </Flex>
   )
}

export default Home;