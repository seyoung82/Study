
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import React, { useState } from 'react'
import { TestApi } from './TestApi';


const QUERY_kEYS = {
    getData:"GET_DATA"
}
function DataDisplay() {
  const queryClient = useQueryClient();
  const [isEnabled, setIsEnabled] = useState(false);
    
  const {data, isFetching, isError} = useQuery({
     queryKey:[QUERY_kEYS.getData],
     queryFn:()=>TestApi.getTests(),
     onSuccess:(result) => console.log(result),
     onError:(error) => console.log(error),
     enabled:isEnabled
  })

    // useQuery fetching 활성화/비활성화
  const handleFetch = () => {
    setIsEnabled(!isEnabled);
  }


  //캐싱된 테이터삭제

  const handleInvalidate = () => {
    queryClient.invalidateQueries([QUERY_kEYS.getData]);
  }

  const { mutate } =useMutation({
    
  })
  return (
    <>

    {
      isFetching ? (
        console.log(isFetching)
      ) : (
        <>
          isError ? (
            console.log("error")
          ) :()
          
        </>
      )
    }
    </>
  )
}

export default DataDisplay
7