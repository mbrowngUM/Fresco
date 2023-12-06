import { AnalyticsClient } from '@codaco/analytics';
import { env } from '~/env.mjs';

const globalForAnalytics = globalThis as unknown as {
  analytics: AnalyticsClient | undefined;
};

export const analytics =
  globalForAnalytics.analytics ??
  new AnalyticsClient({
    maxmindAccountId: env.MAXMIND_ACCOUNT_ID,
    maxmindLicenseKey: env.MAXMIND_LICENSE_KEY,
  });

if (env.NODE_ENV !== 'production') globalForAnalytics.analytics = analytics;
