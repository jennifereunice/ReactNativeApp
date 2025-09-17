// const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');

// /**
//  * Metro configuration
//  * https://reactnative.dev/docs/metro
//  *
//  * @type {import('@react-native/metro-config').MetroConfig}
//  */
// const config = {};

// module.exports = mergeConfig(getDefaultConfig(__dirname), config);
const path = require('path');
const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');

const config = {
  watchFolders: [
    path.resolve(__dirname, '../react-native-apxor-sdk/packages/react-native-apxor-sdk')
  ],
  resolver: {
    extraNodeModules: {
      // Redirect imports from SDK to main app node_modules
      react: path.resolve(__dirname, 'node_modules/react'),
      'react-native': path.resolve(__dirname, 'node_modules/react-native'),
      '@babel/runtime': path.resolve(__dirname, 'node_modules/@babel/runtime')
    }
  }
};

module.exports = mergeConfig(getDefaultConfig(__dirname), config);



// const path = require('path');
// const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');

// const localModules = {
//   'react-native-apxor-sdk': '../react-native-apxor-sdk/packages/react-native-apxor-sdk',
//   'react-native-apxor-rtm-plugin': '../react-native-apxor-sdk/packages/react-native-apxor-rtm-plugin',
//   'core': '../core',
//   'qe': '../qe',
//   'rtm-x': '../rtm-x',
//   'surveys': '../surveys',
//   'wysiwyg': '../wysiwyg'
// };

// const extraNodeModules = {};
// const watchFolders = [];

// for (const [name, relativePath] of Object.entries(localModules)) {
//   const absolutePath = path.resolve(__dirname, relativePath);

//   // Only include folders that exist to prevent ENOENT
//   const fs = require('fs');
//   if (fs.existsSync(absolutePath)) {
//     extraNodeModules[name] = absolutePath;
//     watchFolders.push(absolutePath);
//   }
// }

// const defaultConfig = getDefaultConfig(__dirname);

// module.exports = mergeConfig(defaultConfig, {
//   resolver: {
//     extraNodeModules,
//   },
//   watchFolders,
// });
