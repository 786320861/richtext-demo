export interface LineHeight {
    type: 'px' | 'percent' | 'auto'
    value: number
}

export interface LetterSpacing {
    type: 'px' | 'percent' | 'auto'
    value: number
}

export interface Attribute {
    end: number
    start: number
    duration: number
}

export interface TextOptions {
    fill?: string
    text: string
    width: number
    height?: number
    stroke?: string
    padding?: number[]
    editable?: boolean
    fontSize?: number | string
    draggable?: boolean
    fontFamily?: string
    fontWeight?: string
    lineHeight?: LineHeight
    strokeWidth?: number
    letterSpacing?: LetterSpacing
    textAlign?: 'left' | 'center' | 'right'
    url?: string
    elementList?: TextElement[]
    originalZoom?: number
}

export interface TextElement {
    bold: boolean
    font: string
    size: number
    color: string
    value: string
    italic: boolean
    textStroke: string
    letterSpacing: number
    basicRowMarginHeight: number
}

export interface AnimationConfig {
    key: string
    duration: number
    direction?: string
}

export interface Keyframe {
    x?: number
    opacity?: number
    y?: number
    scale?: number
    rotation?: number
    [key: string]: number | string | undefined
}

export interface AnimationOptions {
    configs?: AnimationConfig
    animation?: {
        easing?: string
        duration?: number
        keyframes?: Keyframe[]
    }
}

export interface BackgroundOptions {
    x: number
    y: number
    fill: string
    width: number
    height?: number
    zIndex: number
}

export interface DubOptions {
    type: string
    speak: string
    speed: number
    volume: number
    audioUrl: string
    audioEnable: boolean
}

export interface RichTextSubtitleElement {
    dubOptions: DubOptions
    textOptions: TextOptions
    animationOptions: AnimationOptions
    backgroundOptions: BackgroundOptions
}

export interface BackgroundTextElement {
    textOptions: TextOptions
    animationOptions: AnimationOptions
    backgroundOptions: BackgroundOptions
}

export interface TitleElement {
    textOptions: TextOptions
    animationOptions: AnimationOptions
    backgroundOptions: BackgroundOptions
}

export interface ImageOptions {
    x: number
    y: number
    url: string
    width: number
    height: number
    zIndex: number
    imgFrom: string
    editable?: boolean
    draggable?: boolean
}

export interface ImageElement {
    options: ImageOptions
    animationOptions: AnimationOptions
}

export interface DubAudio {
    enable: boolean
    volume: number
}

export interface VideoAudio {
    enable: boolean
    volume: number
}

export interface SourceAudio {
    enable: boolean
    volume: number
}

export interface BackgroundAudio {
    enable: boolean
    volume: number
}

export interface BackgroundOption {
    filterBlur: number
}

export type SourceItem = {
    id: string
    attribute: Attribute
    fragmentDuration?: number
    backgroundTextElement?: BackgroundTextElement
    richTextSubtitleElement?: RichTextSubtitleElement
    titleElement?: TitleElement
    imageElement?: ImageElement
    imgFrom?: string
}

export interface TestData {
    source: SourceItem[]
    dubAudio: DubAudio
    duration: number
    videoAudio: VideoAudio
    sourceAudio: SourceAudio
    sourceImgFrom: string
    backgroundAudio: BackgroundAudio
    backgroundColor: string
    backgroundImage: string
    backgroundOption: BackgroundOption
}

