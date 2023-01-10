import {
  TooltipArrow,
  TooltipContent,
  TooltipPortal,
  TooltipProvider,
  TooltipRoot,
  TooltipTrigger,
} from './styles'

export interface TooltipProps {
  content: string
  description: string
  available: boolean
}

export function Tooltip({ content, description, available }: TooltipProps) {
  return (
    <TooltipProvider>
      <TooltipRoot>
        <TooltipTrigger>
          <span>{content}</span>
        </TooltipTrigger>
        <TooltipPortal>
          <TooltipContent>
            <TooltipArrow />
            <span>{description}</span>
          </TooltipContent>
        </TooltipPortal>
      </TooltipRoot>
    </TooltipProvider>
  )
}
