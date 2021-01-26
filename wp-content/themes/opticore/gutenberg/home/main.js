(function (components, element) {
    const registerBlockType = wp.blocks.registerBlockType;
    const el = element.createElement;
    const {RichText, MediaUpload} = wp.blockEditor;

    const icon = el('svg', {width: 24, height: 24, viewBox: '0 0 24 24'},
        el('path', {d: 'M12.18 2.25L1 12.103s.69 1.272 2.193 0l8.987-7.608 8.427 7.56c1.74 1.256 2.393 0 2.393 0zm6.056 2.227l.008 2.63 2.16 1.83v-4.46zm-6.123 1.45L3.99 12.736v8.523s-.02.492.46.492l5.545-.006.008-4.545s-.078-.75.65-.75h2.3c.86 0 .806.75.806.75l-.01 4.53h5.43c.6 0 .582-.613.582-.613v-8.38z'})
    );

    registerBlockType('home/main', {
        title: 'Intro screen',
        description: 'Experience screen.',
        icon: icon,
        category: 'home-page',
        keywords: ['main screen'],
        attributes: {
            title: {
                type: 'string',
                source: 'html',
                selector: '#title__intro'
            },
            text: {
                type: 'string',
                source: 'html',
                selector: '#text__intro'
            },
            placeholderText: {
                type: 'string',
                source: 'attribute',
                selector: '#placeholder__intro',
                attribute: 'placeholder'
            },
            btnText: {
                type: 'string',
                source: 'html',
                selector: '#button__intro'
            },
            mediaID: {
                type: 'number'
            },
            mediaURL: {
                type: 'string',
                source: 'attribute',
                selector: '#discover__intro',
                attribute: 'src'
            },
        },

        //Example function
        example: () => {
        },

        //Edit function
        edit: function (props) {
            let attributes = props.attributes;
            var onSelectImage = function (media) {
                return props.setAttributes({
                    mediaURL: media.url,
                    mediaID: media.id
                })
            };

            //Block content
            return [
                el('div', {className: props.className},
                    el('div', {className: 'experience-section'},
                        el(RichText, {
                            tagName: 'h1',
                            placeholder: 'Title...',
                            keepPlaceholderOnFocus: true,
                            value: attributes.title,
                            allowedFormats: [],
                            onChange: function (title) {
                                props.setAttributes({title: title});
                            }
                        }),
                        el(RichText, {
                            tagName: 'p',
                            placeholder: 'Text...',
                            keepPlaceholderOnFocus: true,
                            value: attributes.text,
                            allowedFormats: [],
                            onChange: function (text) {
                                props.setAttributes({text: text});
                            }
                        }),
                        el(RichText, {
                            tagName: 'p',
                            placeholder: 'Placeholder...',
                            keepPlaceholderOnFocus: true,
                            value: attributes.placeholderText,
                            allowedFormats: [],
                            onChange: function (placeholderText) {
                                props.setAttributes({placeholderText: placeholderText});
                            }
                        }),
                        el(RichText, {
                            tagName: 'p',
                            placeholder: 'Button...',
                            keepPlaceholderOnFocus: true,
                            value: attributes.btnText,
                            allowedFormats: [],
                            onChange: function (btnText) {
                                props.setAttributes({btnText: btnText});
                            }
                        }),
                        el('div', {className: 'experience-section'},
                            el('h2', {},
                                'Discover image',
                            ),
                            el(MediaUpload, {
                                onSelect: onSelectImage,
                                type: 'image',
                                render: function (obj) {
                                    let imageLink = attributes.mediaURL ? attributes.mediaURL : '/wp-content/themes/opticore/gutenberg/no-image.png';
                                    return el(components.Button, {
                                            className: 'components-toolbar__control components-toolbar__control--width',
                                            onClick: obj.open,
                                            width: '200', height: '200'
                                        },
                                        el('img', {src: imageLink, onClick: obj.open, width: '200', height: '200'}),
                                    );
                                }
                            }),
                        ),
                    )
                )
            ];
        },

        //Save function
        save: function (props) {

            let attributes = props.attributes;

            //Blocks section
            return el('section', {className: 'intro'},
                el('div', {className: 'container'},
                    el('div', {className: 'intro__info fade'},
                        el(RichText.Content, {
                            id: 'title__intro',
                            tagName: 'h1',
                            value: attributes.title
                        }),
                        el(RichText.Content, {
                            id: 'text__intro',
                            tagName: 'p',
                            value: attributes.text
                        }),
                        el('div', {className: 'form'},
                            el(RichText.Content, {
                                id: 'placeholder__intro',
                                tagName: 'input',
                                type: 'text',
                                placeholder: attributes.placeholderText
                            }),
                            el(RichText.Content, {
                                id: 'button__intro',
                                className: 'js-ripple',
                                tagName: 'button',
                                value: attributes.btnText
                            }),
                        ),
                    ),
                    el('div', {className: 'intro__img fade-opacity'},
                        el('lottie-player', {
                                background: 'transparent',
                                speed: '0.5',
                                autoplay: 'autoplay',
                                src: '/wp-content/themes/opticore/src/img/tablet.json'
                            },
                        ),
                        el('div', {className: 'girl'},
                            el('lottie-player', {
                                    background: 'transparent',
                                    speed: '0.5',
                                    autoplay: 'autoplay',
                                    src: '/wp-content/themes/opticore/src/img/girl.json'
                                },
                            ),
                        ),
                        el('div', {className: 'intro__mob'},
                            el('svg', {
                                    width: '547',
                                    height: '418',
                                    fill: 'none',
                                },
                                el('path', {
                                        d: 'M500.633 24.0946L500.002 21.738C495.719 5.75434 477.119 -3.0987 458.374 1.92406L32.6815 115.988C13.8161 121.043 2.13495 138.01 6.44522 154.096L7.07666 156.452C11.3595 172.436 29.9865 181.392 48.8518 176.337L49.3744 176.197C68.1196 171.174 86.8393 179.995 91.1496 196.081C95.4324 212.064 83.7787 229.134 64.9133 234.189L27.5294 244.206C8.78425 249.228 -3.01708 266.227 1.29319 282.313L1.92464 284.67C6.20745 300.654 24.8344 309.609 43.6998 304.554L72.2324 296.909C90.9776 291.886 109.697 300.707 114.008 316.793L114.282 317.818C118.565 333.801 106.911 350.871 88.0459 355.926L87.6817 356.023C68.6791 360.566 57.0254 377.635 61.3082 393.619L61.9396 395.975C66.2224 411.959 84.8494 420.914 103.715 415.859L519.013 304.581C537.759 299.558 549.56 282.559 545.25 266.473L544.618 264.116C540.335 248.132 521.708 239.177 502.843 244.232L480.685 250.169C461.94 255.192 443.22 246.371 438.91 230.285L438.635 229.26C434.353 213.277 446.006 196.207 464.872 191.152L511.062 178.776C529.807 173.753 541.608 156.754 537.298 140.668L536.667 138.311C532.384 122.328 513.757 113.372 494.891 118.427L484.317 121.261C465.572 126.283 446.852 117.463 442.542 101.376C438.259 85.3927 449.913 68.3235 468.778 63.2686L474.407 61.7604C493.262 57.1474 504.916 40.0783 500.633 24.0946Z',
                                        fill: 'url(#paint0_linear)',
                                    },
                                ),
                                el('defs', {},
                                    el('linearGradient', {
                                            className: 'intro__mob',
                                            id: 'paint0_linear',
                                            x1: '-38.1855',
                                            y1: '134.977',
                                            x2: '478.221',
                                            y2: '-20.5397',
                                            gradientUnits: 'userSpaceOnUse'
                                        },
                                        el('stop', {
                                                'stop-color': '#229AFA',
                                            },
                                        ),
                                        el('stop', {
                                                'offset': '1',
                                                'stop-color': '#1168F8',
                                            },
                                        ),
                                    ),
                                ),
                            ),
                        ),
                        el('img', {
                                className: "intro__bubble intro__bubble--top fade-opacity",
                                src: '/wp-content/themes/opticore/src/img/intro/1.svg',
                                alt: "buble",
                            },
                        ),
                        el('img', {
                                className: "intro__bubble intro__bubble--left intro__bubble-scale",
                                src: '/wp-content/themes/opticore/src/img/intro/2.svg',
                                alt: "buble",
                            },
                        ),
                        el('img', {
                                className: "intro__bubble intro__bubble--right fade-opacity",
                                src: '/wp-content/themes/opticore/src/img/intro/3.svg',
                                alt: "buble",
                            },
                        ),
                        el('img', {
                                className: "intro__bubble intro__bubble--rightm fade-opacity",
                                src: '/wp-content/themes/opticore/src/img/intro/4.svg',
                                alt: "buble",
                            },
                        ),
                        el('img', {
                                className: "intro__bubble intro__bubble--rightb fade-opacity",
                                src: '/wp-content/themes/opticore/src/img/intro/6.svg',
                                alt: "buble",
                            },
                        ),
                        el('img', {
                                className: "intro__bubble intro__bubble--rightbb fade-opacity",
                                src: '/wp-content/themes/opticore/src/img/intro/5.svg',
                                alt: "buble",
                            },
                        ),
                    ),

                    el('div', {className: 'intro__circle fade-opacity'},
                        el(RichText.Content, {
                            id: 'discover__intro',
                            tagName: 'img',
                            alt: 'intro',
                            src: attributes.mediaURL,
                        }),
                        el('div', {className: 'intro__center'},
                            el('svg', {
                                    width: '24',
                                    height: '24',
                                    viewBox: '0 0 24 24',
                                    fill: 'none',
                                },
                                el('path', {
                                        d: 'M17.7071 13.7075C18.0976 13.317 18.0976 12.6838 17.7071 12.2933C17.3166 11.9028 16.6834 11.9028 16.2929 12.2933L13 15.5862L13 6.00037C13 5.44809 12.5523 5.00037 12 5.00037C11.4477 5.00037 11 5.44808 11 6.00037L11 15.5862L7.7071 12.2933C7.3166 11.9028 6.6834 11.9028 6.2929 12.2933C5.9024 12.6838 5.9024 13.317 6.2929 13.7075L11.2929 18.7075C11.6834 19.098 12.3166 19.098 12.7071 18.7075L17.7071 13.7075Z',
                                        fill: 'url(#paint0_linear)',
                                    },
                                ),
                                el('defs', {},
                                    el('linearGradient', {
                                            id: 'paint0_linear',
                                            x1: '18',
                                            y1: '5.00037',
                                            x2: '18.2712',
                                            y2: '18.6204',
                                            gradientUnits: 'userSpaceOnUse'
                                        },
                                        el('stop', {
                                                'stop-color': '#229AFA',
                                            },
                                        ),
                                        el('stop', {
                                                'offset': '1',
                                                'stop-color': '#1168F8',
                                            },
                                        ),
                                    ),
                                ),
                            ),
                        ),
                    ),
                ),
                el('div', {className: 'intro__hand fade-right'},
                    el('svg', {
                            width: '1303',
                            height: '1082',
                            viewBox: '0 0 1303 1082',
                            fill: 'none',
                        },
                        el('path', {
                                d: 'M1033.92 65.2081L1031.65 60.7396C1016.21 30.432 975.024 20.5805 939.48 38.6911L134.375 448.912C98.6036 467.139 82.3678 506.246 97.9093 536.748L100.186 541.216C115.629 571.524 156.909 581.57 192.681 563.343L193.672 562.838C229.216 544.727 270.625 554.463 286.166 584.965C301.609 615.272 285.472 654.574 249.7 672.8L178.814 708.919C143.27 727.029 126.807 766.252 142.348 796.754L144.625 801.222C160.068 831.53 201.348 841.576 237.12 823.349L291.222 795.783C326.766 777.672 368.175 787.408 383.717 817.909L384.707 819.852C400.149 850.16 384.012 889.461 348.241 907.688L347.55 908.04C311.283 925.295 295.147 964.596 310.589 994.904L312.866 999.372C328.308 1029.68 369.589 1039.73 405.361 1021.5L1192.83 620.261C1228.38 602.151 1244.84 562.928 1229.3 532.426L1227.02 527.957C1211.58 497.65 1170.3 487.604 1134.53 505.83L1092.51 527.238C1056.97 545.349 1015.56 535.613 1000.02 505.111L999.029 503.168C983.587 472.861 999.724 433.56 1035.5 415.333L1123.08 370.707C1158.62 352.596 1175.09 313.373 1159.55 282.871L1157.27 278.403C1141.83 248.095 1100.55 238.049 1064.77 256.276L1044.72 266.492C1009.18 284.603 967.77 274.867 952.229 244.365C936.786 214.058 952.923 174.756 988.695 156.53L997.29 152.15C1033.23 134.817 1049.37 95.5157 1033.92 65.2081Z',
                                fill: 'url(#paint0_linear)',
                            },
                        ),
                        el('defs', {},
                            el('linearGradient', {
                                    id: 'paint0_linear',
                                    x1: '0',
                                    y1: '517.38',
                                    x2: '971.862',
                                    y2: '-16.0172',
                                    gradientUnits: 'userSpaceOnUse'
                                },
                                el('stop', {
                                        'stop-color': '#229AFA',
                                    },
                                ),
                                el('stop', {
                                        'offset': '1',
                                        'stop-color': '#1168F8',
                                    },
                                ),
                            ),

                        ),
                    ),
                ),
            );
        }
    });

})(window.wp.components, window.wp.element);
