# classnames-styled

A higher-order function that creates a styled React component with dynamic class names. SSR-compatible


```bash
npm i classnames-styled
# or
yarn add classnames-styled
```

### simple

```tsx
import cs from 'classnames-styled'

const StyledDiv = cs(
  'div', // component tag
  'text-xl' // static classnames
);

<StyledDiv>Hello World</StyledDiv>;
```

### dynamic

```tsx
import cs from 'classnames-styled'

// Define props interface
interface StyledDivProps {
  isActive: boolean;
}

const StyledDiv = cs<StyledDivProps>(
  // component tag
  'div', 
  // base class names
  `
    text-white
    text-2xl
    font-bold
  `,
  // dynamic class names
  ({ isActive }) => [isActive ? `animate-in fade-in` : 'animate-out fade-out'],
)

const SomeComponent = () => {
  const [isActive, setIsActive] = useState(false)

  <StyledDiv isActive={isActive}>Hello</StyledDiv>
}
```