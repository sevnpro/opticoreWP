(function (components, element) {
    const registerBlockType = wp.blocks.registerBlockType;
    const el = element.createElement;
    const {RichText, MediaUpload} = wp.blockEditor;

    const icon = el('svg', {width: 24, height: 24, viewBox: '0 0 24 24'},
        el('path', {d: 'M12.18 2.25L1 12.103s.69 1.272 2.193 0l8.987-7.608 8.427 7.56c1.74 1.256 2.393 0 2.393 0zm6.056 2.227l.008 2.63 2.16 1.83v-4.46zm-6.123 1.45L3.99 12.736v8.523s-.02.492.46.492l5.545-.006.008-4.545s-.078-.75.65-.75h2.3c.86 0 .806.75.806.75l-.01 4.53h5.43c.6 0 .582-.613.582-.613v-8.38z'})
    );

    registerBlockType('home/started', {
        title: 'Started screen',
        description: 'Started screen.',
        icon: icon,
        category: 'home-page',
        keywords: ['Started screen'],
        attributes: {
            subtitle: {
                type: 'string',
                source: 'html',
                selector: '#started__subtitle'
            },
            title: {
                type: 'string',
                source: 'html',
                selector: '#started__title'
            },
            link: {
                type: 'string',
                source: 'attribute',
                selector: '#started__link',
                attribute: 'href'
            },
            button: {
                type: 'string',
                source: 'html',
                selector: '#started__btn',
            },
        },

        //Example function
        example: () => {
        },

        //Edit function
        edit: function (props) {
            let attributes = props.attributes;

            //Block content
            return [
                el('div', {className: props.className},
                    el('div', {className: 'experience-section'},
                        el(RichText, {
                            tagName: 'p',
                            placeholder: 'Subtitle...',
                            keepPlaceholderOnFocus: true,
                            value: attributes.subtitle,
                            allowedFormats: [],
                            onChange: function (subtitle) {
                                props.setAttributes({subtitle: subtitle});
                            }
                        }),
                        el(RichText, {
                            tagName: 'p',
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
                            placeholder: 'Link...',
                            keepPlaceholderOnFocus: true,
                            value: attributes.link,
                            allowedFormats: [],
                            onChange: function (link) {
                                props.setAttributes({link: link});
                            }
                        }),
                        el(RichText, {
                            tagName: 'p',
                            placeholder: 'Button text...',
                            keepPlaceholderOnFocus: true,
                            value: attributes.button,
                            allowedFormats: [],
                            onChange: function (button) {
                                props.setAttributes({button: button});
                            }
                        }),
                    )
                )
            ];
        },

        //Save function
        save: function (props) {

            let attributes = props.attributes;

            //Blocks section
            return el('section', {className: 'started'},
                el('div', {className: 'container'},
                    el('div', {className: 'started__circle anim-part'},
                        el(RichText.Content, {
                            id: 'started__subtitle',
                            className: 'title started__title',
                            tagName: 'h2',
                            value: attributes.subtitle
                        }),
                        el(RichText.Content, {
                            id: 'started__title',
                            tagName: 'p',
                            value: attributes.title
                        }),
                        el('a', {
                                id: 'started__link',
                                className: 'btn js-ripple',
                                href: attributes.link,
                            },
                            el(RichText.Content, {
                                id: 'started__btn',
                                tagName: 'span',
                                value: attributes.button
                            }),
                            el('svg', {
                                    width: '25',
                                    height: '25',
                                    viewBox: '0 0 25 25',
                                    fill: 'none',
                                },
                                el('path', {
                                    d: 'M9.79289 6.79289C10.1834 6.40237 10.8166 6.40237 11.2071 6.79289L16.2071 11.7929C16.5976 12.1834 16.5976 12.8166 16.2071 13.2071L11.2071 18.2071C10.8166 18.5976 10.1834 18.5976 9.79289 18.2071C9.40237 17.8166 9.40237 17.1834 9.79289 16.7929L14.0858 12.5L9.79289 8.20711C9.40237 7.81658 9.40237 7.18342 9.79289 6.79289Z',
                                    fill: '#1B84F9',
                                },),
                            ),
                        ),
                    ),
                    el(RichText.Content, {
                        className: 'started__decor started__decor--one',
                        tagName: 'img',
                        alt: 'started',
                        src: '/wp-content/themes/opticore/src/img/started/1.svg',
                    }),
                    el(RichText.Content, {
                        className: 'started__decor started__decor--two',
                        tagName: 'img',
                        alt: 'started',
                        src: '/wp-content/themes/opticore/src/img/started/2.svg',
                    }),
                    el(RichText.Content, {
                        className: 'started__decor started__decor--three',
                        tagName: 'img',
                        alt: 'started',
                        src: '/wp-content/themes/opticore/src/img/started/3.svg',
                    }),
                    el(RichText.Content, {
                        className: 'started__decor started__decor--four',
                        tagName: 'img',
                        alt: 'started',
                        src: '/wp-content/themes/opticore/src/img/started/4.svg',
                    }),
                    el(RichText.Content, {
                        className: 'started__decor started__decor--five',
                        tagName: 'img',
                        alt: 'started',
                        src: '/wp-content/themes/opticore/src/img/started/5.svg',
                    }),
                    el(RichText.Content, {
                        className: 'started__decor started__decor--six',
                        tagName: 'img',
                        alt: 'started',
                        src: '/wp-content/themes/opticore/src/img/started/6.svg',
                    }),
                    el(RichText.Content, {
                        className: 'started__decor started__decor--seven',
                        tagName: 'img',
                        alt: 'started',
                        src: '/wp-content/themes/opticore/src/img/started/7.svg',
                    }),
                    el(RichText.Content, {
                        className: 'started__decor started__decor--eight',
                        tagName: 'img',
                        alt: 'started',
                        src: '/wp-content/themes/opticore/src/img/started/8.svg',
                    }),
                    el(RichText.Content, {
                        className: 'started__decor started__decor--nine',
                        tagName: 'img',
                        alt: 'started',
                        src: '/wp-content/themes/opticore/src/img/started/9.svg',
                    }),
                    el(RichText.Content, {
                        className: 'started__decor started__decor--ten',
                        tagName: 'img',
                        alt: 'started',
                        src: '/wp-content/themes/opticore/src/img/started/10.svg',
                    }),
                    el(RichText.Content, {
                        className: 'started__decor started__decor--eleven',
                        tagName: 'img',
                        alt: 'started',
                        src: '/wp-content/themes/opticore/src/img/started/11.svg',
                    }),
                ),
            );
        }
    });

})(window.wp.components, window.wp.element);
