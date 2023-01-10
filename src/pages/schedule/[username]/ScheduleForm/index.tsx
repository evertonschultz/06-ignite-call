import { useState } from 'react'
import { X } from 'phosphor-react'
import dayjs from 'dayjs'

import {
  ToastRoot,
  ToastTitle,
  ToastDescription,
  ButtonCloseToast,
  ToastViewport,
  ToastClose,
  ToastProvider,
} from '../../../../components/Toast'

import { CalendarStep } from './CalendarStep'
import { ConfirmStep } from './ConfirmStep'

export function ScheduleForm() {
  const [selectedDateTime, setSelectedDateTime] = useState<Date | null>()
  const [confirmedDateTime, setConfirmedDateTime] = useState<Date | null>()
  const [openToast, setOpenToast] = useState(false)

  function handleClearSelectedDateTime() {
    setSelectedDateTime(null)
  }

  function handleConfirmedAppointment() {
    setConfirmedDateTime(selectedDateTime)

    setOpenToast(true)

    setSelectedDateTime(null)
  }

  if (selectedDateTime) {
    return (
      <ConfirmStep
        schedulingDate={selectedDateTime}
        onResetScheduleDate={handleClearSelectedDateTime}
        onConfirmedAppointment={handleConfirmedAppointment}
      />
    )
  }
  return (
    <ToastProvider swipeDirection="right">
      <CalendarStep onSelectDateTime={setSelectedDateTime} />

      <ToastRoot open={openToast} onOpenChange={setOpenToast}>
        <ToastTitle>Agendamento realizado</ToastTitle>
        <ToastDescription>
          {dayjs(confirmedDateTime).format('dddd[, ]DD[ de ]MMMM[ às ]HH[h]')}
        </ToastDescription>
        <ToastClose asChild>
          <ButtonCloseToast>
            <X color="#A9A9B2" size="20px" weight="fill" />
          </ButtonCloseToast>
        </ToastClose>
      </ToastRoot>
      <ToastViewport />
    </ToastProvider>
  )
}
