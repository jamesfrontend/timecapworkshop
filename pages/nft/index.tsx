/* eslint-disable @next/next/no-img-element */
import * as React from 'react';
import c from './nft.module.scss';

const NFTPage = () => {
    // className={c['']}
    return (
        <div className={c['wrapper']}>
            <div className={c['grow']}>
                <header className={c['header']}>
                    <section className={c['padding']}>
                        <nav className={c['nav']}>
                            <div className={c['nav-left']}>
                                <button className={c['menu-btn']}>
                                    <span className="fa-solid fa-bars" />
                                </button>
                            </div>
                            <div className={c['nav-center']}>
                                <span className="header-logo">SEAUX</span>
                            </div>
                        </nav>
                    </section>
                </header>
                <main className={c['main']}>
                    <div className="widget crossfade">
                        <figure />
                        <figure />
                        <figure />
                        <figure />
                        <figure />
                        <div className="splash-text">
                            <h2>South East Asian User Experience</h2>
                        </div>
                    </div>
                    <section className="project-widget">
                        <div className="box">
                            <div className="widget-header">
                                <h2>Whiskey Project</h2>
                                <div className={c['content']}>
                                    <div
                                        className={
                                            c['highlight-container-yellow']
                                        }
                                    >
                                        <span className={c['highlight-badge']}>
                                            <span className="fa-solid fa-wine-bottle" />
                                        </span>
                                        <span>8 Unique Bottles</span>
                                    </div>
                                    <div
                                        className={
                                            c['highlight-container-grey']
                                        }
                                    >
                                        <span className={c['highlight-badge']}>
                                            <span className="fa-solid fa-tag" />
                                        </span>
                                        <span>5 Unique Labels</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* <section className={c['padding']}>
                        <div className={c['two-grid']}>
                            <div className={c['twobytwo']}>
                                <div className={c['twobytwo-item']}>one</div>
                                <div className={c['twobytwo-item']}>one</div>
                                <div className={c['twobytwo-item']}>one</div>
                                <div className={c['twobytwo-item']}>one</div>
                            </div>
                            <div>
                                <h2>About This Project</h2>
                                <div className={c['content']}>
                                    <div
                                        className={
                                            c['highlight-container-yellow']
                                        }
                                    >
                                        <span className={c['highlight-badge']}>
                                            <span className="fa-solid fa-wine-bottle" />
                                        </span>
                                        <span>8 Unique Bottles</span>
                                    </div>
                                    <div
                                        className={
                                            c['highlight-container-grey']
                                    
                                    >
                                        <span className={c['highlight-badge']}>
                                            <span className="fa-solid fa-tag" />
                                        </span>
                                        <span>5 Unique Labels</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section> */}
                </main>
            </div>
        </div>
    );
};

export default NFTPage;
// className={c['']}
