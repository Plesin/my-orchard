import {
  Stack,
  Radio,
  RadioGroup,
  useColorMode,
  FormControl,
  FormLabel,
} from '@chakra-ui/react'

function SettingsForm() {
  const { colorMode, toggleColorMode } = useColorMode()
  const onChange = (value: string) => {
    if (colorMode !== value) {
      toggleColorMode()
    }
  }
  return (
    <FormControl as="fieldset" m={'2rem 0'}>
      <FormLabel>Color Mode</FormLabel>
      <RadioGroup onChange={onChange} value={colorMode}>
        <Stack direction="row">
          <Radio value="light">Light</Radio>
          <Radio value="dark">Dark</Radio>
        </Stack>
      </RadioGroup>
    </FormControl>
  )
}

export default SettingsForm
