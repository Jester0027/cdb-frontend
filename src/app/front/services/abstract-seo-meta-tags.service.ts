import { Injectable } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { FacebookProp } from './facebook-prop.enum';
import { TwitterProp } from './twitter-prop.enum';

type MetaProp = FacebookProp | TwitterProp;

@Injectable({
  providedIn: 'root'
})
export abstract class AbstractSeoMetaTagsService {

  protected constructor(protected meta: Meta) {
  }

  protected getMetaProp(prop: MetaProp): HTMLMetaElement | null {
    return this.meta.getTag(`property="${ prop }"`);
  }

  protected setMetaProp(prop: MetaProp, value: string): this {
    if (this.meta.getTag(`property="${ prop }"`)) {
      this.meta.updateTag({property: prop, content: value});
    } else {
      this.meta.addTag({property: prop, content: value});
    }
    return this;
  }
}
