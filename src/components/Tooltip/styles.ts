import { styled } from '@ignite-ui/react'
import * as Tooltip from '@radix-ui/react-tooltip'

export const TooltipProvider = styled(Tooltip.Provider, {})

export const TooltipRoot = styled(Tooltip.Root, {})

export const TooltipContainer = styled('div', {
  background: '$gray600',
  variants: {
    available: {
      false: {
        backgroundColor: '$gray800',
      },
    },
  },

  minHeight: '52px',
  minWidth: '60px',

  padding: '$4 $5',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  borderRadius: '6px',

  border: 0,
})

export const TooltipTrigger = styled(Tooltip.Trigger, {
  all: 'unset',
  width: '100%',
  height: '100%',

  span: {
    fontFamily: '$default',
    fontSize: '$md',
    color: '$gray100',
  },
})

export const TooltipPortal = styled(Tooltip.Portal, {
  display: 'flex',
})

export const TooltipContent = styled(Tooltip.Content, {
  backgroundColor: '$gray900',
  color: '$gray100',
  fontFamily: '$default',
  padding: '$3 $4',
  borderRadius: '5px',
})

export const TooltipArrow = styled(Tooltip.Arrow, {
  fill: '$gray900',
  height: '10px',
  width: '15px',
  marginBottom: '-8px',
})
