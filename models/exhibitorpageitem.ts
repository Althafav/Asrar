
import { ContentItem, Elements } from '@kentico/kontent-delivery';

/**
 * Generated by '@kentico/kontent-model-generator@3.2.0'
 * Tip: You can replace 'ContentItem' with another generated class to fully leverage strong typing.
 */
export class Exhibitorpageitem extends ContentItem {
    public name!: Elements.TextElement;
    public sector!: Elements.TextElement;
    public standNumber!: Elements.TextElement;
    public country!: Elements.TextElement;
    public email!: Elements.TextElement;
    public website!: Elements.TextElement;
    public logo!: Elements.AssetsElement;
    public postshowReport!: Elements.AssetsElement;
    constructor() {
        super({
            propertyResolver: ((elementName: string) => {
                if (elementName === 'stand_number') {
                    return 'standNumber';
                }
                if (elementName === 'postshow_report') {
                    return 'postshowReport';
                }
                return elementName;
            })
        });
    }
}
