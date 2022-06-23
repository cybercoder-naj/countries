const useDarkTheme = () => {
  const isDarkTheme = useState<boolean>("darkTheme", () => true)

  const toggleTheme = () => {
    isDarkTheme.value = !isDarkTheme.value
  }

  return { 
    isDarkTheme,
    toggleTheme
  }
}

export default useDarkTheme