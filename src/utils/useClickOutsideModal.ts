import { useEffect } from 'react';

export function useClickOutsideModal(ref: React.RefObject<HTMLElement | null>, callback: () => void) {
	useEffect(() => {
		const handleClick = (e: MouseEvent) => {
			if (ref.current && !ref.current.contains(e.target as Node)) callback();
		};

		document.addEventListener('click', handleClick);
		return () => document.removeEventListener('click', handleClick);
	});
}
