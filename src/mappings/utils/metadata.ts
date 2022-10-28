import { $obtain } from '@kodadot1/minipfs';
import logger from './logger';
import { ensure } from './types';

export const fetchMetadata = async <T>(metadata: string): Promise<T> => {
  try {
    if (!metadata) {
      return ensure<T>({});
    }
    return await $obtain<T>(metadata, [
      'aragon',
      'cf',
      'cloudflare',
      'dweb',
      'fleek',
      'gateway',
      'infura',
      'ipfs',
      'kodadot',
      'nftstorage',
      'pinata',
      'rmrk',
    ]);
  } catch (e) {
    logger.warn('IPFS Err', e);
  }

  return ensure<T>({});
};
