
import { ContentItem, Elements } from '@kentico/kontent-delivery';

/**
 * Generated by '@kentico/kontent-model-generator@3.0.0'
 * Timestamp: Fri Sep 20 2024 16:58:46 GMT+0400 (Gulf Standard Time)
 *
 * Tip: You can replace 'ContentItem' with another generated class to fully leverage strong typing.
 */
export class Visitorprofile extends ContentItem {
    public heading!: Elements.TextElement;
    public banner!: Elements.AssetsElement;
    public content!: Elements.RichTextElement;
    public visitorimages!: Elements.AssetsElement;
    public visitorHeading!: Elements.TextElement;
    public visitorBlock1!: Elements.LinkedItemsElement<ContentItem>;
    public section1Background!: Elements.AssetsElement;
    public visitorBlock2!: Elements.LinkedItemsElement<ContentItem>;
    public solarEnergyBackground!: Elements.AssetsElement;
    public solarEnergyBlock!: Elements.LinkedItemsElement<ContentItem>;
    public visitorBlock3!: Elements.LinkedItemsElement<ContentItem>;
    public glassCraftBackground!: Elements.AssetsElement;
    public glassCraftHero!: Elements.LinkedItemsElement<ContentItem>;
    public glassCraftItem!: Elements.LinkedItemsElement<ContentItem>;
    public visitorBlock4!: Elements.LinkedItemsElement<ContentItem>;
    public pressBackground!: Elements.AssetsElement;
    public pressItem!: Elements.LinkedItemsElement<ContentItem>;
    public items!: Elements.LinkedItemsElement<ContentItem>;
    constructor() {
        super({
            propertyResolver: ((elementName: string) => {
                if (elementName === 'visitor_heading') {
                    return 'visitorHeading';
                }
                if (elementName === 'visitor_block1') {
                    return 'visitorBlock1';
                }
                if (elementName === 'section1_background') {
                    return 'section1Background';
                }
                if (elementName === 'visitor_block2') {
                    return 'visitorBlock2';
                }
                if (elementName === 'solar_energy_background') {
                    return 'solarEnergyBackground';
                }
                if (elementName === 'solar_energy_block') {
                    return 'solarEnergyBlock';
                }
                if (elementName === 'visitor_block3') {
                    return 'visitorBlock3';
                }
                if (elementName === 'glass_craft_background') {
                    return 'glassCraftBackground';
                }
                if (elementName === 'glass_craft_hero') {
                    return 'glassCraftHero';
                }
                if (elementName === 'glass_craft_item') {
                    return 'glassCraftItem';
                }
                if (elementName === 'visitor_block4') {
                    return 'visitorBlock4';
                }
                if (elementName === 'press_background') {
                    return 'pressBackground';
                }
                if (elementName === 'press_item') {
                    return 'pressItem';
                }
                return elementName;
            })
        });
    }
}