export const TEST_DATA: TestData = {
    source: [
        {
            id: 'source-EWDite',
            attribute: {
                end: 6421667,
                start: 0,
                duration: 6421667
            },
            backgroundTextElement: {
                textOptions: {
                    fill: '#ffffff',
                    text: '花字',
                    width: 158,
                    height: 129,
                    stroke: '#FF822C',
                    padding: [10, 10, 10, 10],
                    editable: true,
                    fontSize: 60,
                    draggable: true,
                    fontFamily: 'SourceHanSansCN-Regular',
                    fontWeight: 'normal',
                    lineHeight: {
                        type: 'px',
                        value: 90
                    },
                    strokeWidth: 10,
                    letterSpacing: {
                        type: 'px',
                        value: 1
                    }
                },
                animationOptions: {},
                backgroundOptions: {
                    x: 50,
                    y: 500,
                    fill: 'rgba(255,255,255,0)',
                    width: 158,
                    height: 129,
                    zIndex: 9
                }
            }
        },
        {
            id: 'fragment-0-source-0-sub',
            attribute: {
                end: 6416667,
                start: 0,
                duration: 6416667
            },
            fragmentDuration: 6421667,
            richTextSubtitleElement: {
                dubOptions: {
                    type: 'zh_female_zhixingnvsheng_mars_bigtts',
                    speak: '<span >77岁的张亚凤拉着拉杆箱步行两站路去排练。</span><span >她曾</span><span >是"社恐"，如今在手风琴和合唱中找</span><span >到了快乐。她说："拉手风琴是我小时</span><span >候的梦想，合唱是我生命中最甜蜜的时光。"</span>',
                    speed: 1,
                    volume: 1,
                    audioUrl: '',
                    audioEnable: false
                },
                textOptions: {
                    url: 'https://fwimage-oss.cnfanews.com/projects/videoclip/v/4693/2026/0fbc71d2238c461e8008a49ab228010e.png',
                    text: '<span  style="font-family: SourceHanSansCN-Medium; color: rgb(255, 255, 255); font-weight: 600; font-size: 50px; margin: 6px 0px; letter-spacing: 1.2px;">77岁的张亚凤拉着拉杆箱步行两站路去排练。</span><span  style="font-family: SourceHanSansCN-Medium; color: rgb(255, 255, 255); font-size: 50px; margin: 6px 0px; letter-spacing: 1.2px;">她曾</span><span  style="font-family: SourceHanSansCN-Medium; color: rgb(255, 255, 255); font-weight: 600; font-size: 50px; margin: 6px 0px; letter-spacing: 1.2px;">是"社恐"，如今在手风琴和合唱中找</span><span  style="font-family: SourceHanSansCN-Medium; color: rgb(208, 106, 226); font-weight: 600; font-style: italic; font-size: 50px; margin: 6px 0px; letter-spacing: 1.2px;">到了快乐。她说："拉手风琴是我小时</span><span  style="font-family: SourceHanSansCN-Medium; color: rgb(255, 255, 255); font-weight: 600; font-size: 50px; margin: 6px 0px; letter-spacing: 1.2px;">候的梦想，合唱是我生命中最甜蜜的时光。"</span>',
                    width: 835,
                    height: 513,
                    padding: [16, 16, 16, 16],
                    originalZoom: 40
                },
                animationOptions: {
                    configs: {
                        key: 'flyoutin',
                        duration: 1
                    },
                    animation: {
                        easing: 'ease-out',
                        duration: 1,
                        keyframes: [
                            {
                                x: 539.5,
                                opacity: 0
                            },
                            {
                                x: 122,
                                opacity: 1
                            }
                        ]
                    }
                },
                backgroundOptions: {
                    x: 122,
                    y: 1251,
                    fill: 'rgba(0,0,0,0.60)',
                    width: 835,
                    height: 513,
                    zIndex: 3
                }
            }
        },
        {
            id: 'fragment-0-source-1-title',
            attribute: {
                end: 6421667,
                start: 0,
                duration: 6421667
            },
            titleElement: {
                textOptions: {
                    fill: 'rgba(253,225,5,1)',
                    text: '文化养老 | 合唱是老舅妈们的快乐处方',
                    width: 884,
                    stroke: 'rgba(0,0,0,1)',
                    padding: [10, 10],
                    editable: true,
                    fontSize: '80',
                    draggable: true,
                    textAlign: 'center',
                    fontFamily: 'SourceHanSansCN-Bold',
                    fontWeight: 'normal',
                    lineHeight: {
                        type: 'px',
                        value: 90
                    },
                    strokeWidth: 6,
                    letterSpacing: {
                        type: 'px',
                        value: 1
                    }
                },
                animationOptions: {},
                backgroundOptions: {
                    x: 108,
                    y: 237,
                    fill: 'rgba(0,0,0,0)',
                    width: 884,
                    zIndex: 2
                }
            }
        },
        {
            id: 'fragment-0-source-2-img',
            imgFrom: 'Article',
            attribute: {
                end: 6421667,
                start: 0,
                duration: 6421667
            },
            imageElement: {
                options: {
                    x: 9.640573318632846,
                    y: 467,
                    url: 'https://wxsywttest.shobserver.com/files/thumbnails/2025/05/13/l_6388275623207876032372761.jpg?v=cLsQeU',
                    width: 1064.7188533627343,
                    height: 1073,
                    zIndex: -1,
                    imgFrom: 'local',
                    editable: true,
                    draggable: true
                },
                animationOptions: {
                    configs: {
                        key: 'no_animation',
                        duration: 5,
                        direction: ''
                    },
                    animation: {
                        duration: 0.1,
                        keyframes: [
                            {
                                opacity: 1
                            },
                            {
                                opacity: 1
                            }
                        ]
                    }
                }
            }
        }
    ],
    dubAudio: {
        enable: false,
        volume: 1
    },
    duration: 6421667,
    videoAudio: {
        enable: false,
        volume: 1
    },
    sourceAudio: {
        enable: false,
        volume: 1
    },
    sourceImgFrom: 'Article',
    backgroundAudio: {
        enable: true,
        volume: 1
    },
    backgroundColor: '#333',
    backgroundImage: 'https://fwimage-oss.cnfanews.com/projects/videoclip/2025/04/14/e8f4294236d349b9b5952b264bd1d193.jpg?v=EYqLbB',
    backgroundOption: {
        filterBlur: 0
    }
}


export const TEST_RATIO = [9, 16];

export const TEST_RESOLUTION = [1080, 1920];

export const TEST_CANVAS_HEIGHT = 600;

export const SCALE = TEST_CANVAS_HEIGHT / TEST_RESOLUTION[1]!;