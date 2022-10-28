import { $obtain } from '@kodadot1/minipfs';
import logger from './logger';
import { ensure } from './types';

export const fetchMetadata = async <T>(metadata: string): Promise<T> => {
  try {
    if (!metadata) {
      return ensure<T>({});
    }

    const url = new URL(metadata);
    const newMetadata = `https://r2.infura-ipfs.io/${url.pathname}`;

    return await $obtain<T>(newMetadata);
  } catch (e) {
    logger.warn('IPFS Err', e);
  }

  return ensure<T>({});
};
