# 💻 Ejemplos de Código: Diseño Responsivo
## Para Demostración Técnica

---

## 📱 Ejemplo 1: Header Responsivo Completo

### Código Real del Proyecto

```tsx
<header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-lg">
  <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
    
    {/* Logo con tamaños adaptativos */}
    <div className="flex items-center space-x-2 sm:space-x-3">
      <div className="bg-gradient-to-br from-comarapa-dark to-comarapa-medium 
                      p-2 sm:p-3 
                      rounded-xl sm:rounded-2xl 
                      shadow-lg">
        <Bus className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 text-white" />
      </div>
      
      <div>
        <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-comarapa-dark">
          Trans Comarapa
        </h1>
        {/* Subtítulo oculto en móvil */}
        <p className="text-comarapa-medium text-xs sm:text-sm font-medium 
                      hidden sm:block">
          Conectando el corazón de Bolivia
        </p>
      </div>
    </div>

    {/* Navegación Desktop - OCULTA en móvil */}
    <nav className="hidden lg:flex space-x-6 xl:space-x-8">
      <a href="#inicio" 
         className="text-comarapa-dark font-medium hover:text-comarapa-light 
                    text-sm xl:text-base">
        Inicio
      </a>
      {/* ...más links */}
    </nav>

    {/* Botón de menú móvil - OCULTO en desktop */}
    <button 
      onClick={() => setIsMenuOpen(!isMenuOpen)}
      className="lg:hidden p-2 text-comarapa-dark"
      style={{ minWidth: '44px', minHeight: '44px' }}>
      {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
    </button>

  </div>

  {/* Menú móvil desplegable - Solo visible cuando isMenuOpen = true */}
  {isMenuOpen && (
    <div className="lg:hidden mt-4 pb-4 bg-white">
      <nav className="flex flex-col space-y-1 pt-4">
        <a href="#inicio" 
           className="py-3 px-2 rounded-lg hover:bg-comarapa-gray"
           style={{ minHeight: '44px' }}>
          Inicio
        </a>
        {/* ...más links */}
      </nav>
    </div>
  )}
</header>
```

### Explicación Técnica

**Clases Clave:**
- `hidden lg:flex` → Oculto por defecto, visible en pantallas ≥1024px
- `lg:hidden` → Visible por defecto, oculto en pantallas ≥1024px
- `px-4 sm:px-6 lg:px-8` → Padding que crece: 16px → 24px → 32px
- `text-lg sm:text-xl md:text-2xl` → Tipografía escalable

**Estado React:**
```tsx
const [isMenuOpen, setIsMenuOpen] = useState(false);
```

---

## 🎯 Ejemplo 2: Hero Section con Tipografía Responsiva

### Código Real

```tsx
<section className="relative min-h-screen flex items-center 
                    pt-16 sm:pt-20 md:pt-24">
  
  <div className="container mx-auto px-4 sm:px-6 lg:px-8">
    <div className="max-w-5xl mx-auto text-center">
      
      {/* Badge regional */}
      <div className="inline-flex items-center gap-2 
                      bg-white/20 backdrop-blur-sm 
                      px-3 sm:px-4 py-2 rounded-full 
                      mb-6 sm:mb-8">
        <Leaf className="h-4 w-4 sm:h-5 sm:w-5 text-comarapa-light" />
        <span className="text-xs sm:text-sm font-medium">
          Transporte Regional de Comarapa
        </span>
      </div>

      {/* Título principal - Escala de 30px a 72px */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 
                     font-bold mb-4 sm:mb-6 leading-tight">
        Unimos tus destinos en los
        <span className="text-comarapa-light"> Valles cruceños</span>
      </h1>
      
      {/* Párrafo - Escala de 16px a 24px */}
      <p className="text-base sm:text-lg md:text-xl lg:text-2xl 
                    mb-6 sm:mb-8 
                    text-white/90 max-w-4xl mx-auto 
                    leading-relaxed px-4">
        Trazamos la ruta que te importa. Desde el corazón de Comarapa 
        hasta el dinamismo de Santa Cruz.
      </p>

      {/* Botones - Stack vertical en móvil, horizontal en tablet */}
      <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 
                      justify-center items-center">
        <a href="#horarios" 
           className="bg-white text-comarapa-dark 
                      px-6 sm:px-8 py-3 sm:py-4 
                      rounded-xl font-semibold 
                      flex items-center gap-2 
                      w-full sm:w-auto justify-center
                      text-sm sm:text-base"
           style={{ minHeight: '44px' }}>
          <Clock className="h-4 w-4 sm:h-5 sm:w-5" />
          Ver Horarios
        </a>
      </div>

      {/* Grid de estadísticas - 2 columnas en móvil, 4 en tablet */}
      <div className="grid grid-cols-2 md:grid-cols-4 
                      gap-4 sm:gap-6 
                      mt-12 sm:mt-16">
        <div className="text-center">
          <div className="text-lg sm:text-xl md:text-2xl font-bold">
            23
          </div>
          <div className="text-xs sm:text-sm text-white/80">
            Localidades
          </div>
        </div>
        {/* ...más stats */}
      </div>

    </div>
  </div>
</section>
```

