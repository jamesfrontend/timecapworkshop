/* eslint-disable @next/next/no-img-element */
import React from 'react';
import styles from './pocketplace.module.scss';

const RightContent = () => {
    return (
        <main className={styles['main-wrapper']}>
            <div className={styles['thank-you-wrapper']}>
                <span className={styles.thank}>THANK</span>
                <span className={styles.you}>YOU</span>
                <span className={styles.for}>
                    For your support &#38; Amazon Purchase!
                </span>
            </div>
            <div className={styles.right}>
                <div className={styles['top-content']}>
                    <p>
                        As a small family-owned business, competing against
                        large companies is difficult.{' '}
                        <span className={styles.bold}>But you can help!</span>
                    </p>
                    <p>
                        By leaving us an honest review on Amazon, it helps
                        spread the word of our company!
                    </p>
                </div>
                <div className={styles['center-content']}>
                    <p>
                        <a
                            href="https://www.amazon.com"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <img
                                src="http://g-ecx.images-amazon.com/images/G/01/lwa/btnLWA_gold_312x64_pressed.png"
                                alt="amazon-button"
                            />
                        </a>
                    </p>
                    <p>
                        Go to{' '}
                        <span className="bold">
                            Account &#38; Lists &#8674; Orders
                        </span>
                    </p>
                    <p>Look for your order with Pocket Place</p>
                    <p>
                        Select{' '}
                        <span className="bold">Write a product review</span>
                    </p>
                </div>
                <div>
                    <div className={styles['before-after']} />
                </div>
            </div>
        </main>
    );
};

export default RightContent;
