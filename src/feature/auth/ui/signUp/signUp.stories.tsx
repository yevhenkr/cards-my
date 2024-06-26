import type { Meta, StoryObj } from '@storybook/react'

import { SignUp } from '@/feature/auth/ui/signUp/SignUp'

const meta = {
  component: SignUp,
  parameters: {},
  tags: ['autodocs'],
  title: 'Auth/SignUp',
} satisfies Meta<typeof SignUp>

export default meta
type Story = StoryObj<typeof meta>

export const SignUpStory: Story = {
  args: {
    onSubmit: data => {
      console.log('Form submitted:', data)
    },
  },
}
