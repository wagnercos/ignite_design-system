import { StoryObj, Meta } from '@storybook/react'
import { Box, Multistep, MultistepProps } from '@wagnercos-ignite-ui/react'

export default {
  title: 'Form/Multistep',
  component: Multistep,
  tags: ['autodocs'],
  args: {
    size: 4,
    currentStep: 1,
  },
  decorators: [
    (Story) => {
      return (
        <Box
          as="label"
          css={{
            display: 'flex',
            flexDirection: 'row',
            gap: '$3',
            alignItems: 'center',
          }}
        >
          <Story />
        </Box>
      )
    },
  ],
} as Meta<MultistepProps>

export const Default: StoryObj<MultistepProps> = {
  args: {},
}

export const Full: StoryObj<MultistepProps> = {
  args: {
    currentStep: 4,
  },
}
