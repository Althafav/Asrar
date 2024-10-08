
import { ContentItem, Elements } from '@kentico/kontent-delivery';

/**
 * Generated by '@kentico/kontent-model-generator@3.2.0'
 * Tip: You can replace 'ContentItem' with another generated class to fully leverage strong typing.
 */
export class Footer extends ContentItem {
    public logo!: Elements.AssetsElement;
    public content!: Elements.TextElement;
    public facebookLink!: Elements.TextElement;
    public address!: Elements.TextElement;
    public phone!: Elements.TextElement;
    public email!: Elements.TextElement;
    public twitterLink!: Elements.TextElement;
    public instagramLink!: Elements.TextElement;
    public linkedinLink!: Elements.TextElement;
    public mapImage!: Elements.AssetsElement;
    public footeritem!: Elements.LinkedItemsElement<ContentItem>;
    constructor() {
        super({
            propertyResolver: ((elementName: string) => {
                if (elementName === 'facebook_link') {
                    return 'facebookLink';
                }
                if (elementName === 'twitter_link') {
                    return 'twitterLink';
                }
                if (elementName === 'instagram_link') {
                    return 'instagramLink';
                }
                if (elementName === 'linkedin_link') {
                    return 'linkedinLink';
                }
                if (elementName === 'map_image') {
                    return 'mapImage';
                }
                return elementName;
            })
        });
    }
}
