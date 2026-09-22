import { SocialNetwork } from '../../shared/contact';

export interface SuperSocialRowProps {
  /** Redes a mostrar, en orden. Por defecto, todas las del ecosistema. */
  networks?: SocialNetwork[];
}
