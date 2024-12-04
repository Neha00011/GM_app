import firstimg from './firstimg.png';
import secondimg from './secongimg.png';
import backarrow from './backarrow.png';

// Define an interface for the images object
interface Images {
  firstimg: string;
  secondimg: string;
  backarrow: string;
}

// Initialize the images object using the interface
const images: Images = {
  firstimg,
  secondimg,
  backarrow,
};

export default images;
