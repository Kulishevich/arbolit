'use client';
import React from 'react';
import Lottie from 'lottie-react';

import animationData from '@/shared/assets/animation/phone-animation.json';
import s from './PhoneAnimationClient.module.scss';
import { FeedbackPopup } from '../feedback-popup/FeedbackPopup';

const PhoneAnimationClient = () => {
  return (
    <FeedbackPopup>
      <div className={s.container}>
        <Lottie animationData={animationData} loop={true} className={s.phone} />
      </div>
    </FeedbackPopup>
  );
};

export default PhoneAnimationClient;
