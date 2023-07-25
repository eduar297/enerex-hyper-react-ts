import { useState, useEffect } from 'react';

interface Country {
  name: string;
  code: string;
}

const fetchCountries = (): Promise<Country[]> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([
        { name: 'USA', code: 'US' },
        { name: 'United Kingdom', code: 'GB' },
        { name: 'Canada', code: 'CA' },
        { name: 'Australia', code: 'AU' },
        { name: 'Germany', code: 'DE' },
      ]);
    }, 1000);
  });
};

const useCountries = (): {
  countries: Country[];
  loading: boolean;
  error: any;
} => {
  const [countries, setCountries] = useState<Country[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    setLoading(true);
    setCountries([]);
    setError(null);
    fetchCountries()
      .then((data) => {
        setCountries(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, []);

  return { countries, loading, error };
};

export default useCountries;
