'use client';

import { createContext, MouseEvent, useState } from 'react';
import { IPointChargeModalProps } from '@/common/types/modal.interface';
import BaseModal from './BaseModal';
import PointSelectionContainer from '@/common/components/PointSelectionContainer';
import Divider from '@/common/components/Divider';
import BaseButton from '@/common/components/Buttons/BaseButton';
import { CurrencyDollarIcon } from '@heroicons/react/24/solid';
import TextInput from '@/common/components/Inputs/TextInput';
import { TInputChangeEvent } from '@/common/types/handler.type';

export default function DonationModal({ amount }: IPointChargeModalProps) {
	const DonationModalContext = createContext({ point: 0, amount: 0 });
	const [point, setPoint] = useState(1000);

	const onChangePointInputHandler = (event: TInputChangeEvent) => {
		const value = event.target.value;
		console.log(value);
	};

	const onClickPointButtonHandler = (event: MouseEvent<HTMLButtonElement>) => {
		const value = event.currentTarget.value;
		setPoint(() => Number(value));
	};

	return (
		<DonationModalContext.Provider value={{ point, amount }}>
			<BaseModal type="donation">
				<div className="border-lightGray flexCol gap-3 rounded-xl border px-4 py-3">
					<div className="between items-center">
						<p className="text-darkGray w-full text-lg font-bold">내 포인트</p>
						<div className="center gap-3">
							<div className="center gap-1.5">
								<CurrencyDollarIcon className="text-main size-5" />
								<p className="text-mainBlack text-lg font-semibold">
									{amount.toLocaleString()}
								</p>
							</div>
							<BaseButton className="basePrimaryBtn text-nowrap p-1.5 text-sm">
								충전
							</BaseButton>
						</div>
					</div>
					<Divider color="lightGray" />
					<PointSelectionContainer
						title="후원할 포인트"
						context={DonationModalContext}
						onClickPointButtonHandler={onClickPointButtonHandler}
						onChangePointInputHandler={onChangePointInputHandler}
					/>
					<Divider color="lightGray" />

					<div className="flexCol">
						<p className="text-darkGray w-full text-lg font-bold">후원 메시지</p>
						<TextInput type="text" placeholder="메시지를 입력해 주세요." />
					</div>
				</div>
			</BaseModal>
		</DonationModalContext.Provider>
	);
}
