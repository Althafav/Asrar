
import { ContentItem, Elements } from '@kentico/kontent-delivery';

/**
 * Generated by '@kentico/kontent-model-generator@3.2.0'
 * Tip: You can replace 'ContentItem' with another generated class to fully leverage strong typing.
 */
export class Home extends ContentItem {
    public homebanner!: Elements.LinkedItemsElement<ContentItem>;
    public homeabout!: Elements.LinkedItemsElement<ContentItem>;
    public homeExhibit!: Elements.LinkedItemsElement<ContentItem>;
    public whyVisit!: Elements.RichTextElement;
    public homeBlogs!: Elements.LinkedItemsElement<ContentItem>;
    public homeNews!: Elements.LinkedItemsElement<ContentItem>;
    public heroHeading!: Elements.TextElement;
    public heroContent!: Elements.RichTextElement;
    public heroLocale!: Elements.TextElement;
    public heroLink!: Elements.TextElement;
    constructor() {
        super({
            propertyResolver: ((elementName: string) => {
                if (elementName === 'home_exhibit') {
                    return 'homeExhibit';
                }
                if (elementName === 'why_visit') {
                    return 'whyVisit';
                }
                if (elementName === 'home_blogs') {
                    return 'homeBlogs';
                }
                if (elementName === 'home_news') {
                    return 'homeNews';
                }
                if (elementName === 'hero_heading') {
                    return 'heroHeading';
                }
                if (elementName === 'hero_content') {
                    return 'heroContent';
                }
                if (elementName === 'hero_locale') {
                    return 'heroLocale';
                }
                if (elementName === 'hero_link') {
                    return 'heroLink';
                }
                return elementName;
            })
        });
    }
}
