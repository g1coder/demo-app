// const path = require('path');
// module.exports = {
//   webpack: {
//     alias: {
//       '@': path.resolve(__dirname, 'src'),
//     },
//   },
// };
const {CracoAliasPlugin} = require('react-app-alias')

module.exports = {
    plugins: [
        {
            plugin: CracoAliasPlugin,
            options: {}
        }
    ]
}