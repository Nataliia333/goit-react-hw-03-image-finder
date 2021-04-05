import axios from 'axios';

const apiKey = '19964134-f54b1836ef9c2cc5adbbfd779';

const fetchImages = ({ searchQuery = '', currentPage = 1, pageSize = 12 }) => {
  return axios
    .get(
      `https://pixabay.com/api/?q=${searchQuery}&page=${currentPage}&key=${apiKey}&image_type=photo&orientation=horizontal&per_page=${pageSize}`,
    )
    .then(responce => responce.data);
};

export default fetchImages;
