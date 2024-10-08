
import { ContentItem, Elements } from '@kentico/kontent-delivery';

/**
 * Generated by '@kentico/kontent-model-generator@3.0.0'
 * Timestamp: Fri Jul 05 2024 14:28:59 GMT+0400 (Gulf Standard Time)
 *
 * Tip: You can replace 'ContentItem' with another generated class to fully leverage strong typing.
 */
export class Homeabout extends ContentItem {
    public heading!: Elements.TextElement;
    public content!: Elements.RichTextElement;
    public btnLocale!: Elements.TextElement;
    public btnLink!: Elements.TextElement;
    public youtubeembedlink!: Elements.TextElement;
    public thumbnail!: Elements.AssetsElement;
    constructor() {
        super({
            propertyResolver: ((elementName: string) => {
                if (elementName === 'btn_locale') {
                    return 'btnLocale';
                }
                if (elementName === 'btn_link') {
                    return 'btnLink';
                }
                return elementName;
            })
        });
    }
}
