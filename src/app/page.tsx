import MainVideo from '@/common/components/Video/MainVideo';
import MenuContainer from '@/common/components/MenuContainer';
import RecommendVideo from '@/common/components/Video/RecommendVideo';
import { CarouselSpacing } from '@/common/components/Carousel/CarouselSpacing';

export default function Home() {
	return (
		<div className="flexCol h-full w-full gap-5 p-5">
			<div className="center h-60 w-full">
				<MainVideo />
			</div>
			<MenuContainer menu="추천">
				<RecommendVideo showLiveStatus={true} />
			</MenuContainer>
			<div className="flexCol w-full gap-3 text-3xl font-semibold">
				<div>카테고리</div>
				<div className="w-full">
					<CarouselSpacing />
				</div>
			</div>
			<MenuContainer menu="팔로잉">
				<RecommendVideo showLiveStatus={true} />
			</MenuContainer>
			<MenuContainer menu="라이브">
				<RecommendVideo showLiveStatus={true} />
			</MenuContainer>
		</div>
	);
}
