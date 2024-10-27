const { FusesPlugin } = require('@electron-forge/plugin-fuses');
const { FuseV1Options, FuseVersion } = require('@electron/fuses');

module.exports = {
  packagerConfig: {
    asar: true,
  },
  publishers: [
    {
      name: '@electron-forge/publisher-github',
      config: {
        repository: {
          owner: 'Vodculen',
          name: 'Lingo-Logs'
        },
        prerelease: false,
        draft: true
      }
    }
  ],
  rebuildConfig: {},
  makers: [
    {
      // Windows download
      name: '@electron-forge/maker-squirrel',
      config: {
        target: 'nsis',
        arch: ['x64', 'ia32'],
      },
    },
    {
      // MacOS download
      name: '@electron-forge/maker-dmg',
      config: {
        target: 'dmg',
        arch: ['x64'],
      }
    },
    {
      // Debian Linux download
      name: '@electron-forge/maker-deb',
      config: {
        target: 'deb',
        arch: ['x64', 'arm64'],
      },
    },
    {
      // RPM Linux download
      name: '@electron-forge/maker-rpm',
      config: {
        target: 'rpm',
        arch: ['x64', 'arm64'],
      },
    },
  ],
  plugins: [
    {
      name: '@electron-forge/plugin-auto-unpack-natives',
      config: {},
    },
    // Fuses are used to enable/disable various Electron functionality
    // at package time, before code signing the application
    new FusesPlugin({
      version: FuseVersion.V1,
      [FuseV1Options.RunAsNode]: false,
      [FuseV1Options.EnableCookieEncryption]: true,
      [FuseV1Options.EnableNodeOptionsEnvironmentVariable]: false,
      [FuseV1Options.EnableNodeCliInspectArguments]: false,
      [FuseV1Options.EnableEmbeddedAsarIntegrityValidation]: true,
      [FuseV1Options.OnlyLoadAppFromAsar]: true,
    }),
  ],
};
