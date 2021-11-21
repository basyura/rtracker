import { build } from 'electron-builder';

build({
  config: {
    productName: 'RTracker',
    copyright: '',
    files: ['dist/**/*'],
    directories: {
      output: 'release',
    },
    win: {
      target: 'nsis',
      publisherName: '',
      fileAssociations: [
        {
          ext: ['bmp', 'gif', 'jpeg', 'jpg', 'png', 'ico', 'svg', 'webp'],
          description: 'Image files',
        },
      ],
    },
    nsis: {
      oneClick: false,
      perMachine: false,
      installerIcon: 'assets/installer.ico',
      createDesktopShortcut: false,
      createStartMenuShortcut: true,
      artifactName:
        '${productName}-${version}-${platform}-${arch}-installer.${ext}',
    },
    mac: {
      identity: null,
      icon: 'assets/icon.icns',
      category: 'public.app-category.developer-tools',
      artifactName: '${productName}-${version}-${platform}-${arch}.${ext}',
      target: {
        target: 'default',
      },
      extendInfo: {
        CFBundleName: 'RTracker',
        CFBundleDisplayName: 'RTracker',
        CFBundleExecutable: 'RTracker',
        CFBundlePackageType: 'APPL',
        CFBundleDocumentTypes: [
          {
            CFBundleTypeName: 'ImageFile',
            CFBundleTypeRole: 'Viewer',
            LSHandlerRank: 'Default',
            LSItemContentTypes: [
              'com.google.webp',
              'com.microsoft.bmp',
              'com.microsoft.ico',
              'com.compuserve.gif',
              'public.jpeg',
              'public.png',
            ],
          },
        ],
        NSRequiresAquaSystemAppearance: false,
      },
    },
    dmg: {
      icon: 'assets/dmg.icns',
      sign: false,
    },
    linux: {
      target: 'AppImage',
      artifactName: '${productName}-${version}-${platform}-x64.${ext}',
    },
  },
})
  .then(() => console.log('Successfully completed.'))
  .catch((err) => console.log(err));
