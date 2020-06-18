import { Injectable } from '@angular/core';
import { AbstractSeoMetaTagsService } from './abstract-seo-meta-tags.service';
import { FacebookProp } from './facebook-prop.enum';

@Injectable({
  providedIn: 'root',
})
export class FacebookSeoTagsService extends AbstractSeoMetaTagsService {
  getUrl(): HTMLMetaElement | null {
    return this.getMetaProp(FacebookProp.URL);
  }

  /**
   * @description
   * L’URL réglementaire de votre page. Il doit s’agir de l’URL brute,
   * sans variables de session, paramètres d’identification de l’utilisateur,
   * ni compteurs. Les mentions J’aime et les
   * partages de cette URL sont compilés à cette URL.
   * Par exemple, les URL de domaine mobile doivent pointer vers la version bureau de l’URL en tant qu’URL réglementaire afin de compiler
   * les mentions J’aime et les partages répartis sur différentes versions de la page.
   */
  setUrl(url: string): this {
    return this.setMetaProp(FacebookProp.URL, url);
  }

  getType(): HTMLMetaElement | null {
    return this.getMetaProp(FacebookProp.TYPE);
  }

  /**
   * @description
   * Le type de support utilisé pour votre contenu.
   * Cette balise a un impact sur l’affichage de votre contenu dans le fil d’actualité.
   * Si vous ne précisez pas de type, le paramètre par défaut est website.
   * Chaque URL doit être un objet unique ; il n’est donc pas possible d’utiliser plusieurs valeurs og:type.
   * Retrouvez la liste complète de types d’objet dans Référence sur les types d’objet.
   */
  setType(type: string): this {
    return this.setMetaProp(FacebookProp.TYPE, type);
  }

  getTitle(): HTMLMetaElement | null {
    return this.getMetaProp(FacebookProp.TITLE);
  }

  /**
   * @description
   * Le titre de votre article sans aucune marque,
   * telle que le nom de votre site.
   */
  setTitle(title: string): this {
    return this.setMetaProp(FacebookProp.TITLE, title);
  }

  getDescription(): HTMLMetaElement | null {
    return this.getMetaProp(FacebookProp.DESCRIPTION);
  }

  /**
   * @description
   * Une courte description du contenu, généralement entre deux et quatre phrases.
   * Elle s’affiche sous le titre de la publication sur Facebook.
   */
  setDescription(description: string): this {
    return this.setMetaProp(FacebookProp.DESCRIPTION, description);
  }

  getImage(): HTMLMetaElement | null {
    return this.getMetaProp(FacebookProp.IMAGE);
  }

  /**
   * @description
   * L’URL de l’image qui apparaît lorsqu’un utilisateur partage le contenu sur Facebook.
   * Pour en savoir plus, reportez-vous à la section ci-dessous.
   * Vous pouvez également consulter notre guide des recommandations pour découvrir comment indiquer une image d’aperçu de qualité.
   */
  setImage(image: string): this {
    return this.setMetaProp(FacebookProp.IMAGE, image);
  }

  getAppId(): HTMLMetaElement | null {
    return this.getMetaProp(FacebookProp.APP_ID);
  }

  /**
   * @description
   * Afin de pouvoir utiliser les Insights Facebook,
   * vous devez ajouter l’ID d’app à votre page.
   * Les insights vous permettent de consulter l’analyse du trafic entre Facebook et votre site.
   * Retrouvez l’ID d’app dans votre Espace App.
   */
  setAppId(appId: string): this {
    return this.setMetaProp(FacebookProp.APP_ID, appId);
  }

  getLocale(): HTMLMetaElement | null {
    return this.getMetaProp(FacebookProp.LOCALE);
  }

  /**
   * @description
   * La langue de la ressource. Valeur par défaut : en_US.
   * Vous pouvez également utiliser une balise og:locale:alternate si vous avez des traductions disponibles dans d’autres langues.
   * Consultez notre document de localisation pour en savoir plus sur les langues prises en charge.
   */
  setLocale(locale: string): this {
    return this.setMetaProp(FacebookProp.LOCALE, locale);
  }
}
