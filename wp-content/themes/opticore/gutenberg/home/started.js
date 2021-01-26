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
                        el('svg', {
                                className: 'started__hand',
                                width: '538',
                                height: '303',
                                viewBox: '0 0 538 303',
                                fill: 'none',
                            },
                            el('path', {
                                d: 'M203.132 0.422963L201.353 0.390518C181.202 0.0231326 164.573 16.0561 164.206 36.2071L163.048 99.6794C162.681 119.83 146.053 135.863 125.902 135.496L124.122 135.464C103.971 135.096 87.938 118.468 88.3054 98.3167L88.5866 82.8935C88.954 62.7426 72.921 46.1141 52.77 45.7467L50.9904 45.7142C30.8394 45.3468 14.2109 61.3799 13.8436 81.5308L0.303205 824.216C-0.0641802 844.367 15.9688 860.995 36.1198 861.363L37.8994 861.395C58.0504 861.763 74.6789 845.729 75.0463 825.579L75.5654 797.105C75.9328 776.954 92.5613 760.921 112.712 761.288L114.492 761.321C134.643 761.688 150.676 778.317 150.308 798.468L149.93 819.23C149.563 839.381 165.596 856.009 185.747 856.376L187.526 856.409C207.677 856.776 224.306 840.743 224.673 820.592L224.738 817.033C225.105 796.882 241.734 780.849 261.885 781.216L263.664 781.249C283.815 781.616 299.848 798.245 299.481 818.396L298.746 858.733C298.378 878.884 314.411 895.513 334.562 895.88L336.342 895.913C356.493 896.28 373.121 880.247 373.489 860.096L373.835 841.114C374.202 820.963 390.831 804.93 410.981 805.297L412.761 805.329C432.912 805.697 448.945 822.325 448.578 842.476L448.123 867.391C447.756 887.542 463.789 904.17 483.94 904.538L485.72 904.57C505.871 904.937 522.499 888.904 522.867 868.753L537.142 85.7309C537.51 65.5799 521.477 48.9514 501.326 48.584L499.546 48.5516C479.395 48.1842 462.767 64.2172 462.399 84.3682L461.848 114.621C461.48 134.772 444.852 150.805 424.701 150.438L422.921 150.406C402.77 150.038 386.737 133.41 387.105 113.259L387.559 88.3443C387.926 68.1933 371.893 51.5648 351.742 51.1974L349.963 51.165C329.812 50.7976 313.183 66.8306 312.816 86.9816C312.448 107.133 295.82 123.166 275.669 122.798L273.889 122.766C253.738 122.398 237.705 105.77 238.073 85.6189L238.949 37.5698C239.316 17.4188 223.283 0.790347 203.132 0.422963Z',
                                fill: 'white',
                                'fill-opacity': '0.1'
                            },),
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
