module.exports = {
  presets: [
    '@babel/preset-env',
   ['@babel/preset-react',{
     runtime: 'automatic' //for don't need to import React in our application
   }]
  ]
}