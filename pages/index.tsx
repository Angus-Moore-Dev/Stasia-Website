import AppNavbar from '@/components/AppNavbar';
import Head from 'next/head';
import Image from 'next/image';
import { useCallback, useEffect, useRef } from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import Button from '@/components/Button';
import { useRouter } from 'next/router';
import Link from 'next/link';

export default function HomePage()
{
	const router = useRouter();

	return (
		<div className="w-full h-full flex flex-col gap-8 items-center justify-start max-w-7xl mx-auto py-16 p-8">
			<Head>
				<title>Stasia</title>
			</Head>
			<Image src='/logo.png' alt='logo' quality={100} width={2000} height={1000} priority={true} className='w-1/2 h-fit' />
			<span className='font-semibold text-xl text-center'>
				A startup-focused tool for <span className='text-primary'>project management</span>, <span className='text-primary'>discussion</span>,&nbsp;
				<span className='text-primary'>planning</span>, <span className='text-primary'>documentation</span> and <span className='text-primary'>file management</span>.
			</span>
			<div className='w-full flex flex-col gap-4 items-center'>
				<span>We are currently under development, so check back for updates.</span>
				<Link href='https://github.com/Angus-Moore-Dev/Stasia' target="_blank">
					<Button text='Github' icon={<GitHubIcon fontSize='large' />} onClick={() => {}} className='w-96 bg-tertiary' />
				</Link>
				<div className='w-96 p-2 rounded bg-tertiary flex flex-row items-center'>
					<Image src='/jensen.jpeg' alt='Adam Jensen' width={100} height={100} className='w-[100px] h-[100px] object-cover rounded-full' />
					<div className='flex-grow flex flex-col items-start justify-start h-full p-4'>
						<span className='font-semibold text-xl'>Adam Jensen#0116</span>
						<span>DM me on Discord if you want to discuss anything</span>
					</div>
				</div>
			</div>
		</div>
	)
}