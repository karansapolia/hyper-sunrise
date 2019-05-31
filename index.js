/**
 * Sunrise for Hyper
 * 
 * Soothing Hyper Terminal theme with hand-picked colors
 * depicting the rising sun by the ocean at dawn. Enjoy!
 */

const black = '#000000';
const red = '#E95678';
const green = '#29D398';
const yellow = '#FAB795';
const blue = '#26BBD9';
const magenta = '#EE64AC';
const cyan = '#59E1E3';
const white = '#FFFFFF';
const lightBlack = '#2E303E';
const lightRed = '#EC6A88';
const lightGreen = '#3FDAA4';
const lightYellow = '#FBC3A7';
const lightBlue = '#3FC4DE';
const lightMagenta = '#F075B5';
const lightCyan = '#6BE4E6';
const lightWhite = '#fff';

exports.onWindow = browserWindow => browserWindow.setVibrancy("medium-light");
exports.decorateConfig = config => {
    return Object.assign({},  config, {
        fontFamily: 'monospace',
        cursorColor: yellow,
        foregroundColor: '#D5D8DA',
        backgroundColor: '#1C1E26',
        borderColor: "#2E303E",
        css: `
        ${config.css || ''}
        .tab_tab {
            border: none !important;
        }
        .tab_tab:before {
            border-left: 1px solid;
        }
        .tab_active {
            border-bottom: 2px solid #FBC3A7 !important;
        }
        .tab_active:before {
            border-color: ${red};
        }
        `,
        colors: {
            black,
            red,
            green,
            yellow,
            blue,
            magenta,
            cyan,
            white,
            lightBlack,
            lightRed,
            lightGreen,
            lightYellow,
            lightBlue,
            lightMagenta,
            lightCyan,
            lightWhite
        }
    })
};