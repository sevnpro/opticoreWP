(function (components, element) {
    const registerBlockType = wp.blocks.registerBlockType;
    const el = element.createElement;
    const {RichText, MediaUpload} = wp.blockEditor;

    const icon = el('svg', {width: 24, height: 24, viewBox: '0 0 24 24'},
        el('path', {d: 'M12.18 2.25L1 12.103s.69 1.272 2.193 0l8.987-7.608 8.427 7.56c1.74 1.256 2.393 0 2.393 0zm6.056 2.227l.008 2.63 2.16 1.83v-4.46zm-6.123 1.45L3.99 12.736v8.523s-.02.492.46.492l5.545-.006.008-4.545s-.078-.75.65-.75h2.3c.86 0 .806.75.806.75l-.01 4.53h5.43c.6 0 .582-.613.582-.613v-8.38z'})
    );

    registerBlockType('home/customizable', {
        title: 'Customizable screen',
        description: 'Customizable screen.',
        icon: icon,
        category: 'home-page',
        keywords: ['customizable screen'],
        attributes: {
            title: {
                type: 'string',
                source: 'html',
                selector: '#customizable__title'
            },
            titleTab1: {
                type: 'string',
                source: 'html',
                selector: '#customizable__title--tab1'
            },
            subtitleTab1: {
                type: 'string',
                source: 'html',
                selector: '#customizable__subtitle--tab1'
            },
            textTab1: {
                type: 'string',
                source: 'html',
                selector: '#customizable__text--tab1'
            },
            titleTab2: {
                type: 'string',
                source: 'html',
                selector: '#customizable__title--tab2'
            },
            subtitleTab2: {
                type: 'string',
                source: 'html',
                selector: '#customizable__subtitle--tab2'
            },
            textTab2: {
                type: 'string',
                source: 'html',
                selector: '#customizable__text--tab2'
            },
            titleTab3: {
                type: 'string',
                source: 'html',
                selector: '#customizable__title--tab3'
            },
            subtitleTab3: {
                type: 'string',
                source: 'html',
                selector: '#customizable__subtitle--tab3'
            },
            textTab3: {
                type: 'string',
                source: 'html',
                selector: '#customizable__text--tab3'
            },
            mediaIDColor1: {
                type: 'number'
            },
            mediaURLColor1: {
                type: 'string',
                source: 'attribute',
                selector: '#customizable__color__1',
                attribute: 'src'
            },
            mediaIDColor2: {
                type: 'number'
            },
            mediaURLColor2: {
                type: 'string',
                source: 'attribute',
                selector: '#customizable__color__2',
                attribute: 'src'
            },
            mediaIDColor3: {
                type: 'number'
            },
            mediaURLColor3: {
                type: 'string',
                source: 'attribute',
                selector: '#customizable__color__3',
                attribute: 'src'
            },
            mediaIDColor4: {
                type: 'number'
            },
            mediaURLColor4: {
                type: 'string',
                source: 'attribute',
                selector: '#customizable__color__4',
                attribute: 'src'
            },
            mediaIDColor5: {
                type: 'number'
            },
            mediaURLColor5: {
                type: 'string',
                source: 'attribute',
                selector: '#customizable__color__5',
                attribute: 'src'
            },
            mediaIDLogo1: {
                type: 'number'
            },
            mediaURLLogo1: {
                type: 'string',
                source: 'attribute',
                selector: '#customizable__logo__1',
                attribute: 'src'
            },
            mediaIDLogo2: {
                type: 'number'
            },
            mediaURLLogo2: {
                type: 'string',
                source: 'attribute',
                selector: '#customizable__logo__2',
                attribute: 'src'
            },
            mediaIDLogo3: {
                type: 'number'
            },
            mediaURLLogo3: {
                type: 'string',
                source: 'attribute',
                selector: '#customizable__logo__3',
                attribute: 'src'
            },
            mediaIDLogo4: {
                type: 'number'
            },
            mediaURLLogo4: {
                type: 'string',
                source: 'attribute',
                selector: '#customizable__logo__4',
                attribute: 'src'
            },
            mediaID: {
                type: 'number'
            },
            mediaURL: {
                type: 'string',
                source: 'attribute',
                selector: '#customizable__content',
                attribute: 'src'
            },
            pressBtn: {
                type: 'string',
                source: 'attribute',
                selector: '.custBtn',
                attribute: 'data-press'
            },
            pressedBtn: {
                type: 'string',
                source: 'attribute',
                selector: '.custBtn',
                attribute: 'data-pressed'
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
            var onSelectImage1 = function (media) {
                return props.setAttributes({
                    mediaURLColor1: media.url,
                    mediaIDColor1: media.id
                })
            };
            var onSelectImage2 = function (media) {
                return props.setAttributes({
                    mediaURLColor2: media.url,
                    mediaIDColor2: media.id
                })
            };
            var onSelectImage3 = function (media) {
                return props.setAttributes({
                    mediaURLColor3: media.url,
                    mediaIDColor3: media.id
                })
            };
            var onSelectImage4 = function (media) {
                return props.setAttributes({
                    mediaURLColor4: media.url,
                    mediaIDColor4: media.id
                })
            };
            var onSelectImage5 = function (media) {
                return props.setAttributes({
                    mediaURLColor5: media.url,
                    mediaIDColor5: media.id
                })
            };

            var onSelectImageLogo1 = function (media) {
                return props.setAttributes({
                    mediaURLLogo1: media.url,
                    mediaIDLogo1: media.id
                })
            };
            var onSelectImageLogo2 = function (media) {
                return props.setAttributes({
                    mediaURLLogo2: media.url,
                    mediaIDLogo2: media.id
                })
            };
            var onSelectImageLogo3 = function (media) {
                return props.setAttributes({
                    mediaURLLogo3: media.url,
                    mediaIDLogo3: media.id
                })
            };
            var onSelectImageLogo4 = function (media) {
                return props.setAttributes({
                    mediaURLLogo4: media.url,
                    mediaIDLogo4: media.id
                })
            };


            //Block content
            return [
                el('div', {className: props.className},
                    el('div', {className: 'main-customizable'},
                        el(RichText, {
                            tagName: 'h3',
                            placeholder: 'Section title...',
                            keepPlaceholderOnFocus: true,
                            value: attributes.title,
                            allowedFormats: [],
                            onChange: function (title) {
                                props.setAttributes({title: title});
                            }
                        }),
                        el('div', {
                                className: 'block-element-img'
                            },
                            el(RichText, {
                                tagName: 'h1',
                                placeholder: 'Tab title...',
                                keepPlaceholderOnFocus: true,
                                value: attributes.titleTab1,
                                allowedFormats: [],
                                onChange: function (titleTab1) {
                                    props.setAttributes({titleTab1: titleTab1});
                                }
                            }),
                            el(RichText, {
                                tagName: 'h2',
                                placeholder: 'Tab subtitle...',
                                keepPlaceholderOnFocus: true,
                                value: attributes.subtitleTab1,
                                allowedFormats: [],
                                onChange: function (subtitleTab1) {
                                    props.setAttributes({subtitleTab1: subtitleTab1});
                                }
                            }),
                            el(RichText, {
                                tagName: 'p',
                                placeholder: 'Tab text...',
                                keepPlaceholderOnFocus: true,
                                value: attributes.textTab1,
                                allowedFormats: [],
                                onChange: function (textTab1) {
                                    props.setAttributes({textTab1: textTab1});
                                }
                            }),
                            el('div', {
                                    className: 'block-element-img block-element-img__list'
                                },
                                el(MediaUpload, {
                                    onSelect: onSelectImage1,
                                    type: 'image',
                                    render: function (obj) {
                                        let imageLink = attributes.mediaURLColor1 ? attributes.mediaURLColor1 : '/wp-content/themes/opticore/gutenberg/no-image.png';
                                        return el(components.Button, {
                                                className: 'components-toolbar__control components-toolbar__control--width',
                                                onClick: obj.open,
                                                width: '200', height: '200'
                                            },
                                            el('img', {src: imageLink, onClick: obj.open, width: '200', height: '200'}),
                                        );
                                    }
                                }),
                                el(MediaUpload, {
                                    onSelect: onSelectImage2,
                                    type: 'image',
                                    render: function (obj) {
                                        let imageLink = attributes.mediaURLColor2 ? attributes.mediaURLColor2 : '/wp-content/themes/opticore/gutenberg/no-image.png';
                                        return el(components.Button, {
                                                className: 'components-toolbar__control components-toolbar__control--width',
                                                onClick: obj.open,
                                                width: '200', height: '200'
                                            },
                                            el('img', {src: imageLink, onClick: obj.open, width: '200', height: '200'}),
                                        );
                                    }
                                }),
                                el(MediaUpload, {
                                    onSelect: onSelectImage3,
                                    type: 'image',
                                    render: function (obj) {
                                        let imageLink = attributes.mediaURLColor3 ? attributes.mediaURLColor3 : '/wp-content/themes/opticore/gutenberg/no-image.png';
                                        return el(components.Button, {
                                                className: 'components-toolbar__control components-toolbar__control--width',
                                                onClick: obj.open,
                                                width: '200', height: '200'
                                            },
                                            el('img', {src: imageLink, onClick: obj.open, width: '200', height: '200'}),
                                        );
                                    }
                                }),
                                el(MediaUpload, {
                                    onSelect: onSelectImage4,
                                    type: 'image',
                                    render: function (obj) {
                                        let imageLink = attributes.mediaURLColor4 ? attributes.mediaURLColor4 : '/wp-content/themes/opticore/gutenberg/no-image.png';
                                        return el(components.Button, {
                                                className: 'components-toolbar__control components-toolbar__control--width',
                                                onClick: obj.open,
                                                width: '200', height: '200'
                                            },
                                            el('img', {src: imageLink, onClick: obj.open, width: '200', height: '200'}),
                                        );
                                    }
                                }),
                                el(MediaUpload, {
                                    onSelect: onSelectImage5,
                                    type: 'image',
                                    render: function (obj) {
                                        let imageLink = attributes.mediaURLColor5 ? attributes.mediaURLColor5 : '/wp-content/themes/opticore/gutenberg/no-image.png';
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
                        ),
                        el('div', {
                                className: 'block-element-img'
                            },
                            el(RichText, {
                                tagName: 'h1',
                                placeholder: 'Tab title...',
                                keepPlaceholderOnFocus: true,
                                value: attributes.titleTab2,
                                allowedFormats: [],
                                onChange: function (titleTab2) {
                                    props.setAttributes({titleTab2: titleTab2});
                                }
                            }),
                            el(RichText, {
                                tagName: 'h2',
                                placeholder: 'Tab subtitle...',
                                keepPlaceholderOnFocus: true,
                                value: attributes.subtitleTab2,
                                allowedFormats: [],
                                onChange: function (subtitleTab2) {
                                    props.setAttributes({subtitleTab2: subtitleTab2});
                                }
                            }),
                            el(RichText, {
                                tagName: 'p',
                                placeholder: 'Tab text...',
                                keepPlaceholderOnFocus: true,
                                value: attributes.textTab2,
                                allowedFormats: [],
                                onChange: function (textTab2) {
                                    props.setAttributes({textTab2: textTab2});
                                }
                            }),
                            el('div', {
                                    className: 'block-element-img block-element-img__list'
                                },
                                el(MediaUpload, {
                                    onSelect: onSelectImageLogo1,
                                    type: 'image',
                                    render: function (obj) {
                                        let imageLink = attributes.mediaURLLogo1 ? attributes.mediaURLLogo1 : '/wp-content/themes/opticore/gutenberg/no-image.png';
                                        return el(components.Button, {
                                                className: 'components-toolbar__control components-toolbar__control--width',
                                                onClick: obj.open,
                                                width: '200', height: '200'
                                            },
                                            el('img', {src: imageLink, onClick: obj.open, width: '200', height: '200'}),
                                        );
                                    }
                                }),
                                el(MediaUpload, {
                                    onSelect: onSelectImageLogo2,
                                    type: 'image',
                                    render: function (obj) {
                                        let imageLink = attributes.mediaURLLogo2 ? attributes.mediaURLLogo2 : '/wp-content/themes/opticore/gutenberg/no-image.png';
                                        return el(components.Button, {
                                                className: 'components-toolbar__control components-toolbar__control--width',
                                                onClick: obj.open,
                                                width: '200', height: '200'
                                            },
                                            el('img', {src: imageLink, onClick: obj.open, width: '200', height: '200'}),
                                        );
                                    }
                                }),
                                el(MediaUpload, {
                                    onSelect: onSelectImageLogo3,
                                    type: 'image',
                                    render: function (obj) {
                                        let imageLink = attributes.mediaURLLogo3 ? attributes.mediaURLLogo3 : '/wp-content/themes/opticore/gutenberg/no-image.png';
                                        return el(components.Button, {
                                                className: 'components-toolbar__control components-toolbar__control--width',
                                                onClick: obj.open,
                                                width: '200', height: '200'
                                            },
                                            el('img', {src: imageLink, onClick: obj.open, width: '200', height: '200'}),
                                        );
                                    }
                                }),
                                el(MediaUpload, {
                                    onSelect: onSelectImageLogo4,
                                    type: 'image',
                                    render: function (obj) {
                                        let imageLink = attributes.mediaURLLogo4 ? attributes.mediaURLLogo4 : '/wp-content/themes/opticore/gutenberg/no-image.png';
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
                        ),
                        el('div', {
                                className: 'block-element-img'
                            },
                            el(RichText, {
                                tagName: 'h1',
                                placeholder: 'Tab title...',
                                keepPlaceholderOnFocus: true,
                                value: attributes.titleTab3,
                                allowedFormats: [],
                                onChange: function (titleTab3) {
                                    props.setAttributes({titleTab3: titleTab3});
                                }
                            }),
                            el(RichText, {
                                tagName: 'h2',
                                placeholder: 'Tab subtitle...',
                                keepPlaceholderOnFocus: true,
                                value: attributes.subtitleTab3,
                                allowedFormats: [],
                                onChange: function (subtitleTab3) {
                                    props.setAttributes({subtitleTab3: subtitleTab3});
                                }
                            }),
                            el(RichText, {
                                tagName: 'p',
                                placeholder: 'Tab text...',
                                keepPlaceholderOnFocus: true,
                                value: attributes.textTab3,
                                allowedFormats: [],
                                onChange: function (textTab3) {
                                    props.setAttributes({textTab3: textTab3});
                                }
                            }),
                            el('div', {
                                    className: 'block-element-img block-element-img__list'
                                },
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
                        ),
                        el('div', {
                                className: 'block-element-img'
                            },
                            el(RichText, {
                                tagName: 'p',
                                placeholder: 'Press Text...',
                                keepPlaceholderOnFocus: true,
                                value: attributes.pressBtn,
                                allowedFormats: [],
                                onChange: function (pressBtn) {
                                    props.setAttributes({pressBtn: pressBtn});
                                }
                            }),
                            el(RichText, {
                                tagName: 'p',
                                placeholder: 'Pressed Text...',
                                keepPlaceholderOnFocus: true,
                                value: attributes.pressedBtn,
                                allowedFormats: [],
                                onChange: function (pressedBtn) {
                                    props.setAttributes({pressedBtn: pressedBtn});
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
            return el('section', {className: 'customizable first'},
                el('div', {className: 'container'},

                    el('div', {
                            className: 'customizable__tabs',
                        },
                        el('div', {
                                className: 'active',
                                'data-background': '#095FEC',
                            },
                            el(RichText.Content, {
                                id: 'customizable__title--tab1',
                                tagName: 'p',
                                value: attributes.titleTab1
                            }),
                            el(RichText.Content, {
                                id: 'customizable__title',
                                className: 'upper-line',
                                tagName: 'span',
                                value: attributes.title
                            }),
                            el('span', {
                                    className: 'line-nav',
                                },
                            ),
                        ),
                        el('div', {
                                className: 'second',
                                'data-background': '#9847FF',
                            },
                            el(RichText.Content, {
                                id: 'customizable__title--tab2',
                                tagName: 'p',
                                value: attributes.titleTab2
                            }),
                        ),
                        el('div', {
                                className: 'last',
                                'data-background': '#095FEC',
                            },
                            el(RichText.Content, {
                                id: 'customizable__title--tab3',
                                tagName: 'p',
                                value: attributes.titleTab3
                            }),
                        ),
                    ),
                    el('div', {
                            className: 'customizable__list',
                        },
                        el('div', {
                                className: 'customizable__item active',
                            },
                            el('div', {
                                    className: 'customizable__row',
                                },
                                el('div', {
                                        className: 'customizable__photo',
                                    },
                                    el(RichText.Content, {
                                        id: 'customizable__color__1',
                                        tagName: 'img',
                                        src: attributes.mediaURLColor1,
                                    }),
                                    el(RichText.Content, {
                                        id: 'customizable__color__2',
                                        tagName: 'img',
                                        src: attributes.mediaURLColor2,
                                    }),
                                    el(RichText.Content, {
                                        id: 'customizable__color__3',
                                        tagName: 'img',
                                        src: attributes.mediaURLColor3,
                                    }), el(RichText.Content, {
                                        id: 'customizable__color__4',
                                        tagName: 'img',
                                        src: attributes.mediaURLColor4,
                                    }),
                                    el(RichText.Content, {
                                        id: 'customizable__color__5',
                                        tagName: 'img',
                                        src: attributes.mediaURLColor5,
                                    }),
                                    el(RichText.Content, {
                                        tagName: 'img',
                                        alt: 'customizable',
                                        src: '/wp-content/themes/opticore/src/img/custom/222222.png',
                                    }),
                                    el(RichText.Content, {
                                        tagName: 'img',
                                        alt: 'customizable',
                                        src: '/wp-content/themes/opticore/src/img/custom/2.png',
                                    }),
                                    el(RichText.Content, {
                                        tagName: 'img',
                                        alt: 'customizable',
                                        src: '/wp-content/themes/opticore/src/img/custom/222.png',
                                    }),
                                    el(RichText.Content, {
                                        tagName: 'img',
                                        alt: 'customizable',
                                        src: '/wp-content/themes/opticore/src/img/custom/2222.png',
                                    }),
                                    el('div', {
                                            className: 'small-cart',
                                        },
                                        el(RichText.Content, {
                                            tagName: 'img',
                                            alt: 'customizable',
                                            className: 'small',
                                            src: '/wp-content/themes/opticore/src/img/custom/smallblue.png',
                                        }),
                                        el(RichText.Content, {
                                            tagName: 'img',
                                            alt: 'customizable',
                                            src: '/wp-content/themes/opticore/src/img/custom/smallblack.png',
                                        }),
                                        el(RichText.Content, {
                                            tagName: 'img',
                                            alt: 'customizable',
                                            src: '/wp-content/themes/opticore/src/img/custom/smalyellow.png',
                                        }),
                                        el(RichText.Content, {
                                            tagName: 'img',
                                            alt: 'customizable',
                                            src: '/wp-content/themes/opticore/src/img/custom/smal3.png',
                                        }),
                                        el(RichText.Content, {
                                            tagName: 'img',
                                            alt: 'customizable',
                                            src: '/wp-content/themes/opticore/src/img/custom/smal2.png',
                                        }),
                                    ),
                                ),
                                el('div', {
                                        className: 'customizable__info',
                                    },
                                    el(RichText.Content, {
                                        id: 'customizable__subtitle--tab1',
                                        tagName: 'h2',
                                        value: attributes.subtitleTab1
                                    }),
                                    el(RichText.Content, {
                                        id: 'customizable__text--tab1',
                                        tagName: 'p',
                                        value: attributes.textTab1
                                    }),
                                ),
                                el('div', {
                                        className: 'customizable__colors custBtn',
                                        'data-press': attributes.pressBtn,
                                        'data-pressed': attributes.pressedBtn,
                                    },
                                    el('div', {
                                            className: 'customizable__color customizable__color--black',
                                            'data-background': '#313134',
                                        },
                                        attributes.pressBtn
                                    ),
                                    el('div', {
                                            className: 'customizable__color customizable__color--yellow',
                                            'data-background': '#FDBB13',
                                        },
                                        attributes.pressBtn
                                    ),
                                    el('div', {
                                            className: 'customizable__color customizable__color--orange',
                                            'data-background': '#FF7648',
                                        },
                                        attributes.pressBtn
                                    ),
                                    el('div', {
                                            className: 'customizable__color customizable__color--green',
                                            'data-background': '#4AC59B',
                                        },
                                        attributes.pressBtn
                                    ),
                                ),
                            ),
                        ),
                        el('div', {
                                className: 'customizable__item',
                            },
                            el('div', {
                                    className: 'customizable__row',
                                },
                                el('div', {
                                        className: 'customizable__photo',
                                    },
                                    el('svg', {
                                            width: '587',
                                            height: '456',
                                            viewBox: '0 0 587 456',
                                            fill: 'none'
                                        },
                                        el('path', {
                                                d: 'M4 6.00001C4 2.6863 6.68629 0 10 0H576.869C580.183 0 582.869 2.68629 582.869 6V13.5455H4V6.00001Z',
                                                fill: '#E5E9F0',
                                            },
                                        ),
                                        el('g', {
                                                filter: 'url(#filter0_d)',
                                            },
                                            el('g', {
                                                    'clip-path': 'url(#clip0)',
                                                },
                                                el('path', {
                                                        d: 'M5 14H581.461V436.346C581.461 441.869 576.984 446.346 571.461 446.346H15C9.47715 446.346 5 441.869 5 436.346V14Z',
                                                        fill: '#F9FAFD',
                                                    },
                                                ),
                                                el('g', {
                                                        'clip-path': 'url(#clip1)',
                                                    },
                                                    el('path', {
                                                            d: 'M25.3491 27.5671L24.9497 26.0471C24.8356 25.5405 24.3791 25.2027 23.9227 25.1464L22.8386 25.0901C22.6674 24.9212 22.4962 24.696 22.268 24.5272L22.2109 23.4575C22.2109 22.9509 21.8686 22.5568 21.4121 22.3879L19.9286 21.9376C19.4722 21.825 18.9016 21.9376 18.6163 22.3879L17.9316 23.2887C17.8175 23.2887 17.5893 23.345 17.304 23.4575L16.334 22.8946C15.9346 22.6694 15.307 22.7257 14.9646 23.0635L13.8235 24.1331C13.4241 24.5834 13.4241 25.0338 13.5953 25.4279L14.0517 26.4412C14.0517 26.5538 13.9947 26.7227 13.9376 26.8353C13.9376 26.8915 13.8806 27.0604 13.8235 27.173L12.8535 27.736C12.5112 27.9612 12.2259 28.3552 12.34 28.9182L12.6824 30.4944C12.7965 31.0011 13.2529 31.3389 13.7094 31.3952L14.8505 31.5077C15.0217 31.7329 15.1929 31.9018 15.4211 32.0707L15.4782 33.1403C15.4782 33.647 15.8205 34.0973 16.334 34.2099L17.8175 34.6603C18.274 34.8291 18.7875 34.604 19.0728 34.2662L19.7575 33.3092C19.9857 33.2529 20.271 33.1966 20.4992 33.1403L21.5262 33.7032C21.9257 33.9284 22.4962 33.8721 22.8956 33.5344L24.0368 32.4648C24.1509 32.2959 24.3221 32.127 24.3221 31.9018C24.3791 31.6766 24.3791 31.4514 24.265 31.2263V31.17L23.6374 30.1004C23.6944 30.0441 23.7515 29.8752 23.7515 29.7626C23.7515 29.7063 23.8085 29.5374 23.8656 29.4248L24.7785 28.8619C25.3491 28.5241 25.4632 27.9612 25.3491 27.5671ZM24.265 27.8486L22.8386 28.7493V29.0871C22.8386 29.1433 22.7815 29.2559 22.7815 29.4811C22.7815 29.5374 22.7245 29.5937 22.7245 29.65C22.6674 29.7063 22.6103 29.8752 22.6103 29.9878L22.5533 30.213L23.4091 31.6203C23.4091 31.6203 23.4091 31.6203 23.4091 31.6766L22.268 32.7462L20.6704 31.9581L20.4422 32.0144C20.0998 32.127 19.7575 32.1833 19.3581 32.2396L19.1298 32.2959L18.2169 33.5344L18.1599 33.5907L16.6764 33.1403L16.6193 31.4514L16.3911 31.2826C16.1629 31.1137 15.9346 30.8885 15.7064 30.607L15.5352 30.3818L13.8235 30.2692L13.4812 28.7493C13.4812 28.7493 13.4812 28.693 13.5382 28.693L14.9646 27.8486V27.5108C14.9646 27.4545 15.0217 27.3419 15.0217 27.1167C15.0217 27.0604 15.0788 27.0041 15.0788 26.9478C15.1358 26.8915 15.1929 26.7227 15.1929 26.6101L15.307 26.3849L14.6223 25.0338C14.6223 24.9775 14.6223 24.9775 14.6223 24.9775L15.7635 23.9079L17.2469 24.6397L17.4752 24.5272C17.7605 24.4146 18.0457 24.3583 18.4451 24.302L18.6734 24.2457L19.6434 23.0072L21.0698 23.4575L21.1268 25.1464L21.4692 25.259C21.7545 25.4279 21.9257 25.6531 22.1539 25.9345L22.3251 26.1597L23.9227 26.2723L24.265 27.8486C24.265 27.7923 24.265 27.7923 24.265 27.8486ZM18.9587 25.8219C17.7034 25.8219 16.6764 26.8353 16.6764 28.0737C16.6764 29.3122 17.7034 30.3255 18.9587 30.3255C20.2139 30.3255 21.241 29.3122 21.241 28.0737C21.241 26.8353 20.2139 25.8219 18.9587 25.8219ZM18.9587 29.1996C18.331 29.1996 17.8175 28.693 17.8175 28.0737C17.8175 27.4545 18.331 26.9478 18.9587 26.9478C19.5863 26.9478 20.0998 27.4545 20.0998 28.0737C20.0998 28.693 19.5863 29.1996 18.9587 29.1996Z',
                                                            fill: 'url(#paint0_linear)',
                                                        },
                                                    ),
                                                ),
                                                el('path', {
                                                        d: 'M44.255 24.1332C43.6247 24.1332 43.1138 24.6373 43.1138 25.2591V30.8886C43.1138 31.5105 43.6247 32.0145 44.255 32.0145H44.6577V31.6171C44.6577 30.2821 45.7547 29.1998 47.1078 29.1998C48.461 29.1998 49.5579 30.2821 49.5579 31.6171V32.0145H49.9607C50.5909 32.0145 51.1018 31.5105 51.1018 30.8886V26.8315C51.1018 26.6881 51.0464 26.5501 50.9468 26.4457L48.9098 24.3104C48.802 24.1973 48.6516 24.1332 48.4943 24.1332H45.7989V24.6962C45.7989 25.318 46.3098 25.8221 46.94 25.8221H47.6448C47.96 25.8221 48.2154 26.0741 48.2154 26.385C48.2154 26.6959 47.96 26.948 47.6448 26.948H46.94C45.6795 26.948 44.6577 25.9398 44.6577 24.6962V24.1332H44.255ZM48.4168 32.0145V31.6171C48.4168 30.9039 47.8307 30.3257 47.1078 30.3257C46.3849 30.3257 45.7989 30.9039 45.7989 31.6171V32.0145H48.4168ZM41.9727 25.2591C41.9727 24.0155 42.9945 23.0073 44.255 23.0073H48.4943C48.9663 23.0073 49.4173 23.1996 49.7408 23.5387L51.7777 25.6741C52.0766 25.9873 52.243 26.4013 52.243 26.8315V30.8886C52.243 32.1322 51.2211 33.1404 49.9607 33.1404H44.255C42.9945 33.1404 41.9727 32.1322 41.9727 30.8886V25.2591Z',
                                                        fill: 'url(#paint1_linear)',
                                                        'fill-rule': 'evenodd',
                                                        'clip-rule': 'evenodd'
                                                    },
                                                ),
                                                el('path', {
                                                        d: 'M69.7632 27.0551C69.517 27.2492 69.477 27.6034 69.6737 27.8463C69.8705 28.0891 70.2295 28.1286 70.4757 27.9345L70.8619 27.6299V31.4384C70.8619 32.3711 71.6283 33.1272 72.5736 33.1272H74.5774V29.3777C74.5774 28.9873 74.8982 28.6707 75.2939 28.6707C75.6897 28.6707 76.0105 28.9873 76.0105 29.3777V33.1272H78.0142C78.9596 33.1272 79.7259 32.3711 79.7259 31.4384V27.633L80.1117 27.9378C80.3577 28.1321 80.7168 28.0929 80.9137 27.8502C81.1107 27.6075 81.0709 27.2532 80.825 27.0589L76.0086 23.2543C75.592 22.9252 74.9998 22.925 74.5829 23.2538L69.7632 27.0551ZM72.003 31.4384V26.8555L75.2939 24.3823L78.5848 26.8555V31.4384C78.5848 31.7493 78.3293 32.0013 78.0142 32.0013H77.1517V29.3777C77.1517 28.3654 76.3199 27.5448 75.2939 27.5448C74.2679 27.5448 73.4362 28.3654 73.4362 29.3777V32.0013H72.5736C72.2585 32.0013 72.003 31.7493 72.003 31.4384Z',
                                                        fill: 'url(#paint2_linear)',
                                                        'fill-rule': 'evenodd',
                                                        'clip-rule': 'evenodd'
                                                    },
                                                ),
                                                el('path', {
                                                        d: 'M512.976 28.6368C513.319 28.6368 513.547 28.4116 513.547 28.0738C513.547 27.7361 513.319 27.5109 512.976 27.5109H511.55V25.2591C511.55 24.9213 511.322 24.6961 510.979 24.6961C510.637 24.6961 510.409 24.9213 510.409 25.2591V27.7924C510.409 28.2427 510.808 28.6368 511.264 28.6368H512.976ZM510.979 22.4443C507.841 22.4443 505.273 24.9776 505.273 28.0738C505.273 31.1701 507.841 33.7033 510.979 33.7033C514.117 33.7033 516.685 31.1701 516.685 28.0738C516.685 24.9776 514.117 22.4443 510.979 22.4443ZM506.415 28.0738C506.415 25.5969 508.469 23.5702 510.979 23.5702C513.49 23.5702 515.544 25.5969 515.544 28.0738C515.544 30.5508 513.49 32.5774 510.979 32.5774C508.469 32.5774 506.415 30.5508 506.415 28.0738Z',
                                                        fill: 'url(#paint3_linear)',
                                                    },
                                                ),
                                                el('g', {
                                                        'clip-path': 'url(#clip2)',
                                                    },
                                                    el('path', {
                                                            d: 'M542.321 25.259C541.579 25.259 540.838 25.5405 540.324 25.9909C540.039 25.5968 539.582 25.3716 539.069 25.3716C538.555 25.3716 538.099 25.5968 537.814 25.9909C537.243 25.5405 536.558 25.259 535.817 25.259C534.162 25.259 532.85 26.5538 532.85 28.1864C532.85 29.8189 534.162 31.1137 535.817 31.1137C537.471 31.1137 538.784 29.8189 538.784 28.1864C538.784 27.7923 538.727 27.3982 538.555 27.0605C538.555 26.7227 538.841 26.5538 539.069 26.5538C539.297 26.5538 539.582 26.779 539.582 27.1168C539.468 27.4545 539.354 27.7923 539.354 28.1864C539.354 29.8189 540.666 31.1137 542.321 31.1137C543.976 31.1137 545.288 29.8189 545.288 28.1864C545.231 26.5538 543.919 25.259 542.321 25.259ZM535.817 29.9315C534.79 29.9315 533.991 29.1434 533.991 28.1301C533.991 27.1731 534.79 26.3849 535.817 26.3849C536.844 26.3849 537.642 27.1731 537.642 28.1864C537.585 29.1434 536.787 29.9315 535.817 29.9315ZM542.321 29.9315C541.294 29.9315 540.495 29.1434 540.495 28.1301C540.495 27.1168 541.294 26.3286 542.321 26.3286C543.348 26.3286 544.147 27.1168 544.147 28.1301C544.09 29.1434 543.291 29.9315 542.321 29.9315Z',
                                                            fill: 'url(#paint4_linear)',
                                                        },
                                                    ),
                                                ),
                                                el('g', {
                                                        'clip-path': 'url(#clip3)',
                                                    },
                                                    el('path', {
                                                            d: 'M574.121 25.822C574.121 27.6798 572.581 29.1997 570.698 29.1997C568.815 29.1997 567.274 27.6798 567.274 25.822C567.274 23.9643 568.815 22.4443 570.698 22.4443C572.581 22.4443 574.121 23.9643 574.121 25.822ZM571.268 24.4147C571.268 24.0769 571.04 23.8517 570.698 23.8517C570.355 23.8517 570.127 24.0769 570.127 24.4147V25.2591H569.271C568.929 25.2591 568.701 25.4843 568.701 25.822C568.701 26.1598 568.929 26.385 569.271 26.385H570.127V27.2294C570.127 27.5672 570.355 27.7924 570.698 27.7924C571.04 27.7924 571.268 27.5672 571.268 27.2294V26.385H572.124C572.467 26.385 572.695 26.1598 572.695 25.822C572.695 25.4843 572.467 25.2591 572.124 25.2591H571.268V24.4147ZM573.208 28.862C572.923 29.0872 572.581 29.3123 572.181 29.4812C572.238 29.5938 572.238 29.7627 572.238 29.8753C572.238 30.8886 571.44 31.6767 570.413 31.6767C569.385 31.6767 568.587 30.8886 568.587 29.8753C568.587 29.6501 568.644 29.4812 568.701 29.256C567.845 28.8057 567.217 28.0175 566.875 27.1168C566.476 27.1731 566.133 27.3983 565.848 27.6798C565.391 27.2294 564.707 26.9479 563.965 26.9479C562.31 26.9479 560.998 28.2427 560.998 29.8753C560.998 31.5078 562.31 32.8026 563.965 32.8026C565.62 32.8026 566.932 31.5078 566.932 29.8753C566.932 29.4812 566.875 29.0872 566.704 28.7494C566.704 28.4116 566.989 28.2427 567.217 28.2427C567.446 28.2427 567.731 28.4679 567.731 28.8057C567.617 29.1434 567.503 29.4812 567.503 29.8753C567.503 31.5078 568.815 32.8026 570.47 32.8026C572.124 32.8026 573.437 31.5078 573.437 29.8753C573.379 29.5375 573.322 29.1997 573.208 28.862ZM563.965 31.6204C562.938 31.6204 562.139 30.8323 562.139 29.819C562.139 28.862 562.938 28.0738 563.965 28.0738C564.992 28.0738 565.791 28.862 565.791 29.8753C565.734 30.8323 564.935 31.6204 563.965 31.6204Z',
                                                            fill: 'url(#paint5_linear)',
                                                        },
                                                    ),
                                                ),
                                                el('line', {
                                                        x1: '5',
                                                        y1: '41.5845',
                                                        x2: '581.461',
                                                        y2: '41.5845',
                                                        stroke: '#ECECEC',
                                                        'stroke-width': '1.1259',
                                                    },
                                                ),
                                                el('g', {
                                                        'filter': 'url(#filter1_d)',
                                                    },
                                                    el('path', {
                                                            d: 'M159.373 28.3553C159.373 24.3155 162.648 21.0405 166.688 21.0405H200.991C205.031 21.0405 208.306 24.3155 208.306 28.3553V28.3553C208.306 32.3951 205.031 35.67 200.991 35.67H166.688C162.648 35.67 159.373 32.3951 159.373 28.3553V28.3553Z',
                                                            fill: 'white',
                                                        },
                                                    ),
                                                    el('g', {
                                                            'clip-path': 'url(#clip4)',
                                                        },
                                                        el('path', {
                                                                d: 'M171.962 26.5081V27.3565H170.191V28.273H171.516V29.0966H170.191V30.8552H169.132V26.5081H171.962ZM174.983 30.8552L174.079 29.2142H173.825V30.8552H172.766V26.5081H174.544C174.886 26.5081 175.177 26.568 175.417 26.6877C175.66 26.8074 175.842 26.9726 175.962 27.1831C176.082 27.3895 176.141 27.6207 176.141 27.8767C176.141 28.1656 176.059 28.4237 175.894 28.6507C175.733 28.8778 175.493 29.0388 175.175 29.1337L176.179 30.8552H174.983ZM173.825 28.4649H174.482C174.676 28.4649 174.82 28.4175 174.915 28.3225C175.014 28.2276 175.064 28.0934 175.064 27.92C175.064 27.7549 175.014 27.6248 174.915 27.5299C174.82 27.4349 174.676 27.3874 174.482 27.3874H173.825V28.4649ZM179.76 30.0874H178.137L177.877 30.8552H176.769L178.342 26.5081H179.568L181.141 30.8552H180.02L179.76 30.0874ZM179.487 29.27L178.949 27.6785L178.416 29.27H179.487ZM186.79 26.5081V30.8552H185.731V28.2482L184.759 30.8552H183.905L182.926 28.242V30.8552H181.867V26.5081H183.118L184.338 29.5177L185.546 26.5081H186.79ZM188.858 27.3565V28.2358H190.276V29.0532H188.858V30.0069H190.462V30.8552H187.799V26.5081H190.462V27.3565H188.858Z',
                                                                fill: '#5F626F',
                                                            },
                                                        ),
                                                        el('g', {
                                                                'filter': 'url(#filter2_d)',
                                                            },
                                                            el('ellipse', {
                                                                    cx: '196.466',
                                                                    cy: '28.3553',
                                                                    rx: '2.83326',
                                                                    ry: '2.81475',
                                                                    fill: 'url(#paint6_linear)'
                                                                },
                                                            ),
                                                        ),

                                                        el('g', {
                                                                'clip-path': 'url(#clip5)',
                                                            },
                                                            el('path', {
                                                                    d: 'M198.136 27.5561L196.557 29.2115V29.2115L196.031 29.7634L195.504 29.2115L195.507 29.2085L194.758 28.4142L195.284 27.8623L196.033 28.6568L197.609 27.0042L198.136 27.5561Z',
                                                                    fill: 'white',
                                                                    'fill-rule': 'evenodd',
                                                                    'clip-rule': 'evenodd'
                                                                },
                                                            ),
                                                        ),
                                                    ),
                                                ),

                                                el('line', {
                                                        x1: '208.307',
                                                        y1: '27.7923',
                                                        x2: '219.566',
                                                        y2: '27.7923',
                                                        stroke: '#ECECEC',
                                                        'stroke-width': '1.1259',
                                                    },
                                                ),
                                                el('path', {
                                                        d: 'M219.566 28.3553C219.566 24.3155 222.841 21.0405 226.881 21.0405H259.266C263.306 21.0405 266.581 24.3155 266.581 28.3553V28.3553C266.581 32.3951 263.306 35.67 259.266 35.67H226.881C222.841 35.67 219.566 32.3951 219.566 28.3553V28.3553Z',
                                                        fill: 'url(#paint7_linear)',
                                                        'fill-opacity': '0.1',
                                                    },
                                                ),
                                                el('g', {
                                                        'clip-path': 'url(#clip6)',
                                                    },
                                                    el('path', {
                                                            d: 'M231.97 27.8828C231.892 27.7384 231.778 27.629 231.63 27.5546C231.485 27.4762 231.314 27.437 231.116 27.437C230.773 27.437 230.498 27.5505 230.292 27.7776C230.086 28.0005 229.982 28.2998 229.982 28.6755C229.982 29.0759 230.09 29.3897 230.304 29.6167C230.523 29.8397 230.823 29.9511 231.202 29.9511C231.462 29.9511 231.681 29.8851 231.859 29.753C232.04 29.6209 232.172 29.431 232.255 29.1833H230.911V28.403H233.215V29.3876C233.136 29.6518 233.002 29.8975 232.812 30.1245C232.627 30.3516 232.389 30.5353 232.1 30.6756C231.811 30.816 231.485 30.8862 231.122 30.8862C230.692 30.8862 230.309 30.7933 229.97 30.6075C229.636 30.4176 229.373 30.1555 229.184 29.8211C228.998 29.4867 228.905 29.1048 228.905 28.6755C228.905 28.2461 228.998 27.8643 229.184 27.5299C229.373 27.1914 229.636 26.9292 229.97 26.7434C230.304 26.5535 230.686 26.4586 231.116 26.4586C231.636 26.4586 232.073 26.5845 232.428 26.8363C232.788 27.0881 233.025 27.437 233.141 27.8828H231.97ZM235.108 30.0378H236.495V30.8552H234.049V26.5081H235.108V30.0378ZM239.954 30.0874H238.332L238.072 30.8552H236.963L238.536 26.5081H239.762L241.335 30.8552H240.214L239.954 30.0874ZM239.682 29.27L239.143 27.6785L238.61 29.27H239.682ZM243.634 30.8986C243.316 30.8986 243.031 30.847 242.78 30.7438C242.528 30.6406 242.326 30.4878 242.173 30.2855C242.024 30.0832 241.946 29.8397 241.937 29.5548H243.065C243.081 29.7158 243.137 29.8397 243.232 29.9264C243.327 30.0089 243.451 30.0502 243.603 30.0502C243.76 30.0502 243.884 30.0151 243.975 29.9449C244.066 29.8706 244.111 29.7695 244.111 29.6415C244.111 29.5342 244.074 29.4454 244 29.3752C243.929 29.305 243.841 29.2473 243.733 29.2018C243.63 29.1564 243.481 29.1048 243.287 29.047C243.007 28.9603 242.778 28.8736 242.6 28.7869C242.423 28.7002 242.27 28.5723 242.142 28.403C242.014 28.2338 241.95 28.0129 241.95 27.7404C241.95 27.3358 242.096 27.02 242.39 26.793C242.683 26.5618 243.065 26.4462 243.535 26.4462C244.014 26.4462 244.4 26.5618 244.693 26.793C244.986 27.02 245.143 27.3379 245.164 27.7466H244.018C244.01 27.6062 243.958 27.4968 243.863 27.4184C243.768 27.3358 243.647 27.2946 243.498 27.2946C243.37 27.2946 243.267 27.3297 243.188 27.3998C243.11 27.4659 243.071 27.5629 243.071 27.6909C243.071 27.8312 243.137 27.9406 243.269 28.0191C243.401 28.0975 243.607 28.1821 243.888 28.273C244.169 28.3679 244.396 28.4587 244.569 28.5454C244.747 28.6321 244.9 28.758 245.028 28.9232C245.156 29.0883 245.219 29.3009 245.219 29.561C245.219 29.8087 245.156 30.0337 245.028 30.236C244.904 30.4383 244.722 30.5993 244.483 30.719C244.243 30.8387 243.96 30.8986 243.634 30.8986ZM247.692 30.8986C247.374 30.8986 247.089 30.847 246.837 30.7438C246.585 30.6406 246.383 30.4878 246.23 30.2855C246.082 30.0832 246.003 29.8397 245.995 29.5548H247.122C247.139 29.7158 247.194 29.8397 247.289 29.9264C247.384 30.0089 247.508 30.0502 247.661 30.0502C247.818 30.0502 247.941 30.0151 248.032 29.9449C248.123 29.8706 248.169 29.7695 248.169 29.6415C248.169 29.5342 248.131 29.4454 248.057 29.3752C247.987 29.305 247.898 29.2473 247.791 29.2018C247.688 29.1564 247.539 29.1048 247.345 29.047C247.064 28.9603 246.835 28.8736 246.658 28.7869C246.48 28.7002 246.327 28.5723 246.199 28.403C246.071 28.2338 246.007 28.0129 246.007 27.7404C246.007 27.3358 246.154 27.02 246.447 26.793C246.74 26.5618 247.122 26.4462 247.593 26.4462C248.072 26.4462 248.458 26.5618 248.751 26.793C249.044 27.02 249.201 27.3379 249.221 27.7466H248.076C248.067 27.6062 248.016 27.4968 247.921 27.4184C247.826 27.3358 247.704 27.2946 247.556 27.2946C247.428 27.2946 247.324 27.3297 247.246 27.3998C247.167 27.4659 247.128 27.5629 247.128 27.6909C247.128 27.8312 247.194 27.9406 247.326 28.0191C247.458 28.0975 247.665 28.1821 247.946 28.273C248.226 28.3679 248.453 28.4587 248.627 28.5454C248.804 28.6321 248.957 28.758 249.085 28.9232C249.213 29.0883 249.277 29.3009 249.277 29.561C249.277 29.8087 249.213 30.0337 249.085 30.236C248.961 30.4383 248.78 30.5993 248.54 30.719C248.301 30.8387 248.018 30.8986 247.692 30.8986ZM251.235 27.3565V28.2358H252.653V29.0532H251.235V30.0069H252.839V30.8552H250.176V26.5081H252.839V27.3565H251.235ZM255.347 30.8986C255.029 30.8986 254.744 30.847 254.493 30.7438C254.241 30.6406 254.038 30.4878 253.886 30.2855C253.737 30.0832 253.659 29.8397 253.65 29.5548H254.777C254.794 29.7158 254.85 29.8397 254.945 29.9264C255.04 30.0089 255.163 30.0502 255.316 30.0502C255.473 30.0502 255.597 30.0151 255.688 29.9449C255.779 29.8706 255.824 29.7695 255.824 29.6415C255.824 29.5342 255.787 29.4454 255.713 29.3752C255.642 29.305 255.554 29.2473 255.446 29.2018C255.343 29.1564 255.194 29.1048 255 29.047C254.72 28.9603 254.491 28.8736 254.313 28.7869C254.136 28.7002 253.983 28.5723 253.855 28.403C253.727 28.2338 253.663 28.0129 253.663 27.7404C253.663 27.3358 253.809 27.02 254.102 26.793C254.396 26.5618 254.777 26.4462 255.248 26.4462C255.727 26.4462 256.113 26.5618 256.406 26.793C256.699 27.02 256.856 27.3379 256.877 27.7466H255.731C255.723 27.6062 255.671 27.4968 255.576 27.4184C255.481 27.3358 255.36 27.2946 255.211 27.2946C255.083 27.2946 254.98 27.3297 254.901 27.3998C254.823 27.4659 254.784 27.5629 254.784 27.6909C254.784 27.8312 254.85 27.9406 254.982 28.0191C255.114 28.0975 255.32 28.1821 255.601 28.273C255.882 28.3679 256.109 28.4587 256.282 28.5454C256.46 28.6321 256.612 28.758 256.74 28.9232C256.868 29.0883 256.932 29.3009 256.932 29.561C256.932 29.8087 256.868 30.0337 256.74 30.236C256.617 30.4383 256.435 30.5993 256.196 30.719C255.956 30.8387 255.673 30.8986 255.347 30.8986Z',
                                                            fill: '#9A3AE8',
                                                        },
                                                    ),
                                                ),
                                                el('line', {
                                                        x1: '266.58',
                                                        y1: '27.7923',
                                                        x2: '277.839',
                                                        y2: '27.7923',
                                                        stroke: '#ECECEC',
                                                        'stroke-width': '1.1259',
                                                    },
                                                ),
                                                el('g', {
                                                        'filter': 'url(#filter3_d)',
                                                    },
                                                    el('path', {
                                                            d: 'M278.402 28.3553C278.402 24.3155 281.677 21.0405 285.717 21.0405H310.102C314.142 21.0405 317.417 24.3155 317.417 28.3553V28.3553C317.417 32.3951 314.142 35.67 310.102 35.67H285.717C281.677 35.67 278.402 32.3951 278.402 28.3553V28.3553Z',
                                                            fill: 'white',
                                                        },
                                                    ),
                                                    el('g', {
                                                            'clip-path': 'url(#clip7)',
                                                        },
                                                        el('path', {
                                                                d: 'M290.775 26.5081V27.3565H289.004V28.273H290.329V29.0966H289.004V30.8552H287.945V26.5081H290.775ZM292.638 26.5081V30.8552H291.579V26.5081H292.638ZM294.712 30.0378H296.099V30.8552H293.653V26.5081H294.712V30.0378ZM299.979 26.5081V27.3565H298.827V30.8552H297.768V27.3565H296.616V26.5081H299.979ZM301.817 27.3565V28.2358H303.235V29.0532H301.817V30.0069H303.421V30.8552H300.758V26.5081H303.421V27.3565H301.817ZM306.573 30.8552L305.669 29.2142H305.415V30.8552H304.356V26.5081H306.133C306.476 26.5081 306.767 26.568 307.006 26.6877C307.25 26.8074 307.432 26.9726 307.551 27.1831C307.671 27.3895 307.731 27.6207 307.731 27.8767C307.731 28.1656 307.648 28.4237 307.483 28.6507C307.322 28.8778 307.083 29.0388 306.765 29.1337L307.768 30.8552H306.573ZM305.415 28.4649H306.071C306.265 28.4649 306.41 28.4175 306.505 28.3225C306.604 28.2276 306.653 28.0934 306.653 27.92C306.653 27.7549 306.604 27.6248 306.505 27.5299C306.41 27.4349 306.265 27.3874 306.071 27.3874H305.415V28.4649Z',
                                                                fill: '#5F626F',
                                                            },
                                                        ),
                                                    ),
                                                ),
                                                el('line', {
                                                        x1: '317.416',
                                                        y1: '27.7923',
                                                        x2: '328.675',
                                                        y2: '27.7923',
                                                        stroke: '#ECECEC',
                                                        'stroke-width': '1.1259',
                                                    },
                                                ),
                                                el('g', {
                                                        'filter': 'url(#filter4_d)',
                                                    },
                                                    el('path', {
                                                            d: 'M329.238 28.3553C329.238 24.3155 332.513 21.0405 336.553 21.0405H365.938C369.978 21.0405 373.253 24.3155 373.253 28.3553V28.3553C373.253 32.3951 369.978 35.67 365.938 35.67H336.553C332.513 35.67 329.238 32.3951 329.238 28.3553V28.3553Z',
                                                            fill: 'white',
                                                        },
                                                    ),
                                                    el('g', {
                                                            'clip-path': 'url(#clip8)',
                                                        },
                                                        el('path', {
                                                                d: 'M340.021 27.3565V28.2358H341.439V29.0532H340.021V30.0069H341.624V30.8552H338.962V26.5081H341.624V27.3565H340.021ZM345.222 30.8552L344.337 29.5238L343.557 30.8552H342.355L343.748 28.6445L342.324 26.5081H343.557L344.43 27.8209L345.198 26.5081H346.399L345.018 28.7002L346.455 30.8552H345.222ZM350.361 26.5081V27.3565H349.209V30.8552H348.15V27.3565H346.999V26.5081H350.361ZM353.357 30.8552L352.453 29.2142H352.199V30.8552H351.14V26.5081H352.917C353.26 26.5081 353.551 26.568 353.791 26.6877C354.034 26.8074 354.216 26.9726 354.336 27.1831C354.455 27.3895 354.515 27.6207 354.515 27.8767C354.515 28.1656 354.433 28.4237 354.267 28.6507C354.106 28.8778 353.867 29.0388 353.549 29.1337L354.552 30.8552H353.357ZM352.199 28.4649H352.856C353.05 28.4649 353.194 28.4175 353.289 28.3225C353.388 28.2276 353.438 28.0934 353.438 27.92C353.438 27.7549 353.388 27.6248 353.289 27.5299C353.194 27.4349 353.05 27.3874 352.856 27.3874H352.199V28.4649ZM358.134 30.0874H356.511L356.251 30.8552H355.143L356.716 26.5081H357.942L359.515 30.8552H358.394L358.134 30.0874ZM357.861 29.27L357.322 27.6785L356.79 29.27H357.861ZM361.814 30.8986C361.496 30.8986 361.211 30.847 360.959 30.7438C360.707 30.6406 360.505 30.4878 360.352 30.2855C360.204 30.0832 360.125 29.8397 360.117 29.5548H361.244C361.261 29.7158 361.316 29.8397 361.411 29.9264C361.506 30.0089 361.63 30.0502 361.783 30.0502C361.94 30.0502 362.064 30.0151 362.154 29.9449C362.245 29.8706 362.291 29.7695 362.291 29.6415C362.291 29.5342 362.253 29.4454 362.179 29.3752C362.109 29.305 362.02 29.2473 361.913 29.2018C361.81 29.1564 361.661 29.1048 361.467 29.047C361.186 28.9603 360.957 28.8736 360.78 28.7869C360.602 28.7002 360.449 28.5723 360.321 28.403C360.193 28.2338 360.129 28.0129 360.129 27.7404C360.129 27.3358 360.276 27.02 360.569 26.793C360.862 26.5618 361.244 26.4462 361.715 26.4462C362.194 26.4462 362.58 26.5618 362.873 26.793C363.166 27.02 363.323 27.3379 363.343 27.7466H362.198C362.189 27.6062 362.138 27.4968 362.043 27.4184C361.948 27.3358 361.826 27.2946 361.678 27.2946C361.55 27.2946 361.446 27.3297 361.368 27.3998C361.29 27.4659 361.25 27.5629 361.25 27.6909C361.25 27.8312 361.316 27.9406 361.448 28.0191C361.581 28.0975 361.787 28.1821 362.068 28.273C362.348 28.3679 362.575 28.4587 362.749 28.5454C362.926 28.6321 363.079 28.758 363.207 28.9232C363.335 29.0883 363.399 29.3009 363.399 29.561C363.399 29.8087 363.335 30.0337 363.207 30.236C363.083 30.4383 362.902 30.5993 362.662 30.719C362.423 30.8387 362.14 30.8986 361.814 30.8986Z',
                                                                fill: '#5F626F',
                                                            },
                                                        ),
                                                    ),
                                                ),
                                                el('line', {
                                                        x1: '373.252',
                                                        y1: '27.7923',
                                                        x2: '384.511',
                                                        y2: '27.7923',
                                                        stroke: '#ECECEC',
                                                        'stroke-width': '1.1259',
                                                    },
                                                ),
                                                el('g', {
                                                        'filter': 'url(#filter5_d)',
                                                    },
                                                    el('path', {
                                                            d: 'M385.074 28.3553C385.074 24.3155 388.349 21.0405 392.389 21.0405H419.774C423.814 21.0405 427.089 24.3155 427.089 28.3553V28.3553C427.089 32.3951 423.814 35.67 419.774 35.67H392.389C388.349 35.67 385.074 32.3951 385.074 28.3553V28.3553Z',
                                                            fill: 'white',
                                                        },
                                                    ),
                                                    el('g', {
                                                            'clip-path': 'url(#clip9)',
                                                        },
                                                        el('path', {
                                                                d: 'M396.852 30.8552L395.948 29.2142H395.694V30.8552H394.635V26.5081H396.412C396.755 26.5081 397.046 26.568 397.285 26.6877C397.529 26.8074 397.711 26.9726 397.83 27.1831C397.95 27.3895 398.01 27.6207 398.01 27.8767C398.01 28.1656 397.927 28.4237 397.762 28.6507C397.601 28.8778 397.362 29.0388 397.044 29.1337L398.047 30.8552H396.852ZM395.694 28.4649H396.35C396.544 28.4649 396.689 28.4175 396.784 28.3225C396.883 28.2276 396.933 28.0934 396.933 27.92C396.933 27.7549 396.883 27.6248 396.784 27.5299C396.689 27.4349 396.544 27.3874 396.35 27.3874H395.694V28.4649ZM399.981 27.3565V28.2358H401.399V29.0532H399.981V30.0069H401.585V30.8552H398.922V26.5081H401.585V27.3565H399.981ZM404.093 30.8986C403.775 30.8986 403.49 30.847 403.239 30.7438C402.987 30.6406 402.785 30.4878 402.632 30.2855C402.483 30.0832 402.405 29.8397 402.396 29.5548H403.524C403.54 29.7158 403.596 29.8397 403.691 29.9264C403.786 30.0089 403.91 30.0502 404.062 30.0502C404.219 30.0502 404.343 30.0151 404.434 29.9449C404.525 29.8706 404.57 29.7695 404.57 29.6415C404.57 29.5342 404.533 29.4454 404.459 29.3752C404.388 29.305 404.3 29.2473 404.192 29.2018C404.089 29.1564 403.94 29.1048 403.746 29.047C403.466 28.9603 403.237 28.8736 403.059 28.7869C402.882 28.7002 402.729 28.5723 402.601 28.403C402.473 28.2338 402.409 28.0129 402.409 27.7404C402.409 27.3358 402.555 27.02 402.849 26.793C403.142 26.5618 403.524 26.4462 403.994 26.4462C404.473 26.4462 404.859 26.5618 405.152 26.793C405.445 27.02 405.602 27.3379 405.623 27.7466H404.477C404.469 27.6062 404.417 27.4968 404.322 27.4184C404.227 27.3358 404.106 27.2946 403.957 27.2946C403.829 27.2946 403.726 27.3297 403.647 27.3998C403.569 27.4659 403.53 27.5629 403.53 27.6909C403.53 27.8312 403.596 27.9406 403.728 28.0191C403.86 28.0975 404.066 28.1821 404.347 28.273C404.628 28.3679 404.855 28.4587 405.028 28.5454C405.206 28.6321 405.359 28.758 405.487 28.9232C405.614 29.0883 405.678 29.3009 405.678 29.561C405.678 29.8087 405.614 30.0337 405.487 30.236C405.363 30.4383 405.181 30.5993 404.942 30.719C404.702 30.8387 404.419 30.8986 404.093 30.8986ZM407.618 26.5081V29.109C407.618 29.369 407.682 29.5693 407.81 29.7096C407.938 29.85 408.126 29.9202 408.374 29.9202C408.621 29.9202 408.811 29.85 408.943 29.7096C409.075 29.5693 409.142 29.369 409.142 29.109V26.5081H410.2V29.1028C410.2 29.4908 410.118 29.819 409.953 30.0874C409.788 30.3557 409.565 30.558 409.284 30.6942C409.007 30.8305 408.698 30.8986 408.355 30.8986C408.012 30.8986 407.705 30.8325 407.432 30.7004C407.164 30.5642 406.951 30.3619 406.795 30.0936C406.638 29.8211 406.559 29.4908 406.559 29.1028V26.5081H407.618ZM412.251 30.0378H413.638V30.8552H411.192V26.5081H412.251V30.0378ZM417.518 26.5081V27.3565H416.366V30.8552H415.307V27.3565H414.155V26.5081H417.518Z',
                                                                fill: '#5F626F',
                                                            },
                                                        ),
                                                    ),
                                                ),
                                                el('path', {
                                                        d: 'M67.953 202.85H69.876V203.434H67.2358V197.94H67.953V202.85ZM72.5213 203.505C72.1167 203.505 71.7489 203.413 71.4179 203.229C71.0921 203.045 70.8347 202.785 70.6455 202.448C70.4616 202.107 70.3697 201.713 70.3697 201.266C70.3697 200.825 70.4643 200.436 70.6534 200.1C70.8478 199.758 71.1105 199.498 71.4416 199.32C71.7726 199.136 72.143 199.044 72.5528 199.044C72.9626 199.044 73.3331 199.136 73.6641 199.32C73.9951 199.498 74.2552 199.756 74.4443 200.092C74.6387 200.428 74.7359 200.82 74.7359 201.266C74.7359 201.713 74.6361 202.107 74.4364 202.448C74.242 202.785 73.9767 203.045 73.6404 203.229C73.3042 203.413 72.9311 203.505 72.5213 203.505ZM72.5213 202.874C72.7787 202.874 73.0204 202.814 73.2464 202.693C73.4723 202.572 73.6536 202.391 73.7902 202.149C73.932 201.907 74.003 201.613 74.003 201.266C74.003 200.919 73.9347 200.625 73.7981 200.384C73.6615 200.142 73.4828 199.963 73.2621 199.848C73.0415 199.727 72.8024 199.666 72.5449 199.666C72.2822 199.666 72.0405 199.727 71.8199 199.848C71.6044 199.963 71.431 200.142 71.2997 200.384C71.1683 200.625 71.1027 200.919 71.1027 201.266C71.1027 201.618 71.1657 201.915 71.2918 202.157C71.4232 202.399 71.5966 202.58 71.812 202.701C72.0274 202.816 72.2638 202.874 72.5213 202.874ZM76.5538 199.706V202.251C76.5538 202.462 76.5984 202.611 76.6877 202.701C76.7771 202.785 76.9321 202.827 77.1527 202.827H77.6808V203.434H77.0345C76.6352 203.434 76.3357 203.342 76.136 203.158C75.9364 202.974 75.8366 202.672 75.8366 202.251V199.706H75.277V199.115H75.8366V198.027H76.5538V199.115H77.6808V199.706H76.5538ZM82.3801 199.115V203.434H81.6629V202.795C81.5263 203.016 81.3345 203.189 81.0875 203.315C80.8458 203.436 80.5779 203.497 80.2836 203.497C79.9474 203.497 79.6453 203.428 79.3773 203.292C79.1093 203.15 78.8965 202.94 78.7389 202.661C78.5865 202.383 78.5103 202.044 78.5103 201.645V199.115H79.2197V201.55C79.2197 201.976 79.3274 202.304 79.5428 202.535C79.7582 202.761 80.0525 202.874 80.4255 202.874C80.8091 202.874 81.1112 202.756 81.3319 202.519C81.5525 202.283 81.6629 201.939 81.6629 201.487V199.115H82.3801ZM85.12 203.505C84.789 203.505 84.4921 203.449 84.2294 203.339C83.9667 203.223 83.7592 203.066 83.6068 202.866C83.4544 202.661 83.3703 202.427 83.3546 202.165H84.0954C84.1164 202.38 84.2163 202.556 84.3949 202.693C84.5788 202.829 84.8179 202.898 85.1121 202.898C85.3853 202.898 85.6008 202.837 85.7584 202.716C85.916 202.596 85.9948 202.443 85.9948 202.259C85.9948 202.07 85.9108 201.931 85.7426 201.842C85.5745 201.747 85.3144 201.655 84.9624 201.566C84.6419 201.482 84.3791 201.398 84.1742 201.314C83.9746 201.224 83.8012 201.095 83.6541 200.927C83.5122 200.754 83.4413 200.528 83.4413 200.25C83.4413 200.029 83.507 199.827 83.6383 199.643C83.7697 199.459 83.9562 199.314 84.1979 199.209C84.4396 199.099 84.7154 199.044 85.0254 199.044C85.5035 199.044 85.8897 199.165 86.184 199.406C86.4782 199.648 86.6358 199.979 86.6568 200.399H85.9396C85.9239 200.173 85.8319 199.992 85.6638 199.855C85.5009 199.719 85.2802 199.651 85.0018 199.651C84.7443 199.651 84.5394 199.706 84.387 199.816C84.2347 199.926 84.1585 200.071 84.1585 200.25C84.1585 200.391 84.2031 200.51 84.2925 200.604C84.387 200.694 84.5026 200.767 84.6392 200.825C84.7811 200.877 84.9755 200.938 85.2224 201.006C85.5324 201.09 85.7846 201.174 85.9791 201.258C86.1735 201.337 86.339 201.458 86.4756 201.621C86.6174 201.784 86.691 201.997 86.6963 202.259C86.6963 202.496 86.6306 202.709 86.4992 202.898C86.3679 203.087 86.1813 203.237 85.9396 203.347C85.7032 203.452 85.43 203.505 85.12 203.505ZM93.7505 201.109C93.7505 201.245 93.7426 201.39 93.7269 201.542H90.2749C90.3011 201.968 90.4456 202.301 90.7083 202.543C90.9763 202.779 91.2994 202.898 91.6777 202.898C91.9877 202.898 92.2452 202.827 92.4501 202.685C92.6603 202.538 92.8074 202.343 92.8915 202.102H93.6638C93.5482 202.517 93.317 202.856 92.9703 203.118C92.6235 203.376 92.1926 203.505 91.6777 203.505C91.2679 203.505 90.9001 203.413 90.5744 203.229C90.2538 203.045 90.0016 202.785 89.8177 202.448C89.6338 202.107 89.5419 201.713 89.5419 201.266C89.5419 200.82 89.6312 200.428 89.8099 200.092C89.9885 199.756 90.2381 199.498 90.5586 199.32C90.8843 199.136 91.2574 199.044 91.6777 199.044C92.0876 199.044 92.4501 199.133 92.7654 199.312C93.0806 199.49 93.3223 199.737 93.4904 200.053C93.6638 200.363 93.7505 200.715 93.7505 201.109ZM93.0097 200.959C93.0097 200.686 92.9493 200.452 92.8284 200.257C92.7076 200.058 92.5421 199.908 92.3319 199.808C92.127 199.703 91.8984 199.651 91.6462 199.651C91.2837 199.651 90.9737 199.766 90.7162 199.997C90.464 200.229 90.3195 200.549 90.2827 200.959H93.0097ZM96.4547 199.706H95.5484V203.434H94.8312V199.706H94.2716V199.115H94.8312V198.807C94.8312 198.324 94.9547 197.972 95.2016 197.751C95.4538 197.525 95.8558 197.412 96.4074 197.412V198.011C96.0922 198.011 95.8689 198.074 95.7375 198.2C95.6114 198.321 95.5484 198.524 95.5484 198.807V199.115H96.4547V199.706ZM99.0485 199.706H98.1421V203.434H97.4249V199.706H96.8654V199.115H97.4249V198.807C97.4249 198.324 97.5484 197.972 97.7954 197.751C98.0476 197.525 98.4495 197.412 99.0012 197.412V198.011C98.6859 198.011 98.4626 198.074 98.3313 198.2C98.2052 198.321 98.1421 198.524 98.1421 198.807V199.115H99.0485V199.706ZM103.825 201.109C103.825 201.245 103.817 201.39 103.802 201.542H100.35C100.376 201.968 100.52 202.301 100.783 202.543C101.051 202.779 101.374 202.898 101.753 202.898C102.063 202.898 102.32 202.827 102.525 202.685C102.735 202.538 102.882 202.343 102.966 202.102H103.739C103.623 202.517 103.392 202.856 103.045 203.118C102.698 203.376 102.267 203.505 101.753 203.505C101.343 203.505 100.975 203.413 100.649 203.229C100.329 203.045 100.076 202.785 99.8926 202.448C99.7087 202.107 99.6167 201.713 99.6167 201.266C99.6167 200.82 99.7061 200.428 99.8847 200.092C100.063 199.756 100.313 199.498 100.633 199.32C100.959 199.136 101.332 199.044 101.753 199.044C102.162 199.044 102.525 199.133 102.84 199.312C103.155 199.49 103.397 199.737 103.565 200.053C103.739 200.363 103.825 200.715 103.825 201.109ZM103.085 200.959C103.085 200.686 103.024 200.452 102.903 200.257C102.782 200.058 102.617 199.908 102.407 199.808C102.202 199.703 101.973 199.651 101.721 199.651C101.359 199.651 101.049 199.766 100.791 199.997C100.539 200.229 100.394 200.549 100.358 200.959H103.085ZM104.504 201.266C104.504 200.82 104.593 200.431 104.772 200.1C104.951 199.764 105.198 199.503 105.513 199.32C105.833 199.136 106.199 199.044 106.608 199.044C107.139 199.044 107.575 199.172 107.917 199.43C108.263 199.687 108.492 200.045 108.602 200.502H107.83C107.756 200.239 107.612 200.031 107.397 199.879C107.186 199.727 106.924 199.651 106.608 199.651C106.199 199.651 105.868 199.792 105.615 200.076C105.363 200.355 105.237 200.751 105.237 201.266C105.237 201.786 105.363 202.188 105.615 202.472C105.868 202.756 106.199 202.898 106.608 202.898C106.924 202.898 107.186 202.824 107.397 202.677C107.607 202.53 107.751 202.32 107.83 202.046H108.602C108.487 202.488 108.256 202.842 107.909 203.11C107.562 203.373 107.129 203.505 106.608 203.505C106.199 203.505 105.833 203.413 105.513 203.229C105.198 203.045 104.951 202.785 104.772 202.448C104.593 202.112 104.504 201.718 104.504 201.266ZM110.434 199.706V202.251C110.434 202.462 110.479 202.611 110.568 202.701C110.657 202.785 110.812 202.827 111.033 202.827H111.561V203.434H110.915C110.516 203.434 110.216 203.342 110.016 203.158C109.817 202.974 109.717 202.672 109.717 202.251V199.706H109.157V199.115H109.717V198.027H110.434V199.115H111.561V199.706H110.434Z',
                                                        fill: '#313134',
                                                    },
                                                ),
                                                el('path', {
                                                        d: 'M68.9775 233.888C68.615 233.888 68.2892 233.825 68.0003 233.699C67.7165 233.568 67.4932 233.389 67.3303 233.163C67.1675 232.932 67.0834 232.667 67.0781 232.367H67.8426C67.8689 232.625 67.974 232.843 68.1579 233.021C68.347 233.195 68.6203 233.281 68.9775 233.281C69.3191 233.281 69.587 233.197 69.7814 233.029C69.9811 232.856 70.0809 232.635 70.0809 232.367C70.0809 232.157 70.0231 231.986 69.9075 231.855C69.7919 231.723 69.6474 231.624 69.4741 231.555C69.3007 231.487 69.0669 231.413 68.7726 231.335C68.4101 231.24 68.1185 231.145 67.8978 231.051C67.6824 230.956 67.4959 230.809 67.3382 230.61C67.1859 230.405 67.1097 230.131 67.1097 229.79C67.1097 229.49 67.1859 229.225 67.3382 228.994C67.4906 228.763 67.7034 228.584 67.9766 228.458C68.2551 228.332 68.573 228.269 68.9302 228.269C69.4452 228.269 69.8655 228.398 70.1913 228.655C70.5223 228.912 70.7088 229.254 70.7508 229.68H69.9627C69.9364 229.469 69.8261 229.285 69.6317 229.128C69.4373 228.965 69.1798 228.884 68.8593 228.884C68.5598 228.884 68.3155 228.962 68.1264 229.12C67.9372 229.272 67.8426 229.488 67.8426 229.766C67.8426 229.966 67.8978 230.129 68.0081 230.255C68.1237 230.381 68.263 230.478 68.4258 230.547C68.594 230.61 68.8278 230.683 69.1273 230.767C69.4898 230.867 69.7814 230.967 70.0021 231.067C70.2228 231.161 70.4119 231.311 70.5696 231.516C70.7272 231.716 70.806 231.989 70.806 232.336C70.806 232.604 70.7351 232.856 70.5932 233.092C70.4513 233.329 70.2412 233.52 69.9627 233.668C69.6842 233.815 69.3558 233.888 68.9775 233.888ZM75.6917 229.514V233.833H74.9745V233.195C74.8379 233.415 74.6461 233.589 74.3992 233.715C74.1575 233.836 73.8895 233.896 73.5953 233.896C73.259 233.896 72.9569 233.828 72.689 233.691C72.421 233.549 72.2082 233.339 72.0506 233.061C71.8982 232.782 71.822 232.443 71.822 232.044V229.514H72.5313V231.949C72.5313 232.375 72.639 232.703 72.8545 232.935C73.0699 233.16 73.3641 233.273 73.7372 233.273C74.1207 233.273 74.4228 233.155 74.6435 232.919C74.8642 232.682 74.9745 232.338 74.9745 231.886V229.514H75.6917ZM77.6199 230.31C77.7617 230.063 77.9719 229.858 78.2504 229.695C78.5341 229.527 78.8625 229.443 79.2356 229.443C79.6191 229.443 79.9659 229.535 80.2759 229.719C80.5911 229.903 80.8381 230.163 81.0167 230.499C81.1954 230.83 81.2847 231.216 81.2847 231.658C81.2847 232.094 81.1954 232.483 81.0167 232.824C80.8381 233.166 80.5911 233.431 80.2759 233.62C79.9659 233.809 79.6191 233.904 79.2356 233.904C78.8678 233.904 78.542 233.822 78.2583 233.66C77.9798 233.491 77.767 233.284 77.6199 233.037V235.882H76.9027V229.514H77.6199V230.31ZM80.5517 231.658C80.5517 231.332 80.4861 231.048 80.3547 230.807C80.2233 230.565 80.0447 230.381 79.8188 230.255C79.5981 230.129 79.3538 230.066 79.0858 230.066C78.8231 230.066 78.5788 230.131 78.3528 230.263C78.1322 230.389 77.9535 230.575 77.8169 230.822C77.6856 231.064 77.6199 231.345 77.6199 231.666C77.6199 231.991 77.6856 232.278 77.8169 232.525C77.9535 232.766 78.1322 232.953 78.3528 233.084C78.5788 233.21 78.8231 233.273 79.0858 233.273C79.3538 233.273 79.5981 233.21 79.8188 233.084C80.0447 232.953 80.2233 232.766 80.3547 232.525C80.4861 232.278 80.5517 231.989 80.5517 231.658ZM86.1694 231.508C86.1694 231.645 86.1615 231.789 86.1457 231.941H82.6937C82.72 232.367 82.8645 232.701 83.1272 232.942C83.3952 233.179 83.7183 233.297 84.0966 233.297C84.4066 233.297 84.664 233.226 84.869 233.084C85.0791 232.937 85.2262 232.743 85.3103 232.501H86.0827C85.9671 232.916 85.7359 233.255 85.3891 233.518C85.0424 233.775 84.6115 233.904 84.0966 233.904C83.6868 233.904 83.319 233.812 82.9932 233.628C82.6727 233.444 82.4205 233.184 82.2366 232.848C82.0527 232.506 81.9608 232.112 81.9608 231.666C81.9608 231.219 82.0501 230.828 82.2287 230.491C82.4074 230.155 82.6569 229.898 82.9774 229.719C83.3032 229.535 83.6763 229.443 84.0966 229.443C84.5064 229.443 84.869 229.532 85.1842 229.711C85.4995 229.89 85.7412 230.137 85.9093 230.452C86.0827 230.762 86.1694 231.114 86.1694 231.508ZM85.4285 231.358C85.4285 231.085 85.3681 230.851 85.2473 230.657C85.1264 230.457 84.9609 230.307 84.7507 230.208C84.5458 230.103 84.3173 230.05 84.0651 230.05C83.7025 230.05 83.3925 230.166 83.1351 230.397C82.8829 230.628 82.7384 230.948 82.7016 231.358H85.4285ZM87.8333 230.215C87.9594 229.969 88.138 229.777 88.3692 229.64C88.6056 229.504 88.892 229.435 89.2282 229.435V230.176H89.0391C88.2352 230.176 87.8333 230.612 87.8333 231.484V233.833H87.1161V229.514H87.8333V230.215ZM94.301 229.435C94.6268 229.435 94.921 229.506 95.1837 229.648C95.4465 229.785 95.6514 229.992 95.7985 230.271C95.9509 230.549 96.027 230.888 96.027 231.287V233.833H95.3177V231.39C95.3177 230.959 95.21 230.631 94.9946 230.405C94.7792 230.173 94.4849 230.058 94.1119 230.058C93.7336 230.058 93.4315 230.176 93.2055 230.413C92.9849 230.649 92.8745 230.993 92.8745 231.445V233.833H92.1573V228.001H92.8745V230.129C93.0164 229.908 93.2108 229.737 93.4577 229.617C93.7099 229.496 93.991 229.435 94.301 229.435ZM96.9306 231.658C96.9306 231.216 97.0199 230.83 97.1986 230.499C97.3772 230.163 97.6216 229.903 97.9316 229.719C98.2468 229.535 98.5962 229.443 98.9798 229.443C99.3581 229.443 99.6865 229.525 99.9649 229.687C100.243 229.85 100.451 230.055 100.588 230.302V229.514H101.313V233.833H100.588V233.029C100.446 233.281 100.233 233.491 99.9492 233.66C99.6707 233.822 99.3449 233.904 98.9719 233.904C98.5883 233.904 98.2415 233.809 97.9316 233.62C97.6216 233.431 97.3772 233.166 97.1986 232.824C97.0199 232.483 96.9306 232.094 96.9306 231.658ZM100.588 231.666C100.588 231.34 100.522 231.056 100.391 230.814C100.259 230.573 100.081 230.389 99.8546 230.263C99.6339 230.131 99.3896 230.066 99.1216 230.066C98.8537 230.066 98.6093 230.129 98.3887 230.255C98.168 230.381 97.992 230.565 97.8606 230.807C97.7293 231.048 97.6636 231.332 97.6636 231.658C97.6636 231.989 97.7293 232.278 97.8606 232.525C97.992 232.766 98.168 232.953 98.3887 233.084C98.6093 233.21 98.8537 233.273 99.1216 233.273C99.3896 233.273 99.6339 233.21 99.8546 233.084C100.081 232.953 100.259 232.766 100.391 232.525C100.522 232.278 100.588 231.991 100.588 231.666ZM103.242 230.215C103.368 229.969 103.547 229.777 103.778 229.64C104.014 229.504 104.301 229.435 104.637 229.435V230.176H104.448C103.644 230.176 103.242 230.612 103.242 231.484V233.833H102.525V229.514H103.242V230.215ZM105.197 231.658C105.197 231.216 105.286 230.83 105.465 230.499C105.643 230.163 105.888 229.903 106.198 229.719C106.513 229.535 106.865 229.443 107.254 229.443C107.59 229.443 107.903 229.522 108.192 229.68C108.481 229.832 108.701 230.034 108.854 230.286V228.001H109.579V233.833H108.854V233.021C108.712 233.279 108.502 233.491 108.223 233.66C107.945 233.822 107.619 233.904 107.246 233.904C106.862 233.904 106.513 233.809 106.198 233.62C105.888 233.431 105.643 233.166 105.465 232.824C105.286 232.483 105.197 232.094 105.197 231.658ZM108.854 231.666C108.854 231.34 108.788 231.056 108.657 230.814C108.525 230.573 108.347 230.389 108.121 230.263C107.9 230.131 107.656 230.066 107.388 230.066C107.12 230.066 106.875 230.129 106.655 230.255C106.434 230.381 106.258 230.565 106.127 230.807C105.995 231.048 105.93 231.332 105.93 231.658C105.93 231.989 105.995 232.278 106.127 232.525C106.258 232.766 106.434 232.953 106.655 233.084C106.875 233.21 107.12 233.273 107.388 233.273C107.656 233.273 107.9 233.21 108.121 233.084C108.347 232.953 108.525 232.766 108.657 232.525C108.788 232.278 108.854 231.991 108.854 231.666Z',
                                                        fill: '#313134',
                                                    },
                                                ),
                                                el('path', {
                                                        d: 'M71.468 258.739V264.232H70.7508V261.742H67.953V264.232H67.2358V258.739H67.953V261.151H70.7508V258.739H71.468ZM73.0631 259.212C72.9265 259.212 72.8109 259.165 72.7163 259.07C72.6217 258.976 72.5744 258.86 72.5744 258.723C72.5744 258.587 72.6217 258.471 72.7163 258.377C72.8109 258.282 72.9265 258.235 73.0631 258.235C73.1944 258.235 73.3048 258.282 73.3941 258.377C73.4887 258.471 73.5359 258.587 73.5359 258.723C73.5359 258.86 73.4887 258.976 73.3941 259.07C73.3048 259.165 73.1944 259.212 73.0631 259.212ZM73.4098 259.913V264.232H72.6926V259.913H73.4098ZM76.4134 259.843C76.7864 259.843 77.1122 259.924 77.3906 260.087C77.6744 260.25 77.8845 260.455 78.0212 260.702V259.913H78.7462V264.327C78.7462 264.721 78.6622 265.07 78.494 265.375C78.3259 265.685 78.0842 265.927 77.7689 266.1C77.459 266.274 77.0964 266.36 76.6813 266.36C76.1139 266.36 75.641 266.226 75.2627 265.958C74.8844 265.69 74.6611 265.325 74.5928 264.863H75.3021C75.3809 265.126 75.5438 265.336 75.7907 265.493C76.0377 265.656 76.3346 265.738 76.6813 265.738C77.0754 265.738 77.3959 265.614 77.6428 265.367C77.8951 265.12 78.0212 264.774 78.0212 264.327V263.421C77.8793 263.673 77.6691 263.883 77.3906 264.051C77.1122 264.219 76.7864 264.303 76.4134 264.303C76.0298 264.303 75.6804 264.209 75.3652 264.02C75.0552 263.83 74.8108 263.565 74.6322 263.224C74.4535 262.882 74.3642 262.493 74.3642 262.057C74.3642 261.616 74.4535 261.23 74.6322 260.899C74.8108 260.562 75.0552 260.302 75.3652 260.118C75.6804 259.934 76.0298 259.843 76.4134 259.843ZM78.0212 262.065C78.0212 261.739 77.9555 261.456 77.8241 261.214C77.6928 260.972 77.5141 260.788 77.2882 260.662C77.0675 260.531 76.8232 260.465 76.5552 260.465C76.2873 260.465 76.0429 260.528 75.8223 260.654C75.6016 260.78 75.4256 260.964 75.2942 261.206C75.1629 261.448 75.0972 261.731 75.0972 262.057C75.0972 262.388 75.1629 262.677 75.2942 262.924C75.4256 263.166 75.6016 263.352 75.8223 263.484C76.0429 263.61 76.2873 263.673 76.5552 263.673C76.8232 263.673 77.0675 263.61 77.2882 263.484C77.5141 263.352 77.6928 263.166 77.8241 262.924C77.9555 262.677 78.0212 262.391 78.0212 262.065ZM82.1019 259.835C82.4277 259.835 82.7219 259.906 82.9847 260.047C83.2474 260.184 83.4523 260.392 83.5994 260.67C83.7518 260.949 83.828 261.287 83.828 261.687V264.232H83.1186V261.789C83.1186 261.358 83.0109 261.03 82.7955 260.804C82.5801 260.573 82.2858 260.457 81.9128 260.457C81.5345 260.457 81.2324 260.575 81.0064 260.812C80.7858 261.048 80.6754 261.393 80.6754 261.844V264.232H79.9582V258.4H80.6754V260.528C80.8173 260.308 81.0117 260.137 81.2586 260.016C81.5108 259.895 81.7919 259.835 82.1019 259.835ZM86.8327 262.057C86.8327 261.616 86.922 261.23 87.1007 260.899C87.2793 260.562 87.5236 260.302 87.8336 260.118C88.1489 259.934 88.5009 259.843 88.8897 259.843C89.226 259.843 89.5386 259.921 89.8276 260.079C90.1166 260.231 90.3373 260.434 90.4896 260.686V258.4H91.2147V264.232H90.4896V263.421C90.3478 263.678 90.1376 263.891 89.8591 264.059C89.5806 264.222 89.2549 264.303 88.8818 264.303C88.4983 264.303 88.1489 264.209 87.8336 264.02C87.5236 263.83 87.2793 263.565 87.1007 263.224C86.922 262.882 86.8327 262.493 86.8327 262.057ZM90.4896 262.065C90.4896 261.739 90.4239 261.456 90.2926 261.214C90.1612 260.972 89.9826 260.788 89.7567 260.662C89.536 260.531 89.2917 260.465 89.0237 260.465C88.7557 260.465 88.5114 260.528 88.2907 260.654C88.0701 260.78 87.894 260.964 87.7627 261.206C87.6313 261.448 87.5657 261.731 87.5657 262.057C87.5657 262.388 87.6313 262.677 87.7627 262.924C87.894 263.166 88.0701 263.352 88.2907 263.484C88.5114 263.61 88.7557 263.673 89.0237 263.673C89.2917 263.673 89.536 263.61 89.7567 263.484C89.9826 263.352 90.1612 263.166 90.2926 262.924C90.4239 262.677 90.4896 262.391 90.4896 262.065ZM96.3674 261.907C96.3674 262.044 96.3595 262.189 96.3437 262.341H92.8917C92.918 262.766 93.0625 263.1 93.3252 263.342C93.5931 263.578 93.9163 263.696 94.2946 263.696C94.6046 263.696 94.862 263.626 95.0669 263.484C95.2771 263.337 95.4242 263.142 95.5083 262.9H96.2807C96.1651 263.316 95.9339 263.654 95.5871 263.917C95.2403 264.175 94.8095 264.303 94.2946 264.303C93.8847 264.303 93.517 264.211 93.1912 264.028C92.8707 263.844 92.6185 263.584 92.4346 263.247C92.2507 262.906 92.1587 262.512 92.1587 262.065C92.1587 261.618 92.2481 261.227 92.4267 260.891C92.6053 260.554 92.8549 260.297 93.1754 260.118C93.5012 259.934 93.8742 259.843 94.2946 259.843C94.7044 259.843 95.0669 259.932 95.3822 260.11C95.6974 260.289 95.9391 260.536 96.1073 260.851C96.2807 261.161 96.3674 261.513 96.3674 261.907ZM95.6265 261.758C95.6265 261.484 95.5661 261.251 95.4452 261.056C95.3244 260.857 95.1589 260.707 94.9487 260.607C94.7438 260.502 94.5153 260.449 94.263 260.449C93.9005 260.449 93.5905 260.565 93.3331 260.796C93.0809 261.027 92.9364 261.348 92.8996 261.758H95.6265ZM99.0716 260.505H98.1652V264.232H97.448V260.505H96.8884V259.913H97.448V259.606C97.448 259.123 97.5715 258.771 97.8184 258.55C98.0706 258.324 98.4726 258.211 99.0243 258.211V258.81C98.709 258.81 98.4857 258.873 98.3544 258.999C98.2283 259.12 98.1652 259.322 98.1652 259.606V259.913H99.0716V260.505ZM100.278 259.212C100.142 259.212 100.026 259.165 99.9314 259.07C99.8369 258.976 99.7896 258.86 99.7896 258.723C99.7896 258.587 99.8369 258.471 99.9314 258.377C100.026 258.282 100.142 258.235 100.278 258.235C100.41 258.235 100.52 258.282 100.609 258.377C100.704 258.471 100.751 258.587 100.751 258.723C100.751 258.86 100.704 258.976 100.609 259.07C100.52 259.165 100.41 259.212 100.278 259.212ZM100.625 259.913V264.232H99.9078V259.913H100.625ZM103.952 259.835C104.477 259.835 104.903 259.995 105.228 260.315C105.554 260.631 105.717 261.088 105.717 261.687V264.232H105.008V261.789C105.008 261.358 104.9 261.03 104.685 260.804C104.469 260.573 104.175 260.457 103.802 260.457C103.424 260.457 103.121 260.575 102.896 260.812C102.675 261.048 102.565 261.393 102.565 261.844V264.232H101.847V259.913H102.565V260.528C102.706 260.308 102.898 260.137 103.14 260.016C103.387 259.895 103.657 259.835 103.952 259.835ZM107.259 259.212C107.122 259.212 107.007 259.165 106.912 259.07C106.818 258.976 106.77 258.86 106.77 258.723C106.77 258.587 106.818 258.471 106.912 258.377C107.007 258.282 107.122 258.235 107.259 258.235C107.39 258.235 107.501 258.282 107.59 258.377C107.685 258.471 107.732 258.587 107.732 258.723C107.732 258.86 107.685 258.976 107.59 259.07C107.501 259.165 107.39 259.212 107.259 259.212ZM107.606 259.913V264.232H106.889V259.913H107.606ZM109.703 260.505V263.05C109.703 263.26 109.748 263.41 109.837 263.499C109.926 263.584 110.081 263.626 110.302 263.626H110.83V264.232H110.184C109.784 264.232 109.485 264.14 109.285 263.957C109.086 263.773 108.986 263.471 108.986 263.05V260.505H108.426V259.913H108.986V258.826H109.703V259.913H110.83V260.505H109.703ZM112.069 259.212C111.933 259.212 111.817 259.165 111.723 259.07C111.628 258.976 111.581 258.86 111.581 258.723C111.581 258.587 111.628 258.471 111.723 258.377C111.817 258.282 111.933 258.235 112.069 258.235C112.201 258.235 112.311 258.282 112.4 258.377C112.495 258.471 112.542 258.587 112.542 258.723C112.542 258.86 112.495 258.976 112.4 259.07C112.311 259.165 112.201 259.212 112.069 259.212ZM112.416 259.913V264.232H111.699V259.913H112.416ZM115.522 264.303C115.118 264.303 114.75 264.211 114.419 264.028C114.093 263.844 113.836 263.584 113.646 263.247C113.462 262.906 113.371 262.512 113.371 262.065C113.371 261.624 113.465 261.235 113.654 260.899C113.849 260.557 114.111 260.297 114.442 260.118C114.773 259.934 115.144 259.843 115.554 259.843C115.963 259.843 116.334 259.934 116.665 260.118C116.996 260.297 117.256 260.554 117.445 260.891C117.64 261.227 117.737 261.618 117.737 262.065C117.737 262.512 117.637 262.906 117.437 263.247C117.243 263.584 116.978 263.844 116.641 264.028C116.305 264.211 115.932 264.303 115.522 264.303ZM115.522 263.673C115.78 263.673 116.021 263.612 116.247 263.492C116.473 263.371 116.654 263.189 116.791 262.948C116.933 262.706 117.004 262.412 117.004 262.065C117.004 261.718 116.936 261.424 116.799 261.182C116.662 260.941 116.484 260.762 116.263 260.646C116.042 260.526 115.803 260.465 115.546 260.465C115.283 260.465 115.041 260.526 114.821 260.646C114.605 260.762 114.432 260.941 114.301 261.182C114.169 261.424 114.104 261.718 114.104 262.065C114.104 262.417 114.167 262.714 114.293 262.956C114.424 263.197 114.597 263.379 114.813 263.499C115.028 263.615 115.265 263.673 115.522 263.673ZM120.784 259.835C121.31 259.835 121.735 259.995 122.061 260.315C122.387 260.631 122.549 261.088 122.549 261.687V264.232H121.84V261.789C121.84 261.358 121.732 261.03 121.517 260.804C121.302 260.573 121.007 260.457 120.634 260.457C120.256 260.457 119.954 260.575 119.728 260.812C119.507 261.048 119.397 261.393 119.397 261.844V264.232H118.68V259.913H119.397V260.528C119.539 260.308 119.731 260.137 119.972 260.016C120.219 259.895 120.49 259.835 120.784 259.835Z',
                                                        fill: '#313134',
                                                    },
                                                ),
                                                el('path', {
                                                        d: 'M67.953 289.139V294.632H67.2358V289.139H67.953ZM71.2796 290.234C71.805 290.234 72.2306 290.394 72.5564 290.715C72.8821 291.03 73.045 291.487 73.045 292.086V294.632H72.3357V292.189C72.3357 291.758 72.228 291.429 72.0126 291.203C71.7972 290.972 71.5029 290.857 71.1299 290.857C70.7516 290.857 70.4495 290.975 70.2235 291.211C70.0028 291.448 69.8925 291.792 69.8925 292.244V294.632H69.1753V290.313H69.8925V290.928C70.0344 290.707 70.2261 290.536 70.4678 290.415C70.7148 290.294 70.9854 290.234 71.2796 290.234ZM73.9486 292.457C73.9486 292.015 74.0379 291.629 74.2166 291.298C74.3952 290.962 74.6395 290.702 74.9495 290.518C75.2648 290.334 75.6168 290.242 76.0056 290.242C76.3419 290.242 76.6545 290.321 76.9435 290.478C77.2325 290.631 77.4532 290.833 77.6055 291.085V288.8H78.3306V294.632H77.6055V293.82C77.4637 294.078 77.2535 294.29 76.975 294.458C76.6966 294.621 76.3708 294.703 75.9977 294.703C75.6142 294.703 75.2648 294.608 74.9495 294.419C74.6395 294.23 74.3952 293.965 74.2166 293.623C74.0379 293.282 73.9486 292.893 73.9486 292.457ZM77.6055 292.464C77.6055 292.139 77.5399 291.855 77.4085 291.613C77.2771 291.372 77.0985 291.188 76.8726 291.062C76.6519 290.93 76.4076 290.865 76.1396 290.865C75.8716 290.865 75.6273 290.928 75.4067 291.054C75.186 291.18 75.01 291.364 74.8786 291.605C74.7472 291.847 74.6816 292.131 74.6816 292.457C74.6816 292.788 74.7472 293.077 74.8786 293.324C75.01 293.565 75.186 293.752 75.4067 293.883C75.6273 294.009 75.8716 294.072 76.1396 294.072C76.4076 294.072 76.6519 294.009 76.8726 293.883C77.0985 293.752 77.2771 293.565 77.4085 293.324C77.5399 293.077 77.6055 292.79 77.6055 292.464ZM79.913 289.611C79.7764 289.611 79.6608 289.564 79.5663 289.47C79.4717 289.375 79.4244 289.259 79.4244 289.123C79.4244 288.986 79.4717 288.871 79.5663 288.776C79.6608 288.681 79.7764 288.634 79.913 288.634C80.0444 288.634 80.1547 288.681 80.244 288.776C80.3386 288.871 80.3859 288.986 80.3859 289.123C80.3859 289.259 80.3386 289.375 80.244 289.47C80.1547 289.564 80.0444 289.611 79.913 289.611ZM80.2598 290.313V294.632H79.5426V290.313H80.2598ZM83.0899 293.97L84.4298 290.313H85.1942L83.4998 294.632H82.6643L80.9699 290.313H81.7422L83.0899 293.97ZM86.2704 289.611C86.1338 289.611 86.0182 289.564 85.9236 289.47C85.8291 289.375 85.7818 289.259 85.7818 289.123C85.7818 288.986 85.8291 288.871 85.9236 288.776C86.0182 288.681 86.1338 288.634 86.2704 288.634C86.4018 288.634 86.5121 288.681 86.6014 288.776C86.696 288.871 86.7433 288.986 86.7433 289.123C86.7433 289.259 86.696 289.375 86.6014 289.47C86.5121 289.564 86.4018 289.611 86.2704 289.611ZM86.6172 290.313V294.632H85.9V290.313H86.6172ZM87.5716 292.457C87.5716 292.015 87.6609 291.629 87.8395 291.298C88.0182 290.962 88.2625 290.702 88.5725 290.518C88.8878 290.334 89.2398 290.242 89.6286 290.242C89.9649 290.242 90.2775 290.321 90.5665 290.478C90.8555 290.631 91.0761 290.833 91.2285 291.085V288.8H91.9536V294.632H91.2285V293.82C91.0866 294.078 90.8765 294.29 90.598 294.458C90.3195 294.621 89.9938 294.703 89.6207 294.703C89.2372 294.703 88.8878 294.608 88.5725 294.419C88.2625 294.23 88.0182 293.965 87.8395 293.623C87.6609 293.282 87.5716 292.893 87.5716 292.457ZM91.2285 292.464C91.2285 292.139 91.1628 291.855 91.0315 291.613C90.9001 291.372 90.7215 291.188 90.4955 291.062C90.2749 290.93 90.0305 290.865 89.7626 290.865C89.4946 290.865 89.2503 290.928 89.0296 291.054C88.8089 291.18 88.6329 291.364 88.5016 291.605C88.3702 291.847 88.3045 292.131 88.3045 292.457C88.3045 292.788 88.3702 293.077 88.5016 293.324C88.6329 293.565 88.8089 293.752 89.0296 293.883C89.2503 294.009 89.4946 294.072 89.7626 294.072C90.0305 294.072 90.2749 294.009 90.4955 293.883C90.7215 293.752 90.9001 293.565 91.0315 293.324C91.1628 293.077 91.2285 292.79 91.2285 292.464ZM96.9959 290.313V294.632H96.2787V293.993C96.1421 294.214 95.9503 294.388 95.7034 294.514C95.4617 294.634 95.1937 294.695 94.8995 294.695C94.5632 294.695 94.2611 294.627 93.9931 294.49C93.7251 294.348 93.5124 294.138 93.3547 293.859C93.2024 293.581 93.1262 293.242 93.1262 292.843V290.313H93.8355V292.748C93.8355 293.174 93.9432 293.502 94.1586 293.733C94.374 293.959 94.6683 294.072 95.0413 294.072C95.4249 294.072 95.727 293.954 95.9477 293.718C96.1684 293.481 96.2787 293.137 96.2787 292.685V290.313H96.9959ZM97.9389 292.457C97.9389 292.015 98.0282 291.629 98.2068 291.298C98.3855 290.962 98.6298 290.702 98.9398 290.518C99.2551 290.334 99.6045 290.242 99.988 290.242C100.366 290.242 100.695 290.323 100.973 290.486C101.252 290.649 101.459 290.854 101.596 291.101V290.313H102.321V294.632H101.596V293.828C101.454 294.08 101.241 294.29 100.957 294.458C100.679 294.621 100.353 294.703 99.9801 294.703C99.5966 294.703 99.2498 294.608 98.9398 294.419C98.6298 294.23 98.3855 293.965 98.2068 293.623C98.0282 293.282 97.9389 292.893 97.9389 292.457ZM101.596 292.464C101.596 292.139 101.53 291.855 101.399 291.613C101.267 291.372 101.089 291.188 100.863 291.062C100.642 290.93 100.398 290.865 100.13 290.865C99.8619 290.865 99.6176 290.928 99.3969 291.054C99.1762 291.18 99.0002 291.364 98.8689 291.605C98.7375 291.847 98.6718 292.131 98.6718 292.457C98.6718 292.788 98.7375 293.077 98.8689 293.324C99.0002 293.565 99.1762 293.752 99.3969 293.883C99.6176 294.009 99.8619 294.072 100.13 294.072C100.398 294.072 100.642 294.009 100.863 293.883C101.089 293.752 101.267 293.565 101.399 293.324C101.53 293.077 101.596 292.79 101.596 292.464ZM104.25 288.8V294.632H103.533V288.8H104.25ZM105.843 289.611C105.706 289.611 105.591 289.564 105.496 289.47C105.401 289.375 105.354 289.259 105.354 289.123C105.354 288.986 105.401 288.871 105.496 288.776C105.591 288.681 105.706 288.634 105.843 288.634C105.974 288.634 106.085 288.681 106.174 288.776C106.268 288.871 106.316 288.986 106.316 289.123C106.316 289.259 106.268 289.375 106.174 289.47C106.085 289.564 105.974 289.611 105.843 289.611ZM106.19 290.313V294.632H105.472V290.313H106.19ZM107.948 294.041H110.068V294.632H107.128V294.041L109.225 290.896H107.144V290.313H110.052V290.896L107.948 294.041ZM114.939 292.307C114.939 292.443 114.931 292.588 114.916 292.74H111.464C111.49 293.166 111.634 293.5 111.897 293.741C112.165 293.978 112.488 294.096 112.866 294.096C113.176 294.096 113.434 294.025 113.639 293.883C113.849 293.736 113.996 293.542 114.08 293.3H114.853C114.737 293.715 114.506 294.054 114.159 294.317C113.812 294.574 113.381 294.703 112.866 294.703C112.457 294.703 112.089 294.611 111.763 294.427C111.443 294.243 111.19 293.983 111.006 293.647C110.823 293.305 110.731 292.911 110.731 292.464C110.731 292.018 110.82 291.626 110.999 291.29C111.177 290.954 111.427 290.696 111.747 290.518C112.073 290.334 112.446 290.242 112.866 290.242C113.276 290.242 113.639 290.331 113.954 290.51C114.269 290.689 114.511 290.936 114.679 291.251C114.853 291.561 114.939 291.913 114.939 292.307ZM114.198 292.157C114.198 291.884 114.138 291.65 114.017 291.456C113.896 291.256 113.731 291.106 113.521 291.006C113.316 290.901 113.087 290.849 112.835 290.849C112.472 290.849 112.162 290.964 111.905 291.196C111.653 291.427 111.508 291.747 111.471 292.157H114.198ZM115.618 292.457C115.618 292.015 115.707 291.629 115.886 291.298C116.065 290.962 116.309 290.702 116.619 290.518C116.934 290.334 117.286 290.242 117.675 290.242C118.011 290.242 118.324 290.321 118.613 290.478C118.902 290.631 119.123 290.833 119.275 291.085V288.8H120V294.632H119.275V293.82C119.133 294.078 118.923 294.29 118.644 294.458C118.366 294.621 118.04 294.703 117.667 294.703C117.284 294.703 116.934 294.608 116.619 294.419C116.309 294.23 116.065 293.965 115.886 293.623C115.707 293.282 115.618 292.893 115.618 292.457ZM119.275 292.464C119.275 292.139 119.209 291.855 119.078 291.613C118.946 291.372 118.768 291.188 118.542 291.062C118.321 290.93 118.077 290.865 117.809 290.865C117.541 290.865 117.297 290.928 117.076 291.054C116.855 291.18 116.679 291.364 116.548 291.605C116.417 291.847 116.351 292.131 116.351 292.457C116.351 292.788 116.417 293.077 116.548 293.324C116.679 293.565 116.855 293.752 117.076 293.883C117.297 294.009 117.541 294.072 117.809 294.072C118.077 294.072 118.321 294.009 118.542 293.883C118.768 293.752 118.946 293.565 119.078 293.324C119.209 293.077 119.275 292.79 119.275 292.464Z',
                                                        fill: '#313134',
                                                    },
                                                ),
                                                el('g', {
                                                        filter: 'url(#filter6_d)',
                                                    },
                                                    el('rect', {
                                                            x: '137.559',
                                                            y: '139.702',
                                                            width: '59.6728',
                                                            height: '196.536',
                                                            rx: '10',
                                                            fill: 'white'
                                                        },
                                                    ),
                                                    el('path', {
                                                            d: 'M161.036 154.542C161.302 154.592 161.52 154.725 161.691 154.941C161.862 155.157 161.948 155.405 161.948 155.684C161.948 155.936 161.885 156.159 161.759 156.353C161.637 156.542 161.459 156.69 161.225 156.799C160.991 156.907 160.714 156.961 160.394 156.961H158.361V152.245H160.306C160.626 152.245 160.901 152.297 161.13 152.401C161.365 152.504 161.54 152.648 161.657 152.833C161.779 153.018 161.84 153.227 161.84 153.461C161.84 153.736 161.765 153.966 161.617 154.15C161.473 154.335 161.279 154.466 161.036 154.542ZM159.306 154.191H160.171C160.396 154.191 160.57 154.141 160.691 154.042C160.813 153.939 160.874 153.792 160.874 153.603C160.874 153.414 160.813 153.268 160.691 153.164C160.57 153.061 160.396 153.009 160.171 153.009H159.306V154.191ZM160.259 156.191C160.489 156.191 160.666 156.137 160.793 156.028C160.923 155.92 160.989 155.767 160.989 155.569C160.989 155.366 160.921 155.209 160.786 155.096C160.651 154.979 160.468 154.921 160.239 154.921H159.306V156.191H160.259ZM162.458 155.076C162.458 154.698 162.533 154.362 162.681 154.069C162.834 153.777 163.039 153.551 163.296 153.394C163.557 153.236 163.848 153.157 164.167 153.157C164.447 153.157 164.69 153.214 164.897 153.326C165.109 153.439 165.278 153.581 165.404 153.752V153.218H166.356V156.961H165.404V156.414C165.282 156.589 165.113 156.736 164.897 156.853C164.685 156.965 164.44 157.021 164.161 157.021C163.845 157.021 163.557 156.94 163.296 156.778C163.039 156.616 162.834 156.389 162.681 156.096C162.533 155.799 162.458 155.459 162.458 155.076ZM165.404 155.089C165.404 154.86 165.359 154.664 165.269 154.502C165.179 154.335 165.057 154.209 164.904 154.123C164.751 154.033 164.586 153.988 164.411 153.988C164.235 153.988 164.073 154.031 163.924 154.117C163.776 154.202 163.654 154.328 163.559 154.495C163.469 154.657 163.424 154.851 163.424 155.076C163.424 155.301 163.469 155.499 163.559 155.67C163.654 155.837 163.776 155.965 163.924 156.055C164.077 156.146 164.24 156.191 164.411 156.191C164.586 156.191 164.751 156.148 164.904 156.062C165.057 155.972 165.179 155.846 165.269 155.684C165.359 155.517 165.404 155.319 165.404 155.089ZM168.712 157.021C168.406 157.021 168.131 156.967 167.888 156.859C167.645 156.747 167.451 156.596 167.307 156.407C167.167 156.218 167.091 156.008 167.077 155.778H168.03C168.048 155.923 168.118 156.042 168.239 156.137C168.365 156.231 168.521 156.278 168.705 156.278C168.885 156.278 169.025 156.242 169.124 156.17C169.228 156.098 169.28 156.006 169.28 155.893C169.28 155.772 169.216 155.682 169.09 155.623C168.969 155.56 168.773 155.493 168.503 155.42C168.223 155.353 167.994 155.283 167.814 155.211C167.638 155.139 167.485 155.029 167.354 154.88C167.228 154.731 167.165 154.531 167.165 154.279C167.165 154.072 167.224 153.882 167.341 153.711C167.462 153.54 167.633 153.405 167.854 153.306C168.079 153.207 168.343 153.157 168.644 153.157C169.09 153.157 169.446 153.27 169.712 153.495C169.978 153.716 170.124 154.015 170.151 154.394H169.246C169.232 154.245 169.169 154.128 169.057 154.042C168.948 153.952 168.802 153.907 168.617 153.907C168.446 153.907 168.313 153.939 168.219 154.002C168.129 154.065 168.084 154.153 168.084 154.265C168.084 154.391 168.147 154.488 168.273 154.556C168.399 154.619 168.595 154.684 168.861 154.752C169.131 154.819 169.354 154.889 169.529 154.961C169.705 155.033 169.856 155.146 169.982 155.299C170.113 155.447 170.18 155.646 170.185 155.893C170.185 156.11 170.124 156.303 170.002 156.474C169.885 156.645 169.714 156.781 169.489 156.88C169.268 156.974 169.009 157.021 168.712 157.021ZM171.441 152.772C171.274 152.772 171.134 152.721 171.022 152.617C170.914 152.509 170.86 152.376 170.86 152.218C170.86 152.061 170.914 151.93 171.022 151.827C171.134 151.718 171.274 151.664 171.441 151.664C171.607 151.664 171.745 151.718 171.853 151.827C171.965 151.93 172.022 152.061 172.022 152.218C172.022 152.376 171.965 152.509 171.853 152.617C171.745 152.721 171.607 152.772 171.441 152.772ZM171.907 153.218V156.961H170.961V153.218H171.907ZM172.598 155.089C172.598 154.702 172.677 154.364 172.834 154.076C172.992 153.783 173.211 153.558 173.49 153.401C173.769 153.238 174.089 153.157 174.449 153.157C174.913 153.157 175.296 153.274 175.597 153.509C175.904 153.738 176.109 154.063 176.212 154.481H175.192C175.138 154.319 175.046 154.193 174.915 154.103C174.789 154.009 174.631 153.961 174.442 153.961C174.172 153.961 173.958 154.06 173.801 154.259C173.643 154.452 173.564 154.729 173.564 155.089C173.564 155.445 173.643 155.722 173.801 155.92C173.958 156.114 174.172 156.211 174.442 156.211C174.825 156.211 175.075 156.04 175.192 155.697H176.212C176.109 156.103 175.904 156.425 175.597 156.663C175.291 156.902 174.908 157.021 174.449 157.021C174.089 157.021 173.769 156.943 173.49 156.785C173.211 156.623 172.992 156.398 172.834 156.11C172.677 155.817 172.598 155.477 172.598 155.089Z',
                                                            fill: '#313134',
                                                        },
                                                    ),
                                                    el('path', {
                                                            d: 'M159.173 165.092V164.484H160.548V169.775H159.875V165.092H159.173ZM161.517 165.092V164.484H162.893V169.775H162.219V165.092H161.517ZM163.956 169.241C164.576 168.744 165.061 168.336 165.412 168.019C165.764 167.697 166.059 167.363 166.298 167.016C166.542 166.665 166.664 166.321 166.664 165.984C166.664 165.667 166.586 165.419 166.43 165.238C166.278 165.053 166.032 164.96 165.691 164.96C165.359 164.96 165.1 165.065 164.915 165.275C164.734 165.48 164.637 165.755 164.622 166.102H163.978C163.998 165.555 164.163 165.133 164.476 164.835C164.788 164.538 165.19 164.389 165.683 164.389C166.186 164.389 166.583 164.528 166.876 164.806C167.174 165.084 167.323 165.467 167.323 165.955C167.323 166.36 167.201 166.755 166.957 167.141C166.718 167.521 166.444 167.858 166.137 168.151C165.83 168.439 165.437 168.775 164.959 169.161H167.476V169.717H163.956V169.241ZM173.066 169.219C173.432 169.219 173.747 169.139 174.01 168.978C174.278 168.817 174.483 168.587 174.625 168.29H175.415C175.23 168.778 174.93 169.156 174.515 169.424C174.1 169.688 173.617 169.819 173.066 169.819C172.49 169.819 171.983 169.661 171.544 169.344C171.105 169.026 170.802 168.602 170.636 168.07H169.926V167.602H170.534C170.519 167.475 170.512 167.348 170.512 167.221C170.512 167.099 170.519 166.98 170.534 166.863H169.926V166.402H170.629C170.736 166.045 170.907 165.733 171.141 165.465C171.38 165.192 171.663 164.982 171.99 164.835C172.322 164.684 172.681 164.609 173.066 164.609C173.617 164.609 174.1 164.743 174.515 165.011C174.93 165.279 175.23 165.66 175.415 166.153H174.625C174.483 165.85 174.281 165.619 174.017 165.458C173.754 165.297 173.437 165.216 173.066 165.216C172.656 165.216 172.298 165.321 171.99 165.531C171.688 165.741 171.471 166.031 171.339 166.402H173.066V166.863H171.222C171.207 166.98 171.2 167.099 171.2 167.221C171.2 167.363 171.21 167.49 171.229 167.602H173.066V168.07H171.346C171.488 168.431 171.71 168.714 172.012 168.919C172.319 169.119 172.671 169.219 173.066 169.219Z',
                                                            fill: '#5F626F',
                                                        },
                                                    ),
                                                    el('line', {
                                                            x1: '137.559',
                                                            y1: '182.471',
                                                            x2: '197.559',
                                                            y2: '182.471',
                                                            stroke: '#ECECEC',
                                                            'stroke-width': '1.1259',
                                                        },
                                                    ),
                                                    el('path', {
                                                            d: 'M171.169 197.836C171.389 198.056 171.389 198.412 171.169 198.632L165.423 204.378L161.929 200.884C161.709 200.664 161.709 200.308 161.929 200.088C162.148 199.868 162.505 199.868 162.725 200.088L165.423 202.786L170.373 197.836C170.593 197.616 170.949 197.616 171.169 197.836Z',
                                                            fill: '#A7A7A7',
                                                            'fill-rule': 'evenodd',
                                                            'clip-rule': 'evenodd'
                                                        },
                                                    ),
                                                    el('path', {
                                                            d: 'M151.084 317.62C151.084 313.556 154.379 310.261 158.442 310.261H176.348C180.412 310.261 183.707 313.556 183.707 317.62V317.62C183.707 321.684 180.412 324.978 176.348 324.978H158.442C154.378 324.978 151.084 321.684 151.084 317.62V317.62Z',
                                                            fill: 'url(#paint8_linear)',
                                                            'fill-opacity': '0.1',
                                                        },
                                                    ),
                                                    el('g', {
                                                            'clip-path': 'url(#clip10)',
                                                        },
                                                        el('path', {
                                                                d: 'M158.984 319.66C158.686 319.66 158.419 319.612 158.182 319.515C157.946 319.418 157.756 319.275 157.613 319.085C157.474 318.895 157.4 318.667 157.392 318.399H158.45C158.465 318.55 158.518 318.667 158.607 318.748C158.696 318.825 158.812 318.864 158.955 318.864C159.103 318.864 159.219 318.831 159.304 318.765C159.389 318.696 159.432 318.601 159.432 318.481C159.432 318.38 159.397 318.297 159.327 318.231C159.261 318.165 159.178 318.111 159.077 318.068C158.981 318.025 158.841 317.977 158.659 317.923C158.396 317.841 158.181 317.76 158.014 317.679C157.847 317.597 157.704 317.477 157.584 317.318C157.464 317.159 157.404 316.952 157.404 316.697C157.404 316.317 157.541 316.02 157.816 315.807C158.091 315.59 158.45 315.482 158.891 315.482C159.341 315.482 159.703 315.59 159.978 315.807C160.253 316.02 160.4 316.319 160.42 316.702H159.345C159.337 316.571 159.289 316.468 159.199 316.394C159.11 316.317 158.996 316.278 158.857 316.278C158.737 316.278 158.64 316.311 158.566 316.377C158.492 316.439 158.456 316.53 158.456 316.65C158.456 316.782 158.518 316.884 158.642 316.958C158.766 317.032 158.959 317.111 159.223 317.196C159.486 317.285 159.699 317.371 159.862 317.452C160.029 317.533 160.172 317.652 160.292 317.806C160.412 317.961 160.472 318.161 160.472 318.405C160.472 318.638 160.412 318.849 160.292 319.038C160.176 319.228 160.005 319.379 159.781 319.492C159.556 319.604 159.291 319.66 158.984 319.66ZM162.077 316.336V317.161H163.408V317.929H162.077V318.823H163.583V319.62H161.084V315.54H163.583V316.336H162.077ZM165.221 318.853H166.523V319.62H164.228V315.54H165.221V318.853ZM167.991 316.336V317.161H169.322V317.929H167.991V318.823H169.496V319.62H166.997V315.54H169.496V316.336H167.991ZM169.973 317.574C169.973 317.171 170.06 316.813 170.234 316.499C170.409 316.181 170.651 315.935 170.961 315.761C171.274 315.583 171.629 315.494 172.024 315.494C172.508 315.494 172.923 315.621 173.268 315.877C173.613 316.133 173.843 316.482 173.959 316.923H172.867C172.785 316.753 172.669 316.623 172.518 316.534C172.371 316.445 172.202 316.4 172.012 316.4C171.706 316.4 171.458 316.507 171.269 316.72C171.079 316.933 170.984 317.218 170.984 317.574C170.984 317.93 171.079 318.215 171.269 318.428C171.458 318.641 171.706 318.748 172.012 318.748C172.202 318.748 172.371 318.703 172.518 318.614C172.669 318.525 172.785 318.395 172.867 318.225H173.959C173.843 318.667 173.613 319.015 173.268 319.271C172.923 319.523 172.508 319.649 172.024 319.649C171.629 319.649 171.274 319.562 170.961 319.387C170.651 319.209 170.409 318.963 170.234 318.649C170.06 318.335 169.973 317.977 169.973 317.574ZM177.503 315.54V316.336H176.422V319.62H175.428V316.336H174.347V315.54H177.503Z',
                                                                fill: '#9A3AE8',
                                                            },
                                                        ),
                                                    ),
                                                ),

                                                el('g', {
                                                        filter: 'url(#filter7_d)',
                                                    },
                                                    el('rect', {
                                                            x: '208.492',
                                                            y: '139.702',
                                                            width: '59.6728',
                                                            height: '196.536',
                                                            rx: '10',
                                                            fill: 'white'
                                                        },
                                                    ),
                                                    el('path', {
                                                            d: 'M224.065 154.596C224.065 154.132 224.168 153.718 224.375 153.353C224.587 152.984 224.873 152.698 225.233 152.495C225.598 152.288 226.006 152.185 226.456 152.185C226.983 152.185 227.445 152.32 227.841 152.59C228.237 152.86 228.514 153.234 228.672 153.711H227.584C227.476 153.486 227.323 153.317 227.125 153.205C226.931 153.092 226.706 153.036 226.449 153.036C226.175 153.036 225.929 153.101 225.713 153.232C225.501 153.358 225.335 153.538 225.213 153.772C225.096 154.006 225.037 154.281 225.037 154.596C225.037 154.907 225.096 155.182 225.213 155.42C225.335 155.655 225.501 155.837 225.713 155.968C225.929 156.094 226.175 156.157 226.449 156.157C226.706 156.157 226.931 156.101 227.125 155.988C227.323 155.871 227.476 155.7 227.584 155.475H228.672C228.514 155.956 228.237 156.332 227.841 156.603C227.449 156.868 226.987 157.001 226.456 157.001C226.006 157.001 225.598 156.9 225.233 156.697C224.873 156.49 224.587 156.204 224.375 155.839C224.168 155.475 224.065 155.06 224.065 154.596ZM231.141 157.021C230.781 157.021 230.457 156.943 230.169 156.785C229.88 156.623 229.653 156.395 229.486 156.103C229.324 155.81 229.243 155.472 229.243 155.089C229.243 154.707 229.326 154.369 229.493 154.076C229.664 153.783 229.896 153.558 230.189 153.401C230.482 153.238 230.808 153.157 231.168 153.157C231.529 153.157 231.855 153.238 232.148 153.401C232.441 153.558 232.67 153.783 232.837 154.076C233.008 154.369 233.094 154.707 233.094 155.089C233.094 155.472 233.006 155.81 232.83 156.103C232.659 156.395 232.425 156.623 232.128 156.785C231.835 156.943 231.506 157.021 231.141 157.021ZM231.141 156.197C231.313 156.197 231.472 156.157 231.621 156.076C231.774 155.99 231.896 155.864 231.986 155.697C232.076 155.531 232.121 155.328 232.121 155.089C232.121 154.734 232.026 154.461 231.837 154.272C231.653 154.078 231.425 153.982 231.155 153.982C230.885 153.982 230.657 154.078 230.473 154.272C230.292 154.461 230.202 154.734 230.202 155.089C230.202 155.445 230.29 155.72 230.466 155.914C230.646 156.103 230.871 156.197 231.141 156.197ZM238.435 153.164C238.895 153.164 239.264 153.306 239.543 153.59C239.827 153.869 239.969 154.261 239.969 154.765V156.961H239.023V154.894C239.023 154.601 238.949 154.378 238.8 154.225C238.651 154.067 238.449 153.988 238.192 153.988C237.935 153.988 237.73 154.067 237.577 154.225C237.429 154.378 237.354 154.601 237.354 154.894V156.961H236.409V154.894C236.409 154.601 236.334 154.378 236.186 154.225C236.037 154.067 235.834 153.988 235.578 153.988C235.316 153.988 235.109 154.067 234.956 154.225C234.808 154.378 234.733 154.601 234.733 154.894V156.961H233.787V153.218H234.733V153.671C234.855 153.513 235.01 153.389 235.199 153.299C235.393 153.209 235.605 153.164 235.834 153.164C236.127 153.164 236.388 153.227 236.618 153.353C236.848 153.475 237.026 153.651 237.152 153.88C237.273 153.664 237.449 153.491 237.679 153.36C237.913 153.229 238.165 153.164 238.435 153.164ZM242.582 153.995H241.927V156.961H240.967V153.995H240.542V153.218H240.967V153.029C240.967 152.57 241.098 152.232 241.359 152.016C241.62 151.8 242.015 151.698 242.541 151.712V152.509C242.312 152.504 242.152 152.543 242.062 152.624C241.972 152.705 241.927 152.851 241.927 153.063V153.218H242.582V153.995ZM244.857 157.021C244.496 157.021 244.172 156.943 243.884 156.785C243.596 156.623 243.368 156.395 243.202 156.103C243.039 155.81 242.958 155.472 242.958 155.089C242.958 154.707 243.042 154.369 243.208 154.076C243.38 153.783 243.611 153.558 243.904 153.401C244.197 153.238 244.523 153.157 244.884 153.157C245.244 153.157 245.571 153.238 245.863 153.401C246.156 153.558 246.386 153.783 246.552 154.076C246.723 154.369 246.809 154.707 246.809 155.089C246.809 155.472 246.721 155.81 246.546 156.103C246.374 156.395 246.14 156.623 245.843 156.785C245.55 156.943 245.221 157.021 244.857 157.021ZM244.857 156.197C245.028 156.197 245.188 156.157 245.336 156.076C245.489 155.99 245.611 155.864 245.701 155.697C245.791 155.531 245.836 155.328 245.836 155.089C245.836 154.734 245.742 154.461 245.553 154.272C245.368 154.078 245.14 153.982 244.87 153.982C244.6 153.982 244.373 154.078 244.188 154.272C244.008 154.461 243.918 154.734 243.918 155.089C243.918 155.445 244.006 155.72 244.181 155.914C244.361 156.103 244.586 156.197 244.857 156.197ZM248.449 153.799C248.57 153.601 248.728 153.446 248.921 153.333C249.12 153.22 249.345 153.164 249.597 153.164V154.157H249.347C249.05 154.157 248.825 154.227 248.671 154.367C248.523 154.506 248.449 154.749 248.449 155.096V156.961H247.503V153.218H248.449V153.799ZM251.335 153.995V155.806C251.335 155.932 251.364 156.024 251.423 156.082C251.486 156.137 251.59 156.164 251.734 156.164H252.173V156.961H251.578C250.781 156.961 250.383 156.573 250.383 155.799V153.995H249.937V153.218H250.383V152.293H251.335V153.218H252.173V153.995H251.335Z',
                                                            fill: '#313134',
                                                        },
                                                    ),
                                                    el('path', {
                                                            d: 'M228.201 169.241C228.821 168.744 229.306 168.336 229.658 168.019C230.009 167.697 230.304 167.363 230.543 167.016C230.787 166.665 230.909 166.321 230.909 165.984C230.909 165.667 230.831 165.419 230.675 165.238C230.524 165.053 230.277 164.96 229.936 164.96C229.604 164.96 229.345 165.065 229.16 165.275C228.98 165.48 228.882 165.755 228.867 166.102H228.223C228.243 165.555 228.409 165.133 228.721 164.835C229.033 164.538 229.436 164.389 229.928 164.389C230.431 164.389 230.829 164.528 231.121 164.806C231.419 165.084 231.568 165.467 231.568 165.955C231.568 166.36 231.446 166.755 231.202 167.141C230.963 167.521 230.69 167.858 230.382 168.151C230.075 168.439 229.682 168.775 229.204 169.161H231.721V169.717H228.201V169.241ZM232.411 169.241C233.03 168.744 233.516 168.336 233.867 168.019C234.218 167.697 234.514 167.363 234.753 167.016C234.997 166.665 235.119 166.321 235.119 165.984C235.119 165.667 235.041 165.419 234.884 165.238C234.733 165.053 234.487 164.96 234.145 164.96C233.814 164.96 233.555 165.065 233.37 165.275C233.189 165.48 233.091 165.755 233.077 166.102H232.433C232.452 165.555 232.618 165.133 232.93 164.835C233.243 164.538 233.645 164.389 234.138 164.389C234.641 164.389 235.038 164.528 235.331 164.806C235.628 165.084 235.777 165.467 235.777 165.955C235.777 166.36 235.655 166.755 235.411 167.141C235.172 167.521 234.899 167.858 234.592 168.151C234.284 168.439 233.892 168.775 233.413 169.161H235.931V169.717H232.411V169.241ZM236.701 167.075C236.701 166.236 236.837 165.582 237.111 165.114C237.384 164.64 237.862 164.404 238.545 164.404C239.223 164.404 239.699 164.64 239.972 165.114C240.245 165.582 240.382 166.236 240.382 167.075C240.382 167.929 240.245 168.592 239.972 169.066C239.699 169.539 239.223 169.775 238.545 169.775C237.862 169.775 237.384 169.539 237.111 169.066C236.837 168.592 236.701 167.929 236.701 167.075ZM239.723 167.075C239.723 166.65 239.694 166.292 239.635 165.999C239.582 165.702 239.467 165.462 239.292 165.282C239.121 165.101 238.872 165.011 238.545 165.011C238.213 165.011 237.96 165.101 237.784 165.282C237.613 165.462 237.499 165.702 237.44 165.999C237.386 166.292 237.359 166.65 237.359 167.075C237.359 167.514 237.386 167.882 237.44 168.18C237.499 168.478 237.613 168.717 237.784 168.897C237.96 169.078 238.213 169.168 238.545 169.168C238.872 169.168 239.121 169.078 239.292 168.897C239.467 168.717 239.582 168.478 239.635 168.18C239.694 167.882 239.723 167.514 239.723 167.075ZM246.116 169.219C246.482 169.219 246.797 169.139 247.06 168.978C247.329 168.817 247.533 168.587 247.675 168.29H248.465C248.28 168.778 247.98 169.156 247.565 169.424C247.15 169.688 246.667 169.819 246.116 169.819C245.54 169.819 245.033 169.661 244.594 169.344C244.155 169.026 243.852 168.602 243.686 168.07H242.977V167.602H243.584C243.569 167.475 243.562 167.348 243.562 167.221C243.562 167.099 243.569 166.98 243.584 166.863H242.977V166.402H243.679C243.786 166.045 243.957 165.733 244.191 165.465C244.43 165.192 244.713 164.982 245.04 164.835C245.372 164.684 245.731 164.609 246.116 164.609C246.667 164.609 247.15 164.743 247.565 165.011C247.98 165.279 248.28 165.66 248.465 166.153H247.675C247.533 165.85 247.331 165.619 247.068 165.458C246.804 165.297 246.487 165.216 246.116 165.216C245.706 165.216 245.348 165.321 245.04 165.531C244.738 165.741 244.521 166.031 244.389 166.402H246.116V166.863H244.272C244.257 166.98 244.25 167.099 244.25 167.221C244.25 167.363 244.26 167.49 244.279 167.602H246.116V168.07H244.396C244.538 168.431 244.76 168.714 245.062 168.919C245.37 169.119 245.721 169.219 246.116 169.219Z',
                                                            fill: '#5F626F',
                                                        },
                                                    ),
                                                    el('line', {
                                                            x1: '208.492',
                                                            y1: '182.471',
                                                            x2: '268.492',
                                                            y2: '182.471',
                                                            stroke: '#ECECEC',
                                                            'stroke-width': '1.1259',
                                                        },
                                                    ),
                                                    el('path', {
                                                            d: 'M242.103 197.836C242.322 198.056 242.322 198.412 242.103 198.632L236.356 204.378L232.862 200.884C232.642 200.664 232.642 200.308 232.862 200.088C233.082 199.868 233.438 199.868 233.658 200.088L236.356 202.786L241.306 197.836C241.526 197.616 241.883 197.616 242.103 197.836Z',
                                                            fill: '#A7A7A7',
                                                            'fill-rule': 'evenodd',
                                                            'clip-rule': 'evenodd'
                                                        },
                                                    ),
                                                    el('path', {
                                                            d: 'M242.103 226.547C242.322 226.767 242.322 227.123 242.103 227.343L236.356 233.089L232.862 229.595C232.642 229.375 232.642 229.018 232.862 228.799C233.082 228.579 233.438 228.579 233.658 228.799L236.356 231.497L241.306 226.547C241.526 226.327 241.883 226.327 242.103 226.547Z',
                                                            fill: '#A7A7A7',
                                                            'fill-rule': 'evenodd',
                                                            'clip-rule': 'evenodd'
                                                        },
                                                    ),
                                                    el('path', {
                                                            d: 'M240.861 231.448C240.861 231.137 241.113 230.885 241.424 230.885V230.885C241.735 230.885 241.987 231.137 241.987 231.448V235.389C241.987 235.7 241.735 235.952 241.424 235.952V235.952C241.113 235.952 240.861 235.7 240.861 235.389V231.448Z',
                                                            fill: '#A7A7A7',
                                                        },
                                                    ),
                                                    el('rect', {
                                                            x: '238.891',
                                                            y: '233.981',
                                                            width: '1.1259',
                                                            height: '5.06656',
                                                            rx: '0.56295',
                                                            fill: '#A7A7A7',
                                                            transform: 'rotate(-90 238.891 233.981)',
                                                        },
                                                    ),
                                                    el('path', {
                                                            d: 'M222.018 317.62C222.018 313.556 225.312 310.261 229.376 310.261H247.282C251.346 310.261 254.64 313.556 254.64 317.62V317.62C254.64 321.684 251.346 324.978 247.282 324.978H229.376C225.312 324.978 222.018 321.684 222.018 317.62V317.62Z',
                                                            fill: 'url(#paint9_linear)',
                                                            'fill-opacity': '0.1',
                                                        },
                                                    ),
                                                    el('g', {
                                                            'clip-path': 'url(#clip11)',
                                                        },
                                                        el('path', {
                                                                d: 'M229.918 319.66C229.62 319.66 229.352 319.612 229.116 319.515C228.88 319.418 228.69 319.275 228.547 319.085C228.407 318.895 228.333 318.667 228.326 318.399H229.383C229.399 318.55 229.451 318.667 229.54 318.748C229.629 318.825 229.746 318.864 229.889 318.864C230.036 318.864 230.152 318.831 230.238 318.765C230.323 318.696 230.366 318.601 230.366 318.481C230.366 318.38 230.331 318.297 230.261 318.231C230.195 318.165 230.112 318.111 230.011 318.068C229.914 318.025 229.775 317.977 229.593 317.923C229.329 317.841 229.114 317.76 228.948 317.679C228.781 317.597 228.638 317.477 228.518 317.318C228.397 317.159 228.337 316.952 228.337 316.697C228.337 316.317 228.475 316.02 228.75 315.807C229.025 315.59 229.383 315.482 229.825 315.482C230.274 315.482 230.637 315.59 230.912 315.807C231.187 316.02 231.334 316.319 231.353 316.702H230.278C230.271 316.571 230.222 316.468 230.133 316.394C230.044 316.317 229.93 316.278 229.79 316.278C229.67 316.278 229.573 316.311 229.5 316.377C229.426 316.439 229.389 316.53 229.389 316.65C229.389 316.782 229.451 316.884 229.575 316.958C229.699 317.032 229.893 317.111 230.156 317.196C230.42 317.285 230.633 317.371 230.796 317.452C230.962 317.533 231.105 317.652 231.226 317.806C231.346 317.961 231.406 318.161 231.406 318.405C231.406 318.638 231.346 318.849 231.226 319.038C231.109 319.228 230.939 319.379 230.714 319.492C230.489 319.604 230.224 319.66 229.918 319.66ZM233.011 316.336V317.161H234.342V317.929H233.011V318.823H234.516V319.62H232.017V315.54H234.516V316.336H233.011ZM236.155 318.853H237.457V319.62H235.161V315.54H236.155V318.853ZM238.925 316.336V317.161H240.255V317.929H238.925V318.823H240.43V319.62H237.931V315.54H240.43V316.336H238.925ZM240.906 317.574C240.906 317.171 240.993 316.813 241.168 316.499C241.342 316.181 241.584 315.935 241.894 315.761C242.208 315.583 242.563 315.494 242.958 315.494C243.442 315.494 243.857 315.621 244.201 315.877C244.546 316.133 244.777 316.482 244.893 316.923H243.8C243.719 316.753 243.603 316.623 243.452 316.534C243.304 316.445 243.136 316.4 242.946 316.4C242.64 316.4 242.392 316.507 242.202 316.72C242.012 316.933 241.917 317.218 241.917 317.574C241.917 317.93 242.012 318.215 242.202 318.428C242.392 318.641 242.64 318.748 242.946 318.748C243.136 318.748 243.304 318.703 243.452 318.614C243.603 318.525 243.719 318.395 243.8 318.225H244.893C244.777 318.667 244.546 319.015 244.201 319.271C243.857 319.523 243.442 319.649 242.958 319.649C242.563 319.649 242.208 319.562 241.894 319.387C241.584 319.209 241.342 318.963 241.168 318.649C240.993 318.335 240.906 317.977 240.906 317.574ZM248.436 315.54V316.336H247.355V319.62H246.362V316.336H245.281V315.54H248.436Z',
                                                                fill: '#9A3AE8',
                                                            },
                                                        ),
                                                    ),
                                                ),
                                                el('g', {
                                                        filter: 'url(#filter8_d)',
                                                    },
                                                    el('rect', {
                                                            x: '208.492',
                                                            y: '139.702',
                                                            width: '59.6728',
                                                            height: '196.536',
                                                            rx: '10',
                                                            fill: 'white'
                                                        },
                                                    ),
                                                    el('path', {
                                                            d: 'M296.604 153.705C296.604 153.957 296.543 154.193 296.421 154.414C296.304 154.635 296.117 154.812 295.861 154.948C295.609 155.083 295.289 155.15 294.901 155.15H294.111V156.961H293.165V152.245H294.901C295.266 152.245 295.577 152.308 295.834 152.435C296.09 152.561 296.282 152.734 296.408 152.955C296.539 153.175 296.604 153.425 296.604 153.705ZM294.861 154.387C295.122 154.387 295.316 154.328 295.442 154.211C295.568 154.09 295.631 153.921 295.631 153.705C295.631 153.245 295.374 153.016 294.861 153.016H294.111V154.387H294.861ZM298.221 153.799C298.343 153.601 298.5 153.446 298.694 153.333C298.892 153.22 299.117 153.164 299.369 153.164V154.157H299.12C298.822 154.157 298.597 154.227 298.444 154.367C298.295 154.506 298.221 154.749 298.221 155.096V156.961H297.275V153.218H298.221V153.799ZM303.486 155.008C303.486 155.143 303.477 155.265 303.459 155.373H300.723C300.745 155.643 300.84 155.855 301.006 156.008C301.173 156.161 301.378 156.238 301.621 156.238C301.972 156.238 302.222 156.087 302.371 155.785H303.391C303.283 156.146 303.076 156.443 302.769 156.677C302.463 156.907 302.087 157.021 301.641 157.021C301.281 157.021 300.957 156.943 300.669 156.785C300.385 156.623 300.162 156.395 300 156.103C299.842 155.81 299.763 155.472 299.763 155.089C299.763 154.702 299.842 154.362 300 154.069C300.157 153.777 300.378 153.551 300.662 153.394C300.946 153.236 301.272 153.157 301.641 153.157C301.997 153.157 302.315 153.234 302.594 153.387C302.878 153.54 303.096 153.759 303.249 154.042C303.407 154.322 303.486 154.644 303.486 155.008ZM302.506 154.738C302.502 154.495 302.414 154.301 302.243 154.157C302.071 154.009 301.862 153.934 301.614 153.934C301.38 153.934 301.182 154.006 301.02 154.15C300.862 154.29 300.765 154.486 300.729 154.738H302.506ZM308.824 153.164C309.283 153.164 309.652 153.306 309.931 153.59C310.215 153.869 310.357 154.261 310.357 154.765V156.961H309.411V154.894C309.411 154.601 309.337 154.378 309.188 154.225C309.04 154.067 308.837 153.988 308.58 153.988C308.324 153.988 308.119 154.067 307.966 154.225C307.817 154.378 307.743 154.601 307.743 154.894V156.961H306.797V154.894C306.797 154.601 306.723 154.378 306.574 154.225C306.425 154.067 306.223 153.988 305.966 153.988C305.705 153.988 305.498 154.067 305.345 154.225C305.196 154.378 305.122 154.601 305.122 154.894V156.961H304.176V153.218H305.122V153.671C305.243 153.513 305.399 153.389 305.588 153.299C305.781 153.209 305.993 153.164 306.223 153.164C306.515 153.164 306.777 153.227 307.006 153.353C307.236 153.475 307.414 153.651 307.54 153.88C307.662 153.664 307.837 153.491 308.067 153.36C308.301 153.229 308.553 153.164 308.824 153.164ZM311.734 152.772C311.568 152.772 311.428 152.721 311.315 152.617C311.207 152.509 311.153 152.376 311.153 152.218C311.153 152.061 311.207 151.93 311.315 151.827C311.428 151.718 311.568 151.664 311.734 151.664C311.901 151.664 312.038 151.718 312.146 151.827C312.259 151.93 312.315 152.061 312.315 152.218C312.315 152.376 312.259 152.509 312.146 152.617C312.038 152.721 311.901 152.772 311.734 152.772ZM312.2 153.218V156.961H311.255V153.218H312.2ZM316.668 153.218V156.961H315.715V156.488C315.594 156.65 315.434 156.778 315.236 156.873C315.042 156.963 314.83 157.008 314.601 157.008C314.308 157.008 314.049 156.947 313.824 156.826C313.599 156.699 313.421 156.517 313.29 156.278C313.164 156.035 313.101 155.747 313.101 155.414V153.218H314.047V155.279C314.047 155.576 314.121 155.806 314.27 155.968C314.418 156.125 314.621 156.204 314.878 156.204C315.139 156.204 315.344 156.125 315.492 155.968C315.641 155.806 315.715 155.576 315.715 155.279V153.218H316.668ZM322.249 153.164C322.708 153.164 323.077 153.306 323.357 153.59C323.64 153.869 323.782 154.261 323.782 154.765V156.961H322.836V154.894C322.836 154.601 322.762 154.378 322.613 154.225C322.465 154.067 322.262 153.988 322.005 153.988C321.749 153.988 321.544 154.067 321.391 154.225C321.242 154.378 321.168 154.601 321.168 154.894V156.961H320.222V154.894C320.222 154.601 320.148 154.378 319.999 154.225C319.85 154.067 319.648 153.988 319.391 153.988C319.13 153.988 318.923 154.067 318.77 154.225C318.621 154.378 318.547 154.601 318.547 154.894V156.961H317.601V153.218H318.547V153.671C318.668 153.513 318.824 153.389 319.013 153.299C319.206 153.209 319.418 153.164 319.648 153.164C319.941 153.164 320.202 153.227 320.431 153.353C320.661 153.475 320.839 153.651 320.965 153.88C321.087 153.664 321.262 153.491 321.492 153.36C321.726 153.229 321.978 153.164 322.249 153.164Z',
                                                            fill: '#313134',
                                                        },
                                                    ),
                                                    el('path', {
                                                            d: 'M298.138 165.816C298.172 165.367 298.346 165.016 298.658 164.762C298.97 164.509 299.375 164.382 299.873 164.382C300.205 164.382 300.49 164.443 300.729 164.565C300.973 164.682 301.156 164.843 301.278 165.048C301.405 165.253 301.468 165.484 301.468 165.743C301.468 166.045 301.38 166.306 301.205 166.526C301.034 166.746 300.81 166.887 300.531 166.951V166.987C300.849 167.065 301.1 167.219 301.285 167.448C301.471 167.677 301.563 167.978 301.563 168.348C301.563 168.626 301.5 168.878 301.373 169.102C301.246 169.322 301.056 169.495 300.802 169.622C300.548 169.749 300.244 169.812 299.887 169.812C299.37 169.812 298.946 169.678 298.614 169.409C298.282 169.136 298.097 168.751 298.058 168.253H298.702C298.736 168.546 298.856 168.785 299.06 168.97C299.265 169.156 299.539 169.248 299.88 169.248C300.222 169.248 300.48 169.161 300.656 168.985C300.836 168.804 300.927 168.573 300.927 168.29C300.927 167.924 300.805 167.66 300.561 167.499C300.317 167.338 299.948 167.258 299.456 167.258H299.287V166.702H299.463C299.912 166.697 300.251 166.624 300.48 166.482C300.71 166.336 300.824 166.111 300.824 165.809C300.824 165.55 300.739 165.343 300.568 165.187C300.402 165.031 300.163 164.953 299.851 164.953C299.548 164.953 299.304 165.031 299.119 165.187C298.934 165.343 298.824 165.553 298.79 165.816H298.138ZM302.448 165.816C302.482 165.367 302.655 165.016 302.967 164.762C303.28 164.509 303.685 164.382 304.182 164.382C304.514 164.382 304.799 164.443 305.039 164.565C305.283 164.682 305.465 164.843 305.587 165.048C305.714 165.253 305.778 165.484 305.778 165.743C305.778 166.045 305.69 166.306 305.514 166.526C305.343 166.746 305.119 166.887 304.841 166.951V166.987C305.158 167.065 305.409 167.219 305.595 167.448C305.78 167.677 305.873 167.978 305.873 168.348C305.873 168.626 305.809 168.878 305.683 169.102C305.556 169.322 305.365 169.495 305.112 169.622C304.858 169.749 304.553 169.812 304.197 169.812C303.68 169.812 303.255 169.678 302.924 169.409C302.592 169.136 302.406 168.751 302.367 168.253H303.011C303.046 168.546 303.165 168.785 303.37 168.97C303.575 169.156 303.848 169.248 304.19 169.248C304.531 169.248 304.79 169.161 304.965 168.985C305.146 168.804 305.236 168.573 305.236 168.29C305.236 167.924 305.114 167.66 304.87 167.499C304.626 167.338 304.258 167.258 303.765 167.258H303.597V166.702H303.772C304.221 166.697 304.56 166.624 304.79 166.482C305.019 166.336 305.134 166.111 305.134 165.809C305.134 165.55 305.048 165.343 304.878 165.187C304.712 165.031 304.473 164.953 304.16 164.953C303.858 164.953 303.614 165.031 303.429 165.187C303.243 165.343 303.133 165.553 303.099 165.816H302.448ZM307.738 167.024C307.465 166.916 307.255 166.76 307.109 166.555C306.962 166.35 306.889 166.102 306.889 165.809C306.889 165.545 306.955 165.309 307.087 165.099C307.218 164.884 307.414 164.716 307.672 164.594C307.936 164.467 308.253 164.404 308.624 164.404C308.994 164.404 309.309 164.467 309.568 164.594C309.831 164.716 310.029 164.884 310.16 165.099C310.297 165.309 310.365 165.545 310.365 165.809C310.365 166.092 310.29 166.341 310.138 166.555C309.987 166.765 309.78 166.921 309.516 167.024C309.819 167.116 310.058 167.28 310.234 167.514C310.414 167.743 310.504 168.021 310.504 168.348C310.504 168.665 310.426 168.944 310.27 169.183C310.114 169.417 309.892 169.6 309.604 169.731C309.321 169.858 308.994 169.922 308.624 169.922C308.253 169.922 307.926 169.858 307.643 169.731C307.365 169.6 307.148 169.417 306.992 169.183C306.835 168.944 306.757 168.665 306.757 168.348C306.757 168.021 306.845 167.741 307.021 167.507C307.197 167.273 307.436 167.112 307.738 167.024ZM309.721 165.889C309.721 165.592 309.624 165.362 309.429 165.201C309.233 165.04 308.965 164.96 308.624 164.96C308.287 164.96 308.021 165.04 307.826 165.201C307.631 165.362 307.533 165.594 307.533 165.897C307.533 166.17 307.633 166.389 307.833 166.555C308.038 166.721 308.302 166.804 308.624 166.804C308.95 166.804 309.214 166.721 309.414 166.555C309.619 166.385 309.721 166.163 309.721 165.889ZM308.624 167.316C308.263 167.316 307.967 167.402 307.738 167.573C307.509 167.738 307.394 167.99 307.394 168.326C307.394 168.639 307.504 168.89 307.723 169.08C307.948 169.27 308.248 169.366 308.624 169.366C308.999 169.366 309.297 169.27 309.516 169.08C309.736 168.89 309.846 168.639 309.846 168.326C309.846 167.999 309.734 167.751 309.509 167.58C309.285 167.404 308.989 167.316 308.624 167.316ZM316.209 169.219C316.575 169.219 316.889 169.139 317.153 168.978C317.421 168.817 317.626 168.587 317.768 168.29H318.558C318.373 168.778 318.073 169.156 317.658 169.424C317.243 169.688 316.76 169.819 316.209 169.819C315.633 169.819 315.126 169.661 314.687 169.344C314.247 169.026 313.945 168.602 313.779 168.07H313.069V167.602H313.677C313.662 167.475 313.655 167.348 313.655 167.221C313.655 167.099 313.662 166.98 313.677 166.863H313.069V166.402H313.772C313.879 166.045 314.05 165.733 314.284 165.465C314.523 165.192 314.806 164.982 315.133 164.835C315.465 164.684 315.823 164.609 316.209 164.609C316.76 164.609 317.243 164.743 317.658 165.011C318.073 165.279 318.373 165.66 318.558 166.153H317.768C317.626 165.85 317.424 165.619 317.16 165.458C316.897 165.297 316.58 165.216 316.209 165.216C315.799 165.216 315.44 165.321 315.133 165.531C314.83 165.741 314.613 166.031 314.482 166.402H316.209V166.863H314.365C314.35 166.98 314.343 167.099 314.343 167.221C314.343 167.363 314.352 167.49 314.372 167.602H316.209V168.07H314.489C314.63 168.431 314.852 168.714 315.155 168.919C315.462 169.119 315.814 169.219 316.209 169.219Z',
                                                            fill: '#5F626F',
                                                        },
                                                    ),
                                                    el('line', {
                                                            x1: '278.863',
                                                            y1: '182.471',
                                                            x2: '338.863',
                                                            y2: '182.471',
                                                            stroke: '#ECECEC',
                                                            'stroke-width': '1.1259',
                                                        },
                                                    ),
                                                    el('path', {
                                                            d: 'M312.474 197.836C312.693 198.056 312.693 198.412 312.474 198.632L306.728 204.378L303.233 200.884C303.013 200.664 303.013 200.308 303.233 200.088C303.453 199.868 303.81 199.868 304.029 200.088L306.728 202.786L311.678 197.836C311.897 197.616 312.254 197.616 312.474 197.836Z',
                                                            fill: '#A7A7A7',
                                                            'fill-rule': 'evenodd',
                                                            'clip-rule': 'evenodd'
                                                        },
                                                    ),
                                                    el('path', {
                                                            d: 'M312.474 226.547C312.693 226.767 312.693 227.123 312.474 227.343L306.728 233.089L303.233 229.595C303.013 229.375 303.013 229.018 303.233 228.799C303.453 228.579 303.81 228.579 304.029 228.799L306.728 231.497L311.678 226.547C311.897 226.327 312.254 226.327 312.474 226.547Z',
                                                            fill: '#A7A7A7',
                                                            'fill-rule': 'evenodd',
                                                            'clip-rule': 'evenodd'
                                                        },
                                                    ),
                                                    el('path', {
                                                            d: 'M311.232 231.448C311.232 231.137 311.484 230.885 311.795 230.885V230.885C312.106 230.885 312.358 231.137 312.358 231.448V235.389C312.358 235.7 312.106 235.952 311.795 235.952V235.952C311.484 235.952 311.232 235.7 311.232 235.389V231.448Z',
                                                            fill: '#A7A7A7',
                                                        },
                                                    ),
                                                    el('rect', {
                                                            x: '309.262',
                                                            y: '233.981',
                                                            width: '1.1259',
                                                            height: '5.06656',
                                                            rx: '0.56295',
                                                            transform: 'rotate(-90 309.262 233.981)',
                                                            fill: '#A7A7A7'
                                                        },
                                                    ),
                                                    el('path', {
                                                            d: 'M312.474 256.946C312.693 257.166 312.693 257.522 312.474 257.742L306.728 263.488L303.233 259.994C303.013 259.774 303.013 259.418 303.233 259.198C303.453 258.978 303.81 258.978 304.029 259.198L306.728 261.896L311.678 256.946C311.897 256.726 312.254 256.726 312.474 256.946Z',
                                                            fill: '#A7A7A7',
                                                            'fill-rule': 'evenodd',
                                                            'clip-rule': 'evenodd'
                                                        },
                                                    ),
                                                    el('path', {
                                                            d: 'M311.581 261.944C311.649 261.736 311.942 261.736 312.01 261.944L312.44 263.268C312.47 263.361 312.557 263.424 312.654 263.424H314.047C314.265 263.424 314.356 263.703 314.179 263.831L313.053 264.65C312.974 264.707 312.941 264.809 312.971 264.902L313.401 266.226C313.469 266.434 313.231 266.606 313.055 266.478L311.928 265.659C311.849 265.602 311.742 265.602 311.663 265.659L310.536 266.478C310.36 266.606 310.122 266.434 310.19 266.226L310.62 264.902C310.65 264.809 310.617 264.707 310.538 264.65L309.411 263.831C309.235 263.703 309.326 263.424 309.544 263.424H310.937C311.034 263.424 311.121 263.361 311.151 263.268L311.581 261.944Z',
                                                            fill: '#A7A7A7',
                                                        },
                                                    ),
                                                    el('path', {
                                                            d: 'M292.389 317.62C292.389 313.556 295.683 310.261 299.747 310.261H317.653C321.717 310.261 325.011 313.556 325.011 317.62V317.62C325.011 321.684 321.717 324.978 317.653 324.978H299.747C295.683 324.978 292.389 321.684 292.389 317.62V317.62Z',
                                                            fill: 'url(#paint10_linear)',
                                                            'fill-opacity': '0.1',
                                                        },
                                                    ),
                                                    el('g', {
                                                            'clip-path': 'url(#clip12)',
                                                        },
                                                        el('path', {
                                                                d: 'M300.289 319.66C299.991 319.66 299.724 319.612 299.487 319.515C299.251 319.418 299.061 319.275 298.918 319.085C298.778 318.895 298.705 318.667 298.697 318.399H299.754C299.77 318.55 299.822 318.667 299.911 318.748C300.001 318.825 300.117 318.864 300.26 318.864C300.407 318.864 300.524 318.831 300.609 318.765C300.694 318.696 300.737 318.601 300.737 318.481C300.737 318.38 300.702 318.297 300.632 318.231C300.566 318.165 300.483 318.111 300.382 318.068C300.285 318.025 300.146 317.977 299.964 317.923C299.7 317.841 299.485 317.76 299.319 317.679C299.152 317.597 299.009 317.477 298.889 317.318C298.769 317.159 298.708 316.952 298.708 316.697C298.708 316.317 298.846 316.02 299.121 315.807C299.396 315.59 299.754 315.482 300.196 315.482C300.646 315.482 301.008 315.59 301.283 315.807C301.558 316.02 301.705 316.319 301.725 316.702H300.649C300.642 316.571 300.593 316.468 300.504 316.394C300.415 316.317 300.301 316.278 300.161 316.278C300.041 316.278 299.944 316.311 299.871 316.377C299.797 316.439 299.76 316.53 299.76 316.65C299.76 316.782 299.822 316.884 299.946 316.958C300.07 317.032 300.264 317.111 300.527 317.196C300.791 317.285 301.004 317.371 301.167 317.452C301.333 317.533 301.477 317.652 301.597 317.806C301.717 317.961 301.777 318.161 301.777 318.405C301.777 318.638 301.717 318.849 301.597 319.038C301.48 319.228 301.31 319.379 301.085 319.492C300.861 319.604 300.595 319.66 300.289 319.66ZM303.382 316.336V317.161H304.713V317.929H303.382V318.823H304.887V319.62H302.388V315.54H304.887V316.336H303.382ZM306.526 318.853H307.828V319.62H305.532V315.54H306.526V318.853ZM309.296 316.336V317.161H310.626V317.929H309.296V318.823H310.801V319.62H308.302V315.54H310.801V316.336H309.296ZM311.277 317.574C311.277 317.171 311.365 316.813 311.539 316.499C311.713 316.181 311.955 315.935 312.265 315.761C312.579 315.583 312.934 315.494 313.329 315.494C313.813 315.494 314.228 315.621 314.572 315.877C314.917 316.133 315.148 316.482 315.264 316.923H314.171C314.09 316.753 313.974 316.623 313.823 316.534C313.676 316.445 313.507 316.4 313.317 316.4C313.011 316.4 312.763 316.507 312.573 316.72C312.383 316.933 312.289 317.218 312.289 317.574C312.289 317.93 312.383 318.215 312.573 318.428C312.763 318.641 313.011 318.748 313.317 318.748C313.507 318.748 313.676 318.703 313.823 318.614C313.974 318.525 314.09 318.395 314.171 318.225H315.264C315.148 318.667 314.917 319.015 314.572 319.271C314.228 319.523 313.813 319.649 313.329 319.649C312.934 319.649 312.579 319.562 312.265 319.387C311.955 319.209 311.713 318.963 311.539 318.649C311.365 318.335 311.277 317.977 311.277 317.574ZM318.807 315.54V316.336H317.726V319.62H316.733V316.336H315.652V315.54H318.807Z',
                                                                fill: '#9A3AE8',
                                                            },
                                                        ),
                                                    ),
                                                ),
                                                el('g', {
                                                        filter: 'url(#filter9_d)',
                                                    },
                                                    el('rect', {
                                                            x: '349.797',
                                                            y: '139.702',
                                                            width: '59.6728',
                                                            height: '196.536',
                                                            rx: '10',
                                                            fill: 'white'
                                                        },
                                                    ),
                                                    el('path', {
                                                            d: 'M359.537 153.705C359.537 153.957 359.477 154.193 359.355 154.414C359.238 154.635 359.051 154.812 358.794 154.948C358.542 155.083 358.222 155.15 357.835 155.15H357.045V156.961H356.099V152.245H357.835C358.2 152.245 358.511 152.308 358.767 152.435C359.024 152.561 359.215 152.734 359.342 152.955C359.472 153.175 359.537 153.425 359.537 153.705ZM357.795 154.387C358.056 154.387 358.249 154.328 358.376 154.211C358.502 154.09 358.565 153.921 358.565 153.705C358.565 153.245 358.308 153.016 357.795 153.016H357.045V154.387H357.795ZM361.155 153.799C361.276 153.601 361.434 153.446 361.628 153.333C361.826 153.22 362.051 153.164 362.303 153.164V154.157H362.053C361.756 154.157 361.531 154.227 361.378 154.367C361.229 154.506 361.155 154.749 361.155 155.096V156.961H360.209V153.218H361.155V153.799ZM366.419 155.008C366.419 155.143 366.41 155.265 366.392 155.373H363.656C363.679 155.643 363.773 155.855 363.94 156.008C364.107 156.161 364.311 156.238 364.555 156.238C364.906 156.238 365.156 156.087 365.304 155.785H366.325C366.216 156.146 366.009 156.443 365.703 156.677C365.397 156.907 365.021 157.021 364.575 157.021C364.215 157.021 363.89 156.943 363.602 156.785C363.318 156.623 363.095 156.395 362.933 156.103C362.776 155.81 362.697 155.472 362.697 155.089C362.697 154.702 362.776 154.362 362.933 154.069C363.091 153.777 363.312 153.551 363.595 153.394C363.879 153.236 364.206 153.157 364.575 153.157C364.931 153.157 365.248 153.234 365.527 153.387C365.811 153.54 366.03 153.759 366.183 154.042C366.34 154.322 366.419 154.644 366.419 155.008ZM365.44 154.738C365.435 154.495 365.347 154.301 365.176 154.157C365.005 154.009 364.796 153.934 364.548 153.934C364.314 153.934 364.116 154.006 363.953 154.15C363.796 154.29 363.699 154.486 363.663 154.738H365.44ZM371.757 153.164C372.217 153.164 372.586 153.306 372.865 153.59C373.149 153.869 373.291 154.261 373.291 154.765V156.961H372.345V154.894C372.345 154.601 372.271 154.378 372.122 154.225C371.973 154.067 371.771 153.988 371.514 153.988C371.257 153.988 371.052 154.067 370.899 154.225C370.751 154.378 370.676 154.601 370.676 154.894V156.961H369.731V154.894C369.731 154.601 369.656 154.378 369.508 154.225C369.359 154.067 369.156 153.988 368.9 153.988C368.638 153.988 368.431 154.067 368.278 154.225C368.13 154.378 368.055 154.601 368.055 154.894V156.961H367.109V153.218H368.055V153.671C368.177 153.513 368.332 153.389 368.521 153.299C368.715 153.209 368.927 153.164 369.156 153.164C369.449 153.164 369.71 153.227 369.94 153.353C370.17 153.475 370.348 153.651 370.474 153.88C370.595 153.664 370.771 153.491 371.001 153.36C371.235 153.229 371.487 153.164 371.757 153.164ZM374.668 152.772C374.501 152.772 374.362 152.721 374.249 152.617C374.141 152.509 374.087 152.376 374.087 152.218C374.087 152.061 374.141 151.93 374.249 151.827C374.362 151.718 374.501 151.664 374.668 151.664C374.834 151.664 374.972 151.718 375.08 151.827C375.192 151.93 375.249 152.061 375.249 152.218C375.249 152.376 375.192 152.509 375.08 152.617C374.972 152.721 374.834 152.772 374.668 152.772ZM375.134 153.218V156.961H374.188V153.218H375.134ZM379.601 153.218V156.961H378.649V156.488C378.527 156.65 378.367 156.778 378.169 156.873C377.976 156.963 377.764 157.008 377.534 157.008C377.241 157.008 376.983 156.947 376.757 156.826C376.532 156.699 376.354 156.517 376.224 156.278C376.098 156.035 376.035 155.747 376.035 155.414V153.218H376.98V155.279C376.98 155.576 377.055 155.806 377.203 155.968C377.352 156.125 377.554 156.204 377.811 156.204C378.072 156.204 378.277 156.125 378.426 155.968C378.575 155.806 378.649 155.576 378.649 155.279V153.218H379.601ZM385.182 153.164C385.642 153.164 386.011 153.306 386.29 153.59C386.574 153.869 386.716 154.261 386.716 154.765V156.961H385.77V154.894C385.77 154.601 385.696 154.378 385.547 154.225C385.398 154.067 385.196 153.988 384.939 153.988C384.682 153.988 384.477 154.067 384.324 154.225C384.176 154.378 384.101 154.601 384.101 154.894V156.961H383.156V154.894C383.156 154.601 383.081 154.378 382.933 154.225C382.784 154.067 382.581 153.988 382.325 153.988C382.063 153.988 381.856 154.067 381.703 154.225C381.555 154.378 381.48 154.601 381.48 154.894V156.961H380.535V153.218H381.48V153.671C381.602 153.513 381.757 153.389 381.946 153.299C382.14 153.209 382.352 153.164 382.581 153.164C382.874 153.164 383.135 153.227 383.365 153.353C383.595 153.475 383.773 153.651 383.899 153.88C384.02 153.664 384.196 153.491 384.426 153.36C384.66 153.229 384.912 153.164 385.182 153.164ZM392.661 153.705C392.661 153.957 392.601 154.193 392.479 154.414C392.362 154.635 392.175 154.812 391.918 154.948C391.666 155.083 391.346 155.15 390.959 155.15H390.169V156.961H389.223V152.245H390.959C391.324 152.245 391.635 152.308 391.891 152.435C392.148 152.561 392.339 152.734 392.465 152.955C392.596 153.175 392.661 153.425 392.661 153.705ZM390.918 154.387C391.18 154.387 391.373 154.328 391.499 154.211C391.626 154.09 391.689 153.921 391.689 153.705C391.689 153.245 391.432 153.016 390.918 153.016H390.169V154.387H390.918ZM394.279 151.962V156.961H393.333V151.962H394.279ZM398.746 153.218V156.961H397.794V156.488C397.672 156.65 397.512 156.778 397.314 156.873C397.12 156.963 396.909 157.008 396.679 157.008C396.386 157.008 396.127 156.947 395.902 156.826C395.677 156.699 395.499 156.517 395.368 156.278C395.242 156.035 395.179 155.747 395.179 155.414V153.218H396.125V155.279C396.125 155.576 396.199 155.806 396.348 155.968C396.497 156.125 396.699 156.204 396.956 156.204C397.217 156.204 397.422 156.125 397.571 155.968C397.719 155.806 397.794 155.576 397.794 155.279V153.218H398.746ZM401.111 157.021C400.805 157.021 400.53 156.967 400.287 156.859C400.044 156.747 399.85 156.596 399.706 156.407C399.567 156.218 399.49 156.008 399.477 155.778H400.429C400.447 155.923 400.517 156.042 400.638 156.137C400.765 156.231 400.92 156.278 401.105 156.278C401.285 156.278 401.424 156.242 401.523 156.17C401.627 156.098 401.679 156.006 401.679 155.893C401.679 155.772 401.616 155.682 401.49 155.623C401.368 155.56 401.172 155.493 400.902 155.42C400.623 155.353 400.393 155.283 400.213 155.211C400.037 155.139 399.884 155.029 399.754 154.88C399.627 154.731 399.564 154.531 399.564 154.279C399.564 154.072 399.623 153.882 399.74 153.711C399.862 153.54 400.033 153.405 400.253 153.306C400.479 153.207 400.742 153.157 401.044 153.157C401.49 153.157 401.845 153.27 402.111 153.495C402.377 153.716 402.523 154.015 402.55 154.394H401.645C401.632 154.245 401.568 154.128 401.456 154.042C401.348 153.952 401.201 153.907 401.017 153.907C400.846 153.907 400.713 153.939 400.618 154.002C400.528 154.065 400.483 154.153 400.483 154.265C400.483 154.391 400.546 154.488 400.672 154.556C400.798 154.619 400.994 154.684 401.26 154.752C401.53 154.819 401.753 154.889 401.929 154.961C402.104 155.033 402.255 155.146 402.381 155.299C402.512 155.447 402.58 155.646 402.584 155.893C402.584 156.11 402.523 156.303 402.402 156.474C402.285 156.645 402.113 156.781 401.888 156.88C401.668 156.974 401.409 157.021 401.111 157.021Z',
                                                            fill: '#313134',
                                                        },
                                                    ),
                                                    el('path', {
                                                            d: 'M372.96 165.062H370.392V166.731C370.504 166.575 370.67 166.448 370.889 166.35C371.109 166.248 371.345 166.197 371.599 166.197C372.004 166.197 372.333 166.282 372.587 166.453C372.841 166.619 373.021 166.836 373.129 167.104C373.241 167.368 373.297 167.648 373.297 167.946C373.297 168.297 373.231 168.612 373.099 168.89C372.968 169.168 372.765 169.388 372.492 169.549C372.224 169.71 371.889 169.79 371.489 169.79C370.977 169.79 370.562 169.658 370.245 169.395C369.928 169.131 369.735 168.78 369.667 168.341H370.318C370.382 168.619 370.516 168.836 370.721 168.992C370.926 169.148 371.184 169.227 371.497 169.227C371.882 169.227 372.172 169.112 372.368 168.883C372.563 168.648 372.66 168.341 372.66 167.96C372.66 167.58 372.563 167.287 372.368 167.082C372.172 166.872 371.885 166.768 371.504 166.768C371.245 166.768 371.019 166.831 370.823 166.958C370.633 167.08 370.494 167.248 370.406 167.463H369.777V164.477H372.96V165.062ZM374.101 169.241C374.721 168.744 375.207 168.336 375.558 168.019C375.909 167.697 376.204 167.363 376.443 167.016C376.687 166.665 376.809 166.321 376.809 165.984C376.809 165.667 376.731 165.419 376.575 165.238C376.424 165.053 376.177 164.96 375.836 164.96C375.504 164.96 375.246 165.065 375.06 165.275C374.88 165.48 374.782 165.755 374.767 166.102H374.123C374.143 165.555 374.309 165.133 374.621 164.835C374.933 164.538 375.336 164.389 375.829 164.389C376.331 164.389 376.729 164.528 377.021 164.806C377.319 165.084 377.468 165.467 377.468 165.955C377.468 166.36 377.346 166.755 377.102 167.141C376.863 167.521 376.59 167.858 376.282 168.151C375.975 168.439 375.582 168.775 375.104 169.161H377.622V169.717H374.101V169.241ZM381.648 165.004L379.614 169.775H378.94L381.004 165.07H378.179V164.499H381.648V165.004ZM387.206 169.219C387.572 169.219 387.887 169.139 388.15 168.978C388.419 168.817 388.624 168.587 388.765 168.29H389.556C389.37 168.778 389.07 169.156 388.655 169.424C388.241 169.688 387.758 169.819 387.206 169.819C386.631 169.819 386.123 169.661 385.684 169.344C385.245 169.026 384.943 168.602 384.777 168.07H384.067V167.602H384.674C384.66 167.475 384.652 167.348 384.652 167.221C384.652 167.099 384.66 166.98 384.674 166.863H384.067V166.402H384.769C384.877 166.045 385.047 165.733 385.282 165.465C385.521 165.192 385.804 164.982 386.131 164.835C386.462 164.684 386.821 164.609 387.206 164.609C387.758 164.609 388.241 164.743 388.655 165.011C389.07 165.279 389.37 165.66 389.556 166.153H388.765C388.624 165.85 388.421 165.619 388.158 165.458C387.894 165.297 387.577 165.216 387.206 165.216C386.797 165.216 386.438 165.321 386.131 165.531C385.828 165.741 385.611 166.031 385.479 166.402H387.206V166.863H385.362C385.348 166.98 385.34 167.099 385.34 167.221C385.34 167.363 385.35 167.49 385.37 167.602H387.206V168.07H385.487C385.628 168.431 385.85 168.714 386.153 168.919C386.46 169.119 386.811 169.219 387.206 169.219Z',
                                                            fill: '#5F626F',
                                                        },
                                                    ),
                                                    el('line', {
                                                            x1: '349.797',
                                                            y1: '182.471',
                                                            x2: '409.797',
                                                            y2: '182.471',
                                                            stroke: '#ECECEC',
                                                            'stroke-width': '1.1259',
                                                        },
                                                    ),
                                                    el('path', {
                                                            d: 'M383.407 197.836C383.627 198.056 383.627 198.412 383.407 198.632L377.661 204.378L374.167 200.884C373.947 200.664 373.947 200.308 374.167 200.088C374.387 199.868 374.743 199.868 374.963 200.088L377.661 202.786L382.611 197.836C382.831 197.616 383.187 197.616 383.407 197.836Z',
                                                            fill: '#A7A7A7',
                                                            'fill-rule': 'evenodd',
                                                            'clip-rule': 'evenodd'
                                                        },
                                                    ),
                                                    el('path', {
                                                            d: 'M383.407 226.547C383.627 226.767 383.627 227.123 383.407 227.343L377.661 233.089L374.167 229.595C373.947 229.375 373.947 229.018 374.167 228.799C374.387 228.579 374.743 228.579 374.963 228.799L377.661 231.497L382.611 226.547C382.831 226.327 383.187 226.327 383.407 226.547Z',
                                                            fill: '#A7A7A7',
                                                            'fill-rule': 'evenodd',
                                                            'clip-rule': 'evenodd'
                                                        },
                                                    ),
                                                    el('path', {
                                                            d: 'M382.166 231.448C382.166 231.137 382.418 230.885 382.729 230.885V230.885C383.04 230.885 383.292 231.137 383.292 231.448V235.389C383.292 235.7 383.04 235.952 382.729 235.952V235.952C382.418 235.952 382.166 235.7 382.166 235.389V231.448Z',
                                                            fill: '#A7A7A7',
                                                        },
                                                    ),
                                                    el('rect', {
                                                            x: '380.195',
                                                            y: '233.981',
                                                            width: '1.1259',
                                                            height: '5.06656',
                                                            rx: '0.56295',
                                                            fill: '#A7A7A7',
                                                            transform: 'rotate(-90 380.195 233.981)',
                                                        },
                                                    ),
                                                    el('path', {
                                                            d: 'M383.407 256.946C383.627 257.166 383.627 257.522 383.407 257.742L377.661 263.488L374.167 259.994C373.947 259.774 373.947 259.418 374.167 259.198C374.387 258.978 374.743 258.978 374.963 259.198L377.661 261.896L382.611 256.946C382.831 256.726 383.187 256.726 383.407 256.946Z',
                                                            fill: '#A7A7A7',
                                                            'fill-rule': 'evenodd',
                                                            'clip-rule': 'evenodd'
                                                        },
                                                    ),
                                                    el('path', {
                                                            d: 'M382.515 261.944C382.582 261.736 382.876 261.736 382.943 261.944L383.374 263.268C383.404 263.361 383.49 263.424 383.588 263.424H384.981C385.199 263.424 385.29 263.703 385.113 263.831L383.986 264.65C383.907 264.707 383.874 264.809 383.904 264.902L384.335 266.226C384.402 266.434 384.165 266.606 383.988 266.478L382.861 265.659C382.782 265.602 382.676 265.602 382.597 265.659L381.47 266.478C381.293 266.606 381.056 266.434 381.123 266.226L381.554 264.902C381.584 264.809 381.551 264.707 381.472 264.65L380.345 263.831C380.169 263.703 380.259 263.424 380.477 263.424H381.87C381.968 263.424 382.054 263.361 382.084 263.268L382.515 261.944Z',
                                                            fill: '#A7A7A7',
                                                        },
                                                    ),
                                                    el('path', {
                                                            d: 'M363.322 317.62C363.322 313.556 366.617 310.261 370.681 310.261H388.586C392.65 310.261 395.945 313.556 395.945 317.62V317.62C395.945 321.684 392.65 324.978 388.586 324.978H370.681C366.617 324.978 363.322 321.684 363.322 317.62V317.62Z',
                                                            fill: 'url(#paint11_linear)',
                                                            'fill-opacity': '0.1',
                                                        },
                                                    ),
                                                    el('g', {
                                                            'clip-path': 'url(#clip13)',
                                                        },
                                                        el('path', {
                                                                d: 'M371.223 319.66C370.924 319.66 370.657 319.612 370.421 319.515C370.184 319.418 369.995 319.275 369.851 319.085C369.712 318.895 369.638 318.667 369.63 318.399H370.688C370.704 318.55 370.756 318.667 370.845 318.748C370.934 318.825 371.05 318.864 371.194 318.864C371.341 318.864 371.457 318.831 371.542 318.765C371.628 318.696 371.67 318.601 371.67 318.481C371.67 318.38 371.635 318.297 371.566 318.231C371.5 318.165 371.416 318.111 371.316 318.068C371.219 318.025 371.079 317.977 370.897 317.923C370.634 317.841 370.419 317.76 370.252 317.679C370.086 317.597 369.942 317.477 369.822 317.318C369.702 317.159 369.642 316.952 369.642 316.697C369.642 316.317 369.78 316.02 370.055 315.807C370.33 315.59 370.688 315.482 371.13 315.482C371.579 315.482 371.941 315.59 372.216 315.807C372.492 316.02 372.639 316.319 372.658 316.702H371.583C371.575 316.571 371.527 316.468 371.438 316.394C371.349 316.317 371.234 316.278 371.095 316.278C370.975 316.278 370.878 316.311 370.804 316.377C370.731 316.439 370.694 316.53 370.694 316.65C370.694 316.782 370.756 316.884 370.88 316.958C371.004 317.032 371.198 317.111 371.461 317.196C371.724 317.285 371.938 317.371 372.1 317.452C372.267 317.533 372.41 317.652 372.53 317.806C372.65 317.961 372.71 318.161 372.71 318.405C372.71 318.638 372.65 318.849 372.53 319.038C372.414 319.228 372.244 319.379 372.019 319.492C371.794 319.604 371.529 319.66 371.223 319.66ZM374.316 316.336V317.161H375.647V317.929H374.316V318.823H375.821V319.62H373.322V315.54H375.821V316.336H374.316ZM377.46 318.853H378.761V319.62H376.466V315.54H377.46V318.853ZM380.229 316.336V317.161H381.56V317.929H380.229V318.823H381.734V319.62H379.235V315.54H381.734V316.336H380.229ZM382.211 317.574C382.211 317.171 382.298 316.813 382.472 316.499C382.647 316.181 382.889 315.935 383.199 315.761C383.513 315.583 383.867 315.494 384.262 315.494C384.747 315.494 385.161 315.621 385.506 315.877C385.851 316.133 386.081 316.482 386.198 316.923H385.105C385.024 316.753 384.907 316.623 384.756 316.534C384.609 316.445 384.441 316.4 384.251 316.4C383.945 316.4 383.697 316.507 383.507 316.72C383.317 316.933 383.222 317.218 383.222 317.574C383.222 317.93 383.317 318.215 383.507 318.428C383.697 318.641 383.945 318.748 384.251 318.748C384.441 318.748 384.609 318.703 384.756 318.614C384.907 318.525 385.024 318.395 385.105 318.225H386.198C386.081 318.667 385.851 319.015 385.506 319.271C385.161 319.523 384.747 319.649 384.262 319.649C383.867 319.649 383.513 319.562 383.199 319.387C382.889 319.209 382.647 318.963 382.472 318.649C382.298 318.335 382.211 317.977 382.211 317.574ZM389.741 315.54V316.336H388.66V319.62H387.666V316.336H386.585V315.54H389.741Z',
                                                                fill: '#9A3AE8',
                                                            },
                                                        ),
                                                    ),
                                                ),
                                                el('g', {
                                                        filter: 'url(#filter10_d)',
                                                    },
                                                    el('rect', {
                                                            x: '420.16',
                                                            y: '139.702',
                                                            width: '59.6728',
                                                            height: '196.536',
                                                            rx: '10',
                                                            fill: 'white'
                                                        },
                                                    ),
                                                    el('path', {
                                                            d: 'M433.908 152.245V156.961H432.962V152.245H433.908ZM436.916 153.164C437.362 153.164 437.722 153.306 437.997 153.59C438.272 153.869 438.409 154.261 438.409 154.765V156.961H437.463V154.894C437.463 154.596 437.389 154.369 437.241 154.211C437.092 154.049 436.889 153.968 436.633 153.968C436.371 153.968 436.164 154.049 436.011 154.211C435.862 154.369 435.788 154.596 435.788 154.894V156.961H434.842V153.218H435.788V153.684C435.914 153.522 436.074 153.396 436.268 153.306C436.466 153.211 436.682 153.164 436.916 153.164ZM439.065 155.076C439.065 154.698 439.14 154.362 439.288 154.069C439.441 153.777 439.649 153.551 439.91 153.394C440.171 153.236 440.462 153.157 440.781 153.157C441.024 153.157 441.256 153.211 441.477 153.32C441.698 153.423 441.873 153.563 442.004 153.738V151.962H442.963V156.961H442.004V156.407C441.887 156.591 441.723 156.74 441.511 156.853C441.299 156.965 441.054 157.021 440.775 157.021C440.459 157.021 440.171 156.94 439.91 156.778C439.649 156.616 439.441 156.389 439.288 156.096C439.14 155.799 439.065 155.459 439.065 155.076ZM442.011 155.089C442.011 154.86 441.966 154.664 441.876 154.502C441.786 154.335 441.664 154.209 441.511 154.123C441.358 154.033 441.193 153.988 441.018 153.988C440.842 153.988 440.68 154.031 440.531 154.117C440.383 154.202 440.261 154.328 440.167 154.495C440.076 154.657 440.031 154.851 440.031 155.076C440.031 155.301 440.076 155.499 440.167 155.67C440.261 155.837 440.383 155.965 440.531 156.055C440.684 156.146 440.847 156.191 441.018 156.191C441.193 156.191 441.358 156.148 441.511 156.062C441.664 155.972 441.786 155.846 441.876 155.684C441.966 155.517 442.011 155.319 442.011 155.089ZM444.367 152.772C444.2 152.772 444.06 152.721 443.948 152.617C443.84 152.509 443.786 152.376 443.786 152.218C443.786 152.061 443.84 151.93 443.948 151.827C444.06 151.718 444.2 151.664 444.367 151.664C444.533 151.664 444.671 151.718 444.779 151.827C444.891 151.93 444.948 152.061 444.948 152.218C444.948 152.376 444.891 152.509 444.779 152.617C444.671 152.721 444.533 152.772 444.367 152.772ZM444.833 153.218V156.961H443.887V153.218H444.833ZM447.328 156.089L448.273 153.218H449.28L447.895 156.961H446.747L445.369 153.218H446.382L447.328 156.089ZM450.291 152.772C450.124 152.772 449.985 152.721 449.872 152.617C449.764 152.509 449.71 152.376 449.71 152.218C449.71 152.061 449.764 151.93 449.872 151.827C449.985 151.718 450.124 151.664 450.291 151.664C450.457 151.664 450.595 151.718 450.703 151.827C450.815 151.93 450.872 152.061 450.872 152.218C450.872 152.376 450.815 152.509 450.703 152.617C450.595 152.721 450.457 152.772 450.291 152.772ZM450.757 153.218V156.961H449.811V153.218H450.757ZM451.448 155.076C451.448 154.698 451.522 154.362 451.671 154.069C451.824 153.777 452.031 153.551 452.293 153.394C452.554 153.236 452.844 153.157 453.164 153.157C453.407 153.157 453.639 153.211 453.86 153.32C454.08 153.423 454.256 153.563 454.387 153.738V151.962H455.346V156.961H454.387V156.407C454.27 156.591 454.105 156.74 453.894 156.853C453.682 156.965 453.436 157.021 453.157 157.021C452.842 157.021 452.554 156.94 452.293 156.778C452.031 156.616 451.824 156.389 451.671 156.096C451.522 155.799 451.448 155.459 451.448 155.076ZM454.393 155.089C454.393 154.86 454.348 154.664 454.258 154.502C454.168 154.335 454.047 154.209 453.894 154.123C453.74 154.033 453.576 153.988 453.4 153.988C453.225 153.988 453.063 154.031 452.914 154.117C452.765 154.202 452.644 154.328 452.549 154.495C452.459 154.657 452.414 154.851 452.414 155.076C452.414 155.301 452.459 155.499 452.549 155.67C452.644 155.837 452.765 155.965 452.914 156.055C453.067 156.146 453.229 156.191 453.4 156.191C453.576 156.191 453.74 156.148 453.894 156.062C454.047 155.972 454.168 155.846 454.258 155.684C454.348 155.517 454.393 155.319 454.393 155.089ZM459.803 153.218V156.961H458.85V156.488C458.729 156.65 458.569 156.778 458.371 156.873C458.177 156.963 457.965 157.008 457.736 157.008C457.443 157.008 457.184 156.947 456.959 156.826C456.734 156.699 456.556 156.517 456.425 156.278C456.299 156.035 456.236 155.747 456.236 155.414V153.218H457.182V155.279C457.182 155.576 457.256 155.806 457.405 155.968C457.553 156.125 457.756 156.204 458.013 156.204C458.274 156.204 458.479 156.125 458.627 155.968C458.776 155.806 458.85 155.576 458.85 155.279V153.218H459.803ZM460.493 155.076C460.493 154.698 460.567 154.362 460.716 154.069C460.869 153.777 461.074 153.551 461.33 153.394C461.592 153.236 461.882 153.157 462.202 153.157C462.481 153.157 462.724 153.214 462.931 153.326C463.143 153.439 463.312 153.581 463.438 153.752V153.218H464.391V156.961H463.438V156.414C463.316 156.589 463.148 156.736 462.931 156.853C462.72 156.965 462.474 157.021 462.195 157.021C461.88 157.021 461.592 156.94 461.33 156.778C461.074 156.616 460.869 156.389 460.716 156.096C460.567 155.799 460.493 155.459 460.493 155.076ZM463.438 155.089C463.438 154.86 463.393 154.664 463.303 154.502C463.213 154.335 463.091 154.209 462.938 154.123C462.785 154.033 462.621 153.988 462.445 153.988C462.269 153.988 462.107 154.031 461.959 154.117C461.81 154.202 461.688 154.328 461.594 154.495C461.504 154.657 461.459 154.851 461.459 155.076C461.459 155.301 461.504 155.499 461.594 155.67C461.688 155.837 461.81 155.965 461.959 156.055C462.112 156.146 462.274 156.191 462.445 156.191C462.621 156.191 462.785 156.148 462.938 156.062C463.091 155.972 463.213 155.846 463.303 155.684C463.393 155.517 463.438 155.319 463.438 155.089ZM466.26 151.962V156.961H465.314V151.962H466.26Z',
                                                            fill: '#313134',
                                                        },
                                                    ),
                                                    el('path', {
                                                            d: 'M443.207 165.004L441.172 169.775H440.499L442.562 165.07H439.738V164.499H443.207V165.004ZM443.784 168.597V168.092L446.353 164.535H447.15V168.019H447.882V168.597H447.15V169.775H446.492V168.597H443.784ZM446.521 165.231L444.552 168.019H446.521V165.231ZM448.533 165.816C448.567 165.367 448.74 165.016 449.052 164.762C449.365 164.509 449.77 164.382 450.267 164.382C450.599 164.382 450.884 164.443 451.124 164.565C451.367 164.682 451.55 164.843 451.672 165.048C451.799 165.253 451.863 165.484 451.863 165.743C451.863 166.045 451.775 166.306 451.599 166.526C451.428 166.746 451.204 166.887 450.926 166.951V166.987C451.243 167.065 451.494 167.219 451.68 167.448C451.865 167.677 451.958 167.978 451.958 168.348C451.958 168.626 451.894 168.878 451.768 169.102C451.641 169.322 451.45 169.495 451.197 169.622C450.943 169.749 450.638 169.812 450.282 169.812C449.765 169.812 449.34 169.678 449.009 169.409C448.677 169.136 448.491 168.751 448.452 168.253H449.096C449.131 168.546 449.25 168.785 449.455 168.97C449.66 169.156 449.933 169.248 450.275 169.248C450.616 169.248 450.875 169.161 451.05 168.985C451.231 168.804 451.321 168.573 451.321 168.29C451.321 167.924 451.199 167.66 450.955 167.499C450.711 167.338 450.343 167.258 449.85 167.258H449.682V166.702H449.857C450.306 166.697 450.645 166.624 450.875 166.482C451.104 166.336 451.219 166.111 451.219 165.809C451.219 165.55 451.133 165.343 450.963 165.187C450.797 165.031 450.558 164.953 450.245 164.953C449.943 164.953 449.699 165.031 449.513 165.187C449.328 165.343 449.218 165.553 449.184 165.816H448.533ZM457.677 169.219C458.043 169.219 458.358 169.139 458.621 168.978C458.889 168.817 459.094 168.587 459.236 168.29H460.026C459.841 168.778 459.541 169.156 459.126 169.424C458.711 169.688 458.228 169.819 457.677 169.819C457.101 169.819 456.594 169.661 456.155 169.344C455.716 169.026 455.413 168.602 455.247 168.07H454.537V167.602H455.145C455.13 167.475 455.123 167.348 455.123 167.221C455.123 167.099 455.13 166.98 455.145 166.863H454.537V166.402H455.24C455.347 166.045 455.518 165.733 455.752 165.465C455.991 165.192 456.274 164.982 456.601 164.835C456.933 164.684 457.291 164.609 457.677 164.609C458.228 164.609 458.711 164.743 459.126 165.011C459.541 165.279 459.841 165.66 460.026 166.153H459.236C459.094 165.85 458.892 165.619 458.628 165.458C458.365 165.297 458.048 165.216 457.677 165.216C457.267 165.216 456.908 165.321 456.601 165.531C456.299 165.741 456.081 166.031 455.95 166.402H457.677V166.863H455.833C455.818 166.98 455.811 167.099 455.811 167.221C455.811 167.363 455.82 167.49 455.84 167.602H457.677V168.07H455.957C456.099 168.431 456.321 168.714 456.623 168.919C456.93 169.119 457.282 169.219 457.677 169.219Z',
                                                            fill: '#5F626F',
                                                        },
                                                    ),
                                                    el('line', {
                                                            x1: '420.16',
                                                            y1: '182.471',
                                                            x2: '480.16',
                                                            y2: '182.471',
                                                            stroke: '#ECECEC',
                                                            'stroke-width': '1.1259',
                                                        },
                                                    ),
                                                    el('path', {
                                                            d: 'M453.771 197.836C453.99 198.056 453.99 198.412 453.771 198.632L448.024 204.378L444.53 200.884C444.31 200.664 444.31 200.308 444.53 200.088C444.75 199.868 445.106 199.868 445.326 200.088L448.024 202.786L452.974 197.836C453.194 197.616 453.551 197.616 453.771 197.836Z',
                                                            fill: 'url(#paint12_linear)',
                                                            'fill-rule': 'evenodd',
                                                            'clip-rule': 'evenodd'
                                                        },
                                                    ),
                                                    el('path', {
                                                            d: 'M453.771 226.547C453.99 226.767 453.99 227.123 453.771 227.343L448.024 233.089L444.53 229.595C444.31 229.375 444.31 229.018 444.53 228.799C444.75 228.579 445.106 228.579 445.326 228.799L448.024 231.497L452.974 226.547C453.194 226.327 453.551 226.327 453.771 226.547Z',
                                                            fill: 'url(#paint13_linear)',
                                                            'fill-rule': 'evenodd',
                                                            'clip-rule': 'evenodd'
                                                        },
                                                    ),
                                                    el('path', {
                                                            d: 'M452.529 231.448C452.529 231.137 452.781 230.885 453.092 230.885V230.885C453.403 230.885 453.655 231.137 453.655 231.448V235.389C453.655 235.7 453.403 235.952 453.092 235.952V235.952C452.781 235.952 452.529 235.7 452.529 235.389V231.448Z',
                                                            fill: 'url(#paint14_linear)',
                                                        },
                                                    ),
                                                    el('rect', {
                                                            x: '450.559',
                                                            y: '233.981',
                                                            width: '1.1259',
                                                            height: '5.06656',
                                                            rx: '0.56295',
                                                            transform: 'rotate(-90 450.559 233.981)',
                                                            fill: 'url(#paint15_linear)'
                                                        },
                                                    ),
                                                    el('path', {
                                                            d: 'M453.771 256.946C453.99 257.166 453.99 257.522 453.771 257.742L448.024 263.488L444.53 259.994C444.31 259.774 444.31 259.418 444.53 259.198C444.75 258.978 445.106 258.978 445.326 259.198L448.024 261.896L452.974 256.946C453.194 256.726 453.551 256.726 453.771 256.946Z',
                                                            fill: 'url(#paint16_linear)',
                                                            'fill-rule': 'evenodd',
                                                            'clip-rule': 'evenodd'
                                                        },
                                                    ),
                                                    el('path', {
                                                            d: 'M452.878 261.944C452.946 261.736 453.239 261.736 453.306 261.944L453.737 263.268C453.767 263.361 453.854 263.424 453.951 263.424H455.344C455.562 263.424 455.653 263.703 455.476 263.831L454.349 264.65C454.271 264.707 454.238 264.809 454.268 264.902L454.698 266.226C454.765 266.434 454.528 266.606 454.352 266.478L453.225 265.659C453.146 265.602 453.039 265.602 452.96 265.659L451.833 266.478C451.657 266.606 451.419 266.434 451.487 266.226L451.917 264.902C451.947 264.809 451.914 264.707 451.835 264.65L450.708 263.831C450.532 263.703 450.623 263.424 450.841 263.424H452.234C452.331 263.424 452.418 263.361 452.448 263.268L452.878 261.944Z',
                                                            fill: 'url(#paint17_linear)',
                                                        },
                                                    ),
                                                    el('path', {
                                                            d: 'M453.771 287.345C453.99 287.565 453.99 287.922 453.771 288.141L448.024 293.888L444.53 290.393C444.31 290.173 444.31 289.817 444.53 289.597C444.75 289.377 445.106 289.377 445.326 289.597L448.024 292.295L452.974 287.345C453.194 287.125 453.551 287.125 453.771 287.345Z',
                                                            fill: 'url(#paint18_linear)',
                                                            'fill-rule': 'evenodd',
                                                            'clip-rule': 'evenodd'
                                                        },
                                                    ),
                                                    el('path', {
                                                            d: 'M452.878 292.343C452.946 292.135 453.239 292.135 453.306 292.343L453.737 293.668C453.767 293.76 453.854 293.823 453.951 293.823H455.344C455.562 293.823 455.653 294.102 455.476 294.231L454.349 295.049C454.271 295.107 454.238 295.208 454.268 295.301L454.698 296.626C454.765 296.833 454.528 297.006 454.352 296.878L453.225 296.059C453.146 296.002 453.039 296.002 452.96 296.059L451.833 296.878C451.657 297.006 451.419 296.833 451.487 296.626L451.917 295.301C451.947 295.208 451.914 295.107 451.835 295.049L450.708 294.231C450.532 294.102 450.623 293.823 450.841 293.823H452.234C452.331 293.823 452.418 293.76 452.448 293.668L452.878 292.343Z',
                                                            fill: 'url(#paint19_linear)',
                                                        },
                                                    ),
                                                    el('path', {
                                                            d: 'M430.186 317.62C430.186 313.556 433.48 310.261 437.544 310.261H462.45C466.514 310.261 469.808 313.556 469.808 317.62V317.62C469.808 321.684 466.514 324.978 462.45 324.978H437.544C433.48 324.978 430.186 321.684 430.186 317.62V317.62Z',
                                                            fill: 'url(#paint20_linear)',
                                                        },
                                                    ),
                                                    el('g', {
                                                            'clip-path': 'url(#clip14)',
                                                        },
                                                        el('path', {
                                                                d: 'M437.903 319.66C437.605 319.66 437.337 319.612 437.101 319.515C436.865 319.418 436.675 319.275 436.531 319.085C436.392 318.895 436.318 318.667 436.311 318.399H437.368C437.384 318.55 437.436 318.667 437.525 318.748C437.614 318.825 437.73 318.864 437.874 318.864C438.021 318.864 438.137 318.831 438.222 318.765C438.308 318.696 438.35 318.601 438.35 318.481C438.35 318.38 438.315 318.297 438.246 318.231C438.18 318.165 438.097 318.111 437.996 318.068C437.899 318.025 437.76 317.977 437.577 317.923C437.314 317.841 437.099 317.76 436.932 317.679C436.766 317.597 436.622 317.477 436.502 317.318C436.382 317.159 436.322 316.952 436.322 316.697C436.322 316.317 436.46 316.02 436.735 315.807C437.01 315.59 437.368 315.482 437.81 315.482C438.259 315.482 438.622 315.59 438.897 315.807C439.172 316.02 439.319 316.319 439.338 316.702H438.263C438.255 316.571 438.207 316.468 438.118 316.394C438.029 316.317 437.914 316.278 437.775 316.278C437.655 316.278 437.558 316.311 437.484 316.377C437.411 316.439 437.374 316.53 437.374 316.65C437.374 316.782 437.436 316.884 437.56 316.958C437.684 317.032 437.878 317.111 438.141 317.196C438.405 317.285 438.618 317.371 438.78 317.452C438.947 317.533 439.09 317.652 439.21 317.806C439.331 317.961 439.391 318.161 439.391 318.405C439.391 318.638 439.331 318.849 439.21 319.038C439.094 319.228 438.924 319.379 438.699 319.492C438.474 319.604 438.209 319.66 437.903 319.66ZM440.996 316.336V317.161H442.327V317.929H440.996V318.823H442.501V319.62H440.002V315.54H442.501V316.336H440.996ZM444.14 318.853H445.442V319.62H443.146V315.54H444.14V318.853ZM446.909 316.336V317.161H448.24V317.929H446.909V318.823H448.414V319.62H445.916V315.54H448.414V316.336H446.909ZM448.891 317.574C448.891 317.171 448.978 316.813 449.153 316.499C449.327 316.181 449.569 315.935 449.879 315.761C450.193 315.583 450.547 315.494 450.943 315.494C451.427 315.494 451.841 315.621 452.186 315.877C452.531 316.133 452.761 316.482 452.878 316.923H451.785C451.704 316.753 451.588 316.623 451.436 316.534C451.289 316.445 451.121 316.4 450.931 316.4C450.625 316.4 450.377 316.507 450.187 316.72C449.997 316.933 449.902 317.218 449.902 317.574C449.902 317.93 449.997 318.215 450.187 318.428C450.377 318.641 450.625 318.748 450.931 318.748C451.121 318.748 451.289 318.703 451.436 318.614C451.588 318.525 451.704 318.395 451.785 318.225H452.878C452.761 318.667 452.531 319.015 452.186 319.271C451.841 319.523 451.427 319.649 450.943 319.649C450.547 319.649 450.193 319.562 449.879 319.387C449.569 319.209 449.327 318.963 449.153 318.649C448.978 318.335 448.891 317.977 448.891 317.574ZM456.421 315.54V316.336H455.34V319.62H454.346V316.336H453.265V315.54H456.421ZM457.913 316.336V317.161H459.244V317.929H457.913V318.823H459.419V319.62H456.92V315.54H459.419V316.336H457.913ZM461.592 315.54C462.022 315.54 462.398 315.625 462.72 315.796C463.041 315.966 463.289 316.206 463.463 316.516C463.642 316.822 463.731 317.177 463.731 317.58C463.731 317.979 463.642 318.333 463.463 318.643C463.289 318.953 463.039 319.193 462.714 319.364C462.392 319.534 462.018 319.62 461.592 319.62H460.064V315.54H461.592ZM461.528 318.76C461.904 318.76 462.196 318.657 462.406 318.452C462.615 318.246 462.72 317.956 462.72 317.58C462.72 317.204 462.615 316.912 462.406 316.702C462.196 316.493 461.904 316.389 461.528 316.389H461.057V318.76H461.528Z',
                                                                fill: 'white',
                                                            },
                                                        ),
                                                    ),
                                                ),
                                                el('rect', {
                                                        x: '5',
                                                        y: '444.606',
                                                        width: '576.461',
                                                        height: '1.68885',
                                                        fill: '#ECECEC'
                                                    },
                                                ),
                                                el('g', {
                                                        'clip-path': 'url(#clip15)',
                                                    },
                                                    el('path', {
                                                            d: 'M5 444.606H29.0192V446.295H5V444.606Z',
                                                            fill: '#9A3AE8',
                                                        },
                                                    ),
                                                    el('path', {
                                                            d: 'M29.0195 444.606H53.0388V446.295H29.0195V444.606Z',
                                                            fill: '#9A3AE8',
                                                        },
                                                    ),
                                                ),
                                                el('path', {
                                                        d: 'M286.641 418.54C287.037 418.21 287.353 417.935 287.588 417.716C287.823 417.493 288.019 417.262 288.176 417.023C288.333 416.783 288.412 416.548 288.412 416.317C288.412 416.106 288.362 415.941 288.263 415.821C288.164 415.702 288.011 415.642 287.805 415.642C287.598 415.642 287.439 415.712 287.328 415.852C287.216 415.989 287.159 416.176 287.155 416.416H286.312C286.329 415.92 286.475 415.545 286.752 415.289C287.033 415.033 287.388 414.905 287.817 414.905C288.288 414.905 288.649 415.031 288.901 415.283C289.153 415.53 289.279 415.859 289.279 416.267C289.279 416.589 289.192 416.897 289.018 417.19C288.845 417.483 288.647 417.739 288.424 417.958C288.201 418.172 287.91 418.433 287.551 418.738H289.378V419.456H286.319V418.812L286.641 418.54ZM294.316 413.654L292.644 420.639H291.796L293.468 413.654H294.316ZM299.912 415.753H297.905V416.812C297.992 416.705 298.116 416.618 298.277 416.552C298.438 416.482 298.609 416.447 298.791 416.447C299.121 416.447 299.391 416.519 299.602 416.664C299.813 416.808 299.965 416.994 300.06 417.221C300.155 417.444 300.203 417.683 300.203 417.939C300.203 418.414 300.066 418.796 299.794 419.085C299.526 419.374 299.142 419.518 298.642 419.518C298.172 419.518 297.796 419.401 297.515 419.165C297.234 418.93 297.076 418.622 297.038 418.243H297.881C297.918 418.408 298 418.54 298.128 418.639C298.26 418.738 298.428 418.788 298.63 418.788C298.873 418.788 299.057 418.711 299.181 418.558C299.305 418.406 299.367 418.203 299.367 417.952C299.367 417.696 299.303 417.502 299.175 417.37C299.051 417.233 298.867 417.165 298.624 417.165C298.45 417.165 298.306 417.209 298.19 417.295C298.075 417.382 297.992 417.498 297.942 417.642H297.113V414.992H299.912V415.753Z',
                                                        fill: '#A7A7A7',
                                                    },
                                                ),
                                                el('path', {
                                                        d: 'M47.5625 391.45C47.5625 385.232 52.6033 380.191 58.8215 380.191H106.777C112.995 380.191 118.036 385.232 118.036 391.45V393.139C118.036 399.357 112.995 404.398 106.777 404.398H58.8215C52.6033 404.398 47.5625 399.357 47.5625 393.139V391.45Z',
                                                        fill: 'url(#paint21_linear)',
                                                        'fill-opacity': '0.1',
                                                    },
                                                ),
                                                el('g', {
                                                        'clip-path': 'url(#clip16)',
                                                    },
                                                    el('path', {
                                                            d: 'M67.1 389.082C66.8802 388.862 66.5237 388.862 66.3039 389.082L63.4891 391.897C63.2693 392.117 63.2693 392.473 63.4891 392.693L66.3039 395.508C66.5237 395.728 66.8802 395.728 67.1 395.508C67.3198 395.288 67.3198 394.931 67.1 394.712L64.6833 392.295L67.1 389.878C67.3198 389.658 67.3198 389.302 67.1 389.082Z',
                                                            fill: '#9A3AE8',
                                                        },
                                                    ),
                                                    el('path', {
                                                            d: 'M79.675 392.052C80.0413 392.13 80.3356 392.314 80.5578 392.602C80.7799 392.884 80.891 393.208 80.891 393.575C80.891 394.103 80.7049 394.523 80.3326 394.836C79.9663 395.142 79.4529 395.295 78.7923 395.295H75.847V388.972H78.6933C79.3358 388.972 79.8372 389.119 80.1975 389.413C80.5638 389.707 80.7469 390.107 80.7469 390.611C80.7469 390.983 80.6478 391.293 80.4497 391.539C80.2575 391.785 79.9993 391.956 79.675 392.052ZM77.3872 391.53H78.396C78.6482 391.53 78.8404 391.476 78.9725 391.368C79.1106 391.254 79.1797 391.089 79.1797 390.872C79.1797 390.656 79.1106 390.491 78.9725 390.377C78.8404 390.263 78.6482 390.206 78.396 390.206H77.3872V391.53ZM78.5221 394.052C78.7803 394.052 78.9785 393.995 79.1166 393.881C79.2607 393.761 79.3328 393.59 79.3328 393.367C79.3328 393.145 79.2577 392.971 79.1076 392.845C78.9635 392.719 78.7623 392.656 78.5041 392.656H77.3872V394.052H78.5221ZM85.7205 394.178H83.3606L82.9823 395.295H81.37L83.6579 388.972H85.4413L87.7291 395.295H86.0988L85.7205 394.178ZM85.3242 392.989L84.5406 390.674L83.7659 392.989H85.3242ZM88.1642 392.124C88.1642 391.5 88.2993 390.944 88.5695 390.458C88.8397 389.966 89.215 389.584 89.6954 389.314C90.1818 389.038 90.7313 388.9 91.3437 388.9C92.0943 388.9 92.7369 389.098 93.2713 389.494C93.8057 389.891 94.163 390.431 94.3431 391.116H92.6498C92.5237 390.851 92.3435 390.65 92.1094 390.512C91.8812 390.374 91.62 390.305 91.3257 390.305C90.8514 390.305 90.467 390.47 90.1728 390.8C89.8786 391.131 89.7315 391.572 89.7315 392.124C89.7315 392.677 89.8786 393.118 90.1728 393.448C90.467 393.779 90.8514 393.944 91.3257 393.944C91.62 393.944 91.8812 393.875 92.1094 393.737C92.3435 393.599 92.5237 393.397 92.6498 393.133H94.3431C94.163 393.818 93.8057 394.358 93.2713 394.754C92.7369 395.145 92.0943 395.34 91.3437 395.34C90.7313 395.34 90.1818 395.205 89.6954 394.935C89.215 394.658 88.8397 394.277 88.5695 393.791C88.2993 393.304 88.1642 392.749 88.1642 392.124ZM98.9523 395.295L96.8266 392.503V395.295H95.2864V388.972H96.8266V391.746L98.9343 388.972H100.745L98.2948 392.07L100.835 395.295H98.9523Z',
                                                            fill: '#9A3AE8',
                                                        },
                                                    ),
                                                ),
                                                el('g', {
                                                        'clip-path': 'url(#filter11_d)',
                                                    },
                                                    el('path', {
                                                            d: 'M560.23 435.769C560.23 429.084 565.649 423.665 572.334 423.665H616.6C623.285 423.665 628.704 429.084 628.704 435.769V435.769C628.704 442.453 623.285 447.872 616.6 447.872H572.334C565.649 447.872 560.23 442.453 560.23 435.769V435.769Z',
                                                            fill: 'url(#paint22_linear)',
                                                        },
                                                    ),
                                                    el('g', {
                                                            'clip-path': 'url(#clip17)',
                                                        },
                                                        el('path', {
                                                                d: 'M583.631 438.769H582.091L579.515 434.869V438.769H577.974V432.446H579.515L582.091 436.364V432.446H583.631V438.769ZM586.288 433.68V434.959H588.35V436.148H586.288V437.535H588.62V438.769H584.747V432.446H588.62V433.68H586.288ZM593.494 438.769L592.205 436.832L591.071 438.769H589.323L591.35 435.553L589.278 432.446H591.071L592.341 434.355L593.457 432.446H595.205L593.196 435.634L595.286 438.769H593.494ZM600.608 432.446V433.68H598.932V438.769H597.392V433.68H595.717V432.446H600.608Z',
                                                                fill: 'white',
                                                            },
                                                        ),
                                                    ),
                                                ),
                                            ),
                                            el('path', {
                                                    d: 'M5 13.5H4.5V14V436.346C4.5 442.145 9.20101 446.846 15 446.846H571.461C577.26 446.846 581.961 442.145 581.961 436.346V14V13.5H581.461H5Z',
                                                    stroke: '#E5E9F0',
                                                },
                                            ),
                                        ),
                                        el('defs', {},
                                            el('filter', {
                                                    id: 'filter0_d',
                                                    x: '0',
                                                    y: '13',
                                                    width: '586.461',
                                                    height: '442.346',
                                                    filterUnits: 'userSpaceOnUse',
                                                    'color-interpolation-filters': 'sRGB'
                                                },
                                                el('feFlood', {
                                                        'flood-opacity': '0',
                                                        'result': 'BackgroundImageFix'
                                                    },
                                                ),
                                                el('feColorMatrix', {
                                                        'in': 'SourceAlpha',
                                                        'type': 'matrix',
                                                        'values': '0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
                                                    },
                                                ),
                                                el('feOffset', {
                                                        'dy': '4',
                                                    },
                                                ),
                                                el('feGaussianBlur', {
                                                        'stdDeviation': '2',
                                                    },
                                                ),
                                                el('feColorMatrix', {
                                                        'type': 'matrix',
                                                        'values': '0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0'
                                                    },
                                                ),
                                                el('feBlend', {
                                                        'mode': 'normal',
                                                        'in2': 'BackgroundImageFix',
                                                        'result': 'effect1_dropShadow',
                                                    },
                                                ),
                                                el('feBlend', {
                                                        'mode': 'normal',
                                                        'in': 'SourceGraphic',
                                                        'in2': 'effect1_dropShadow',
                                                        'result': 'shape',
                                                    },
                                                ),
                                            ),
                                            el('filter', {
                                                    id: 'filter1_d',
                                                    x: '150.366',
                                                    y: '14.2851',
                                                    width: '66.9471',
                                                    height: '32.6439',
                                                    filterUnits: 'userSpaceOnUse',
                                                    'color-interpolation-filters': 'sRGB'
                                                },
                                                el('feFlood', {
                                                        'flood-opacity': '0',
                                                        'result': 'BackgroundImageFix'
                                                    },
                                                ),
                                                el('feColorMatrix', {
                                                        'in': 'SourceAlpha',
                                                        'type': 'matrix',
                                                        'values': '0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
                                                    },
                                                ),
                                                el('feOffset', {
                                                        'dy': '2.2518',
                                                    },
                                                ),
                                                el('feGaussianBlur', {
                                                        'stdDeviation': '4.5036',
                                                    },
                                                ),
                                                el('feColorMatrix', {
                                                        'type': 'matrix',
                                                        'values': '0 0 0 0 0.447059 0 0 0 0 0.447059 0 0 0 0 0.447059 0 0 0 0.13 0'
                                                    },
                                                ),
                                                el('feBlend', {
                                                        'mode': 'normal',
                                                        'in2': 'BackgroundImageFix',
                                                        'result': 'effect1_dropShadow',
                                                    },
                                                ),
                                                el('feBlend', {
                                                        'mode': 'normal',
                                                        'in': 'SourceGraphic',
                                                        'in2': 'effect1_dropShadow',
                                                        'result': 'shape',
                                                    },
                                                ),
                                            ),
                                            el('filter', {
                                                    id: 'filter2_d',
                                                    x: '182.374',
                                                    y: '18.7851',
                                                    width: '28.1845',
                                                    height: '28.1475',
                                                    filterUnits: 'userSpaceOnUse',
                                                    'color-interpolation-filters': 'sRGB'
                                                },
                                                el('feFlood', {
                                                        'flood-opacity': '0',
                                                        'result': 'BackgroundImageFix'
                                                    },
                                                ),
                                                el('feColorMatrix', {
                                                        'in': 'SourceAlpha',
                                                        'type': 'matrix',
                                                        'values': '0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
                                                    },
                                                ),
                                                el('feOffset', {
                                                        'dy': '4.5036',
                                                    },
                                                ),
                                                el('feGaussianBlur', {
                                                        'stdDeviation': '5.62951',
                                                    },
                                                ),
                                                el('feColorMatrix', {
                                                        'type': 'matrix',
                                                        'values': '0 0 0 0 0.184314 0 0 0 0 0.364706 0 0 0 0 0.713726 0 0 0 0.2 0'
                                                    },
                                                ),
                                                el('feBlend', {
                                                        'mode': 'normal',
                                                        'in2': 'BackgroundImageFix',
                                                        'result': 'effect1_dropShadow',
                                                    },
                                                ),
                                                el('feBlend', {
                                                        'mode': 'normal',
                                                        'in': 'SourceGraphic',
                                                        'in2': 'effect1_dropShadow',
                                                        'result': 'shape',
                                                    },
                                                ),
                                            ),
                                            el('filter', {
                                                    id: 'filter3_d',
                                                    x: '269.395',
                                                    y: '14.2851',
                                                    width: '57.0288',
                                                    height: '32.6439',
                                                    filterUnits: 'userSpaceOnUse',
                                                    'color-interpolation-filters': 'sRGB'
                                                },
                                                el('feFlood', {
                                                        'flood-opacity': '0',
                                                        'result': 'BackgroundImageFix'
                                                    },
                                                ),
                                                el('feColorMatrix', {
                                                        'in': 'SourceAlpha',
                                                        'type': 'matrix',
                                                        'values': '0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
                                                    },
                                                ),
                                                el('feOffset', {
                                                        'dy': '2.2518',
                                                    },
                                                ),
                                                el('feGaussianBlur', {
                                                        'stdDeviation': '4.5036',
                                                    },
                                                ),
                                                el('feColorMatrix', {
                                                        'type': 'matrix',
                                                        'values': '0 0 0 0 0.447059 0 0 0 0 0.447059 0 0 0 0 0.447059 0 0 0 0.13 0'
                                                    },
                                                ),
                                                el('feBlend', {
                                                        'mode': 'normal',
                                                        'in2': 'BackgroundImageFix',
                                                        'result': 'effect1_dropShadow',
                                                    },
                                                ),
                                                el('feBlend', {
                                                        'mode': 'normal',
                                                        'in': 'SourceGraphic',
                                                        'in2': 'effect1_dropShadow',
                                                        'result': 'shape',
                                                    },
                                                ),
                                            ),
                                            el('filter', {
                                                    id: 'filter4_d',
                                                    x: '320.231',
                                                    y: '14.2851',
                                                    width: '62.0288',
                                                    height: '32.6439',
                                                    filterUnits: 'userSpaceOnUse',
                                                    'color-interpolation-filters': 'sRGB'
                                                },
                                                el('feFlood', {
                                                        'flood-opacity': '0',
                                                        'result': 'BackgroundImageFix'
                                                    },
                                                ),
                                                el('feColorMatrix', {
                                                        'in': 'SourceAlpha',
                                                        'type': 'matrix',
                                                        'values': '0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
                                                    },
                                                ),
                                                el('feOffset', {
                                                        'dy': '2.2518',
                                                    },
                                                ),
                                                el('feGaussianBlur', {
                                                        'stdDeviation': '4.5036',
                                                    },
                                                ),
                                                el('feColorMatrix', {
                                                        'type': 'matrix',
                                                        'values': '0 0 0 0 0.447059 0 0 0 0 0.447059 0 0 0 0 0.447059 0 0 0 0.13 0'
                                                    },
                                                ),
                                                el('feBlend', {
                                                        'mode': 'normal',
                                                        'in2': 'BackgroundImageFix',
                                                        'result': 'effect1_dropShadow',
                                                    },
                                                ),
                                                el('feBlend', {
                                                        'mode': 'normal',
                                                        'in': 'SourceGraphic',
                                                        'in2': 'effect1_dropShadow',
                                                        'result': 'shape',
                                                    },
                                                ),
                                            ),
                                            el('filter', {
                                                    id: 'filter5_d',
                                                    x: '376.067',
                                                    y: '14.2851',
                                                    width: '60.0288',
                                                    height: '32.6439',
                                                    filterUnits: 'userSpaceOnUse',
                                                    'color-interpolation-filters': 'sRGB'
                                                },
                                                el('feFlood', {
                                                        'flood-opacity': '0',
                                                        'result': 'BackgroundImageFix'
                                                    },
                                                ),
                                                el('feColorMatrix', {
                                                        'in': 'SourceAlpha',
                                                        'type': 'matrix',
                                                        'values': '0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
                                                    },
                                                ),
                                                el('feOffset', {
                                                        'dy': '2.2518',
                                                    },
                                                ),
                                                el('feGaussianBlur', {
                                                        'stdDeviation': '4.5036',
                                                    },
                                                ),
                                                el('feColorMatrix', {
                                                        'type': 'matrix',
                                                        'values': '0 0 0 0 0.447059 0 0 0 0 0.447059 0 0 0 0 0.447059 0 0 0 0.13 0'
                                                    },
                                                ),
                                                el('feBlend', {
                                                        'mode': 'normal',
                                                        'in2': 'BackgroundImageFix',
                                                        'result': 'effect1_dropShadow',
                                                    },
                                                ),
                                                el('feBlend', {
                                                        'mode': 'normal',
                                                        'in': 'SourceGraphic',
                                                        'in2': 'effect1_dropShadow',
                                                        'result': 'shape',
                                                    },
                                                ),
                                            ),
                                            el('filter', {
                                                    id: 'filter6_d',
                                                    x: '115.041',
                                                    y: '125.065',
                                                    width: '105.036',
                                                    height: '241.572',
                                                    filterUnits: 'userSpaceOnUse',
                                                    'color-interpolation-filters': 'sRGB'
                                                },
                                                el('feFlood', {
                                                        'flood-opacity': '0',
                                                        'result': 'BackgroundImageFix'
                                                    },
                                                ),
                                                el('feColorMatrix', {
                                                        'in': 'SourceAlpha',
                                                        'type': 'matrix',
                                                        'values': '0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
                                                    },
                                                ),
                                                el('feOffset', {
                                                        'dy': '7.88131',
                                                    },
                                                ),
                                                el('feGaussianBlur', {
                                                        'stdDeviation': '11.259',
                                                    },
                                                ),
                                                el('feColorMatrix', {
                                                        'type': 'matrix',
                                                        'values': '0 0 0 0 0.447059 0 0 0 0 0.447059 0 0 0 0 0.447059 0 0 0 0.1 0'
                                                    },
                                                ),
                                                el('feBlend', {
                                                        'mode': 'normal',
                                                        'in2': 'BackgroundImageFix',
                                                        'result': 'effect1_dropShadow',
                                                    },
                                                ),
                                                el('feBlend', {
                                                        'mode': 'normal',
                                                        'in': 'SourceGraphic',
                                                        'in2': 'effect1_dropShadow',
                                                        'result': 'shape',
                                                    },
                                                ),
                                            ),
                                            el('filter', {
                                                    id: 'filter7_d',
                                                    x: '185.974',
                                                    y: '125.065',
                                                    width: '105.036',
                                                    height: '241.572',
                                                    filterUnits: 'userSpaceOnUse',
                                                    'color-interpolation-filters': 'sRGB'
                                                },
                                                el('feFlood', {
                                                        'flood-opacity': '0',
                                                        'result': 'BackgroundImageFix'
                                                    },
                                                ),
                                                el('feColorMatrix', {
                                                        'in': 'SourceAlpha',
                                                        'type': 'matrix',
                                                        'values': '0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
                                                    },
                                                ),
                                                el('feOffset', {
                                                        'dy': '7.88131',
                                                    },
                                                ),
                                                el('feGaussianBlur', {
                                                        'stdDeviation': '11.259',
                                                    },
                                                ),
                                                el('feColorMatrix', {
                                                        'type': 'matrix',
                                                        'values': '0 0 0 0 0.447059 0 0 0 0 0.447059 0 0 0 0 0.447059 0 0 0 0.1 0'
                                                    },
                                                ),
                                                el('feBlend', {
                                                        'mode': 'normal',
                                                        'in2': 'BackgroundImageFix',
                                                        'result': 'effect1_dropShadow',
                                                    },
                                                ),
                                                el('feBlend', {
                                                        'mode': 'normal',
                                                        'in': 'SourceGraphic',
                                                        'in2': 'effect1_dropShadow',
                                                        'result': 'shape',
                                                    },
                                                ),
                                            ),
                                            el('filter', {
                                                    id: 'filter8_d',
                                                    x: '256.345',
                                                    y: '125.065',
                                                    width: '105.036',
                                                    height: '241.572',
                                                    filterUnits: 'userSpaceOnUse',
                                                    'color-interpolation-filters': 'sRGB'
                                                },
                                                el('feFlood', {
                                                        'flood-opacity': '0',
                                                        'result': 'BackgroundImageFix'
                                                    },
                                                ),
                                                el('feColorMatrix', {
                                                        'in': 'SourceAlpha',
                                                        'type': 'matrix',
                                                        'values': '0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
                                                    },
                                                ),
                                                el('feOffset', {
                                                        'dy': '7.88131',
                                                    },
                                                ),
                                                el('feGaussianBlur', {
                                                        'stdDeviation': '11.259',
                                                    },
                                                ),
                                                el('feColorMatrix', {
                                                        'type': 'matrix',
                                                        'values': '0 0 0 0 0.447059 0 0 0 0 0.447059 0 0 0 0 0.447059 0 0 0 0.1 0'
                                                    },
                                                ),
                                                el('feBlend', {
                                                        'mode': 'normal',
                                                        'in2': 'BackgroundImageFix',
                                                        'result': 'effect1_dropShadow',
                                                    },
                                                ),
                                                el('feBlend', {
                                                        'mode': 'normal',
                                                        'in': 'SourceGraphic',
                                                        'in2': 'effect1_dropShadow',
                                                        'result': 'shape',
                                                    },
                                                ),
                                            ),
                                            el('filter', {
                                                    id: 'filter9_d',
                                                    x: '327.279',
                                                    y: '125.065',
                                                    width: '105.036',
                                                    height: '241.572',
                                                    filterUnits: 'userSpaceOnUse',
                                                    'color-interpolation-filters': 'sRGB'
                                                },
                                                el('feFlood', {
                                                        'flood-opacity': '0',
                                                        'result': 'BackgroundImageFix'
                                                    },
                                                ),
                                                el('feColorMatrix', {
                                                        'in': 'SourceAlpha',
                                                        'type': 'matrix',
                                                        'values': '0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
                                                    },
                                                ),
                                                el('feOffset', {
                                                        'dy': '7.88131',
                                                    },
                                                ),
                                                el('feGaussianBlur', {
                                                        'stdDeviation': '11.259',
                                                    },
                                                ),
                                                el('feColorMatrix', {
                                                        'type': 'matrix',
                                                        'values': '0 0 0 0 0.447059 0 0 0 0 0.447059 0 0 0 0 0.447059 0 0 0 0.1 0'
                                                    },
                                                ),
                                                el('feBlend', {
                                                        'mode': 'normal',
                                                        'in2': 'BackgroundImageFix',
                                                        'result': 'effect1_dropShadow',
                                                    },
                                                ),
                                                el('feBlend', {
                                                        'mode': 'normal',
                                                        'in': 'SourceGraphic',
                                                        'in2': 'effect1_dropShadow',
                                                        'result': 'shape',
                                                    },
                                                ),
                                            ),
                                            el('filter', {
                                                    id: 'filter10_d',
                                                    x: '397.642',
                                                    y: '125.065',
                                                    width: '105.036',
                                                    height: '241.572',
                                                    filterUnits: 'userSpaceOnUse',
                                                    'color-interpolation-filters': 'sRGB'
                                                },
                                                el('feFlood', {
                                                        'flood-opacity': '0',
                                                        'result': 'BackgroundImageFix'
                                                    },
                                                ),
                                                el('feColorMatrix', {
                                                        'in': 'SourceAlpha',
                                                        'type': 'matrix',
                                                        'values': '0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
                                                    },
                                                ),
                                                el('feOffset', {
                                                        'dy': '7.88131',
                                                    },
                                                ),
                                                el('feGaussianBlur', {
                                                        'stdDeviation': '11.259',
                                                    },
                                                ),
                                                el('feColorMatrix', {
                                                        'type': 'matrix',
                                                        'values': '0 0 0 0 0.447059 0 0 0 0 0.447059 0 0 0 0 0.447059 0 0 0 0.1 0'
                                                    },
                                                ),
                                                el('feBlend', {
                                                        'mode': 'normal',
                                                        'in2': 'BackgroundImageFix',
                                                        'result': 'effect1_dropShadow',
                                                    },
                                                ),
                                                el('feBlend', {
                                                        'mode': 'normal',
                                                        'in': 'SourceGraphic',
                                                        'in2': 'effect1_dropShadow',
                                                        'result': 'shape',
                                                    },
                                                ),
                                            ),
                                            el('filter', {
                                                    id: 'filter11_d',
                                                    x: '552.349',
                                                    y: '419.725',
                                                    width: '84.2357',
                                                    height: '39.9695',
                                                    filterUnits: 'userSpaceOnUse',
                                                    'color-interpolation-filters': 'sRGB'
                                                },
                                                el('feFlood', {
                                                        'flood-opacity': '0',
                                                        'result': 'BackgroundImageFix'
                                                    },
                                                ),
                                                el('feColorMatrix', {
                                                        'in': 'SourceAlpha',
                                                        'type': 'matrix',
                                                        'values': '0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
                                                    },
                                                ),
                                                el('feOffset', {
                                                        'dy': '3.94065',
                                                    },
                                                ),
                                                el('feGaussianBlur', {
                                                        'stdDeviation': '3.94065',
                                                    },
                                                ),
                                                el('feColorMatrix', {
                                                        'type': 'matrix',
                                                        'values': '0 0 0 0 0.600377 0 0 0 0 0.238281 0 0 0 0 0.9375 0 0 0 0.2 0'
                                                    },
                                                ),
                                                el('feBlend', {
                                                        'mode': 'normal',
                                                        'in2': 'BackgroundImageFix',
                                                        'result': 'effect1_dropShadow',
                                                    },
                                                ),
                                                el('feBlend', {
                                                        'mode': 'normal',
                                                        'in': 'SourceGraphic',
                                                        'in2': 'effect1_dropShadow',
                                                        'result': 'shape',
                                                    },
                                                ),
                                            ),
                                            el('linearGradient', {
                                                    id: 'paint0_linear',
                                                    x1: '12.3145',
                                                    y1: '21.897',
                                                    x2: '25.1791',
                                                    y2: '21.6899',
                                                    gradientUnits: 'userSpaceOnUse'
                                                },
                                                el('stop', {
                                                        'stop-color': '#AF56F5'
                                                    },
                                                ),
                                                el('stop', {
                                                        offset: '1',
                                                        'stop-color': '#9847FF'
                                                    },
                                                ),
                                            ),
                                            el('linearGradient', {
                                                    id: 'paint1_linear',
                                                    x1: '41.9727',
                                                    y1: '23.0073',
                                                    x2: '52.0783',
                                                    y2: '22.8456',
                                                    gradientUnits: 'userSpaceOnUse'
                                                },
                                                el('stop', {
                                                        'stop-color': '#AF56F5'
                                                    },
                                                ),
                                                el('stop', {
                                                        offset: '1',
                                                        'stop-color': '#9847FF'
                                                    },
                                                ),
                                            ),
                                            el('linearGradient', {
                                                    id: 'paint2_linear',
                                                    x1: '69.5488',
                                                    y1: '23.0073',
                                                    x2: '80.8539',
                                                    y2: '22.8047',
                                                    gradientUnits: 'userSpaceOnUse'
                                                },
                                                el('stop', {
                                                        'stop-color': '#AF56F5'
                                                    },
                                                ),
                                                el('stop', {
                                                        offset: '1',
                                                        'stop-color': '#9847FF'
                                                    },
                                                ),
                                            ),
                                            el('linearGradient', {
                                                    id: 'paint3_linear',
                                                    x1: '505.273',
                                                    y1: '22.4443',
                                                    x2: '516.502',
                                                    y2: '22.2647',
                                                    gradientUnits: 'userSpaceOnUse'
                                                },
                                                el('stop', {
                                                        'stop-color': '#AF56F5'
                                                    },
                                                ),
                                                el('stop', {
                                                        offset: '1',
                                                        'stop-color': '#9847FF'
                                                    },
                                                ),
                                            ),
                                            el('linearGradient', {
                                                    id: 'paint4_linear',
                                                    x1: '532.85',
                                                    y1: '25.259',
                                                    x2: '545.078',
                                                    y2: '24.8489',
                                                    gradientUnits: 'userSpaceOnUse'
                                                },
                                                el('stop', {
                                                        'stop-color': '#AF56F5'
                                                    },
                                                ),
                                                el('stop', {
                                                        offset: '1',
                                                        'stop-color': '#9847FF'
                                                    },
                                                ),
                                            ),
                                            el('linearGradient', {
                                                    id: 'paint5_linear',
                                                    x1: '560.998',
                                                    y1: '22.4443',
                                                    x2: '573.909',
                                                    y2: '22.1861',
                                                    gradientUnits: 'userSpaceOnUse'
                                                },
                                                el('stop', {
                                                        'stop-color': '#AF56F5'
                                                    },
                                                ),
                                                el('stop', {
                                                        offset: '1',
                                                        'stop-color': '#9847FF'
                                                    },
                                                ),
                                            ),
                                            el('linearGradient', {
                                                    id: 'paint6_linear',
                                                    x1: '193.633',
                                                    y1: '25.5405',
                                                    x2: '199.208',
                                                    y2: '25.4519',
                                                    gradientUnits: 'userSpaceOnUse'
                                                },
                                                el('stop', {
                                                        'stop-color': '#AF56F5'
                                                    },
                                                ),
                                                el('stop', {
                                                        offset: '1',
                                                        'stop-color': '#9847FF'
                                                    },
                                                ),
                                            ),
                                            el('linearGradient', {
                                                    id: 'paint7_linear',
                                                    x1: '219.566',
                                                    y1: '21.0405',
                                                    x2: '265.72',
                                                    y2: '18.6991',
                                                    gradientUnits: 'userSpaceOnUse'
                                                },
                                                el('stop', {
                                                        'stop-color': '#A055FF'
                                                    },
                                                ),
                                                el('stop', {
                                                        offset: '1',
                                                        'stop-color': '#A83BDB'
                                                    },
                                                ),
                                            ),
                                            el('linearGradient', {
                                                    id: 'paint8_linear',
                                                    x1: '151.084',
                                                    y1: '310.261',
                                                    x2: '183.152',
                                                    y2: '309.139',
                                                    gradientUnits: 'userSpaceOnUse'
                                                },
                                                el('stop', {
                                                        'stop-color': '#A055FF'
                                                    },
                                                ),
                                                el('stop', {
                                                        offset: '1',
                                                        'stop-color': '#A83BDB'
                                                    },
                                                ),
                                            ),
                                            el('linearGradient', {
                                                    id: 'paint9_linear',
                                                    x1: '222.018',
                                                    y1: '310.261',
                                                    x2: '254.086',
                                                    y2: '309.139',
                                                    gradientUnits: 'userSpaceOnUse'
                                                },
                                                el('stop', {
                                                        'stop-color': '#A055FF'
                                                    },
                                                ),
                                                el('stop', {
                                                        offset: '1',
                                                        'stop-color': '#A83BDB'
                                                    },
                                                ),
                                            ),
                                            el('linearGradient', {
                                                    id: 'paint10_linear',
                                                    x1: '292.389',
                                                    y1: '310.261',
                                                    x2: '324.457',
                                                    y2: '309.139',
                                                    gradientUnits: 'userSpaceOnUse'
                                                },
                                                el('stop', {
                                                        'stop-color': '#A055FF'
                                                    },
                                                ),
                                                el('stop', {
                                                        offset: '1',
                                                        'stop-color': '#A83BDB'
                                                    },
                                                ),
                                            ),
                                            el('linearGradient', {
                                                    id: 'paint11_linear',
                                                    x1: '363.322',
                                                    y1: '310.261',
                                                    x2: '395.391',
                                                    y2: '309.139',
                                                    gradientUnits: 'userSpaceOnUse'
                                                },
                                                el('stop', {
                                                        'stop-color': '#A055FF'
                                                    },
                                                ),
                                                el('stop', {
                                                        offset: '1',
                                                        'stop-color': '#A83BDB'
                                                    },
                                                ),
                                            ),
                                            el('linearGradient', {
                                                    id: 'paint12_linear',
                                                    x1: '444.365',
                                                    y1: '197.671',
                                                    x2: '453.78',
                                                    y2: '197.459',
                                                    gradientUnits: 'userSpaceOnUse'
                                                },
                                                el('stop', {
                                                        'stop-color': '#AF56F5'
                                                    },
                                                ),
                                                el('stop', {
                                                        offset: '1',
                                                        'stop-color': '#9847FF'
                                                    },
                                                ),
                                            ),
                                            el('linearGradient', {
                                                    id: 'paint13_linear',
                                                    x1: '444.365',
                                                    y1: '226.382',
                                                    x2: '453.78',
                                                    y2: '226.17',
                                                    gradientUnits: 'userSpaceOnUse'
                                                },
                                                el('stop', {
                                                        'stop-color': '#AF56F5'
                                                    },
                                                ),
                                                el('stop', {
                                                        offset: '1',
                                                        'stop-color': '#9847FF'
                                                    },
                                                ),
                                            ),
                                            el('linearGradient', {
                                                    id: 'paint14_linear',
                                                    x1: '452.529',
                                                    y1: '230.885',
                                                    x2: '453.637',
                                                    y2: '230.881',
                                                    gradientUnits: 'userSpaceOnUse'
                                                },
                                                el('stop', {
                                                        'stop-color': '#AF56F5'
                                                    },
                                                ),
                                                el('stop', {
                                                        offset: '1',
                                                        'stop-color': '#9847FF'
                                                    },
                                                ),
                                            ),
                                            el('linearGradient', {
                                                    id: 'paint15_linear',
                                                    x1: '450.559',
                                                    y1: '233.981',
                                                    x2: '451.667',
                                                    y2: '233.978',
                                                    gradientUnits: 'userSpaceOnUse'
                                                },
                                                el('stop', {
                                                        'stop-color': '#AF56F5'
                                                    },
                                                ),
                                                el('stop', {
                                                        offset: '1',
                                                        'stop-color': '#9847FF'
                                                    },
                                                ),
                                            ),
                                            el('linearGradient', {
                                                    id: 'paint16_linear',
                                                    x1: '444.365',
                                                    y1: '256.781',
                                                    x2: '453.78',
                                                    y2: '256.569',
                                                    gradientUnits: 'userSpaceOnUse'
                                                },
                                                el('stop', {
                                                        'stop-color': '#AF56F5'
                                                    },
                                                ),
                                                el('stop', {
                                                        offset: '1',
                                                        'stop-color': '#9847FF'
                                                    },
                                                ),
                                            ),
                                            el('linearGradient', {
                                                    id: 'paint17_linear',
                                                    x1: '449.996',
                                                    y1: '261.284',
                                                    x2: '456.089',
                                                    y2: '261.188',
                                                    gradientUnits: 'userSpaceOnUse'
                                                },
                                                el('stop', {
                                                        'stop-color': '#AF56F5'
                                                    },
                                                ),
                                                el('stop', {
                                                        offset: '1',
                                                        'stop-color': '#9847FF'
                                                    },
                                                ),
                                            ),
                                            el('linearGradient', {
                                                    id: 'paint18_linear',
                                                    x1: '444.365',
                                                    y1: '287.18',
                                                    x2: '453.78',
                                                    y2: '286.968',
                                                    gradientUnits: 'userSpaceOnUse'
                                                },
                                                el('stop', {
                                                        'stop-color': '#AF56F5'
                                                    },
                                                ),
                                                el('stop', {
                                                        offset: '1',
                                                        'stop-color': '#9847FF'
                                                    },
                                                ),
                                            ),
                                            el('linearGradient', {
                                                    id: 'paint19_linear',
                                                    x1: '449.996',
                                                    y1: '291.684',
                                                    x2: '456.089',
                                                    y2: '291.588',
                                                    gradientUnits: 'userSpaceOnUse'
                                                },
                                                el('stop', {
                                                        'stop-color': '#AF56F5'
                                                    },
                                                ),
                                                el('stop', {
                                                        offset: '1',
                                                        'stop-color': '#9847FF'
                                                    },
                                                ),
                                            ),
                                            el('linearGradient', {
                                                    id: 'paint20_linear',
                                                    x1: '430.186',
                                                    y1: '310.261',
                                                    x2: '469.112',
                                                    y2: '308.607',
                                                    gradientUnits: 'userSpaceOnUse'
                                                },
                                                el('stop', {
                                                        'stop-color': '#AF56F5'
                                                    },
                                                ),
                                                el('stop', {
                                                        offset: '1',
                                                        'stop-color': '#9847FF'
                                                    },
                                                ),
                                            ),
                                            el('linearGradient', {
                                                    id: 'paint21_linear',
                                                    x1: '47.5625',
                                                    y1: '380.191',
                                                    x2: '116.777',
                                                    y2: '377.01',
                                                    gradientUnits: 'userSpaceOnUse'
                                                },
                                                el('stop', {
                                                        'stop-color': '#A055FF'
                                                    },
                                                ),
                                                el('stop', {
                                                        offset: '1',
                                                        'stop-color': '#A83BDB'
                                                    },
                                                ),
                                            ),
                                            el('linearGradient', {
                                                    id: 'paint22_linear',
                                                    x1: '560.23',
                                                    y1: '423.665',
                                                    x2: '627.489',
                                                    y2: '420.662',
                                                    gradientUnits: 'userSpaceOnUse'
                                                },
                                                el('stop', {
                                                        'stop-color': '#AF56F5'
                                                    },
                                                ),
                                                el('stop', {
                                                        offset: '1',
                                                        'stop-color': '#9847FF'
                                                    },
                                                ),
                                            ),
                                            el('clipPath', {
                                                    id: 'clip0',
                                                },
                                                el('path', {
                                                        d: 'M5 14H581.461V436.346C581.461 441.869 576.984 446.346 571.461 446.346H15C9.47715 446.346 5 441.869 5 436.346V14Z',
                                                        fill: 'white',
                                                    },
                                                ),
                                            ),
                                            el('clipPath', {
                                                    id: 'clip1',
                                                },
                                                el('rect', {
                                                        width: '13.6938',
                                                        height: '13.5108',
                                                        fill: 'white',
                                                        transform: 'translate(12.1133 21.3184)',
                                                    },
                                                ),
                                            ),
                                            el('clipPath', {
                                                    id: 'clip2',
                                                },
                                                el('rect', {
                                                        width: '13.6938',
                                                        height: '13.5108',
                                                        fill: 'white',
                                                        transform: 'translate(532.279 21.3184)',
                                                    },
                                                ),
                                            ),
                                            el('clipPath', {
                                                    id: 'clip3',
                                                },
                                                el('rect', {
                                                        width: '13.6938',
                                                        height: '13.5108',
                                                        fill: 'white',
                                                        transform: 'translate(560.426 21.3184)',
                                                    },
                                                ),
                                            ),
                                            el('clipPath', {
                                                    id: 'clip4',
                                                },
                                                el('rect', {
                                                        width: '30.9183',
                                                        height: '9',
                                                        fill: 'white',
                                                        transform: 'translate(168.381 23.8552)',
                                                    },
                                                ),
                                            ),
                                            el('clipPath', {
                                                    id: 'clip5',
                                                },
                                                el('rect', {
                                                        width: '3.3777',
                                                        height: '3.3777',
                                                        fill: 'white',
                                                        transform: 'translate(194.758 26.6665)',
                                                    },
                                                ),
                                            ),
                                            el('clipPath', {
                                                    id: 'clip6',
                                                },
                                                el('rect', {
                                                        width: '29',
                                                        height: '9',
                                                        fill: 'white',
                                                        transform: 'translate(228.574 23.8552)',
                                                    },
                                                ),
                                            ),
                                            el('clipPath', {
                                                    id: 'clip7',
                                                },
                                                el('rect', {
                                                        width: '29',
                                                        height: '9',
                                                        fill: 'white',
                                                        transform: 'translate(287.41 23.8552)',
                                                    },
                                                ),
                                            ),
                                            el('clipPath', {
                                                    id: 'clip8',
                                                },
                                                el('rect', {
                                                        width: '26',
                                                        height: '9',
                                                        fill: 'white',
                                                        transform: 'translate(338.246 23.8552)',
                                                    },
                                                ),
                                            ),
                                            el('clipPath', {
                                                    id: 'clip9',
                                                },
                                                el('rect', {
                                                        width: '24',
                                                        height: '9',
                                                        fill: 'white',
                                                        transform: 'translate(394.082 23.8552)',
                                                    },
                                                ),
                                            ),
                                            el('clipPath', {
                                                    id: 'clip10',
                                                },
                                                el('rect', {
                                                        width: '21',
                                                        height: '6',
                                                        fill: 'white',
                                                        transform: 'translate(156.895 314.62)',
                                                    },
                                                ),
                                            ),
                                            el('clipPath', {
                                                    id: 'clip11',
                                                },
                                                el('rect', {
                                                        width: '21',
                                                        height: '6',
                                                        fill: 'white',
                                                        transform: 'translate(227.828 314.62)',
                                                    },
                                                ),
                                            ),
                                            el('clipPath', {
                                                    id: 'clip12',
                                                },
                                                el('rect', {
                                                        width: '21',
                                                        height: '6',
                                                        fill: 'white',
                                                        transform: 'translate(298.199 314.62)',
                                                    },
                                                ),
                                            ),
                                            el('clipPath', {
                                                    id: 'clip13',
                                                },
                                                el('rect', {
                                                        width: '21',
                                                        height: '6',
                                                        fill: 'white',
                                                        transform: 'translate(369.133 314.62)',
                                                    },
                                                ),
                                            ),
                                            el('clipPath', {
                                                    id: 'clip14',
                                                },
                                                el('rect', {
                                                        width: '28',
                                                        height: '6',
                                                        fill: 'white',
                                                        transform: 'translate(435.996 314.62)',
                                                    },
                                                ),
                                            ),
                                            el('clipPath', {
                                                    id: 'clip15',
                                                },
                                                el('rect', {
                                                        width: '48.0384',
                                                        height: '1.68885',
                                                        fill: 'white',
                                                        transform: 'translate(5 444.606)',
                                                    },
                                                ),
                                            ),
                                            el('clipPath', {
                                                    id: 'clip16',
                                                },
                                                el('rect', {
                                                        width: '47.9551',
                                                        height: '14.0738',
                                                        fill: 'white',
                                                        transform: 'translate(58.8223 385.258)',
                                                    },
                                                ),
                                            ),
                                            el('clipPath', {
                                                    id: 'clip17',
                                                },
                                                el('rect', {
                                                        width: '45.9551',
                                                        height: '14.0738',
                                                        fill: 'white',
                                                        transform: 'translate(571.49 428.732)',
                                                    },
                                                ),
                                            ),
                                        ),
                                    ),
                                    el(RichText.Content, {
                                        className: 'image-pos small',
                                        tagName: 'img',
                                        alt: 'customizable',
                                        src: '/wp-content/themes/opticore/src/img/custom/11.png',
                                    }),
                                    el(RichText.Content, {
                                        id: 'customizable__logo__1',
                                        className: 'svg-click customizable__image active optivision',
                                        tagName: 'img',
                                        alt: 'customizable',
                                        src: attributes.mediaURLLogo1,
                                    }),
                                    el(RichText.Content, {
                                        id: 'customizable__logo__2',
                                        className: 'svg-click customizable__image glaslandia',
                                        tagName: 'img',
                                        alt: 'customizable',
                                        src: attributes.mediaURLLogo2,
                                    }),
                                    el(RichText.Content, {
                                        id: 'customizable__logo__3',
                                        className: 'svg-click customizable__image lenz',
                                        tagName: 'img',
                                        alt: 'customizable',
                                        src: attributes.mediaURLLogo3,
                                    }),
                                    el(RichText.Content, {
                                        id: 'customizable__logo__4',
                                        className: 'svg-click customizable__image optican',
                                        tagName: 'img',
                                        alt: 'customizable',
                                        src: attributes.mediaURLLogo4,
                                    }),
                                ),
                                el('div', {
                                        className: 'customizable__info',
                                    },
                                    el(RichText.Content, {
                                        id: 'customizable__subtitle--tab2',
                                        tagName: 'h2',
                                        value: attributes.subtitleTab2
                                    }),
                                    el(RichText.Content, {
                                        id: 'customizable__text--tab2',
                                        tagName: 'p',
                                        value: attributes.textTab2
                                    }),
                                ),

                                el('div', {
                                        className: 'customizable__circles',
                                    },
                                    el('div', {
                                            className: 'customizable__circle customizable__circle--one',
                                        },
                                        el(RichText.Content, {
                                            tagName: 'img',
                                            alt: 'customizable',
                                            src: attributes.mediaURLLogo1,
                                        }),
                                        el('div', {
                                                className: 'checkmark active',
                                            },
                                            el('svg', {
                                                    width: '15',
                                                    height: '12',
                                                    viewBox: '0 0 15 12',
                                                    fill: 'none',
                                                },
                                                el('path', {
                                                        d: 'M1 5L6 9L13 1',
                                                        stroke: 'rgb(152, 71, 255)',
                                                        'stroke-width': '3'
                                                    },
                                                ),
                                            ),
                                        ),
                                    ),
                                    el('div', {
                                            className: 'customizable__circle customizable__circle--second',
                                        },
                                        el(RichText.Content, {
                                            tagName: 'img',
                                            alt: 'customizable',
                                            src: attributes.mediaURLLogo2,
                                        }),
                                        el('div', {
                                                className: 'checkmark',
                                            },
                                            el('svg', {
                                                    width: '15',
                                                    height: '12',
                                                    viewBox: '0 0 15 12',
                                                    fill: 'none',
                                                },
                                                el('path', {
                                                        d: 'M1 5L6 9L13 1',
                                                        stroke: 'rgb(152, 71, 255)',
                                                        'stroke-width': '3'
                                                    },
                                                ),
                                            ),
                                        ),
                                    ),
                                    el('div', {
                                            className: 'customizable__circle customizable__circle--three',
                                        },
                                        el(RichText.Content, {
                                            tagName: 'img',
                                            alt: 'customizable',
                                            src: attributes.mediaURLLogo3,
                                        }),
                                        el('div', {
                                                className: 'checkmark',
                                            },
                                            el('svg', {
                                                    width: '15',
                                                    height: '12',
                                                    viewBox: '0 0 15 12',
                                                    fill: 'none',
                                                },
                                                el('path', {
                                                        d: 'M1 5L6 9L13 1',
                                                        stroke: 'rgb(152, 71, 255)',
                                                        'stroke-width': '3'
                                                    },
                                                ),
                                            ),
                                        ),
                                    ),
                                    el('div', {
                                            className: 'customizable__circle customizable__circle--four',
                                        },
                                        el(RichText.Content, {
                                            tagName: 'img',
                                            alt: 'customizable',
                                            src: attributes.mediaURLLogo4,
                                        }),
                                        el('div', {
                                                className: 'checkmark',
                                            },
                                            el('svg', {
                                                    width: '15',
                                                    height: '12',
                                                    viewBox: '0 0 15 12',
                                                    fill: 'none',
                                                },
                                                el('path', {
                                                        d: 'M1 5L6 9L13 1',
                                                        stroke: 'rgb(152, 71, 255)',
                                                        'stroke-width': '3'
                                                    },
                                                ),
                                            ),
                                        ),
                                    ),
                                ),
                            ),
                        ),
                        el('div', {
                                className: 'customizable__item',
                            },
                            el('div', {
                                    className: 'customizable__row',
                                },
                                el('div', {
                                        className: 'customizable__photo',
                                    },
                                    el(RichText.Content, {
                                        id: 'customizable__content',
                                        tagName: 'img',
                                        alt: 'customizable',
                                        src: attributes.mediaURL,
                                    }),
                                    el(RichText.Content, {
                                        tagName: 'img',
                                        alt: 'customizable',
                                        src: '/wp-content/themes/opticore/src/img/custom/33.png',
                                    }),
                                ),
                                el('div', {
                                        className: 'customizable__info',
                                    },
                                    el(RichText.Content, {
                                        id: 'customizable__subtitle--tab3',
                                        tagName: 'h2',
                                        value: attributes.subtitleTab3
                                    }),
                                    el(RichText.Content, {
                                        id: 'customizable__text--tab3',
                                        tagName: 'p',
                                        value: attributes.textTab3
                                    }),
                                ),
                            ),
                        ),
                    ),
                ),
            );
        }
    });

})(window.wp.components, window.wp.element);
