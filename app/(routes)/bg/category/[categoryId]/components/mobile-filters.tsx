'use client';

import Button from '@/components/ui/button';
import IconButton from '@/components/ui/icon-button';
import { Size } from '@/types';
import { Dialog } from '@headlessui/react';
import { Plus, X } from 'lucide-react';
import { useState } from 'react';
import Filter from './filter';

interface MobileFiltersProps {
	size: Size[];
}
const MobileFilters: React.FC<MobileFiltersProps> = ({ size }) => {
	const [open, setOpen] = useState(false);

	const onOpen = () => setOpen(true);
	const onClose = () => setOpen(false);

	return (
		<>
			<Button
				onClick={onOpen}
				className="mt-5 flex items-center gap-x-2 md:hidden"
			>
				Filters
				<Plus size={20} />
			</Button>

			<Dialog
				open={open}
				as="div"
				className="relative z-40 lg:hidden"
				onClose={onClose}
			>
				<div className="fixed inset-0 bg-black bg-opacity-25" />
				<div className="fixed inset-0 z-40 flex">
					<Dialog.Panel className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-6 shadol-xl ">
						<div className="flex items-center justify-end px-4">
							<IconButton icon={<X size={15} />} onClick={onClose} />
						</div>
						<div className="p-4">
							<Filter valueKey="sizeId" name="Sizes" data={size} />
						</div>
					</Dialog.Panel>
				</div>
			</Dialog>
		</>
	);
};

export default MobileFilters;
