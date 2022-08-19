import {
   Box,
   Stack,
   Heading,
   Flex,
   Text,
   useDisclosure
} from "@chakra-ui/react";
import {STYLED_THEME} from "../../shared/config";
import {ConnectWallet} from "../../features/connectWallet";
import {Link} from "react-router-dom";

export const Header = () => {
   const { isOpen, onOpen, onClose } = useDisclosure();
   const handleToggle = () => (isOpen ? onClose() : onOpen());

   return(
      <Flex
         as="nav"
         align="center"
         justify="space-between"
         wrap="wrap"
         padding={6}
         bg={STYLED_THEME.BG}
         color={STYLED_THEME.COLOR}
      >
         <Flex align="center" mr={5}>
            <Link to='/'>
               <Heading as="h1" size="lg" letterSpacing={"tighter"}>
                  DATUS
               </Heading>
            </Link>
         </Flex>

         {/*<Stack*/}
         {/*   direction={{ base: "column", md: "row" }}*/}
         {/*   display={{ base: isOpen ? "block" : "none", md: "flex" }}*/}
         {/*   width={{ base: "full", md: "auto" }}*/}
         {/*   alignItems="center"*/}
         {/*   flexGrow={1}*/}
         {/*   mt={{ base: 4, md: 0 }}*/}
         {/*>*/}
         {/*   <Text>Docs</Text>*/}
         {/*   <Text>Examples</Text>*/}
         {/*   <Text>Blog</Text>*/}
         {/*</Stack>*/}

         <Box
            mt={0}
         >
            <ConnectWallet />
         </Box>
      </Flex>
   );
}