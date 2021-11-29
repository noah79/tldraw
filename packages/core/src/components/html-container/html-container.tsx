import { observer } from 'mobx-react-lite'
import * as React from 'react'

interface HTMLContainerProps extends React.HTMLProps<HTMLDivElement> {
  children: React.ReactNode
}

export const HTMLContainer = observer<HTMLContainerProps, HTMLDivElement>(function HTMLContainer(
    { children, ...rest },
    ref
  ) {
    return (
      <div ref={ref} className="tl-positioned-div" {...rest}>
        {children}
      </div>
    )
  }, {forwardRef: true})
