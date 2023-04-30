import { StoryObj, Meta } from '@storybook/react'
import { Box, Text, Textarea, TextareaProps } from '@wagnercos-ignite-ui/react'

export default {
  title: 'Form/Textarea',
  component: Textarea,
  tags: ['autodocs'],
  args: {},
  decorators: [
    (Story) => {
      return (
        <Box
          as="label"
          css={{ display: 'flex', flexDirection: 'column', gap: '$2' }}
        >
          <Text size="sm">Observação</Text>
          <Story />
        </Box>
      )
    },
  ],
} as Meta<TextareaProps>

export const Default: StoryObj<TextareaProps> = {
  args: {
    placeholder: 'Adicione alguma observação...',
  },
}

export const Disabled: StoryObj<TextareaProps> = {
  args: {
    disabled: true,
  },
}
