import axios from 'axios';
import {api} from './config';

export default axios.create({
  baseURL: api.baseURL+'/api',
});
