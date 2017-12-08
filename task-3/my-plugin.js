// 'use strict';
//
// module.exports = function (babel) {
//     return {
//         visitor: {
//             CallExpression: {
//                 enter: function (nodePath) {
//                     var callee = nodePath.get('callee');
//                     if (callee.matchesPattern('console.log')) {
//                         nodePath.remove();
//                     }
//                 }
//             }
//         }
//     };
// };
