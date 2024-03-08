const NetworkManager = async <T>(
  lister: (data: any) => void,
  endPoint: string,
  method: string,
) => {
  let baseURL = 'https://api.dictionaryapi.dev/api/v2/entries/en';

  try {
    
    const response = await fetch(baseURL + endPoint, {
      method: method
    });

    if (response !== undefined) {

      if (response?.status === 200) {
        const data = await response.json();

        lister(data);
      } else if (response?.status === 404) {
        lister('not found');
      }
    }
  } catch (error: any) {
    console.log('error check ', error);

    lister(error);
  }
};

export {NetworkManager};
