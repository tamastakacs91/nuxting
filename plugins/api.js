import Auth from '@/api/auth';
import Signup from '@/api/signup';

export default (context, inject) => {
  // Initialize API factories

  const myApi = context.$axios.create({
    headers: {
      common: {
        Accept: 'text/plain, */*',
      },
    },
  });

  const starWarsApi = context.$axios.create({
    headers: {
      common: {
        Accept: 'text/plain, */*',
      },
    },
  });

  myApi.setBaseURL('https://my_api.com');
  starWarsApi.setBaseURL('https://swapi.dev/api');

  const factories = {
    auth: Auth(myApi),
    signup: Signup(starWarsApi),
  };

  //  factories.signup.setBaseUrl('https://www.vikiestomi.hu')

  // Inject $api
  inject('api', factories);
};
