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
    subtitleElement?: RichTextSubtitleElement
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
    "source": [
        {
            "id": "fragment-0-source-0-sub",
            "attribute": {
                "end": 4534000,
                "start": 0,
                "duration": 4534000
            },
            "subtitleElement": {
                "dubOptions": {
                    "type": "BV011_streaming",
                    "speak": "婺剧演员楼胜，从天蟾舞台的“小哥哥”成长为梅花奖榜首的“老大哥”从地方戏新人到满场喝彩，他始终记得上海专家那句“给地方戏一双起飞的翅膀”",
                    "speed": 1,
                    "volume": 1,
                    "audioUrl": "",
                    "audioEnable": false
                },
                "textOptions": {
                    "fill": "rgba(255,255,255,1)",
                    "text": "婺剧演员楼胜，从天蟾舞台的“小哥哥”成长为梅花奖榜首的“老大哥”从地方戏新人到满场喝彩，他始终记得上海专家那句“给地方戏一双起飞的翅膀”",
                    "width": 862,
                    "stroke": "#000000",
                    "padding": [
                        16,
                        16,
                        16,
                        16
                    ],
                    "editable": true,
                    "fontSize": "50",
                    "draggable": true,
                    "textAlign": "left",
                    "fontFamily": "SourceHanSansCN-Medium",
                    "fontWeight": "bold",
                    "lineHeight": {
                        "type": "px",
                        "value": 80
                    },
                    "strokeWidth": 0,
                    "letterSpacing": {
                        "type": "px",
                        "value": 3
                    }
                },
                "animationOptions": {
                    "configs": {
                        "key": "default",
                        "duration": 1
                    },
                    "animation": {}
                },
                "backgroundOptions": {
                    "x": 111,
                    "y": 1280,
                    "fill": "rgba(0,0,0,0.6)",
                    "width": 862,
                    "zIndex": 3
                }
            }
        },
        {
            "id": "fragment-0-source-1-title",
            "attribute": {
                "end": 4539000,
                "start": 0,
                "duration": 4539000
            },
            "titleElement": {
                "textOptions": {
                    "fill": "rgba(253,225,5,1)",
                    "text": "海上有客来",
                    "width": 884,
                    "stroke": "rgba(0,0,0,1)",
                    "padding": [
                        10,
                        10
                    ],
                    "editable": true,
                    "fontSize": "80",
                    "draggable": true,
                    "textAlign": "center",
                    "fontFamily": "SourceHanSansCN-Bold",
                    "fontWeight": "normal",
                    "lineHeight": {
                        "type": "px",
                        "value": 90
                    },
                    "strokeWidth": 6,
                    "letterSpacing": {
                        "type": "px",
                        "value": 1
                    }
                },
                "animationOptions": {},
                "backgroundOptions": {
                    "x": 108,
                    "y": 246,
                    "fill": "rgba(0,0,0,0)",
                    "width": 884,
                    "zIndex": 4
                }
            }
        },
        {
            "id": "fragment-0-source-2-img",
            "imgFrom": "Article",
            "attribute": {
                "end": 4539000,
                "start": 0,
                "duration": 4539000
            },
            "imageElement": {
                "options": {
                    "x": 3,
                    "y": 731.878084179971,
                    "url": "https://wxsywttest.shobserver.com/files/thumbnails/2025/05/22/l_6388353176935492677244013.png",
                    "width": 1073,
                    "height": 604.243831640058,
                    "zIndex": -1,
                    "imgFrom": "local",
                    "editable": true,
                    "draggable": true
                },
                "animationOptions": {
                    "configs": {
                        "key": "no_animation",
                        "duration": 2,
                        "direction": ""
                    },
                    "animation": {
                        "duration": 0.1,
                        "keyframes": [
                            {
                                "opacity": 1
                            },
                            {
                                "opacity": 1
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