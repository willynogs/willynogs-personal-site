import { Divider, Box, Text } from "@chakra-ui/react";

const Footer: React.FC = () => {
  const currentDate = new Date()
  const currentYear = currentDate.getFullYear()

  return (
    <Box textAlign='center' my={6}>
      <Divider marginBottom={6} />
      
      <Text fontSize='xs'>Will Naugle {currentYear}</Text>
    </Box>
  )
};

export default Footer
