const { FusesPlugin } = require('@electron-forge/plugin-fuses');
const { FuseV1Options, FuseVersion } = require('@electron/fuses');

module.exports = {
  packagerConfig: {
    asar: true,
    icon: 'src/assets/icons/Logo'
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
      // MacOS download
      name: '@electron-forge/maker-dmg',
      config: {
        background: './assets/help-one.png',
        format: 'ULFO'
      }
    },
    {
      // Windows download
      name: '@electron-forge/maker-squirrel',
      config: {
        certificateFile: './cert.pfx',
        certificatePassword: process.env.CERTIFICATE_PASSWORD
      }
    },
    {
      // Debian Linux download
      name: '@electron-forge/maker-deb',
      config: {
        target: 'deb',
        arch: ['x64', 'arm64'],
        options: {
          icon: 'src/assets/icons/Logo.png'
        }
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
