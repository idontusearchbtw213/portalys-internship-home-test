import FontAwesome from '@expo/vector-icons/FontAwesome';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Ionicons from '@expo/vector-icons/Ionicons';
import Octicons from '@expo/vector-icons/Octicons';


type IconFamily = 'FontAwesome' | 'MaterialIcons' | 'Ionicons' | 'Octicons';

interface IconComponentProps {
  icon?: React.ReactNode;
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

export function TabBarIcon({ name, family, size = 24, color, icon, ...rest }: IconComponentProps) {
  if (icon) {
    return icon
  }
  const IconComponent = iconMapping[family];
  if (!IconComponent) {
    return null;
  }
  return <IconComponent name={name} size={size} color={color} {...rest as IconProps} />;
}

