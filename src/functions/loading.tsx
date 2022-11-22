import { ReactNode, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';

interface LoadingProps {
	children: ReactNode;
}

export default function Loading({ children }: LoadingProps) {
	const router = useRouter();

	const [wasChanged, setWasChanged] = useState(false);
	const [key, setKey] = useState(0);

	useEffect(() => {
		function handleStart(url: string) {
			if (url !== router.asPath) {
				setWasChanged(true);

				console.log('Loading page: ' + url);
			}
		}

		function handleComplete(url: string) {
			if (url === router.asPath && wasChanged) {
				setKey((prev) => prev + 1);

				if (router.pathname !== '/') {
					window.scrollTo(0, 0);
				}
			}
		}

		router.events.on('routeChangeStart', handleStart);
		router.events.on('routeChangeComplete', handleComplete);
		router.events.on('routeChangeError', handleComplete);

		return () => {
			router.events.off('routeChangeStart', handleStart);
			router.events.off('routeChangeComplete', handleComplete);
			router.events.off('routeChangeError', handleComplete);
		};
	}, [wasChanged, router.asPath, router.events, router.pathname]);

	return (
		<motion.main
			key={key}
			transition={{ type: 'linear' }}
			initial={{ opacity: 0 }}
			animate={{ opacity: 1, transition: { duration: 0.5 } }}
			exit={{ opacity: 0 }}
		>
			{children}
		</motion.main>
	);
}