### Escalado de Tipografía

| Elemento | Móvil | sm | md | lg | xl |
|----------|-------|----|----|----|----|
| H1 | 30px (3xl) | 36px (4xl) | 48px (5xl) | 60px (6xl) | 72px (7xl) |
| P | 16px (base) | 18px (lg) | 20px (xl) | 24px (2xl) | - |
| Botón | 14px (sm) | 16px (base) | - | - | - |

---

## 📅 Ejemplo 3: Grid Responsivo de Tarjetas

### Código Real (Sección Horarios)

```tsx
<section className="py-16 sm:py-20 md:py-24 bg-comarapa-gray">
  <div className="container mx-auto px-4 sm:px-6 lg:px-8">
    
    {/* Título de sección */}
    <div className="text-center mb-12 sm:mb-16">
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl 
                     font-bold text-comarapa-dark mb-4 sm:mb-6">
        Salidas Diarias Programadas
      </h2>
    </div>
    
    {/* Grid adaptativo: 1 → 2 → 3 columnas */}
    <div className="grid 
                    sm:grid-cols-1 
                    md:grid-cols-2 
                    lg:grid-cols-3 
                    gap-6 sm:gap-8 
                    max-w-7xl mx-auto">
      
      {/* Tarjeta individual */}
      <div className="comarapa-card 
                      p-4 sm:p-6 md:p-8 
                      border-t-4 border-comarapa-dark">
        
        {/* Header de tarjeta */}
        <div className="text-center mb-6 sm:mb-8">
          <div className="bg-gradient-to-br from-comarapa-dark to-comarapa-medium 
                          rounded-full 
                          p-3 sm:p-4 
                          w-16 h-16 sm:w-20 sm:h-20 
                          mx-auto mb-4 sm:mb-6 
                          flex items-center justify-center shadow-lg">
            <MapPin className="h-8 w-8 sm:h-10 sm:w-10 text-white" />
          </div>
          
          <h3 className="text-lg sm:text-xl md:text-2xl 
                         font-bold text-comarapa-dark mb-2">
            Comarapa ➡️ Santa Cruz
          </h3>
          
          <p className="text-sm sm:text-base text-gray-600">
            Ruta completa (23 paradas)
          </p>
        </div>
        
        {/* Lista de horarios */}
        <div className="space-y-3 sm:space-y-4">
          <div className="flex items-center justify-between 
                          bg-comarapa-gray 
                          p-3 sm:p-4 
                          rounded-xl">
            <div className="flex items-center gap-2 sm:gap-3">
              <Sun className="h-5 w-5 sm:h-6 sm:w-6 text-yellow-500" />
              <span className="font-bold text-base sm:text-lg">08:30 AM</span>
            </div>
            <span className="px-2 sm:px-3 py-1 rounded-full 
                           text-xs sm:text-sm font-medium 
                           bg-yellow-100 text-yellow-700">
              Día
            </span>
          </div>
          {/* ...más horarios */}
        </div>
        
      </div>
      {/* ...más tarjetas */}
    </div>
  </div>
</section>
```

### Transformación Visual

**Móvil (< 768px):**
```
┌─────────────────┐
│   Tarjeta 1     │
├─────────────────┤
│   Tarjeta 2     │
├─────────────────┤
│   Tarjeta 3     │
└─────────────────┘
```

