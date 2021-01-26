(function (components, element) {
    const registerBlockType = wp.blocks.registerBlockType;
    const el = element.createElement;
    const {RichText, MediaUpload} = wp.blockEditor;

    const icon = el('svg', {width: 24, height: 24, viewBox: '0 0 24 24'},
        el('path', {d: 'M12.18 2.25L1 12.103s.69 1.272 2.193 0l8.987-7.608 8.427 7.56c1.74 1.256 2.393 0 2.393 0zm6.056 2.227l.008 2.63 2.16 1.83v-4.46zm-6.123 1.45L3.99 12.736v8.523s-.02.492.46.492l5.545-.006.008-4.545s-.078-.75.65-.75h2.3c.86 0 .806.75.806.75l-.01 4.53h5.43c.6 0 .582-.613.582-.613v-8.38z'})
    );

    registerBlockType('home/always', {
        title: 'Always screen',
        description: 'Always screen.',
        icon: icon,
        category: 'home-page',
        keywords: ['Always screen'],
        attributes: {
            title: {
                type: 'string',
                source: 'html',
                selector: '#experience-title'
            },
            subtitle: {
                type: 'string',
                source: 'html',
                selector: '#experience-subtitle'
            },
            mediaID: {
                type: 'number'
            },
            mediaID2: {
                type: 'number'
            },
            mediaURL: {
                type: 'string',
                source: 'attribute',
                selector: '#source1',
                attribute: 'src'
            },
            mediaURL2: {
                type: 'string',
                source: 'attribute',
                selector: '#source2',
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
            var onSelectImage2 = function (media) {
                return props.setAttributes({
                    mediaURL2: media.url,
                    mediaID2: media.id
                })
            };

            //Block content
            return [
                el('div', {className: props.className},
                    el('div', {className: 'always-section'},
                        el(RichText, {
                            tagName: 'h3',
                            placeholder: 'Main title...',
                            keepPlaceholderOnFocus: true,
                            value: attributes.title,
                            allowedFormats: [],
                            onChange: function (title) {
                                props.setAttributes({title: title});
                            }
                        }),
                        el(RichText, {
                            tagName: 'p',
                            placeholder: 'Main text...',
                            keepPlaceholderOnFocus: true,
                            value: attributes.subtitle,
                            allowedFormats: [],
                            onChange: function (subtitle) {
                                props.setAttributes({subtitle: subtitle});
                            }
                        }),
                        el('div', {
                                className: 'block-element-img'
                            },
                            el(MediaUpload, {
                                onSelect: onSelectImage,
                                type: 'image',
                                render: function (obj) {
                                    let imageLink = attributes.mediaURL ? attributes.mediaURL : '';
                                    return el(components.Button, {
                                            className: 'components-toolbar__control components-toolbar__control--width',
                                            onClick: obj.open,
                                            width: '200', height: '200',
                                        },
                                        el('video', {onClick: obj.open, src: imageLink ? imageLink : 'Video'},
                                            imageLink ? imageLink : 'Video'
                                        ),
                                    );
                                }
                            }),
                        ),
                        el('div', {
                                className: 'block-element-img'
                            },
                            el(MediaUpload, {
                                onSelect: onSelectImage2,
                                type: 'image',
                                render: function (obj2) {
                                    let imageLink = attributes.mediaURL2 ? attributes.mediaURL2 : '';
                                    return el(components.Button, {
                                            className: 'components-toolbar__control components-toolbar__control--width',
                                            onClick: obj2.open,
                                            width: '200', height: '200',
                                        },
                                        el('video', {onClick: obj2.open, src: imageLink ? imageLink : 'Video mobile'},
                                            imageLink ? imageLink : 'Video mobile'
                                        ),
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
            return el('section', {className: 'experience'},
                el('div', {className: 'container'},
                    el('div', {className: 'experience__headline fade'},
                        el(RichText.Content, {
                            id: 'experience-title',
                            className: 'experience__supname supname',
                            tagName: 'h4',
                            value: attributes.title
                        }),
                        el(RichText.Content, {
                            id: 'experience-subtitle',
                            className: 'title experience__title',
                            tagName: 'h2',
                            value: attributes.subtitle
                        }),
                    ),
                    el('div', {className: 'experience__video fade'},
                        el('video', {
                                id: 'video',
                                muted: "muted",
                                loop: 'loop',
                                playsinline: 'playsinline',
                                poster: '/wp-content/themes/opticore/src/img/Mac.png',
                            },
                            el(RichText.Content, {
                                id: 'source1',
                                tagName: 'source',
                                src: attributes.mediaURL
                            }),
                            el(RichText.Content, {
                                id: 'source2',
                                tagName: 'source',
                                src: attributes.mediaURL2
                            }),
                        ),
                        el('svg', {
                                width: '909',
                                height: '536',
                                fill: 'none',
                                viewBox: '0 0 909 536'
                            },
                            el('path', {
                                    d: 'M845.802 40.0371L845.246 37.0215C841.475 16.5683 819.054 3.6211 795.067 8.04451L105.133 135.274C80.9925 139.726 64.6648 159.818 68.4607 180.403L69.0168 183.418C72.7886 203.872 95.2333 216.95 119.374 212.498L182.878 200.788C206.865 196.364 229.439 209.283 233.235 229.867C237.007 250.321 220.704 270.544 196.563 274.996L102.306 292.378C78.3192 296.801 61.8377 316.922 65.6336 337.507L66.1897 340.522C69.9615 360.975 92.4062 374.054 116.547 369.602L148.53 363.704C172.517 359.281 195.091 372.199 198.887 392.784L199.129 394.095C202.9 414.548 186.597 434.772 162.456 439.224L99.7209 450.793C75.4592 454.589 59.1557 474.813 62.9274 495.266L63.4835 498.281C67.2553 518.735 89.7 531.813 113.841 527.361L803.774 400.132C827.761 395.708 844.243 375.587 840.447 355.003L839.891 351.987C836.119 331.534 813.674 318.456 789.534 322.908L687.589 341.707C663.602 346.13 641.028 333.212 637.232 312.627L636.99 311.316C633.218 290.863 649.522 270.639 673.663 266.187L806.36 241.717C830.347 237.293 846.828 217.172 843.032 196.588L842.476 193.573C838.704 173.119 816.26 160.041 792.119 164.493L778.588 166.988C754.601 171.411 732.027 158.493 728.231 137.908C724.459 117.455 740.762 97.2311 764.903 92.7794L809.187 84.6131C833.271 80.7141 849.574 60.4903 845.802 40.0371Z',
                                    fill: 'white',
                                },
                            ),
                        ),
                    ),
                    el('div', {className: 'experience__bubbles'},
                        el('div', {className: 'experience__bubble experience__bubble--one fade'},
                            el('img', {
                                    src: '/wp-content/themes/opticore/src/img/experience/1.svg',
                                    alt: "buble",
                                },
                            ),
                            el('span', {},
                                'iOS / Mac'
                            ),
                        ),
                        el('div', {className: 'experience__bubble experience__bubble--second fade'},
                            el('img', {
                                    src: '/wp-content/themes/opticore/src/img/experience/2.svg',
                                    alt: "buble",
                                },
                            ),
                            el('span', {},
                                'Windows'
                            ),
                        ),
                        el('div', {className: 'experience__bubble experience__bubble--three fade'},
                            el('img', {
                                    src: '/wp-content/themes/opticore/src/img/experience/3.svg',
                                    alt: "buble",
                                },
                            ),
                            el('span', {},
                                'Android'
                            ),
                        ),
                        el('div', {className: 'experience__bubble experience__bubble--four fade'},
                            el('img', {
                                    src: '/wp-content/themes/opticore/src/img/experience/4.svg',
                                    alt: "buble",
                                },
                            ),
                            el('span', {},
                                'Linux'
                            ),
                        ),
                        el('div', {className: 'experience__bubble experience__bubble--five fade'},
                            el('img', {
                                    src: '/wp-content/themes/opticore/src/img/experience/5.svg',
                                    alt: "buble",
                                },
                            ),
                            el('span', {},
                                'Safari'
                            ),
                        ),
                        el('div', {className: 'experience__bubble experience__bubble--six fade'},
                            el('img', {
                                    src: '/wp-content/themes/opticore/src/img/experience/6.svg',
                                    alt: "buble",
                                },
                            ),
                            el('span', {},
                                'Google Chrome'
                            ),
                        ),
                        el('div', {className: 'experience__bubble experience__bubble--seven fade'},
                            el('img', {
                                    src: '/wp-content/themes/opticore/src/img/experience/7.svg',
                                    alt: "buble",
                                },
                            ),
                            el('span', {},
                                'Firefox'
                            ),
                        ),
                        el('div', {className: 'experience__bubble experience__bubble--eight fade'},
                            el('img', {
                                    src: '/wp-content/themes/opticore/src/img/experience/8.svg',
                                    alt: "buble",
                                },
                            ),
                            el('span', {},
                                'Edge'
                            ),
                        ),
                    ),
                ),
            );
        }
    });

})(window.wp.components, window.wp.element);
