import { useEffect } from "react"
// apis
import { getDepartments } from "@/apis/general/apiLocations"
// hooks
import { useAsyncStates } from "../general/useAsyncStates"

export const useDepartmentOptions = () => {
  const { data, setData, isLoading, setIsLoading } = useAsyncStates()
  
  useEffect(() => {
    setIsLoading(true)
    getDepartments()
    .then(({ statusCode, data}) => {
      if (statusCode === 200) {
        const options = data?.map(({ name, departament }) => ({
          label: name,
          value: departament
        }));

        setData(options)
      }
    })
    .finally(() => setIsLoading(false));
  }, [])

  return {
    optionsDepartments: data,
    isDepartmentsLoaded: isLoading
  }
}