(function (components, element) {
    const registerBlockType = wp.blocks.registerBlockType;
    const el = element.createElement;
    const {RichText, MediaUpload} = wp.blockEditor;

    const icon = el('svg', {width: 24, height: 24, viewBox: '0 0 24 24'},
        el('path', {d: 'M12.18 2.25L1 12.103s.69 1.272 2.193 0l8.987-7.608 8.427 7.56c1.74 1.256 2.393 0 2.393 0zm6.056 2.227l.008 2.63 2.16 1.83v-4.46zm-6.123 1.45L3.99 12.736v8.523s-.02.492.46.492l5.545-.006.008-4.545s-.078-.75.65-.75h2.3c.86 0 .806.75.806.75l-.01 4.53h5.43c.6 0 .582-.613.582-.613v-8.38z'})
    );

    registerBlockType('home/calculate', {
        title: 'Calculate screen',
        description: 'calculate screen.',
        icon: icon,
        category: 'home-page',
        keywords: ['calculate screen'],
        attributes: {
            subtitle: {
                type: 'string',
                source: 'html',
                selector: '#calculate__subtitle'
            },
            title: {
                type: 'string',
                source: 'html',
                selector: '#calculate__title'
            },
            text: {
                type: 'string',
                source: 'html',
                selector: '#calculate__text'
            },
            timeTitle: {
                type: 'string',
                source: 'html',
                selector: '#calculate__timeTitle',
            },
            person: {
                type: 'string',
                source: 'attribute',
                selector: '#calculate__personTitle',
                attribute: 'data-person'
            },
            glasses: {
                type: 'string',
                source: 'attribute',
                selector: '#calculate__glassesTitle',
                attribute: 'data-glasses'
            },
            week: {
                type: 'string',
                source: 'attribute',
                selector: '.calculate__week',
                attribute: 'data-week'
            },
            month: {
                type: 'string',
                source: 'attribute',
                selector: '.calculate__month',
                attribute: 'data-month'
            },
            year: {
                type: 'string',
                source: 'attribute',
                selector: '.calculate__year',
                attribute: 'data-year'
            },
            titleCard1: {
                type: 'string',
                source: 'html',
                selector: '#calculate__card1-title'
            },
            detailsCard1: {
                type: 'string',
                source: 'html',
                selector: '#calculate__card1-details'
            },
            titleCard2: {
                type: 'string',
                source: 'html',
                selector: '#calculate__card2-title'
            },
            detailsCard2: {
                type: 'string',
                source: 'html',
                selector: '#calculate__card2-details'
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
                    el('div', {className: 'calculate-section'},
                        el(RichText, {
                            tagName: 'h4',
                            placeholder: 'Subtitle...',
                            keepPlaceholderOnFocus: true,
                            value: attributes.subtitle,
                            allowedFormats: [],
                            onChange: function (subtitle) {
                                props.setAttributes({subtitle: subtitle});
                            }
                        }),
                        el(RichText, {
                            tagName: 'h2',
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
                        el('div', {className: 'calculate-cards'},
                            el('div', {className: 'calculate-translate'},
                                el('h5', {},
                                    'Card left'
                                ),
                                el(RichText, {
                                    tagName: 'p',
                                    placeholder: 'Title card 1...',
                                    keepPlaceholderOnFocus: true,
                                    value: attributes.titleCard1,
                                    allowedFormats: [],
                                    onChange: function (titleCard1) {
                                        props.setAttributes({titleCard1: titleCard1});
                                    }
                                }),

                                el(RichText, {
                                    tagName: 'p',
                                    placeholder: 'Details card 1...',
                                    keepPlaceholderOnFocus: true,
                                    value: attributes.detailsCard1,
                                    allowedFormats: [],
                                    onChange: function (detailsCard1) {
                                        props.setAttributes({detailsCard1: detailsCard1});
                                    }
                                }),
                            ),
                            el('div', {className: 'calculate-translate'},
                                el('h5', {},
                                    'Card right'
                                ),
                                el(RichText, {
                                    tagName: 'p',
                                    placeholder: 'Title card 2...',
                                    keepPlaceholderOnFocus: true,
                                    value: attributes.titleCard2,
                                    allowedFormats: [],
                                    onChange: function (titleCard2) {
                                        props.setAttributes({titleCard2: titleCard2});
                                    }
                                }),

                                el(RichText, {
                                    tagName: 'p',
                                    placeholder: 'Details card 2...',
                                    keepPlaceholderOnFocus: true,
                                    value: attributes.detailsCard2,
                                    allowedFormats: [],
                                    onChange: function (detailsCard2) {
                                        props.setAttributes({detailsCard2: detailsCard2});
                                    }
                                }),
                            ),
                        ),
                        el('div', {className: 'calculate-translate'},
                            el('h5', {},
                                'Calculate Translate'
                            ),

                            el(RichText, {
                                tagName: 'p',
                                placeholder: 'Time title...',
                                keepPlaceholderOnFocus: true,
                                value: attributes.timeTitle,
                                allowedFormats: [],
                                onChange: function (timeTitle) {
                                    props.setAttributes({timeTitle: timeTitle});
                                }
                            }),
                            el(RichText, {
                                tagName: 'p',
                                placeholder: 'Person title...',
                                keepPlaceholderOnFocus: true,
                                value: attributes.person,
                                allowedFormats: [],
                                onChange: function (person) {
                                    props.setAttributes({person: person});
                                }
                            }),
                            el(RichText, {
                                tagName: 'p',
                                placeholder: 'Glasses title...',
                                keepPlaceholderOnFocus: true,
                                value: attributes.glasses,
                                allowedFormats: [],
                                onChange: function (glasses) {
                                    props.setAttributes({glasses: glasses});
                                }
                            }),


                            el(RichText, {
                                tagName: 'p',
                                placeholder: 'Week...',
                                keepPlaceholderOnFocus: true,
                                value: attributes.week,
                                allowedFormats: [],
                                onChange: function (week) {
                                    props.setAttributes({week: week});
                                }
                            }),
                            el(RichText, {
                                tagName: 'p',
                                placeholder: 'Month...',
                                keepPlaceholderOnFocus: true,
                                value: attributes.month,
                                allowedFormats: [],
                                onChange: function (month) {
                                    props.setAttributes({month: month});
                                }
                            }),
                            el(RichText, {
                                tagName: 'p',
                                placeholder: 'Year...',
                                keepPlaceholderOnFocus: true,
                                value: attributes.year,
                                allowedFormats: [],
                                onChange: function (year) {
                                    props.setAttributes({year: year});
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
            return el('section', {className: 'calculate'},
                el('div', {className: 'container'},
                    el('div', {className: 'calculate__body'},
                        el('div', {className: 'calculate__headline fade'},
                            el(RichText.Content, {
                                id: 'calculate__subtitle',
                                className: 'supname calculate__supname',
                                tagName: 'h4',
                                value: attributes.subtitle
                            }),
                            el(RichText.Content, {
                                id: 'calculate__title',
                                className: 'title calculate__title',
                                tagName: 'h2',
                                value: attributes.title
                            }),
                            el(RichText.Content, {
                                id: 'calculate__text',
                                className: 'calculate__text',
                                tagName: 'p',
                                value: attributes.text
                            }),
                        ),

                        el('div', {className: 'calculate__list fade'},
                            el('div', {className: 'calculate__item'},
                                el(RichText.Content, {
                                    id: 'calculate__card1-title',
                                    tagName: 'h3',
                                    value: attributes.titleCard1
                                }),
                                el(RichText.Content, {
                                        tagName: 'h5',
                                        id: 'calculate__timeTitle',
                                        value: attributes.timeTitle
                                    },
                                ),
                                el('div', {className: 'calculate__radios'},
                                    el('div', {className: 'calculate__radio active'},
                                        el('label', {
                                                for: 'radio1',
                                            },
                                            el('input', {
                                                checked: '',
                                                name: 'check',
                                                type: 'radio',
                                                id: 'radio1',
                                                value: '40',
                                                className: 'calculate__week',
                                                'data-week': attributes.week
                                            },),
                                            el('span', {},
                                            ),
                                            attributes.week
                                        ),
                                    ),
                                    el('div', {className: 'calculate__radio'},
                                        el('label', {
                                                for: 'radio-2',

                                            },
                                            el('input', {
                                                name: 'check',
                                                type: 'radio',
                                                id: 'radio-2',
                                                value: '160',
                                                className: 'calculate__month',
                                                'data-month': attributes.month
                                            },),
                                            el('span', {},
                                            ),
                                            attributes.month
                                        ),
                                    ),
                                    el('div', {className: 'calculate__radio'},
                                        el('label', {
                                                for: 'radio-3',
                                            },
                                            el('input', {
                                                name: 'check',
                                                type: 'radio',
                                                id: 'radio-3',
                                                value: '1920',
                                                className: 'calculate__year',
                                                'data-year': attributes.year
                                            },),
                                            el('span', {},
                                            ),
                                            attributes.year
                                        ),
                                    ),
                                ),
                                el('div', {className: 'calculate__store'},
                                    el('p', {
                                            id: 'calculate__personTitle',
                                            'data-person': attributes.person
                                        },
                                        attributes.person,
                                        el('span', {
                                                id: 'calc',
                                            },
                                        ),
                                    ),
                                    el('div', {
                                        className: 'calculate__range',
                                        id: 'calculate__range1',
                                    },),
                                ),
                                el('div', {
                                        className: 'calculate__bottom',
                                    },
                                    el('span', {},
                                    ),
                                    el(RichText.Content, {
                                        id: 'calculate__card1-details',
                                        tagName: 'p',
                                        value: attributes.detailsCard1
                                    }),
                                ),
                            ),
                            el('div', {className: 'calculate__item'},
                                el(RichText.Content, {
                                    id: 'calculate__card2-title',
                                    tagName: 'h3',
                                    value: attributes.titleCard2
                                }),
                                el('h5', {},
                                    attributes.timeTitle
                                ),
                                el('div', {className: 'calculate__radios'},
                                    el('div', {className: 'calculate__radio active'},
                                        el('label', {
                                                for: 'radio4',
                                            },
                                            el('input', {
                                                checked: '',
                                                name: 'check',
                                                type: 'radio',
                                                id: 'radio4',
                                                value: '40',
                                            },),
                                            el('span', {},
                                            ),
                                            attributes.week
                                        ),
                                    ),
                                    el('div', {className: 'calculate__radio'},
                                        el('label', {
                                                for: 'radio-5',
                                            },
                                            el('input', {
                                                name: 'check',
                                                type: 'radio',
                                                id: 'radio-5',
                                                value: '160',
                                            },),
                                            el('span', {},
                                            ),
                                            attributes.month
                                        ),
                                    ),
                                    el('div', {className: 'calculate__radio'},
                                        el('label', {
                                                for: 'radio-6',
                                            },
                                            el('input', {
                                                name: 'check',
                                                type: 'radio',
                                                id: 'radio-6',
                                                value: '1920',
                                            },),
                                            el('span', {},
                                            ),
                                            attributes.year
                                        ),
                                    ),
                                ),
                                el('div', {className: 'calculate__store'},
                                    el('p', {
                                            id: 'calculate__glassesTitle',
                                            'data-glasses': attributes.glasses
                                        },
                                        attributes.glasses,
                                        el('span', {
                                                id: 'calc2',
                                            },
                                        ),
                                    ),
                                    el('div', {
                                        className: 'calculate__range',
                                        id: 'calculate__range',
                                    },),
                                ),
                                el('div', {
                                        className: 'calculate__bottom',
                                    },
                                    el('span', {},
                                    ),
                                    el(RichText.Content, {
                                        id: 'calculate__card2-details',
                                        tagName: 'p',
                                        value: attributes.detailsCard2
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
