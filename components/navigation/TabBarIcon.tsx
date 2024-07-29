import FontAwesome from '@expo/vector-icons/FontAwesome';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Ionicons from '@expo/vector-icons/Ionicons';
import Octicons from '@expo/vector-icons/Octicons';


type IconFamily = 'FontAwesome' | 'MaterialIcons' | 'Ionicons' | 'Octicons';

interface IconComponentProps {
  name: string;
  family: IconFamily;
  size?: number;
  color?: string;
  [key: string]: any;
}

const iconMapping: Record<IconFamily, React.ComponentType<any>> = {
  FontAwesome,
  MaterialIcons,
  Ionicons,
  Octicons
};

type IconProps = typeof FontAwesome | typeof MaterialIcons | typeof Ionicons | typeof Octicons;

export function TabBarIcon({ name, family, size = 24, color, ...rest }: IconComponentProps) {
  const IconComponent = iconMapping[family];
  if (!IconComponent) {
    console.warn(`Icon family "${family}" is not recognized.`);
    return null;
  }
  return <IconComponent name={name} size={size} color={color} {...rest as IconProps} />;
}

