import { useState, useEffect, useMemo } from 'react';

const fetchStates = (countryCode: string): Promise<State[]> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      switch (countryCode) {
        case 'US':
          resolve([
            { name: 'Alabama', code: 'AL' },
            { name: 'Alaska', code: 'AK' },
            { name: 'Arizona', code: 'AZ' },
          ]);
          break;
        case 'CA':
          resolve([
            { name: 'Alberta', code: 'AB' },
            { name: 'British Columbia', code: 'BC' },
            { name: 'Manitoba', code: 'MB' },
          ]);
          break;
        case 'AU':
          resolve([
            { name: 'New South Wales', code: 'NSW' },
            { name: 'Queensland', code: 'QLD' },
            { name: 'South Australia', code: 'SA' },
          ]);
          break;
        case 'GB':
          resolve([
            { name: 'England', code: 'ENG' },
            { name: 'Northern Ireland', code: 'NIR' },
            { name: 'Scotland', code: 'SCT' },
            { name: 'Wales', code: 'WLS' },
          ]);
          break;
        case 'DE':
          resolve([
            { name: 'Baden-Württemberg', code: 'BW' },
            { name: 'Bavaria', code: 'BY' },
            { name: 'Berlin', code: 'BE' },
            { name: 'Brandenburg', code: 'BB' },
          ]);
          break;
        default:
          reject(new Error('Invalid country code'));
      }
    }, 1000);
  });
};

interface State {
  name: string;
  code: string;
}

const useStates = (
  countryCode: string,
): {
  states: State[];
  loading: boolean;
  error: any;
} => {
  const [states, setStates] = useState<State[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<any>(null);

  const cache = useMemo(() => new Map<string, State[]>(), []);

  useEffect(() => {
    setLoading(true);
    setStates([]);
    setError(null);
    if (cache.has(countryCode)) {
      setStates(cache.get(countryCode)!);
      setLoading(false);
    } else {
      fetchStates(countryCode)
        .then((data) => {
          setStates(data);
          cache.set(countryCode, data);
          setLoading(false);
        })
        .catch((err) => {
          setError(err);
          setLoading(false);
        });
    }
  }, [countryCode, cache]);

  return { states, loading, error };
};

export default useStates;
