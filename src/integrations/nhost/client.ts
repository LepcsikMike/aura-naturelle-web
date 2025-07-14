import { NhostClient } from '@nhost/nextjs';

const nhost = new NhostClient({
  subdomain: process.env.NHOST_SUBDOMAIN || 'your-subdomain',
  region: process.env.NHOST_REGION || 'your-region',
});

export { nhost };