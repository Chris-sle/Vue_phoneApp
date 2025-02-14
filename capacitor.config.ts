import { CapacitorConfig } from '@capacitor/cli';

const config = {
  appId: 'io.ionic.starter',
  appName: 'Vue_phoneApp',
  webDir: 'dist',
  plugin: {
    "SplashScreen": {
      "launchShowDuration": 0
    }
  }
};

export default config;
