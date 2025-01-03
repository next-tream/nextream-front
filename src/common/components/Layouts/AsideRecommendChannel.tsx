'use client';

import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline';

import Divider from '@/common/components/Divider';
import StreamerInfoContainerWrapper from '@/common/components/StreamerInfoContainers/StreamerInfoContainerWrapper';
import { usePathname } from 'next/navigation';
import { useToggle } from '@/common/hooks/useToggle';

export default function AsideRecommendChannel() {
	const list = ['/', '/login'];
	const { isToggle, onClickToggle } = useToggle(true);
	const path = usePathname();

	const onClickTest = async () => {
		const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/user/tag`, {
			method: 'POST',
		});
		const data = await response.json();
		console.log(data);
	};

	return (
		list.includes(path) && (
			<div className="w-ful flexCol gap-4">
				<Divider color="lightGray" />
				<div>
					<div className="betweenCenter flex-row text-xl">
						<p onClick={onClickTest}>추천 채널</p>
						<button onClick={onClickToggle}>
							{isToggle ? (
								<ChevronUpIcon className="size-6" />
							) : (
								<ChevronDownIcon className="size-6" />
							)}
						</button>
					</div>
					{isToggle && <StreamerInfoContainerWrapper />}
				</div>
			</div>
		)
	);
}
