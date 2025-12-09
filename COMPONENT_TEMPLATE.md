# Guía para Crear Componentes y Screens

## Estructura de Componentes

Los componentes se organizan con el prefijo "Super" antes del nombre:

```
src/components/SuperButton/
  ├── SuperButton.tsx        # Componente principal
  ├── SuperButton.scss       # Estilos del componente
  └── SuperButton.types.ts   # Tipos TypeScript
```

### Ejemplo de Componente:

**SuperButton.types.ts**
```typescript
import { ButtonHTMLAttributes } from 'react';

export interface SuperButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  size?: 'small' | 'medium' | 'large';
}
```

**SuperButton.tsx**
```typescript
import React from 'react';
import { SuperButtonProps } from './SuperButton.types';
import './SuperButton.scss';

export const SuperButton: React.FC<SuperButtonProps> = ({
  children,
  variant = 'primary',
  size = 'medium',
  ...rest
}) => {
  return (
    <button className={`super-button super-button--${variant} super-button--${size}`} {...rest}>
      {children}
    </button>
  );
};
```

**SuperButton.scss**
```scss
@import '../../styles/abstracts/variables';
@import '../../styles/abstracts/mixins';

.super-button {
  padding: $spacing-md;
  // estilos aquí
}
```

---

## Estructura de Screens

Las screens se organizan con el sufijo "Screen" al final:

```
src/features/Home/Screens/HomeScreen/
  ├── HomeScreen.tsx        # Screen principal
  ├── HomeScreen.scss       # Estilos del screen
  └── HomeScreen.types.ts   # Tipos TypeScript
```

### Ejemplo de Screen:

**HomeScreen.types.ts**
```typescript
export interface HomeScreenProps {
  // Props aquí
}
```

**HomeScreen.tsx**
```typescript
import React from 'react';
import { useResponsive } from '../../../../shared/useResponsive';
import { useTheme } from '../../../../shared/useTheme';
import { HomeScreenProps } from './HomeScreen.types';
import './HomeScreen.scss';

export const HomeScreen: React.FC<HomeScreenProps> = () => {
  const { isMobile, isTablet } = useResponsive();
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="home-screen">
      {/* contenido aquí */}
    </div>
  );
};
```

**HomeScreen.scss**
```scss
@import '../../../../styles/abstracts/variables';
@import '../../../../styles/abstracts/mixins';

.home-screen {
  padding: $spacing-lg;

  @include mobile {
    padding: $spacing-md;
  }
}
```

---

## Hooks Disponibles

### useResponsive()
```typescript
const { deviceType, isMobile, isTablet, isDesktop, isWide, width } = useResponsive();

// deviceType: 'mobile' | 'tablet' | 'desktop' | 'wide'
// isMobile, isTablet, isDesktop, isWide: boolean
// width: número del ancho actual
```

### useTheme()
```typescript
const { theme, toggleTheme, setLightTheme, setDarkTheme, isDark, isLight } = useTheme();

// theme: 'light' | 'dark'
// toggleTheme: función para cambiar entre temas
// isDark, isLight: boolean
```

---

## Estilos con Sass (Patrón 7-1)

Estructura de carpetas:
```
src/styles/
  ├── abstracts/        # Variables, mixins, funciones
  ├── base/            # Reset, tipografía
  ├── components/      # Estilos de componentes
  ├── layout/          # Layout (header, footer, etc)
  ├── pages/           # Estilos específicos de páginas
  ├── themes/          # Temas (light/dark)
  ├── vendors/         # Librerías externas
  └── main.scss        # Archivo principal que importa todo
```

### Uso de Variables CSS Dinámicas
Los colores usan variables CSS que cambian con el tema:
```scss
.my-component {
  background-color: var(--color-background);
  color: var(--color-text-primary);
}
```

---

## IMPORTANTE: NO usar index

❌ NO crear archivos `index.ts` o `index.tsx` para exportar componentes
✅ Importar directamente desde el archivo del componente

```typescript
// ❌ Evitar esto
import { SuperButton } from './components/SuperButton';

// ✅ Hacer esto
import { SuperButton } from './components/SuperButton/SuperButton';
```

---

## Navegación

Las rutas se organizan en la carpeta `Routes` dentro de cada feature:

```
src/features/Home/Routes/HomeRoutes.tsx
```

**Ejemplo de Routes:**
```typescript
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { HomeScreen } from '../Screens/HomeScreen/HomeScreen';

export const HomeRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<HomeScreen />} />
    </Routes>
  );
};
```

---

## SVG Support

Los archivos SVG se pueden importar de dos formas:

```typescript
// Como componente React
import { ReactComponent as Logo } from './logo.svg';
<Logo />

// Como URL
import logoUrl from './logo.svg';
<img src={logoUrl} alt="logo" />
```
