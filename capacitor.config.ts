import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.drapii.app',
  appName: 'Drapii',
  webDir: 'www',
  server: {
    androidScheme: 'https'
  }
};

export default config;
