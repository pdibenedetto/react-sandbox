import {useState} from 'react'

const useLocalStorage = (key, initalValue) => {
  const [localStorageValue, setLocalStorageValue] = useState(() => 
                                                              getLocalStorageValue(key, initalValue))

  const setValue = (value) => {
    // Check if function
    const valueToStore = value instanceof Function ? value(localStorageValue) : value
    // Set to state
    setLocalStorageValue(value)
    // Set to local storage
    localStorage.setItem(key, JSON.stringify(valueToStore))
  }

  return [localStorageValue, setValue]
}

function getLocalStorageValue(key, initialValue) {
  const itemFromLocalStorage = localStorage.getItem(key)
  return itemFromLocalStorage ? JSON.parse(itemFromLocalStorage) : initialValue
}

export default useLocalStorage
