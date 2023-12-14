import { cn } from '@/lib/utils';
import React, { MouseEventHandler } from 'react';

interface IconButtonProps {
	onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
	icon: React.ReactElement;
	className?: string;
	children?: React.ReactNode;
}

const IconButton: React.FC<IconButtonProps> = ({
	onClick,
	icon,
	className,
	children,
}) => {
	return (
		<div>
			<button
				onClick={onClick}
				className={cn(
					'rounded-full h-auto w-auto flex items-center justify-center bg-white border shadow-md p-2 hover:scale-110 transition',
					className,
				)}
			>
				{icon}
				{children}
			</button>
		</div>
	);
};

export default IconButton;
