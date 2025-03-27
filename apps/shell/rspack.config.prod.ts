import { composePlugins, withNx, withReact } from '@nx/rspack';
import { withModuleFederation } from '@nx/module-federation/rspack';
import { ModuleFederationConfig } from '@nx/module-federation';
import path from 'path';

import baseConfig from './module-federation.config';

const prodConfig: ModuleFederationConfig = {
  ...baseConfig,
  /*
   * Remote overrides for production.
   * Each entry is a pair of a unique name and the URL where it is deployed.
   *
   * e.g.
   * remotes: [
   *   ['app1', 'http://app1.example.com'],
   *   ['app2', 'http://app2.example.com'],
   * ]
   *
   * You can also use a full path to the remoteEntry.js file if desired.
   *
   * remotes: [
   *   ['app1', 'http://example.com/path/to/app1/remoteEntry.js'],
   *   ['app2', 'http://example.com/path/to/app2/remoteEntry.js'],
   * ]
   */
  remotes: [
    ['widget1', 'http://localhost:4201/'],
    ['widget2', 'http://localhost:4202/'],
  ],
};

// Nx plugins for rspack to build config object from Nx options and context.
/**
 * DTS Plugin is disabled in Nx Workspaces as Nx already provides Typing support for Module Federation
 * The DTS Plugin can be enabled by setting dts: true
 * Learn more about the DTS Plugin here: https://module-federation.io/configure/dts.html
 */
export default composePlugins(
  withNx(),
  withReact(),
  withModuleFederation(prodConfig, { dts: false }),
  (config) => {
    // Modify the output configuration for the embedded bundle
    if (config.output) {
      config.output.filename = 'shell-app.js';
      config.output.library = 'ShellApp';
      config.output.libraryTarget = 'umd';
      config.output.globalObject = 'this';
      // Clean the output directory before build
      config.output.clean = true;
    }

    return config;
  }
);
