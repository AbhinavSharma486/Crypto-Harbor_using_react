import { Avatar, Box, Stack, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import avatar from '../assets/abhinav_profile.jpg'

const Footer = () => {
    return (
        <Box bgColor={'blackAlpha.900'} minH={"48"} px={"16"} py={["16", "8"]}>

            <Stack direction={["column", "row"]} h={"full"} alignItems={"center"} flexWrap={["wrap", "nowrap"]}>

                <VStack w={'full'} alignItems={['center', 'flex-start']} mt={'20'}>
                    <Text fontWeight={'bold'} color={"gold"}>About Us</Text>
                    <Text fontSize={"sm"} letterSpacing={"widest"} textAlign={['center', 'left']}
                        color={"gold"} >The purpose of this website is solely to display information regarding the products and services available on the Crypto-Harbor App. It is not intended to offer access to any of such products and services. You may obtain access to such products and services on the Crypto-Harbor App.
                        {/* <br />
                        <br /> */}
                        Please note that the availability of the products and services on the Crypto-Harbor App is subject to jurisdictional limitations. Crypto-Harbor may not offer certain products, features and/or services on the Crypto-Harbor App in certain jurisdictions due to potential or actual regulatory restrictions.</Text>
                </VStack>
                <VStack w={"130px"} mt={"50px"}>
                    <Avatar boxSize={"28"} mt={["4", "0"]} src={avatar} />
                    <Text color={'gold'} >Abhinav Sharma</Text>
                </VStack>

            </Stack>

        </Box>
    )
}

export default Footer