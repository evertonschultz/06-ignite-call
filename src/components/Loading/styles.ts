import { styled } from '@ignite-ui/react'

export const Container = styled('div', {
  display: 'flex',
  width: '100%',
  height: '100%',
  alignItems: 'center',
  justifyContent: 'center',

  '> svg': {
    color: '$gray200',
  },
})
