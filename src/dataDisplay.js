import { useQuery, useQueryClient } from '@tanstack/react-query'
import React, { useState } from 'react'

function dataDisplay() {
 const queryClient = useQueryClient();
 const [isEnabled,setIsEnabled] = useState(false);

  return (
    <div>
      
    </div>
  )
}

export default dataDisplay
