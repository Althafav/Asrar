
import { ContentItem, Elements } from '@kentico/kontent-delivery';

/**
 * Generated by '@kentico/kontent-model-generator@3.0.0'
 * Timestamp: Fri Sep 20 2024 14:42:40 GMT+0400 (Gulf Standard Time)
 *
 * Tip: You can replace 'ContentItem' with another generated class to fully leverage strong typing.
 */
export class Exhibitorspage extends ContentItem {
    public heading!: Elements.TextElement;
    public banner!: Elements.AssetsElement;
    public exhibitorsimages!: Elements.AssetsElement;
    public items!: Elements.LinkedItemsElement<ContentItem>;
}
