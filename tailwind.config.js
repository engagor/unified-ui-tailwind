const config = require('@clarabridge/unified-ui/src/configuration');

module.exports = {
    corePlugins: [
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
        'maxWidth',
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
        'textOverflow',
        'transitionProperty',
        'boxSizing',
        'outline',
        'pointerEvents',
        'appearance',
        'tableLayout',
        'borderCollapse',
        'listStyleType'
    ],
    purge: [],
    important: true,
    darkMode: false,
    theme: {
        screens: false,
        colors: config.COLORS,
        spacing: config.SPACING.reduce((accumulator, spacing) => (accumulator[spacing] = spacing + 'px', accumulator), {}),
        maxWidth: {
            ...config.WIDTHS_AND_HEIGHTS.PERCENT.reduce((accumulator, dimension) =>
                (accumulator[dimension+'-percent'] = dimension + '%', accumulator), {}),
            ...config.WIDTHS_AND_HEIGHTS.PIXEL.reduce((accumulator, dimension) =>
                (accumulator[dimension] = dimension + 'px', accumulator), {}),
        },
        borderWidth: config.BORDERS.reduce((accumulator, border) =>
            (accumulator[border] = border + 'px', accumulator), {}),
        borderRadius: config.BORDERS.reduce((accumulator, border) =>
            (accumulator[border] = border + 'px', accumulator), {}),
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
        }
    },
    variants: {
        textColor:['hover'],
        textDecoration: ['hover'],
        backgroundColor: ['hover'],
        opacity: ['hover'],
        padding: [],
        margin: [],
        maxWidth: [],
        borderColor: [],
        outline: ['focus', 'active'],
        boxShadow: [],
        zIndex: [],
    },
    plugins: [],
}
