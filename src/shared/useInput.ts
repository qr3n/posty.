import { useState, useCallback, ChangeEvent, ChangeEventHandler } from 'react'

export const useInput = (initialValue = '') => {
  const [value, setValue] = useState(initialValue)

  const onChange: ChangeEventHandler<HTMLInputElement> = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => setValue(e.currentTarget.value),
    []
  )

  return [
    value,
    onChange
  ]
}

