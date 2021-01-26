(function (components, element) {

    const registerBlockType = wp.blocks.registerBlockType;
    const el = element.createElement;
    const {RichText, MediaUpload} = wp.blockEditor;
    const {Button} = components;

    const icon = el('svg', {width: 24, height: 24, viewBox: '0 0 24 24'},
        el('path', {d: "m 19.80716,0.02092 c -1.40386,0 -2.5459,1.14218 -2.5459,2.54599 0,0.56812 0.18715,1.09336 0.5029,1.51739 C 16.50538,4.63424 15.6232,5.89059 15.6232,7.34972 V 8.01228 H 24 V 7.34972 c 0,-1.46171 -0.88526,-2.72 -2.14755,-3.26844 0.31443,-0.42356 0.5007,-0.94756 0.5007,-1.51437 0,-1.40381 -1.14213,-2.54599 -2.54599,-2.54599 z m -15.62311,9e-5 c -1.40386,0 -2.54599,1.14209 -2.54599,2.5459 0,0.56812 0.18715,1.09336 0.5029,1.51739 C 0.88218,4.63424 0,5.89064 0,7.34972 V 8.01228 H 8.37689 V 7.34972 c 0,-1.46171 -0.8853,-2.72 -2.14764,-3.26844 0.31444,-0.42356 0.50079,-0.94756 0.50079,-1.51437 0,-1.40381 -1.14213,-2.5459 -2.54599,-2.5459 z m 7.08334,2.26721 C 10.14305,2.36992 9.04277,2.64687 8.01865,3.10048 7.99635,3.26234 7.96415,3.42191 7.92185,3.57857 9.03157,4.49296 9.7021,5.86725 9.7021,7.34972 V 9.3376 H 2.5955 C 2.41414,9.97501 2.29952,10.63002 2.25236,11.29948 h 9.01501 z m 1.40928,5.5e-4 v 9.0109 h 9.00824 C 21.63771,10.63015 21.52313,9.9751 21.34177,9.33769 h -7.0438 v -9e-5 -1.98779 c 0,-1.47839 0.6677,-2.8503 1.77301,-3.76483 C 16.03008,3.43455 15.99878,3.28132 15.97638,3.12602 14.93815,2.65802 13.8202,2.37258 12.67664,2.28877 Z M 2.25339,12.70866 c 0.0557,0.76697 0.20147,1.52519 0.43341,2.25522 0.1582,-0.0666 0.32194,-0.12239 0.48999,-0.16772 l 2.0874,-2.0875 z m 5.00372,10e-5 -2.08273,2.08264 c 0.73054,0.1935 1.37726,0.59536 1.87179,1.13846 l 3.2211,-3.2211 z m 5.41946,9e-5 v 9.01071 c 0.69146,-0.0507 1.37396,-0.17535 2.03522,-0.36951 0.30567,-0.69389 0.77016,-1.31106 1.3591,-1.79837 -0.0893,-0.32836 -0.13495,-0.66974 -0.13495,-1.01797 0,-2.1346 1.73658,-3.87122 3.87122,-3.87122 0.51248,0 1.00148,0.10103 1.44955,0.28272 0.22852,-0.72427 0.37188,-1.47605 0.4271,-2.23636 z m -1.40918,0.99252 -3.46298,3.46307 c 0.16163,0.42596 0.25086,0.8873 0.25086,1.36927 0,0.34593 -0.0452,0.68522 -0.1334,1.01165 0.0892,0.0735 0.17525,0.15026 0.25855,0.22944 l 3.08697,-3.08707 z m -7.08334,2.28635 c -1.40386,0 -2.54599,1.14217 -2.54599,2.54599 0,0.56812 0.18715,1.09336 0.5029,1.51739 C 0.88218,20.60104 0,21.85739 0,23.31651 v 0.66257 h 8.37689 v -0.66257 c 0,-1.46175 -0.8853,-2.72004 -2.14764,-3.26843 0.31444,-0.42356 0.50079,-0.94756 0.50079,-1.51437 0,-1.40382 -1.14213,-2.54599 -2.54599,-2.54599 z m 15.62311,0 c -1.40386,0 -2.5459,1.14208 -2.5459,2.54589 0,0.56813 0.18715,1.09337 0.5029,1.5174 -1.25873,0.54994 -2.14096,1.80638 -2.14096,3.2655 v 0.66257 H 24 v -0.66257 c 0,-1.4617 -0.88526,-2.71999 -2.14755,-3.26843 0.31443,-0.42356 0.5007,-0.94756 0.5007,-1.51437 0,-1.40386 -1.14213,-2.54599 -2.54599,-2.54599 z m -8.53986,2.69293 -2.21054,2.21054 c 0.089,0.15539 0.16944,0.31575 0.24097,0.48038 0.64073,0.18281 1.30095,0.29998 1.96957,0.34854 z"})
    );

    //Auxiliary function
    function _toConsumableArray(arr) {
        if (Array.isArray(arr)) {
            for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
                arr2[i] = arr[i];
            }
            return arr2;
        } else {
            return Array.from(arr);
        }
    }

    registerBlockType('home/feature', {
        title: 'Feature',
        description: 'Feature section.',
        icon: icon,
        category: 'home-page',
        keywords: ['feature section'],
        attributes: {

            blockquote: {
                type: 'array',
                source: 'query',
                default: [{index: 0, src: ''}],
                selector: '.features__catA',
                query: {
                    index: {
                        attribute: 'data-index',
                        source: 'attribute',
                        selector: 'img',
                    },
                    src: {attribute: 'src', source: 'attribute', selector: '.features__catImg'},
                    src2: {attribute: 'src2', source: 'attribute', selector: '.features__catImg'},
                    id: {attribute: 'data-id', source: 'attribute', selector: '.features__catImg'},
                    id2: {attribute: 'data-id2', source: 'attribute', selector: '.features__catImg'},
                    category: {attribute: 'data-category', source: 'attribute', selector: '.features__catImg'},
                    title: {attribute: 'data-title', source: 'attribute', selector: '.features__catImg'},
                    text: {attribute: 'data-text', source: 'attribute', selector: '.features__catImg'},
                }
            },
            title: {
                type: 'string',
                source: 'html',
                selector: '#features__title'
            },
            text: {
                type: 'string',
                source: 'html',
                selector: '#features__text'
            },

        },

        //Example function
        example: () => {
        },

        //Edit function
        edit: function (props) {


            let attributes = props.attributes;
            let blockquote = attributes.blockquote;

            let blockquoteList = blockquote.sort(function (a, b) {
                return a.index - b.index;
            }).map(function (item) {
                return [
                    el('div', {className: 'block-element'},

                        //Block counter and Remove block button
                        el('div', {className: 'block-element-head'},
                            el('span', null, 'Futures #', Number(item.index) + 1),
                            el(Button, {
                                    className: 'block-element-add',
                                    onClick: function onClick() {
                                        var newItem = blockquote.filter(function (element) {
                                            return element.index != item.index;
                                        }).map(function (t) {
                                            if (t.index > item.index) {
                                                t.index -= 1;
                                            }
                                            return t;
                                        });
                                        props.setAttributes({blockquote: newItem});
                                    }
                                }, el('svg', {
                                    className: 'block-element-svg',
                                    width: '20',
                                    height: '20'
                                }, el('path', {d: "M12 4h3c.6 0 1 .4 1 1v1H3V5c0-.6.5-1 1-1h3c.2-1.1 1.3-2 2.5-2s2.3.9 2.5 2zM8 4h3c-.2-.6-.9-1-1.5-1S8.2 3.4 8 4zM4 7h11l-.9 10.1c0 .5-.5.9-1 .9H5.9c-.5 0-.9-.4-1-.9L4 7z"}))
                            )
                        ),

                        //Block content

                        el(MediaUpload, {
                            onSelect: function onSelect(media) {
                                let newObject = Object.assign({}, item, {
                                    src: media.url,
                                    id: media.id,
                                });
                                props.setAttributes({
                                    blockquote: [].concat(_toConsumableArray(blockquote.filter(function (element) {
                                        return element.index != item.index;
                                    })), [newObject])
                                });
                            },
                            value: item.id,
                            render: function render(obj) {
                                return !!item.src ? el('div', null,
                                    props.isSelected && el(Button, {
                                        className: 'block-element-add',
                                        onClick: function onClick() {
                                            let newObject = Object.assign({}, item, {
                                                src: null,
                                                id: null,
                                            });
                                            props.setAttributes({
                                                blockquote: [].concat(_toConsumableArray(blockquote.filter(function (element) {
                                                    return element.index != item.index;
                                                })), [newObject])
                                            });
                                        }
                                    }, el('svg', {
                                        className: 'block-element-svg',
                                        width: '20',
                                        height: '20'
                                    }, el('path', {d: "M12 4h3c.6 0 1 .4 1 1v1H3V5c0-.6.5-1 1-1h3c.2-1.1 1.3-2 2.5-2s2.3.9 2.5 2zM8 4h3c-.2-.6-.9-1-1.5-1S8.2 3.4 8 4zM4 7h11l-.9 10.1c0 .5-.5.9-1 .9H5.9c-.5 0-.9-.4-1-.9L4 7z"}))
                                    ),
                                    el('img', {src: item.src, onClick: obj.open})
                                    ) :
                                    el('div', null,
                                        el(Button, {className: 'block-element-add', onClick: obj.open},
                                            el('svg', {
                                                    className: 'block-element-svg',
                                                    width: '20',
                                                    height: '20'
                                                },
                                                el('path', {d: "M2.25 1h15.5c.69 0 1.25.56 1.25 1.25v15.5c0 .69-.56 1.25-1.25 1.25H2.25C1.56 19 1 18.44 1 17.75V2.25C1 1.56 1.56 1 2.25 1zM17 17V3H3v14h14zM10 6c0-1.1-.9-2-2-2s-2 .9-2 2 .9 2 2 2 2-.9 2-2zm3 5s0-6 3-6v10c0 .55-.45 1-1 1H5c-.55 0-1-.45-1-1V8c2 0 3 4 3 4s1-3 3-3 3 2 3 2z"})
                                            )
                                        )
                                    );
                            }
                        }),
                        el(MediaUpload, {
                            onSelect: function onSelect(media) {
                                let newObject = Object.assign({}, item, {
                                    src2: media.url,
                                    id2: media.id,
                                });
                                props.setAttributes({
                                    blockquote: [].concat(_toConsumableArray(blockquote.filter(function (element) {
                                        return element.index != item.index;
                                    })), [newObject])
                                });
                            },
                            value: item.id2,
                            render: function render(obj) {
                                return !!item.src2 ? el('div', null,
                                    props.isSelected && el(Button, {
                                        className: 'block-element-add',
                                        onClick: function onClick() {
                                            let newObject = Object.assign({}, item, {
                                                src2: null,
                                                id2: null,
                                            });
                                            props.setAttributes({
                                                blockquote: [].concat(_toConsumableArray(blockquote.filter(function (element) {
                                                    return element.index != item.index;
                                                })), [newObject])
                                            });
                                        }
                                    }, el('svg', {
                                        className: 'block-element-svg',
                                        width: '20',
                                        height: '20'
                                    }, el('path', {d: "M12 4h3c.6 0 1 .4 1 1v1H3V5c0-.6.5-1 1-1h3c.2-1.1 1.3-2 2.5-2s2.3.9 2.5 2zM8 4h3c-.2-.6-.9-1-1.5-1S8.2 3.4 8 4zM4 7h11l-.9 10.1c0 .5-.5.9-1 .9H5.9c-.5 0-.9-.4-1-.9L4 7z"}))
                                    ),
                                    el('img', {src: item.src2, onClick: obj.open})
                                    ) :
                                    el('div', null,
                                        el(Button, {className: 'block-element-add', onClick: obj.open},
                                            el('svg', {
                                                    className: 'block-element-svg',
                                                    width: '20',
                                                    height: '20'
                                                },
                                                el('path', {d: "M2.25 1h15.5c.69 0 1.25.56 1.25 1.25v15.5c0 .69-.56 1.25-1.25 1.25H2.25C1.56 19 1 18.44 1 17.75V2.25C1 1.56 1.56 1 2.25 1zM17 17V3H3v14h14zM10 6c0-1.1-.9-2-2-2s-2 .9-2 2 .9 2 2 2 2-.9 2-2zm3 5s0-6 3-6v10c0 .55-.45 1-1 1H5c-.55 0-1-.45-1-1V8c2 0 3 4 3 4s1-3 3-3 3 2 3 2z"})
                                            )
                                        )
                                    );
                            }
                        }),
                        el(RichText, {
                            tagName: 'h4',
                            placeholder: 'Category...',
                            className: 'block-element-strong',
                            keepPlaceholderOnFocus: true,
                            value: item.category,
                            allowedFormats: [],
                            onChange: function onChange(category) {
                                let newObject = Object.assign({}, item, {
                                    category: category
                                });
                                props.setAttributes({
                                    blockquote: [].concat(_toConsumableArray(blockquote.filter(function (element) {
                                        return element.index != item.index;
                                    })), [newObject])
                                });
                            }
                        }),
                        el(RichText, {
                            tagName: 'h2',
                            placeholder: 'Title...',
                            className: 'block-element-strong',
                            keepPlaceholderOnFocus: true,
                            value: item.title,
                            allowedFormats: [],
                            onChange: function onChange(title) {
                                let newObject = Object.assign({}, item, {
                                    title: title
                                });
                                props.setAttributes({
                                    blockquote: [].concat(_toConsumableArray(blockquote.filter(function (element) {
                                        return element.index != item.index;
                                    })), [newObject])
                                });
                            }
                        }),
                        el(RichText, {
                            tagName: 'p',
                            placeholder: 'Text...',
                            className: 'block-element-strong',
                            keepPlaceholderOnFocus: true,
                            value: item.text,
                            allowedFormats: [],
                            onChange: function onChange(text) {
                                let newObject = Object.assign({}, item, {
                                    text: text
                                });
                                props.setAttributes({
                                    blockquote: [].concat(_toConsumableArray(blockquote.filter(function (element) {
                                        return element.index != item.index;
                                    })), [newObject])
                                });
                            }
                        }),
                    )
                ];
            });

            //Block content
            return [
                el('div', {className: props.className},

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
                    el(RichText, {
                        tagName: 'h5',
                        placeholder: 'Text...',
                        keepPlaceholderOnFocus: true,
                        value: attributes.text,
                        allowedFormats: [],
                        onChange: function (text) {
                            props.setAttributes({text: text});
                        }
                    }),


                    el('h4', {className: 'block-subtitle'}, 'Futures List'),
                    el('div', {className: 'block-element-list'},
                        blockquoteList//Block list
                    ),
                    el('div', {className: 'block-add-btn'},
                        el(Button, {
                            className: 'block-element-add',
                            onClick: function onClick() {
                                return props.setAttributes({
                                    blockquote: [].concat(_toConsumableArray(attributes.blockquote), [{
                                        index: attributes.blockquote.length,
                                        cite: '',
                                    }])
                                });
                            }
                        }, el('svg', {
                            className: 'block-element-svg',
                            width: '20',
                            height: '20',
                            viewBox: '0 0 20 20'
                        }, el('path', {d: "M10 1c-5 0-9 4-9 9s4 9 9 9 9-4 9-9-4-9-9-9zm0 16c-3.9 0-7-3.1-7-7s3.1-7 7-7 7 3.1 7 7-3.1 7-7 7zm1-11H9v3H6v2h3v3h2v-3h3V9h-3V6z"})), 'Add new item')
                    ),
                )
            ];
        },

        //Save function
        save: function (props) {

            let attributes = props.attributes;
            let blockquote = attributes.blockquote;

            //Repeater block content


            let blockquoteList = blockquote.map(function (item) {
                return el('a', {
                        key: item.index,
                        className: 'features__catA feature__GT',
                    },
                    el(RichText.Content, {
                            tagName: 'img',
                            className: 'features__catImg',
                            'data-index': item.index,
                            'data-id': item.id,
                            'data-id2': item.id2,
                            'data-title': item.title,
                            'data-text': item.text,
                            'data-category': item.category,
                            src: item.src,
                            src2: item.src2,
                        },
                    ),
                    item.category
                );
            });

            let blockquoteListSlide = blockquote.map(function (item) {
                return el('div', {
                        key: item.index,
                        className: 'feature__slide feature__GT',
                    },
                    el('div', {
                            className: 'feature__img',
                        },
                        el(RichText.Content, {
                                tagName: 'img',
                                'data-index': item.index,
                                'data-id': item.id2,
                                src: item.src2,
                            },
                        ),
                    ),
                );
            });

            let blockquoteListText = blockquote.map(function (item) {
                return el('div', {
                        key: item.index,
                        className: 'feature__info feature__GT',
                    },
                    el(RichText.Content, {
                            tagName: 'h5',
                            className: 'feature__cat',
                            value: item.title,
                        },
                    ),
                    el(RichText.Content, {
                            tagName: 'p',
                            value: item.text,
                        },
                    ),
                );
            });


            //Blocks section
            return el('section', {className: 'feature', 'data-length': blockquote.length, id: 'product'},
                el('div', {className: 'container'},
                    el('div', {className: 'feature__headline fade'},
                        el(RichText.Content, {
                            id: 'features__title',
                            className: 'supname feature__supname',
                            tagName: 'h4',
                            value: attributes.title
                        }),
                        el(RichText.Content, {
                            id: 'features__text',
                            className: 'title feature__title',
                            tagName: 'h2',
                            value: attributes.text
                        }),
                    ),

                    el('div', {className: 'feature__part'},
                        el('div', {className: 'feature__left'},
                            el('div', {className: 'feature__inner'},
                                blockquoteList
                            ),
                        ),
                        el('div', {className: 'feature__wrapper'},
                            el('div', {className: 'feature__slides'},
                                blockquoteListSlide
                            ),
                            el('div', {className: 'feature__text'},
                                blockquoteListText
                            ),
                        ),
                        el('div', {className: 'feature__dots'},),
                        el('div', {className: 'features__nav'},
                            el('div', {className: 'nav nav-left no-active js-ripple'},
                                el('svg', {
                                        width: '12',
                                        height: '10',
                                        viewBox: '0 0 12 10',
                                        fill: 'none',
                                    },
                                    el('path', {
                                        d: 'M4.58268 0.25C4.91602 -0.0833333 5.41602 -0.0833333 5.74935 0.25C6.08268 0.583333 6.08268 1.08333 5.74935 1.41667L2.99935 4.16667H10.9994C11.4994 4.16667 11.8327 4.5 11.8327 5C11.8327 5.5 11.4994 5.83333 10.9994 5.83333H2.99935L5.74935 8.58333C6.08268 8.91667 6.08268 9.41667 5.74935 9.75C5.41602 10.0833 4.91602 10.0833 4.58268 9.75L0.416016 5.58333C0.0826823 5.25 0.0826823 4.75 0.416016 4.41667L4.58268 0.25Z',
                                        fill: 'url(#paint0_linear66)'
                                    },),
                                    el('defs', {},
                                        el('linearGradient', {
                                                id: 'paint0_linear66',
                                                x1: '0.166016',
                                                x2: '11.5161',
                                                y1: '0',
                                                y2: '-0.226042'
                                            },
                                            el('stop', {
                                                    'stop-color': '#229AFA',
                                                },
                                            ),
                                            el('stop', {
                                                    'stop-color': '#1168F8',
                                                    'offset': '1'
                                                },
                                            ),
                                        ),
                                    ),
                                ),
                            ),


                            el('div', {className: 'nav nav-right js-ripple'},
                                el('svg', {
                                        width: '12',
                                        height: '10',
                                        viewBox: '0 0 12 10',
                                        fill: 'none',
                                    },
                                    el('path', {
                                        d: 'M7.42193 0.244075C7.09652 -0.0813583 6.56885 -0.0813583 6.24343 0.244075C5.91802 0.569517 5.91802 1.09715 6.24343 1.42259L8.98752 4.16667H0.999349C0.539116 4.16667 0.166016 4.53975 0.166016 5C0.166016 5.46025 0.539107 5.83333 0.999349 5.83333H8.98752L6.24343 8.57742C5.91802 8.90283 5.91802 9.4305 6.24343 9.75592C6.56885 10.0813 7.09652 10.0813 7.42193 9.75592L11.5886 5.58925C11.914 5.26383 11.914 4.73617 11.5886 4.41075L7.42193 0.244075Z',
                                        fill: 'url(#paint0_linear77)'
                                    },),
                                    el('defs', {},
                                        el('linearGradient', {
                                                id: 'paint0_linear77',
                                                x1: '0.166016',
                                                x2: '11.516',
                                                y1: '0',
                                                y2: '-0.226042'
                                            },
                                            el('stop', {
                                                    'stop-color': '#229AFA',
                                                },
                                            ),
                                            el('stop', {
                                                    'stop-color': '#1168F8',
                                                    'offset': '1'
                                                },
                                            ),
                                        ),
                                    ),
                                ),
                            ),
                        ),
                    ),
                ),
            );
        }
    });

})(window.wp.components, window.wp.element);
