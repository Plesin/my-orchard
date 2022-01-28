import React from 'react'
import { Badge, Box, AspectRatio, Image, Text, Stack } from '@chakra-ui/react'
import { Icon } from '@chakra-ui/react'
import { WiThermometer } from 'react-icons/wi'
import { FiMapPin } from 'react-icons/fi'
import type { CardType } from '../../types'

function Card(props: CardType) {
  const { name, desc, count } = props

  return (
    <Box maxW="lg" borderWidth="2px" borderRadius="lg" overflow="hidden">
      <Image
        src="https://picsum.photos/id/216/600/400"
        alt="Orchard trees"
        borderRadius={'12px 12px 0 0'}
      />

      <Box p="6">
        <Box
          mt="1"
          fontWeight="semibold"
          as="h4"
          lineHeight="tight"
          isTruncated
        >
          {name}
        </Box>

        <Box>
          {desc}
          <Box as="span" color="gray.600" fontSize="sm">
            / wk
          </Box>
        </Box>
        <Box display="flex" alignItems="baseline" mt={'2rem'}>
          <Badge px="2" colorScheme="teal" borderRadius={8}>
            trees | {count}
          </Badge>
          <Box
            color="gray.500"
            fontWeight="semibold"
            letterSpacing="wide"
            fontSize="xs"
            textTransform="uppercase"
            ml="2"
            flexGrow={1}
          >
            <Icon as={WiThermometer} /> 5 <span>&#8451;</span>
          </Box>
          <Box>
            <Icon as={FiMapPin} />
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default Card

// <Box p={4} display={'flex'} borderWidth={1} margin={2}>
//       <AspectRatio minW="400px" maxW="500px" ratio={1.5}>
//         <Image
//           src="https://picsum.photos/id/216/400/300"
//           alt="Woman paying for a purchase"
//           borderRadius={'12px'}
//         />
//       </AspectRatio>
//       <Stack
//         position={'relative'}
//         width={'100%'}
//         pl={{ base: 2, md: 4, lg: 6 }}
//       >
//         <Text
//           fontWeight="bold"
//           textTransform="uppercase"
//           fontSize="lg"
//           letterSpacing="wide"
//         >
//           {name}
//         </Text>
//         <Text color="teal.600">{desc}</Text>
//         <Text my={2} color="gray.500">
//           <Badge>{`trees: ${count}`}</Badge>
//         </Text>
//         <Box
//           p={0}
//           pr={'2rem'}
//           m={0}
//           position={'absolute'}
//           bottom={0}
//           display={'flex'}
//           flexDirection={'row'}
//           width={'100%'}
//         >
//           <Text m={0} verticalAlign={'botton'} color="gray.500" flexGrow={1}>
//             <Icon as={WiThermometer} /> 5 <span>&#8451;</span>
//           </Text>
//           <Icon as={FiMapPin} />
//         </Box>
//       </Stack>
//     </Box>
