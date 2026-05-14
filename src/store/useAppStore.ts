import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'

interface AppState {
  // UI state
  isLoading: boolean
  setIsLoading: (loading: boolean) => void

  // Contact form state
  contactForm: {
    name: string
    email: string
    message: string
  }
  setContactForm: (form: Partial<AppState['contactForm']>) => void
  resetContactForm: () => void

  // Portfolio filters
  portfolioFilter: {
    category: string
    technology: string
  }
  setPortfolioFilter: (filter: Partial<AppState['portfolioFilter']>) => void

}

const initialContactForm = {
  name: '',
  email: '',
  message: ''
}

export const useAppStore = create<AppState>()(
  devtools(
    persist(
      (set) => ({
        // UI
        isLoading: false,
        setIsLoading: (isLoading) => set({ isLoading }, false, 'setIsLoading'),

        // Contact form
        contactForm: initialContactForm,
        setContactForm: (form) =>
          set(
            (state) => ({
              contactForm: { ...state.contactForm, ...form }
            }),
            false,
            'setContactForm'
          ),
        resetContactForm: () =>
          set({ contactForm: initialContactForm }, false, 'resetContactForm'),

        // Portfolio
        portfolioFilter: { category: 'all', technology: 'all' },
        setPortfolioFilter: (filter) =>
          set(
            (state) => ({
              portfolioFilter: { ...state.portfolioFilter, ...filter }
            }),
            false,
            'setPortfolioFilter'
          ),

      }),
      {
        name: 'app-storage',
        partialize: (state) => ({
          portfolioFilter: state.portfolioFilter,
        }),
      }
    ),
    {
      name: 'app-store',
    }
  )
)
