/**
 * 基本的文本编辑支持，下一步需要确认如何实现动效，并结合起来
 */
import { App, Image, Text, Resource, HTMLText, Box } from 'leafer-editor';
import { TEST_DATA, TEST_CANVAS_HEIGHT, SCALE } from './data';
import { HtmlText, htmlTextManage, setLicense, setHTMLText } from '@chenyomi/leafer-htmltext-edit';
import { typewriter } from './typewriter';

class Editor {
    private app: App;

    constructor() {
        // this.init();
    }

    async auth() {
        const licenseKey =
            "eyJkYXRhIjoibEhyNU4xZitVNEtSaHJJbW9hNENhTmhPSE1RcGorQXdsckQvSmpHUC9pMXRZYThjbm8wS0JzRjJmSWw3RWd3YmxydThNdHRqbEpySkE1Y3JhMHNvY2JUanc5eW1pWHUvQTVOQWMrcFVRaFFkYWlUTFFoZTJnQmJidHhDSTEwNmMzK0VtM0NRU1BsR3JWZ3cxYmpKcW1abDF1N0hkOEpvcXF4V3lWUFJZSjYrbVJUOVZyREw5VFlqaC9INE9oVFdDRHVlNGdRVjlydlBjTTRiK0Q3clZ2NGxYK1BySW1YN1BnRlpRdkI0OUM2ZmtEM2ZrUGxFVzhBcHRYVEFiOVJrSVhXd3F5M2JDS3pPSGM5NTVLeFU0NXY0MkdHRUtKQm05czM2OHdxcmZoV0FVbWxrZnY1SG9SZHUwUERrVU1jSUhrSE9YcFpQc3g1RnhSZDhwdk1hSXlGRCtLMGRyaVdRM1ZzdUJoanZvV2YwPSIsInNpZ25hdHVyZSI6IkF6NEs0V0EvVSswRUE0dUljVXkzMTBVckxsZFVXd0NnWFVVRFFJeVdwM0wxTFE4bnFsb1Q3NWJ4VzZuUS9ROHF5aHpLa1dvbU5CM1JPdjVJbWJaQTkyeDRORjhXTjFKUmNnVGc0UHZsRzIra1lnbHdOS08xNjVNSzFnOEJHMWFsYmZPQUw0SVhYN0NtRTBTVDAvYWs1UWdIWTUwdlZqb29ReTJMeDA4V0RTOGFGNjN3Ny9lWkN5cTdrNzRsOUZZa1dCZnNJaFVHNVJkaVphSU9yNGFTMUpMRFNmUGlRSnJaNmxuZFQrOHdWaHpoWFBYaDhacHF1S243Q0tFWW5ISUtJTnVmNWk3VjFHbnFMd2R0ZkRRYmJ5SGhmMDhxTHRCQjNJY2ZCelVWVUFnclR5U3JXWXFDNCs3VEQyRUtBOHQ2TFdncm54TkRFQkRMUjRFQ2lMUVVrUT09IiwiZW5jcnlwdGVkIjp0cnVlfQ==";
        const success = await setLicense(licenseKey);
        if (!success) {
            console.error("License validation failed");
        }
        return success;
    }

    async init() {
        const { source, backgroundImage } = TEST_DATA;

        const authSuccess = await this.auth();
        if (!authSuccess) {
            return;
        }

        const app = new App({
            view: document.getElementById('editor')!,
            editor: {},
            tree: {},
        });

        this.app = app;
        htmlTextManage.init(app);

        if (backgroundImage) {
            const bgImage = new Image({
                url: backgroundImage,
                height: TEST_CANVAS_HEIGHT,
            });
            // 先硬编码背景图片的zIndex为-2
            bgImage.zIndex = -2;
            app.tree.add(bgImage);
        }

        if (source?.length) {
            source.forEach((item) => {
                const { backgroundTextElement, richTextSubtitleElement, titleElement, imageElement } = item;
                // 处理花字
                if (backgroundTextElement) {
                    const bgText = new Text({ ...backgroundTextElement.textOptions });

                    app.tree.add(bgText);
                    bgText.zIndex = backgroundTextElement.backgroundOptions.zIndex;
                    bgText.move(backgroundTextElement.backgroundOptions.x * SCALE, backgroundTextElement.backgroundOptions.y * SCALE, backgroundTextElement.backgroundOptions.y * SCALE);
                    bgText.scale = SCALE;
                }

                // 处理标题字
                if (titleElement) {
                    const titleText = new Text({ ...titleElement.textOptions });

                    app.tree.add(titleText);
                    titleText.zIndex = titleElement.backgroundOptions.zIndex;
                    titleText.move(titleElement.backgroundOptions.x * SCALE, titleElement.backgroundOptions.y * SCALE, titleElement.backgroundOptions.y * SCALE);
                    titleText.scale = SCALE;
                }

                // 处理图片
                if (imageElement) {
                    const { options } = imageElement;
                    const { x, y, ...rest } = options;
                    const img = new Image({
                        url: rest.url,
                        width: rest.width,
                        height: rest.height,
                    });
                    app.tree.add(img);
                    img.zIndex = options.zIndex;
                    img.move(x * SCALE, y * SCALE);
                    img.scale = SCALE;
                }

                // 处理富文本
                if (richTextSubtitleElement) {
                    const { textOptions, backgroundOptions } = richTextSubtitleElement;
                    const { text } = textOptions;
                    const { width, height, x, y, zIndex, fill } = backgroundOptions;
                    const box = new Box({
                        width,
                        height,
                        fill,
                    });

                    const htmlText = new HtmlText({
                        text,
                        width,
                        height,
                        fontSize: 50,
                    });

                    box.add(htmlText);

                    app.tree.add(box);
                    box.zIndex = zIndex;
                    box.move(x * SCALE, y * SCALE);
                    box.scale = SCALE;
                }
            });
        }
    };

    addText() {
        const app = this.app;
        const newText = new HtmlText({
            editable: true,
            draggable: true,
            alignContent: "start",
            fontSize: 80,
            name: 'newText',
            text: '<div style="font-size: 80px;">这是一行文本</div>',
        });

        app.tree.add(newText);
        newText.move(300 * SCALE, 600 * SCALE);
        newText.scale = SCALE;
    }

    exportJson() {
        const appJson = this.app.toJSON();
        console.log(appJson);
    }

    setArcText() {
        htmlTextManage.dateEdit((e: any) => {
            const rawText = htmlTextManage.getQuill()?.getText()?.replace(/\n$/, '')?.trim() || '弧形文字示例';
            const id = 'arc' + Date.now();
            e.text = `<svg xmlns="http://www.w3.org/2000/svg" width="320" height="130" viewBox="0 0 320 130"><defs><path id="${id}" d="M10,110 A155,155 0 0,1 310,110"/></defs><text font-size="26" font-weight="bold" fill="#333"><textPath href="#${id}">${rawText}</textPath></text></svg>`;
        }, 1);
    }

    setHTMLText(type: string, value?: any) {
        setHTMLText(type, value);
    }

    typewriter() {
        console.log('list', this.app.editor.list);
        const boxNode = this.app.tree.find('Box')[0];
        const HTMLTextNode = boxNode!.children![0]!.children![0];

        typewriter(HTMLTextNode! as HTMLText);
    }

    flyInFlyOut() {
        const boxNode = this.app.tree.find('Box')[0];
        const x = boxNode?.x || 0;
        const y = boxNode?.y || 0;
        boxNode?.move(x!, y!);
    }
}

const editor = new Editor();

export default editor;