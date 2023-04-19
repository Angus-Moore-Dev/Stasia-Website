import '@/styles/globals.css'
import type { AppProps } from 'next/app';
import AppNavbar from '@/components/AppNavbar';
import AppFooter from '@/components/AppFooter';
import { createBrowserSupabaseClient } from '@supabase/auth-helpers-nextjs';
import { useState } from 'react';
import { SessionContextProvider } from '@supabase/auth-helpers-react';

export default function App({ Component, pageProps }: AppProps) {
	return (
		<div className='w-screen h-screen flex flex-col'>
			<div className='flex-grow'>
				<Component {...pageProps} />
			</div>
		</div>
	)
}
