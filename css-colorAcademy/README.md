# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


## color Academy

## Routes

- "/" homepage
    - CSS generator available here

    - "/generator" CSS generator page
        - Css generator available here

- "/generator/saved" view list of saved themes
    - reads localStorage
 


## contexts

- Base color

    - hex color of new theme

- LocalStorage manager for list of css themes
    - Array of theme list
- LocalStorage manager for current css theme
 - one theme list
- List of CSS theme
    - array of theme list
- Current CSS theme
    - one theme list

### Data

## Color Object

```javascript
{
    hex : "#000000",
    strength: 100,
    rgba: [255, 255, 255, 255]
}
```
## Theme List

```javascript
{
    name: 'violet eggplant",
    colours: [
        Color objects go here
    ]
}
```