**Tablet (768px - 1023px):**
```
┌──────────┬──────────┐
│ Tarjeta 1│ Tarjeta 2│
├──────────┴──────────┤
│     Tarjeta 3       │
└─────────────────────┘
```

**Desktop (≥ 1024px):**
```
┌────────┬────────┬────────┐
│Tarjeta1│Tarjeta2│Tarjeta3│
└────────┴────────┴────────┘
```

---

## 🗺️ Ejemplo 4: Scroll Horizontal Responsivo (RouteMap)

### Código Real

```tsx
const RouteMap: React.FC = () => {
  return (
    <div className="w-full">
      
      {/* Título */}
      <div className="text-center mb-6 md:mb-8 px-4">
        <h3 className="text-xl md:text-2xl lg:text-3xl 
                       font-bold text-comarapa-dark">
          Nuestra Ruta Completa
        </h3>
      </div>

      {/* Contenedor con overflow horizontal */}
      <div className="relative overflow-x-auto pb-6 md:pb-8">
        
        {/* Indicador visual - SOLO en móvil */}
        <div className="block md:hidden text-center mb-4">
          <p className="text-xs text-gray-500">
            👈 Desliza para ver toda la ruta 👉
          </p>
        </div>
        
        {/* Fila de 23 localidades */}
        <div className="flex items-center justify-start min-w-max 
                        px-4 md:px-8 lg:px-12" 
             style={{ minWidth: '1600px' }}>
          
          {routeLocalities.map((locality, index) => (
            <React.Fragment key={index}>
              
              {/* Nodo de localidad */}
              <div className="flex flex-col items-center">
                
                {/* Círculo numerado - Tamaño crece con pantalla */}
                <div className={`
                  w-14 h-14 
                  sm:w-16 sm:h-16 
                  md:w-18 md:h-18 
                  lg:w-20 lg:h-20 
                  rounded-full 
                  flex items-center justify-center 
                  font-bold text-white 
                  ${locality.type === 'principal' 
                    ? 'bg-comarapa-dark text-base sm:text-lg' 
                    : 'bg-comarapa-light text-sm sm:text-base'}
                `}>
                  {index + 1}
                </div>
                
                {/* Nombre de localidad */}
                <div className="mt-2 sm:mt-3 text-center">
                  <p className={`
                    text-xs sm:text-sm md:text-base 
                    font-semibold leading-tight
                    ${locality.type === 'principal' 
                      ? 'text-comarapa-dark' 
                      : 'text-gray-700'}
                  `}>
                    {locality.name}
                  </p>
                </div>
              </div>

              {/* Línea conectora */}
              {index < routeLocalities.length - 1 && (
                <div className="flex-1 h-1 sm:h-1.5 
                               bg-comarapa-light 
                               mx-2 sm:mx-3 md:mx-4 lg:mx-6 
                               min-w-12 sm:min-w-16 md:min-w-20">
                </div>
              )}
              
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Leyenda */}
      <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
        <div className="flex items-center gap-2 bg-white p-2 rounded-lg">
          <div className="w-3 h-3 sm:w-4 sm:h-4 bg-comarapa-dark rounded-full"></div>
          <span className="text-xs sm:text-sm text-gray-600">
            Ciudades Principales
          </span>
        </div>
      </div>
    </div>
  );
};
```

### Estrategia de Overflow

**Móvil:**
- `overflow-x-auto` → Permite scroll horizontal
- `min-w-max` → Container no se comprime
- `style={{ minWidth: '1600px' }}` → Ancho fijo garantizado
- Hint visual para indicar que hay más contenido

**Desktop:**
- Mismo código, pero típicamente no necesita scroll
- Padding lateral mayor para mejor distribución

---

## 💬 Ejemplo 5: Slider con Control de Estado

### Código Real (TestimonialsSlider)

