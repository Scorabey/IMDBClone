'use client'

import { AppProvider } from '@/shared/lib/context/app-context/AppContextProvider'
import { QueryClient, QueryClientProvider, isServer } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

function makeQueryClient() {
    return new QueryClient({
        defaultOptions: {
            queries: {
                staleTime: 60*1000
            }
        }
    })
}

let browserQueryClient: QueryClient | undefined

function getQueryClient() {
    if(isServer) {
        return makeQueryClient()
    }

    if(!browserQueryClient) browserQueryClient = makeQueryClient()
    return browserQueryClient
}

export default function Providers({ children }: { children: React.ReactNode }) {
  const queryClient = getQueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      <AppProvider>{children}</AppProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}