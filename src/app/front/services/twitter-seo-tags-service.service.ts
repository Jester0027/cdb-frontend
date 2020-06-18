import { Injectable } from '@angular/core';
import { AbstractSeoMetaTagsService } from './abstract-seo-meta-tags.service';
import { TwitterCardType, TwitterProp } from './twitter-prop.enum';

@Injectable({
  providedIn: 'root'
})
export class TwitterSeoTagsServiceService extends AbstractSeoMetaTagsService {
  public getTitle(): HTMLMetaElement | null {
    return this.getMetaProp(TwitterProp.TITLE);
  }

  public setTitle(title: string): this {
    return this.setMetaProp(TwitterProp.TITLE, title);
  }

  public getCard(): HTMLMetaElement | null {
    return this.getMetaProp(TwitterProp.CARD);
  }

  public setCard(card: TwitterCardType): this {
    return this.setMetaProp(TwitterProp.CARD, card);
  }

  public getCreator(): HTMLMetaElement | null {
    return this.getMetaProp(TwitterProp.CREATOR);
  }

  public setCreator(creator: string): this {
    return this.setMetaProp(TwitterProp.CREATOR, creator);
  }

  public getSite(): HTMLMetaElement | null {
    return this.getMetaProp(TwitterProp.SITE);
  }

  public setSite(site: string): this {
    return this.setMetaProp(TwitterProp.SITE, site);
  }

  public getDescription(): HTMLMetaElement | null {
    return this.getMetaProp(TwitterProp.DESCRIPTION);
  }

  public setDescription(description: string): this {
    return this.setMetaProp(TwitterProp.DESCRIPTION, description);
  }

  public getImage(): HTMLMetaElement | null {
    return this.getMetaProp(TwitterProp.IMAGE);
  }

  public setImage(image: string): this {
    return this.setMetaProp(TwitterProp.IMAGE, image);
  }
}
