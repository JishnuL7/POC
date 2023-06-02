import { classesToString, debug } from '~/helpers';

class RootService {
  public getClasses(variant: string, className: string) {
    const base = classesToString([
      'uxdl-secondary-footer__root',
      [variant, `uxdl-secondary-footer__root--${variant}`],
      className || ''
    ]);

    debug(`RootService getClasses: base: ${base}`);
    return { base };
  }
}

export const rootService = new RootService();