```tsx
const TestimonialsSlider: React.FC = () => {
  // Estado para slide actual
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Auto-rotación (pausada en hover)
  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => 
          prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
        );
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isHovered]);

  return (
    <div className="relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Slider Container - Altura adaptativa */}
        <div 
          className="relative 
                     h-64 sm:h-72 md:h-80 lg:h-96 
                     flex items-center justify-center"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}>
          
          {/* Testimonials con transición */}
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`absolute inset-0 transition-opacity duration-500 ${
                index === currentIndex ? 'opacity-100' : 'opacity-0'
              }`}>
              
              <div className="text-center px-4 sm:px-8 md:px-12 lg:px-16">
                {/* Texto del testimonio - Crece de 16px a 24px */}
                <blockquote className="text-base sm:text-lg md:text-xl lg:text-2xl 
                                       text-white leading-relaxed 
                                       mb-4 sm:mb-6 md:mb-8 
                                       italic font-medium">
                  "{testimonial.text}"
                </blockquote>
                
                {/* Autor */}
                <div className="text-comarapa-medium">
                  <p className="text-sm sm:text-base md:text-lg font-bold">
                    {testimonial.name}
                  </p>
                  <p className="text-xs sm:text-sm md:text-base text-white/80">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Indicadores de puntos */}
        <div className="flex justify-center mt-6 sm:mt-8 space-x-2 sm:space-x-3">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`
                w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-4 md:h-4 
                rounded-full transition-all duration-300 
                ${index === currentIndex 
                  ? 'bg-comarapa-medium scale-110' 
                  : 'bg-gray-500'}
              `}
              style={{ minWidth: '44px', minHeight: '44px' }}
              aria-label={`Ir a reseña ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
```

### Lógica de Auto-Rotación

```tsx
useEffect(() => {
  if (!isHovered) {  // Solo rota si no está en hover
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        // Si estamos en el último, volver al primero
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);  // Cada 5 segundos
    
    // Cleanup al desmontar
    return () => clearInterval(interval);
  }
}, [isHovered]);
```

---

## 🎨 Ejemplo 6: Clases CSS Personalizadas

### En `src/index.css`

```css
@layer components {
  /* Tarjeta con border radius responsivo */
  .comarapa-card {
    @apply bg-white 
           rounded-xl sm:rounded-2xl     /* Crece de 12px a 16px */
           shadow-lg 
           border border-gray-100 
           transition-all duration-300 
           hover:shadow-xl 
           hover:shadow-comarapa-light/20;
  }
  
  /* Botón primario con padding responsivo */
  .comarapa-button-primary {
    @apply bg-comarapa-dark 
           text-white 
           px-6 sm:px-8              /* Padding X: 24px → 32px */
           py-3 sm:py-4              /* Padding Y: 12px → 16px */
           rounded-lg sm:rounded-xl  /* Border radius: 8px → 12px */
           font-semibold 
           transition-all duration-300 
           hover:bg-comarapa-medium 
           hover:shadow-lg 
           transform hover:-translate-y-1 
           text-sm sm:text-base;     /* Font size: 14px → 16px */
  }
  
  /* Gradiente de marca */
  .comarapa-gradient {
    background: linear-gradient(
      135deg, 
      var(--comarapa-dark) 0%, 
      var(--comarapa-medium) 50%, 
      var(--comarapa-light) 100%
    );
  }
}
```

### Uso de las Clases

```tsx
{/* Usar clase personalizada */}
<div className="comarapa-card p-6">
  <h3>Título</h3>
  <p>Contenido de la tarjeta</p>
</div>

{/* Extender con más clases de Tailwind */}
<div className="comarapa-card p-6 border-t-4 border-comarapa-dark">
  <h3>Tarjeta con borde superior</h3>
</div>

{/* Botón con clase personalizada */}
<button className="comarapa-button-primary">
  Reservar Ahora
