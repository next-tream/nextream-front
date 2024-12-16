import Image from 'next/image';

interface ICategoryContainerProps {
	title: string;
	image: string;
	watchingCount: number;
}

export default function CategoryContainer({
	title,
	image,
	watchingCount,
}: ICategoryContainerProps) {
	return (
		<div className="relative flex w-1/5 max-w-36 flex-col gap-2">
			<div className="group">
				<div className="bg-mainBlack absolute left-2 top-2 z-10 flex items-center justify-center gap-1 rounded-md px-1 py-0.5 transition-transform group-hover:scale-110">
					<div className="bg-mainRed size-2 rounded-full" />
					<p className="text-mainWhite text-xs font-bold">{watchingCount}</p>
				</div>
				<Image
					src={image}
					alt={`${image}_image`}
					width={0}
					height={0}
					sizes="100vw"
					className={
						'group-hover:border-main aspect-2/3 w-full cursor-pointer rounded-xl object-cover transition-transform group-hover:scale-105 group-hover:border-2'
					}
				/>
			</div>
			<p className="text-lightGray text-base font-semibold">{title}</p>
		</div>
	);
}