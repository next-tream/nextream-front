import Image from 'next/image';
import StreamerInfoContainer from '@/common/components/StreamerInfoContainer/StreamerInfoContainer';
import LiveStatusContainer from '@/common/components/LiveStatusContainer';

export default function RecommendVideo() {
	return (
		<div className="flex h-full w-full flex-col gap-3">
			<div className="relative h-full w-full">
				<div className="h-full w-full">
					<Image src="/images/main.png" alt="recommend" fill />
				</div>
				<LiveStatusContainer watchingCount={986} />
			</div>
			<div>
				<StreamerInfoContainer
					title="여러분 안녕하세요!!"
					name="뷰티풀윤정"
					category="뷰티/패션"
				/>
			</div>
		</div>
	);
}