import * as StyleDictionary from 'style-dictionary';
import config from './config.json';

StyleDictionary.registerTransform({
  name: 'primitive-color-transformer',
  type: 'name',
  matcher: (token) => {
    return token.name.includes('primitive-colors-');
  },
  transformer: (token) => {
    return token.name.replace('primitive-colors-', '');
  },
});

StyleDictionary.registerTransformGroup({
  name: 'da/css',
  transforms: StyleDictionary.transformGroup['css'].concat(['primitive-color-transformer']),
});

StyleDictionary.registerTransformGroup({
  name: 'da/scss',
  transforms: StyleDictionary.transformGroup['scss'].concat(['primitive-color-transformer']),
});

StyleDictionary.registerTransformGroup({
  name: 'da/ts',
  transforms: StyleDictionary.transformGroup['js'],
});

StyleDictionary.registerFilter({
  name: 'da/filter-tokens',
  matcher: function (token) {
    if (token.name.includes('token-set') || token.name.includes('TokenSet')) {
      return false;
    }

    if (token.name.includes('old') || token.name.includes('Old')) {
      return false;
    }

    return true;
  },
});

StyleDictionary.extend(config).buildAllPlatforms();
