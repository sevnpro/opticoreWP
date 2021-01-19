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
            mediaIDLogoStandart: {
                type: 'number'
            },
            mediaURLLogoStandart: {
                type: 'string',
                source: 'attribute',
                selector: '#customizable__logo__standart',
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
            var onSelectImageLogoStandart = function (media) {
                return props.setAttributes({
                    mediaURLLogoStandart: media.url,
                    mediaIDLogoStandart: media.id
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
                                    onSelect: onSelectImageLogoStandart,
                                    type: 'image',
                                    render: function (obj) {
                                        let imageLink = attributes.mediaURLLogoStandart ? attributes.mediaURLLogoStandart : '/wp-content/themes/opticore/gutenberg/no-image.png';
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
                                    el(RichText.Content, {
                                        id: 'customizable__logo__standart',
                                        className: 'image-SVG--bg',
                                        tagName: 'img',
                                        alt: 'customizable',
                                        src: attributes.mediaURLLogoStandart,
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
