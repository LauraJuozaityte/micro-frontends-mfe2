import { NextFederationPlugin } from '@module-federation/nextjs-mf';

/**
 * @type {import('next').NextConfig}
 */
export default {
  webpack: (config, options) => {
    const { isServer } = options;
    
    config.plugins.push(
      new NextFederationPlugin({
        name: 'mfe2',
        filename: 'static/chunks/remoteEntry.js',

        exposes: {
          './Nav': './components/Nav.tsx', 
          './add': './utils/add.ts',
          './multiplyByTwo': './utils/multiplyByTwo.ts', 
        },

        shared: {
          // shared modules
        },
      })
    );
    return config;
  },
};





/*import { NextFederationPlugin } from '@module-federation/nextjs-mf';

const nextConfig = {
  reactStrictMode: true,
  webpack(config, options) {
    config.plugins.push(
      new NextFederationPlugin({
        name: 'mfe2',
        filename: 'static/chunks/remoteEntry.js',

        exposes: {
          './Nav': './components/Nav.tsx', 
          './add': './utils/add.ts',
          './multiplyByTwo': './utils/multiplyByTwo.ts', 
        },

        remotes: {},

        shared: {
          react: {
            singleton: true,
            requiredVersion: '^18.0.0',  
            eager: true,
          },
          'react-dom': {
            singleton: true,
            requiredVersion: '^18.0.0',  
            eager: true,
          },
        },

        initOptions: {
          globalName: 'mfe2',
          shareStrategy: 'loaded-first',
        },

        extraOptions: {
          exposePages: true,
          enableImageLoaderFix: true,
          enableUrlLoaderFix: true,
        },
      })
    )
    return config
  }
};

export default nextConfig;

*/