import CircleImage from '@/common/components/CircleImage';
import { IStreamerInfoContainerProps } from '@/common/types/container.interface';

export default function StreamerInfoContainer({
	title,
	name,
	category,
}: IStreamerInfoContainerProps) {
	return (
		<div className="flex cursor-pointer gap-2">
			<div className="lg:size-8 2xl:size-14">
				<CircleImage src="/images/sample.jpg" />
			</div>
			<div className="flexCol gap-0.5">
				<p className="text-mainWhite font-bold lg:text-sm 2xl:text-2xl">{title}</p>
				<p className="text-mainWhite font-semibold lg:text-xs 2xl:text-xl">{name}</p>
				<p className="text-darkGray font-medium lg:text-xs 2xl:text-xl">{category}</p>
			</div>
		</div>
	);
}
