(function (components, element) {
    const registerBlockType = wp.blocks.registerBlockType;
    const el = element.createElement;
    const {RichText, MediaUpload} = wp.blockEditor;

    const icon = el('svg', {width: 24, height: 24, viewBox: '0 0 24 24'},
        el('path', {d: 'M12.18 2.25L1 12.103s.69 1.272 2.193 0l8.987-7.608 8.427 7.56c1.74 1.256 2.393 0 2.393 0zm6.056 2.227l.008 2.63 2.16 1.83v-4.46zm-6.123 1.45L3.99 12.736v8.523s-.02.492.46.492l5.545-.006.008-4.545s-.078-.75.65-.75h2.3c.86 0 .806.75.806.75l-.01 4.53h5.43c.6 0 .582-.613.582-.613v-8.38z'})
    );

    registerBlockType('home/experience', {
        title: 'Experience screen',
        description: 'Experience screen.',
        icon: icon,
        category: 'home-page',
        keywords: ['experience screen'],
        attributes: {
            icon_1: {
                type: 'string',
                source: 'html',
                selector: '#preferences__item_1'
            },
            icon_2: {
                type: 'string',
                source: 'html',
                selector: '#preferences__item_2'
            },
            icon_3: {
                type: 'string',
                source: 'html',
                selector: '#preferences__item_3'
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
                            placeholder: 'Icon title...',
                            keepPlaceholderOnFocus: true,
                            value: attributes.icon_1,
                            allowedFormats: [],
                            onChange: function (icon_1) {
                                props.setAttributes({icon_1: icon_1});
                            }
                        }),
                        el(RichText, {
                            tagName: 'p',
                            placeholder: 'Icon title...',
                            keepPlaceholderOnFocus: true,
                            value: attributes.icon_2,
                            allowedFormats: [],
                            onChange: function (icon_2) {
                                props.setAttributes({icon_2: icon_2});
                            }
                        }),
                        el(RichText, {
                            tagName: 'p',
                            placeholder: 'Icon title...',
                            keepPlaceholderOnFocus: true,
                            value: attributes.icon_3,
                            allowedFormats: [],
                            onChange: function (icon_3) {
                                props.setAttributes({icon_3: icon_3});
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
            return el('section', {className: 'preferences'},
                el('div', {className: 'container'},
                    el('div', {className: 'preferences__item'},
                        el('div', {className: 'preferences__circle'},
                            el(RichText.Content, {
                                tagName: 'img',
                                alt: 'preferences',
                                src: '/wp-content/themes/opticore/src/img/preferences/1.svg',
                            }),
                        ),
                        el(RichText.Content, {
                            id: 'preferences__item_1',
                            tagName: 'h4',
                            value: attributes.icon_1
                        }),
                    ),
                    el('div', {className: 'preferences__item'},
                        el('div', {className: 'preferences__circle'},
                            el(RichText.Content, {
                                tagName: 'img',
                                alt: 'preferences',
                                src: '/wp-content/themes/opticore/src/img/preferences/2.svg',
                            }),
                        ),
                        el(RichText.Content, {
                            id: 'preferences__item_2',
                            tagName: 'h4',
                            value: attributes.icon_2
                        }),
                    ),
                    el('div', {className: 'preferences__item'},
                        el('div', {className: 'preferences__circle'},
                            el(RichText.Content, {
                                tagName: 'img',
                                alt: 'preferences',
                                src: '/wp-content/themes/opticore/src/img/preferences/3.svg',
                            }),
                        ),
                        el(RichText.Content, {
                            id: 'preferences__item_3',
                            tagName: 'h4',
                            value: attributes.icon_3
                        }),
                    ),
                ),
            );
        }
    });

})(window.wp.components, window.wp.element);