</button>
```

---

## 🔧 Ejemplo 7: Configuración de Tailwind

### `tailwind.config.cjs` - Breakpoints Personalizados

```javascript
module.exports = {
  theme: {
    // Breakpoints personalizados
    screens: {
      'xs': '320px',    // Móviles muy pequeños
      'sm': '480px',    // Móviles estándar
      'md': '768px',    // Tablets
      'lg': '1024px',   // Laptops
      'xl': '1280px',   // Desktops
      '2xl': '1440px',  // Pantallas grandes
    },
    
    // Container responsivo
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',      // 16px
        sm: '1.5rem',         // 24px
        lg: '2rem',           // 32px
      },
    },
    
    extend: {
      // Colores de marca
      colors: {
        comarapa: {
          dark: '#0D47A1',
          medium: '#2196F3',
          light: '#64B5F6',
          white: '#FFFFFF',
          gray: '#E3F2FD',
        },
      },
      
      // Familia tipográfica
      fontFamily: {
        'inter': ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
};
```

---

## 🎯 Ejemplo 8: Patrones Comunes Explicados

### Pattern: Texto Progresivo

```tsx
{/* Cada paso crece ~20% */}
<h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
  
// Traducción a píxeles:
// text-3xl  = 30px  (móvil)
// text-4xl  = 36px  (sm: 480px+)  → +20%
// text-5xl  = 48px  (md: 768px+)  → +33%
// text-6xl  = 60px  (lg: 1024px+) → +25%
// text-7xl  = 72px  (xl: 1280px+) → +20%
```

### Pattern: Espaciado Consistente

```tsx
{/* Múltiplos de 4 (sistema de Tailwind) */}
<div className="px-4 sm:px-6 lg:px-8">
  
// Traducción:
// px-4  = 16px  (4 × 4px)
// px-6  = 24px  (6 × 4px)
// px-8  = 32px  (8 × 4px)

// Incrementos: +8px → +8px
```

### Pattern: Grid Inteligente

```tsx
{/* Auto-adaptación sin media queries en JS */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
  
// Comportamiento:
// < 768px:  1 columna  (stack completo)
// 768-1023: 2 columnas (mitad de pantalla c/u)
// ≥ 1024px: 4 columnas (cuarto de pantalla c/u)
```

### Pattern: Ocultación Estratégica

```tsx
{/* Mostrar en móvil, ocultar en desktop */}
<p className="block lg:hidden">Solo móvil</p>

{/* Ocultar en móvil, mostrar en desktop */}
<p className="hidden lg:block">Solo desktop</p>

{/* Ocultar en tablet */}
<p className="block md:hidden lg:block">Móvil y Desktop, no tablet</p>
```

---

## 💡 Tips para tu Demostración

### 1. Prepara el Chrome DevTools

```
1. F12 → Abrir DevTools
2. Ctrl+Shift+M → Device Mode
3. Ctrl+Shift+P → "Capture screenshot" para capturas
```

### 2. Dispositivos a Demostrar

```
iPhone SE (375x667)    → Mínimo viable
iPhone 12 (390x844)    → Móvil estándar
iPad (768x1024)        → Tablet transición
Desktop (1920x1080)    → Full experience
```

### 3. Puntos de Breakpoint Críticos

```
🔴 320px  → Debe verse bien (límite inferior)
🟡 480px  → Primera transformación importante
🟢 768px  → Cambio tablet (2 columnas)
🔵 1024px → Navegación completa visible
⚪ 1280px → Layout desktop completo
```

---

## 📝 Resumen de Técnicas

✅ **Mobile-First**: Estilos base para móvil, modificadores para desktop
✅ **Breakpoints Personalizados**: 6 niveles de 320px a 1440px+
✅ **Clases Utilitarias**: Tailwind CSS para todo el styling
✅ **Touch Targets**: Mínimo 44x44px en todos los elementos táctiles
✅ **Grid/Flexbox**: Layouts que se adaptan automáticamente
✅ **Overflow Horizontal**: Para contenido que no cabe en móvil
✅ **Estados React**: Control de menús y sliders
✅ **CSS Custom**: Clases reutilizables con `@apply`

---

## 🚀 Para Copiar-Pegar en tu Demo

### HTML Básico Responsivo

```html
<!-- Container con padding adaptativo -->
<div class="container mx-auto px-4 sm:px-6 lg:px-8">
  
  <!-- Título que escala -->
  <h1 class="text-3xl md:text-5xl xl:text-7xl font-bold">
    Título Grande
  </h1>
  
  <!-- Grid que se transforma -->
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    <div>Columna 1</div>
    <div>Columna 2</div>
    <div>Columna 3</div>
  </div>
  
  <!-- Botones stack vertical → horizontal -->
  <div class="flex flex-col sm:flex-row gap-4">
    <button class="px-6 py-3 bg-blue-500 text-white rounded-lg">
      Botón 1
    </button>
    <button class="px-6 py-3 bg-green-500 text-white rounded-lg">
      Botón 2
    </button>
  </div>
  
</div>
```

**¡Listo para tu presentación!** 🎉
