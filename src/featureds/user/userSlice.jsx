import { createSlice } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'

const themes = {
  fantasy: 'fantasy',
  dark: 'dark',
}

const getThemeLocalStorage = () => {
  // GET THEME FROM LOCAL STORAGE
  const theme = localStorage.getItem('theme') || themes.fantasy
  // SET ATTRIBUTE TO HTML TAG
  document.documentElement.setAttribute('data-theme', theme)

  return theme
}

const initialState = {
  user: { username: 'pc' },
  theme: getThemeLocalStorage(),
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginUser: (state, action) => {
      console.log('login')
    },
    logoutUser: (state) => {
      state.user = null
      // REMOVE THEME FROM LOCAL STORAGE
      localStorage.removeItem('user')

      toast.success('Logged out successfully')
    },
    toggleTheme: (state) => {
      const { dark, fantasy } = themes
      state.theme = state.theme === dark ? fantasy : dark
      // SET ATTRIBUTE TO HTML TAG
      document.documentElement.setAttribute('data-theme', state.theme)
      // GET THEME FROM LOCAL STORAGE
      localStorage.setItem('theme', state.theme)
    },
  },
})

export const { loginUser, logoutUser, toggleTheme } = userSlice.actions

export default userSlice.reducer
