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

    registerBlockType('home/integrations', {
        title: 'Integrations',
        description: 'Integrations section.',
        icon: icon,
        category: 'home-page',
        keywords: ['integrations section'],
        attributes: {
            logo1: {
                type: 'array',
                source: 'query',
                default: [{index: 0, src: ''}],
                selector: '.integrations__sliderItem--1',
                query: {
                    index: {
                        attribute: 'data-index',
                        source: 'attribute',
                        selector: 'img',
                    },
                    src: {attribute: 'src', source: 'attribute', selector: 'img'},
                    id: {attribute: 'data-id', source: 'attribute', selector: 'img'},
                    alt: {attribute: 'alt', source: 'attribute', selector: 'img'},
                }
            },
            logo2: {
                type: 'array',
                source: 'query',
                default: [{index: 0, src: ''}],
                selector: '.integrations__sliderItem--2',
                query: {
                    index: {
                        attribute: 'data-index',
                        source: 'attribute',
                        selector: 'img',
                    },
                    src: {attribute: 'src', source: 'attribute', selector: 'img'},
                    id: {attribute: 'data-id', source: 'attribute', selector: 'img'},
                    alt: {attribute: 'alt', source: 'attribute', selector: 'img'},
                }
            },
            logo3: {
                type: 'array',
                source: 'query',
                default: [{index: 0, src: ''}],
                selector: '.integrations__sliderItem--3',
                query: {
                    index: {
                        attribute: 'data-index',
                        source: 'attribute',
                        selector: 'img',
                    },
                    src: {attribute: 'src', source: 'attribute', selector: 'img'},
                    id: {attribute: 'data-id', source: 'attribute', selector: 'img'},
                    alt: {attribute: 'alt', source: 'attribute', selector: 'img'},
                }
            },
            logo4: {
                type: 'array',
                source: 'query',
                default: [{index: 0, src: ''}],
                selector: '.integrations__sliderItem--4',
                query: {
                    index: {
                        attribute: 'data-index',
                        source: 'attribute',
                        selector: 'img',
                    },
                    src: {attribute: 'src', source: 'attribute', selector: 'img'},
                    id: {attribute: 'data-id', source: 'attribute', selector: 'img'},
                    alt: {attribute: 'alt', source: 'attribute', selector: 'img'},
                }
            },
            logo5: {
                type: 'array',
                source: 'query',
                default: [{index: 0, src: ''}],
                selector: '.integrations__sliderItem--5',
                query: {
                    index: {
                        attribute: 'data-index',
                        source: 'attribute',
                        selector: 'img',
                    },
                    src: {attribute: 'src', source: 'attribute', selector: 'img'},
                    id: {attribute: 'data-id', source: 'attribute', selector: 'img'},
                    alt: {attribute: 'alt', source: 'attribute', selector: 'img'},
                }
            },
            logo6: {
                type: 'array',
                source: 'query',
                default: [{index: 0, src: ''}],
                selector: '.integrations__sliderItem--6',
                query: {
                    index: {
                        attribute: 'data-index',
                        source: 'attribute',
                        selector: 'img',
                    },
                    src: {attribute: 'src', source: 'attribute', selector: 'img'},
                    id: {attribute: 'data-id', source: 'attribute', selector: 'img'},
                    alt: {attribute: 'alt', source: 'attribute', selector: 'img'},
                }
            },
            logo7: {
                type: 'array',
                source: 'query',
                default: [{index: 0, src: ''}],
                selector: '.integrations__sliderItem--7',
                query: {
                    index: {
                        attribute: 'data-index',
                        source: 'attribute',
                        selector: 'img',
                    },
                    src: {attribute: 'src', source: 'attribute', selector: 'img'},
                    id: {attribute: 'data-id', source: 'attribute', selector: 'img'},
                    alt: {attribute: 'alt', source: 'attribute', selector: 'img'},
                }
            },

            title: {
                type: 'string',
                source: 'html',
                selector: '#integrations__title'
            },
            subtitle: {
                type: 'string',
                source: 'html',
                selector: '#integrations__subtitle'
            },

            titleLogo1: {
                type: 'string',
                source: 'html',
                selector: '#integrations__titleLogo__1'
            },
            titleLogo2: {
                type: 'string',
                source: 'html',
                selector: '#integrations__titleLogo__2'
            },
            titleLogo3: {
                type: 'string',
                source: 'html',
                selector: '#integrations__titleLogo__3'
            },
            titleLogo4: {
                type: 'string',
                source: 'html',
                selector: '#integrations__titleLogo__4'
            },
            titleLogo5: {
                type: 'string',
                source: 'html',
                selector: '#integrations__titleLogo__5'
            },
            titleLogo6: {
                type: 'string',
                source: 'html',
                selector: '#integrations__titleLogo__6'
            },
            titleLogo7: {
                type: 'string',
                source: 'html',
                selector: '#integrations__titleLogo__7'
            },

        },

        //Example function
        example: () => {
        },

        //Edit function
        edit: function (props) {


            let attributes = props.attributes;
            let logo1 = attributes.logo1;
            let logo2 = attributes.logo2;
            let logo3 = attributes.logo3;
            let logo4 = attributes.logo4;
            let logo5 = attributes.logo5;
            let logo6 = attributes.logo6;
            let logo7 = attributes.logo7;


            let blockquoteList = logo1.sort(function (a, b) {
                return a.index - b.index;
            }).map(function (item) {
                return [
                    el('div', {className: 'block-element'},

                        //Block counter and Remove block button
                        el('div', {className: 'block-element-head'},
                            el('span', null, 'Logo #', Number(item.index) + 1),
                            el(Button, {
                                    className: 'block-element-add',
                                    onClick: function onClick() {
                                        var newItem = logo1.filter(function (element) {
                                            return element.index != item.index;
                                        }).map(function (t) {
                                            if (t.index > item.index) {
                                                t.index -= 1;
                                            }
                                            return t;
                                        });
                                        props.setAttributes({logo1: newItem});
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
                                    alt: media.alt
                                });
                                props.setAttributes({
                                    logo1: [].concat(_toConsumableArray(logo1.filter(function (element) {
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
                                                alt: null
                                            });
                                            props.setAttributes({
                                                logo1: [].concat(_toConsumableArray(logo1.filter(function (element) {
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
                        })
                    )
                ];
            });
            let blockquoteList2 = logo2.sort(function (a, b) {
                return a.index - b.index;
            }).map(function (item) {
                return [
                    el('div', {className: 'block-element'},

                        //Block counter and Remove block button
                        el('div', {className: 'block-element-head'},
                            el('span', null, 'Logo #', Number(item.index) + 1),
                            el(Button, {
                                    className: 'block-element-add',
                                    onClick: function onClick() {
                                        var newItem = logo2.filter(function (element) {
                                            return element.index != item.index;
                                        }).map(function (t) {
                                            if (t.index > item.index) {
                                                t.index -= 1;
                                            }
                                            return t;
                                        });
                                        props.setAttributes({logo2: newItem});
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
                                    alt: media.alt
                                });
                                props.setAttributes({
                                    logo2: [].concat(_toConsumableArray(logo2.filter(function (element) {
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
                                                alt: null
                                            });
                                            props.setAttributes({
                                                logo2: [].concat(_toConsumableArray(logo2.filter(function (element) {
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
                        })
                    )
                ];
            });
            let blockquoteList3 = logo3.sort(function (a, b) {
                return a.index - b.index;
            }).map(function (item) {
                return [
                    el('div', {className: 'block-element'},

                        //Block counter and Remove block button
                        el('div', {className: 'block-element-head'},
                            el('span', null, 'Logo #', Number(item.index) + 1),
                            el(Button, {
                                    className: 'block-element-add',
                                    onClick: function onClick() {
                                        var newItem = logo3.filter(function (element) {
                                            return element.index != item.index;
                                        }).map(function (t) {
                                            if (t.index > item.index) {
                                                t.index -= 1;
                                            }
                                            return t;
                                        });
                                        props.setAttributes({logo3: newItem});
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
                                    alt: media.alt
                                });
                                props.setAttributes({
                                    logo3: [].concat(_toConsumableArray(logo3.filter(function (element) {
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
                                                alt: null
                                            });
                                            props.setAttributes({
                                                logo3: [].concat(_toConsumableArray(logo3.filter(function (element) {
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
                        })
                    )
                ];
            });
            let blockquoteList4 = logo4.sort(function (a, b) {
                return a.index - b.index;
            }).map(function (item) {
                return [
                    el('div', {className: 'block-element'},

                        //Block counter and Remove block button
                        el('div', {className: 'block-element-head'},
                            el('span', null, 'Logo #', Number(item.index) + 1),
                            el(Button, {
                                    className: 'block-element-add',
                                    onClick: function onClick() {
                                        var newItem = logo4.filter(function (element) {
                                            return element.index != item.index;
                                        }).map(function (t) {
                                            if (t.index > item.index) {
                                                t.index -= 1;
                                            }
                                            return t;
                                        });
                                        props.setAttributes({logo4: newItem});
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
                                    alt: media.alt
                                });
                                props.setAttributes({
                                    logo4: [].concat(_toConsumableArray(logo4.filter(function (element) {
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
                                                alt: null
                                            });
                                            props.setAttributes({
                                                logo4: [].concat(_toConsumableArray(logo4.filter(function (element) {
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
                        })
                    )
                ];
            });

            let blockquoteList5 = logo5.sort(function (a, b) {
                return a.index - b.index;
            }).map(function (item) {
                return [
                    el('div', {className: 'block-element'},

                        //Block counter and Remove block button
                        el('div', {className: 'block-element-head'},
                            el('span', null, 'Logo #', Number(item.index) + 1),
                            el(Button, {
                                    className: 'block-element-add',
                                    onClick: function onClick() {
                                        var newItem = logo5.filter(function (element) {
                                            return element.index != item.index;
                                        }).map(function (t) {
                                            if (t.index > item.index) {
                                                t.index -= 1;
                                            }
                                            return t;
                                        });
                                        props.setAttributes({logo5: newItem});
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
                                    alt: media.alt
                                });
                                props.setAttributes({
                                    logo5: [].concat(_toConsumableArray(logo5.filter(function (element) {
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
                                                alt: null
                                            });
                                            props.setAttributes({
                                                logo5: [].concat(_toConsumableArray(logo5.filter(function (element) {
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
                        })
                    )
                ];
            });
            let blockquoteList6 = logo6.sort(function (a, b) {
                return a.index - b.index;
            }).map(function (item) {
                return [
                    el('div', {className: 'block-element'},

                        //Block counter and Remove block button
                        el('div', {className: 'block-element-head'},
                            el('span', null, 'Logo #', Number(item.index) + 1),
                            el(Button, {
                                    className: 'block-element-add',
                                    onClick: function onClick() {
                                        var newItem = logo6.filter(function (element) {
                                            return element.index != item.index;
                                        }).map(function (t) {
                                            if (t.index > item.index) {
                                                t.index -= 1;
                                            }
                                            return t;
                                        });
                                        props.setAttributes({logo6: newItem});
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
                                    alt: media.alt
                                });
                                props.setAttributes({
                                    logo6: [].concat(_toConsumableArray(logo6.filter(function (element) {
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
                                                alt: null
                                            });
                                            props.setAttributes({
                                                logo6: [].concat(_toConsumableArray(logo6.filter(function (element) {
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
                        })
                    )
                ];
            });

            let blockquoteList7 = logo7.sort(function (a, b) {
                return a.index - b.index;
            }).map(function (item) {
                return [
                    el('div', {className: 'block-element'},

                        //Block counter and Remove block button
                        el('div', {className: 'block-element-head'},
                            el('span', null, 'Logo #', Number(item.index) + 1),
                            el(Button, {
                                    className: 'block-element-add',
                                    onClick: function onClick() {
                                        var newItem = logo7.filter(function (element) {
                                            return element.index != item.index;
                                        }).map(function (t) {
                                            if (t.index > item.index) {
                                                t.index -= 1;
                                            }
                                            return t;
                                        });
                                        props.setAttributes({logo7: newItem});
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
                                    alt: media.alt
                                });
                                props.setAttributes({
                                    logo7: [].concat(_toConsumableArray(logo7.filter(function (element) {
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
                                                alt: null
                                            });
                                            props.setAttributes({
                                                logo7: [].concat(_toConsumableArray(logo7.filter(function (element) {
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
                        })
                    )
                ];
            });

            //Block content
            return [
                el('div', {className: props.className},
                    el(RichText, {
                        tagName: 'h5',
                        placeholder: 'Subtitle...',
                        keepPlaceholderOnFocus: true,
                        value: attributes.subtitle,
                        allowedFormats: [],
                        onChange: function (subtitle) {
                            props.setAttributes({subtitle: subtitle});
                        }
                    }),
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


                    el('h4', {className: 'block-subtitle'}, 'Logo List'),
                    el('div', {className: 'block-element-list block-element-list__logo'},
                        el(RichText, {
                            tagName: 'h2',
                            placeholder: 'Logo title...',
                            keepPlaceholderOnFocus: true,
                            value: attributes.titleLogo1,
                            allowedFormats: [],
                            onChange: function (titleLogo1) {
                                props.setAttributes({titleLogo1: titleLogo1});
                            }
                        }),
                        blockquoteList//Block list
                    ),
                    el('div', {className: 'block-add-btn'},
                        el(Button, {
                            className: 'block-element-add',
                            onClick: function onClick() {
                                return props.setAttributes({
                                    logo1: [].concat(_toConsumableArray(attributes.logo1), [{
                                        index: attributes.logo1.length,
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
                    el('h4', {className: 'block-subtitle'}, 'Logo List'),
                    el('div', {className: 'block-element-list block-element-list__logo'},
                        el(RichText, {
                            tagName: 'h2',
                            placeholder: 'Logo title...',
                            keepPlaceholderOnFocus: true,
                            value: attributes.titleLogo2,
                            allowedFormats: [],
                            onChange: function (titleLogo2) {
                                props.setAttributes({titleLogo2: titleLogo2});
                            }
                        }),
                        blockquoteList2//Block list
                    ),
                    el('div', {className: 'block-add-btn'},
                        el(Button, {
                            className: 'block-element-add',
                            onClick: function onClick() {
                                return props.setAttributes({
                                    logo2: [].concat(_toConsumableArray(attributes.logo2), [{
                                        index: attributes.logo2.length,
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
                    el('h4', {className: 'block-subtitle'}, 'Logo List'),
                    el('div', {className: 'block-element-list block-element-list__logo'},
                        el(RichText, {
                            tagName: 'h2',
                            placeholder: 'Logo title...',
                            keepPlaceholderOnFocus: true,
                            value: attributes.titleLogo3,
                            allowedFormats: [],
                            onChange: function (titleLogo3) {
                                props.setAttributes({titleLogo3: titleLogo3});
                            }
                        }),
                        blockquoteList3//Block list
                    ),
                    el('div', {className: 'block-add-btn'},
                        el(Button, {
                            className: 'block-element-add',
                            onClick: function onClick() {
                                return props.setAttributes({
                                    logo3: [].concat(_toConsumableArray(attributes.logo3), [{
                                        index: attributes.logo3.length,
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
                    el('h4', {className: 'block-subtitle'}, 'Logo List'),
                    el('div', {className: 'block-element-list block-element-list__logo'},
                        el(RichText, {
                            tagName: 'h2',
                            placeholder: 'Logo title...',
                            keepPlaceholderOnFocus: true,
                            value: attributes.titleLogo4,
                            allowedFormats: [],
                            onChange: function (titleLogo4) {
                                props.setAttributes({titleLogo4: titleLogo4});
                            }
                        }),
                        blockquoteList4//Block list
                    ),
                    el('div', {className: 'block-add-btn'},
                        el(Button, {
                            className: 'block-element-add',
                            onClick: function onClick() {
                                return props.setAttributes({
                                    logo4: [].concat(_toConsumableArray(attributes.logo4), [{
                                        index: attributes.logo4.length,
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
                    el('h4', {className: 'block-subtitle'}, 'Logo List'),
                    el('div', {className: 'block-element-list block-element-list__logo'},
                        el(RichText, {
                            tagName: 'h2',
                            placeholder: 'Logo title...',
                            keepPlaceholderOnFocus: true,
                            value: attributes.titleLogo5,
                            allowedFormats: [],
                            onChange: function (titleLogo5) {
                                props.setAttributes({titleLogo5: titleLogo5});
                            }
                        }),
                        blockquoteList5//Block list
                    ),
                    el('div', {className: 'block-add-btn'},
                        el(Button, {
                            className: 'block-element-add',
                            onClick: function onClick() {
                                return props.setAttributes({
                                    logo5: [].concat(_toConsumableArray(attributes.logo5), [{
                                        index: attributes.logo5.length,
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
                    el('h4', {className: 'block-subtitle'}, 'Logo List'),
                    el('div', {className: 'block-element-list block-element-list__logo'},
                        el(RichText, {
                            tagName: 'h2',
                            placeholder: 'Logo title...',
                            keepPlaceholderOnFocus: true,
                            value: attributes.titleLogo6,
                            allowedFormats: [],
                            onChange: function (titleLogo6) {
                                props.setAttributes({titleLogo6: titleLogo6});
                            }
                        }),
                        blockquoteList6//Block list
                    ),
                    el('div', {className: 'block-add-btn'},
                        el(Button, {
                            className: 'block-element-add',
                            onClick: function onClick() {
                                return props.setAttributes({
                                    logo6: [].concat(_toConsumableArray(attributes.logo6), [{
                                        index: attributes.logo6.length,
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
                    el('h4', {className: 'block-subtitle'}, 'Logo List'),
                    el('div', {className: 'block-element-list block-element-list__logo'},
                        el(RichText, {
                            tagName: 'h2',
                            placeholder: 'Logo title...',
                            keepPlaceholderOnFocus: true,
                            value: attributes.titleLogo7,
                            allowedFormats: [],
                            onChange: function (titleLogo7) {
                                props.setAttributes({titleLogo7: titleLogo7});
                            }
                        }),
                        blockquoteList7//Block list
                    ),
                    el('div', {className: 'block-add-btn'},
                        el(Button, {
                            className: 'block-element-add',
                            onClick: function onClick() {
                                return props.setAttributes({
                                    logo7: [].concat(_toConsumableArray(attributes.logo7), [{
                                        index: attributes.logo7.length,
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
            let logo1 = attributes.logo1;
            let logo2 = attributes.logo2;
            let logo3 = attributes.logo3;
            let logo4 = attributes.logo4;
            let logo5 = attributes.logo5;
            let logo6 = attributes.logo6;
            let logo7 = attributes.logo7;


            //Repeater block content


            let blockquoteList1 = logo1.map(function (item) {
                return el('div', {
                        key: item.index,
                        className: 'integrations__sliderItem--1 integrations__item',
                    },
                    el(RichText.Content, {
                        tagName: 'img',
                        'data-index': item.index,
                        'data-id': item.id,
                        alt: item.alt,
                        src: item.src,
                    }),
                );
            });
            let blockquoteList2 = logo2.map(function (item) {
                return el('div', {
                        key: item.index,
                        className: 'integrations__sliderItem--2 integrations__item',
                    },
                    el(RichText.Content, {
                        tagName: 'img',
                        'data-index': item.index,
                        'data-id': item.id,
                        alt: item.alt,
                        src: item.src,
                    }),
                );
            });
            let blockquoteList3 = logo3.map(function (item) {
                return el('div', {
                        key: item.index,
                        className: 'integrations__sliderItem--3 integrations__item',
                    },
                    el(RichText.Content, {
                        tagName: 'img',
                        'data-index': item.index,
                        'data-id': item.id,
                        alt: item.alt,
                        src: item.src,
                    }),
                );
            });
            let blockquoteList4 = logo4.map(function (item) {
                return el('div', {
                        key: item.index,
                        className: 'integrations__sliderItem--4 integrations__item',
                    },
                    el(RichText.Content, {
                        tagName: 'img',
                        'data-index': item.index,
                        'data-id': item.id,
                        alt: item.alt,
                        src: item.src,
                    }),
                );
            });
            let blockquoteList5 = logo5.map(function (item) {
                return el('div', {
                        key: item.index,
                        className: 'integrations__sliderItem--5 integrations__item',
                    },
                    el(RichText.Content, {
                        tagName: 'img',
                        'data-index': item.index,
                        'data-id': item.id,
                        alt: item.alt,
                        src: item.src,
                    }),
                );
            });
            let blockquoteList6 = logo6.map(function (item) {
                return el('div', {
                        key: item.index,
                        className: 'integrations__sliderItem--6 integrations__item',
                    },
                    el(RichText.Content, {
                        tagName: 'img',
                        'data-index': item.index,
                        'data-id': item.id,
                        alt: item.alt,
                        src: item.src,
                    }),
                );
            });
            let blockquoteList7 = logo7.map(function (item) {
                return el('div', {
                        key: item.index,
                        className: 'integrations__sliderItem--7 integrations__item',
                    },
                    el(RichText.Content, {
                        tagName: 'img',
                        'data-index': item.index,
                        'data-id': item.id,
                        alt: item.alt,
                        src: item.src,
                    }),
                );
            });


            //Blocks section
            return el('section', {className: 'integrations', 'data-length': logo1.length},
                el('div', {className: 'container'},
                    el('div', {className: 'integrations__headline fade'},
                        el(RichText.Content, {
                            id: 'integrations__subtitle',
                            className: 'integrations__supname supname',
                            tagName: 'h4',
                            value: attributes.subtitle
                        }),
                        el(RichText.Content, {
                            id: 'integrations__title',
                            className: 'integrations__title title',
                            tagName: 'h2',
                            value: attributes.title
                        }),
                    ),
                    el('div', {className: 'integrations__list'},
                        el('div', {className: 'integrations__row integrations__slider-1 active'},
                            el('div', {className: 'integrations__asset'},
                                el(RichText.Content, {
                                    id: 'integrations__titleLogo__1',
                                    tagName: 'p',
                                    value: attributes.titleLogo1
                                }),
                                el('svg', {
                                        width: '13',
                                        height: '8',
                                        viewBox: '0 0 13 8',
                                        fill: 'none',
                                    },
                                    el('path', {
                                            d: 'M0.79289 0.792899C0.40237 1.1834 0.40237 1.8166 0.79289 2.2071L5.7929 7.20711C6.1834 7.59763 6.8166 7.59763 7.2071 7.20711L12.2071 2.2071C12.5976 1.8166 12.5976 1.1834 12.2071 0.792899C11.8166 0.402399 11.1834 0.402399 10.7929 0.792899L6.5 5.0858L2.20711 0.792899C1.81658 0.402399 1.18342 0.402399 0.79289 0.792899Z',
                                            fill: '#A3B1CD',
                                        },
                                    ),
                                ),
                            ),
                            el('div', {className: 'integrations__slider'},
                                blockquoteList1
                            ),
                            el('div', {className: 'integrations__arrow-left slick-next js-ripple'},
                                el(RichText.Content, {
                                    tagName: 'img',
                                    alt: 'integrations',
                                    src: '/wp-content/themes/opticore/src/img/arrll.svg',
                                }),
                            ),
                            el('div', {className: 'integrations__arrow-right slick-prev js-ripple'},
                                el(RichText.Content, {
                                    tagName: 'img',
                                    alt: 'integrations',
                                    src: '/wp-content/themes/opticore/src/img/arr-left.svg',
                                }),
                            ),
                        ),
                        el('div', {className: 'integrations__row integrations__slider-2'},
                            el('div', {className: 'integrations__asset'},
                                el(RichText.Content, {
                                    id: 'integrations__titleLogo__2',
                                    tagName: 'p',
                                    value: attributes.titleLogo2
                                }),
                                el('svg', {
                                        width: '13',
                                        height: '8',
                                        viewBox: '0 0 13 8',
                                        fill: 'none',
                                    },
                                    el('path', {
                                            d: 'M0.79289 0.792899C0.40237 1.1834 0.40237 1.8166 0.79289 2.2071L5.7929 7.20711C6.1834 7.59763 6.8166 7.59763 7.2071 7.20711L12.2071 2.2071C12.5976 1.8166 12.5976 1.1834 12.2071 0.792899C11.8166 0.402399 11.1834 0.402399 10.7929 0.792899L6.5 5.0858L2.20711 0.792899C1.81658 0.402399 1.18342 0.402399 0.79289 0.792899Z',
                                            fill: '#A3B1CD',
                                        },
                                    ),
                                ),
                            ),
                            el('div', {className: 'integrations__slider'},
                                blockquoteList2
                            ),
                            el('div', {className: 'integrations__arrow-left slick-next js-ripple'},
                                el(RichText.Content, {
                                    tagName: 'img',
                                    alt: 'integrations',
                                    src: '/wp-content/themes/opticore/src/img/arrll.svg',
                                }),
                            ),
                            el('div', {className: 'integrations__arrow-right slick-prev js-ripple'},
                                el(RichText.Content, {
                                    tagName: 'img',
                                    alt: 'integrations',
                                    src: '/wp-content/themes/opticore/src/img/arr-left.svg',
                                }),
                            ),
                        ),
                        el('div', {className: 'integrations__row integrations__slider-3'},
                            el('div', {className: 'integrations__asset'},
                                el(RichText.Content, {
                                    id: 'integrations__titleLogo__3',
                                    tagName: 'p',
                                    value: attributes.titleLogo3
                                }),
                                el('svg', {
                                        width: '13',
                                        height: '8',
                                        viewBox: '0 0 13 8',
                                        fill: 'none',
                                    },
                                    el('path', {
                                            d: 'M0.79289 0.792899C0.40237 1.1834 0.40237 1.8166 0.79289 2.2071L5.7929 7.20711C6.1834 7.59763 6.8166 7.59763 7.2071 7.20711L12.2071 2.2071C12.5976 1.8166 12.5976 1.1834 12.2071 0.792899C11.8166 0.402399 11.1834 0.402399 10.7929 0.792899L6.5 5.0858L2.20711 0.792899C1.81658 0.402399 1.18342 0.402399 0.79289 0.792899Z',
                                            fill: '#A3B1CD',
                                        },
                                    ),
                                ),
                            ),
                            el('div', {className: 'integrations__slider'},
                                blockquoteList3
                            ),
                            el('div', {className: 'integrations__arrow-left slick-next js-ripple'},
                                el(RichText.Content, {
                                    tagName: 'img',
                                    alt: 'integrations',
                                    src: '/wp-content/themes/opticore/src/img/arrll.svg',
                                }),
                            ),
                            el('div', {className: 'integrations__arrow-right slick-prev js-ripple'},
                                el(RichText.Content, {
                                    tagName: 'img',
                                    alt: 'integrations',
                                    src: '/wp-content/themes/opticore/src/img/arr-left.svg',
                                }),
                            ),
                        ),
                        el('div', {className: 'integrations__row integrations__slider-4'},
                            el('div', {className: 'integrations__asset'},
                                el(RichText.Content, {
                                    id: 'integrations__titleLogo__4',
                                    tagName: 'p',
                                    value: attributes.titleLogo4
                                }),
                                el('svg', {
                                        width: '13',
                                        height: '8',
                                        viewBox: '0 0 13 8',
                                        fill: 'none',
                                    },
                                    el('path', {
                                            d: 'M0.79289 0.792899C0.40237 1.1834 0.40237 1.8166 0.79289 2.2071L5.7929 7.20711C6.1834 7.59763 6.8166 7.59763 7.2071 7.20711L12.2071 2.2071C12.5976 1.8166 12.5976 1.1834 12.2071 0.792899C11.8166 0.402399 11.1834 0.402399 10.7929 0.792899L6.5 5.0858L2.20711 0.792899C1.81658 0.402399 1.18342 0.402399 0.79289 0.792899Z',
                                            fill: '#A3B1CD',
                                        },
                                    ),
                                ),
                            ),
                            el('div', {className: 'integrations__slider'},
                                blockquoteList4
                            ),
                            el('div', {className: 'integrations__arrow-left slick-next js-ripple'},
                                el(RichText.Content, {
                                    tagName: 'img',
                                    alt: 'integrations',
                                    src: '/wp-content/themes/opticore/src/img/arrll.svg',
                                }),
                            ),
                            el('div', {className: 'integrations__arrow-right slick-prev js-ripple'},
                                el(RichText.Content, {
                                    tagName: 'img',
                                    alt: 'integrations',
                                    src: '/wp-content/themes/opticore/src/img/arr-left.svg',
                                }),
                            ),
                        ),
                        el('div', {className: 'integrations__row integrations__slider-5'},
                            el('div', {className: 'integrations__asset'},
                                el(RichText.Content, {
                                    id: 'integrations__titleLogo__5',
                                    tagName: 'p',
                                    value: attributes.titleLogo5
                                }),
                                el('svg', {
                                        width: '13',
                                        height: '8',
                                        viewBox: '0 0 13 8',
                                        fill: 'none',
                                    },
                                    el('path', {
                                            d: 'M0.79289 0.792899C0.40237 1.1834 0.40237 1.8166 0.79289 2.2071L5.7929 7.20711C6.1834 7.59763 6.8166 7.59763 7.2071 7.20711L12.2071 2.2071C12.5976 1.8166 12.5976 1.1834 12.2071 0.792899C11.8166 0.402399 11.1834 0.402399 10.7929 0.792899L6.5 5.0858L2.20711 0.792899C1.81658 0.402399 1.18342 0.402399 0.79289 0.792899Z',
                                            fill: '#A3B1CD',
                                        },
                                    ),
                                ),
                            ),
                            el('div', {className: 'integrations__slider'},
                                blockquoteList5
                            ),
                            el('div', {className: 'integrations__arrow-left slick-next js-ripple'},
                                el(RichText.Content, {
                                    tagName: 'img',
                                    alt: 'integrations',
                                    src: '/wp-content/themes/opticore/src/img/arrll.svg',
                                }),
                            ),
                            el('div', {className: 'integrations__arrow-right slick-prev js-ripple'},
                                el(RichText.Content, {
                                    tagName: 'img',
                                    alt: 'integrations',
                                    src: '/wp-content/themes/opticore/src/img/arr-left.svg',
                                }),
                            ),
                        ),
                        el('div', {className: 'integrations__row integrations__slider-6 needArrow-mob'},
                            el('div', {className: 'integrations__asset'},
                                el(RichText.Content, {
                                    id: 'integrations__titleLogo__6',
                                    tagName: 'p',
                                    value: attributes.titleLogo6
                                }),
                                el('svg', {
                                        width: '13',
                                        height: '8',
                                        viewBox: '0 0 13 8',
                                        fill: 'none',
                                    },
                                    el('path', {
                                            d: 'M0.79289 0.792899C0.40237 1.1834 0.40237 1.8166 0.79289 2.2071L5.7929 7.20711C6.1834 7.59763 6.8166 7.59763 7.2071 7.20711L12.2071 2.2071C12.5976 1.8166 12.5976 1.1834 12.2071 0.792899C11.8166 0.402399 11.1834 0.402399 10.7929 0.792899L6.5 5.0858L2.20711 0.792899C1.81658 0.402399 1.18342 0.402399 0.79289 0.792899Z',
                                            fill: '#A3B1CD',
                                        },
                                    ),
                                ),
                            ),
                            el('div', {className: 'integrations__slider'},
                                blockquoteList6
                            ),
                            el('div', {className: 'integrations__arrow-left slick-next js-ripple'},
                                el(RichText.Content, {
                                    tagName: 'img',
                                    alt: 'integrations',
                                    src: '/wp-content/themes/opticore/src/img/arrll.svg',
                                }),
                            ),
                            el('div', {className: 'integrations__arrow-right slick-prev js-ripple'},
                                el(RichText.Content, {
                                    tagName: 'img',
                                    alt: 'integrations',
                                    src: '/wp-content/themes/opticore/src/img/arr-left.svg',
                                }),
                            ),
                        ),
                        el('div', {className: 'integrations__row integrations__slider-7 needArrow-mob'},
                            el('div', {className: 'integrations__asset'},
                                el(RichText.Content, {
                                    id: 'integrations__titleLogo__7',
                                    tagName: 'p',
                                    value: attributes.titleLogo7
                                }),
                                el('svg', {
                                        width: '13',
                                        height: '8',
                                        viewBox: '0 0 13 8',
                                        fill: 'none',
                                    },
                                    el('path', {
                                            d: 'M0.79289 0.792899C0.40237 1.1834 0.40237 1.8166 0.79289 2.2071L5.7929 7.20711C6.1834 7.59763 6.8166 7.59763 7.2071 7.20711L12.2071 2.2071C12.5976 1.8166 12.5976 1.1834 12.2071 0.792899C11.8166 0.402399 11.1834 0.402399 10.7929 0.792899L6.5 5.0858L2.20711 0.792899C1.81658 0.402399 1.18342 0.402399 0.79289 0.792899Z',
                                            fill: '#A3B1CD',
                                        },
                                    ),
                                ),
                            ),
                            el('div', {className: 'integrations__slider'},
                                blockquoteList7
                            ),
                            el('div', {className: 'integrations__arrow-left slick-next js-ripple'},
                                el(RichText.Content, {
                                    tagName: 'img',
                                    alt: 'integrations',
                                    src: '/wp-content/themes/opticore/src/img/arrll.svg',
                                }),
                            ),
                            el('div', {className: 'integrations__arrow-right slick-prev js-ripple'},
                                el(RichText.Content, {
                                    tagName: 'img',
                                    alt: 'integrations',
                                    src: '/wp-content/themes/opticore/src/img/arr-left.svg',
                                }),
                            ),
                        ),
                    ),
                ),
            );
        }
    });

})(window.wp.components, window.wp.element);
