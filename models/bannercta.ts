
import { ContentItem, Elements } from '@kentico/kontent-delivery';

/**
 * Generated by '@kentico/kontent-model-generator@3.0.0'
 * Timestamp: Fri Jul 05 2024 08:04:01 GMT+0400 (Gulf Standard Time)
 *
 * Tip: You can replace 'ContentItem' with another generated class to fully leverage strong typing.
 */
export class Bannercta extends ContentItem {
    public heading!: Elements.TextElement;
    public content!: Elements.RichTextElement;
    public image!: Elements.AssetsElement;
    public cta!: Elements.LinkedItemsElement<ContentItem>;
}
