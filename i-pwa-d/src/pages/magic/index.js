import React from 'react'

import ScreenSizeProvider from 'shared/components/screen-size-provider'
import Magic from 'shared/components/magic'

const MGC = () => (
  <div>
    <ScreenSizeProvider>
      <Magic />
    </ScreenSizeProvider>
  </div>
)

export default MGC
