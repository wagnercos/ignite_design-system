import { StoryObj, Meta } from '@storybook/react'
import { Box, BoxProps, Text } from '@wagnercos-ignite-ui/react'

export default {
  title: 'Surfaces/Box',
  component: Box,
  tags: ['autodocs'],
  args: {
    children: (
      <>
        <Text>Testando o elemento Box</Text>
      </>
    ),
  },
  argTypes: {
    children: { control: { type: null } },
  },
} as Meta<BoxProps>

export const Default: StoryObj<BoxProps> = {}
