import {ImageSourcePropType} from 'react-native';

export interface props {
  buttonName?: string;
  cardname?: string;
  imageUrl?: ImageSourcePropType;
  type?: any;
  onClick?: () => void;
}
