const config = require('@clarabridge/unified-ui/src/configuration');

const spacingTheme = config.SPACING.reduce((accumulator, spacing) => (accumulator[spacing] = spacing + 'px', accumulator), {});

const widthsAndHeightsTheme = {
    ...config.WIDTHS_AND_HEIGHTS.PIXEL.reduce((accumulator, dimension) =>
        (accumulator[dimension] = dimension + 'px', accumulator), {}),
    ...config.WIDTHS_AND_HEIGHTS.PERCENT.reduce((accumulator, dimension) =>
        (accumulator[dimension+'-percent'] = dimension + '%', accumulator), {}),
    ...config.WIDTHS_AND_HEIGHTS.VIEWPORT.reduce((accumulator, dimension) =>
        (accumulator[dimension+'-vh'] = dimension + 'vh', accumulator), {}),
};

const corePlugins = [
    'backgroundColor',
    'boxShadow',
    'opacity',
    'visibility',
    'padding',
    'margin',
    'position',
    'inset',
    'zIndex',
    'flex',
    'flexDirection',
    'flexGrow',
    'flexShrink',
    'flexWrap',
    'alignItems',
    'alignContent',
    'justifyContent',
    'justifyItems',
    'justifySelf',
    'alignSelf',
    'display',
    'width',
    'minWidth',
    'maxWidth',
    'height',
    'minHeight',
    'maxHeight',
    'borderStyle',
    'borderWidth',
    'borderColor',
    'borderRadius',
    'cursor',
    'float',
    'clear',
    'textAlign',
    'textTransform',
    'verticalAlign',
    'wordBreak',
    'whitespace',
    'textOverflow',
    'textDecoration',
    'textColor',
    'fontFamily',
    'fontSize',
    'lineHeight',
    'letterSpacing',
    'transitionProperty',
    'boxSizing',
    'outline',
    'pointerEvents',
    'appearance',
    'tableLayout',
    'borderCollapse',
    'listStyleType',
    'overflow',
];

module.exports = {
    corePlugins: [...new Set(corePlugins)],
    purge: [],
    important: true,
    darkMode: 'class',
    theme: {
        screens: false,
        colors: Object.keys(config.COLORS).reduce((accumulator, color) => (accumulator[color] = `var(--${color})`, accumulator), {}),
        padding: spacingTheme,
        margin: spacingTheme,
        width: widthsAndHeightsTheme,
        minWidth: widthsAndHeightsTheme,
        maxWidth: widthsAndHeightsTheme,
        height: widthsAndHeightsTheme,
        minHeight: widthsAndHeightsTheme,
        maxHeight: widthsAndHeightsTheme,
        borderWidth: config.BORDERS.reduce((accumulator, border) => (accumulator[border] = border + 'px', accumulator), {}),
        borderRadius: config.BORDERS.reduce((accumulator, border) => (accumulator[border] = border + 'px', accumulator), {}),
        fontFamily: config.FONT.FAMILIES,
        fontSize: config.FONT.SIZES,
        lineHeight: config.FONT.SIZES,
        opacity: {
            '0': '0',
            '25': '.25',
            '50': '.5',
            '75': '.75',
            '100': '1',
        },
        extend: {
            lineHeight: {
                '0': 0
            },
            inset: {
                '0': 0,
            },
            borderWidth: {
                '0': 0,
            },
            padding: {
                '0': 0,
            },
            margin: {
                '0': 0,
            },
            width: {
                'full': '100%'
            },
        }
    },
    variants: {
        textColor: ['hover', 'dark'],
        textDecoration: ['hover', 'dark'],
        backgroundColor: ['hover', 'dark'],
        borderColor: ['hover', 'dark'],
        opacity: ['hover'],
        padding: [],
        margin: [],
        width: [],
        minWidth: [],
        maxWidth: [],
        height: [],
        minHeight: [],
        maxHeight: [],
        boxShadow: ['dark'],
        outline: ['focus', 'active', 'dark'],
        zIndex: [],
    },
    plugins: [],
}
